//Globals
var json, camera, scene, renderer, mesh, group, groupGeometry, mouse,
    //All zero or false height values will be ignored
    fast = false,
    width = window.innerWidth,
    height = window.innerHeight;
    var renderer, stats;
    var scene, camera, group;


// Set as True if you want to see Data Calculation Logs 
var logData_Yes_No = false;


$(document).ready(function () {
    log("start loading");
    $.getJSON(jsonFile, function (data) {
        log("loading complete");
        json = data;

        init();
    });
});

function init() {

    //Initiate THREE.js

    camera = new THREE.PerspectiveCamera(600, (width / height), 1, 20000);
    camera.position.set(0, 0, 500);
    camera.up = new THREE.Vector3(0,0,-1);
    //camera.lookAt(new THREE.Vector3(100,1000,0));
    
    camera.translateZ( 100 );
    
    scene = new THREE.Scene();

    //Initiate Renderer

    renderer = new THREE.WebGLRenderer({
        antialias: false,
        preserveDrawingBuffer: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.shadowMapEnabled = true;
    renderer.shadowMapType = THREE.PCFSoftShadowMap;
    renderer.setViewport(0, 0, width, height);

    // Add OrbitControls so that we can pan around with the mouse.
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    
    //This group will hold our objects for easier handling

    group = new THREE.Object3D();
    group.position.y = 50;
    group.position.z = 0;
    scene.add(group);

    //This group will hold all geometries 

    groupGeometry = new THREE.Geometry();

    log("initiation done");

    buildShape(); //Convert geojson geometries into 3D shapes
}

//Due to javascripts limitations we need to parse the data in subsets (5000)
var shapeCount = 0,
    shapes = [],
    subset_size = 5000;

//Main Shape-Building Function
function buildShape() {

    //Push all Lat/Lng coordinates into 2 Arrays
    var features = json.features;
    log(features);
    var master = [];
    features.forEach(function (ele) {
        if(ele.geometry==null){
        }else{
        var coord = ele.geometry.coordinates[0]; // [[x1,y1],[x2,y2]]
        master = master.concat(coord);
        }
    });
    var latAll = master.map(function (d) {
        return d[0];
    });
    var lngAll = master.map(function (d) {
        return d[1];
    });
    
    //Check and Get coordinates from GEOJSON
    log("buildShape (" + shapeCount + "/" + json.features.length + ")");
    if (shapeCount < json.features.length) {
        var shapeSession = 0;
        for (var s = shapeCount; s < json.features.length && shapeSession < subset_size; s++) {
            shapeSession++;
            shapeCount++;
            var good = true;
            var points = [];

            //Check if the geometry has at least two coordinates or if it has no contents
            if (json.features[s].geometry == null || json.features[s].geometry.coordinates.length<1 || json.features[s].geometry.coordinates[0]<1 || json.features[s].geometry.coordinates.length>1) {
                good = false;
            } else {
                //Check if there is lat,lng coordinates values
                if (json.features[s].geometry.coordinates.length < 1 ||  json.features[s].geometry.coordinates[0] < 1) {
                    good = false;
                } else {

                    var Lat_max_neg;
                    var Lng_max_neg;
                    for (var i = 0; i < json.features[s].geometry.coordinates[0].length; i++) {

                        //Push geometry if all coordinate values are positive  
                        if (json.features[s].geometry.coordinates[0][i][0] && json.features[s].geometry.coordinates[0][i][1]) {
                            points.push(new THREE.Vector2(translateLat(json.features[s].geometry.coordinates[0][i][0], latAll), translateLng(json.features[s].geometry.coordinates[0][i][1], lngAll)));

                                            if(logData_Yes_No == true){
                                            logData(s, i, latAll, lngAll);
                                            }

                        } else {
                            good = false;
                        }
                    }
                }
            }

            //If the geometry is safe, continue
            if (good) {

                //Calculate the height of the current geometry for extrusion
                var h = heightFn(json.features[s].properties[heightAttr]);
                if (isNaN(parseFloat(json.features[s].properties[heightAttr]))) {
                    if (fast) {
                        good = false;
                    }
                    h = 0;
                }

                if (!h ||  h < 0) {
                    if (fast) {
                        good = false;
                    }
                    h = 0;
                }

                if (h > max) {
                    h = max;
                }

                //Remove all objects that have no height information for faster rendering
                if (h == 0 && fast) {
                    good = false;
                }
            }

            //If the geometry is still safe, continue
            if (good) {

                //Calculate the third dimension
                var z = ((h / max) * z_max);
                if (!z ||  z < 1) {
                    z = 0;
                }

                //Calculate the color of the object
                //In this sample code we use a blue to red range to visualize the height of the object (blue short to red tall)
                var red = Math.round((h / max) * 255.0);
                var blue = Math.round(255.0 - (h / max) * 255.0);
                var color = new THREE.Color("rgb(" + red + ",0," + blue + ")");

                addShape(new THREE.Shape(points), z * z_rel, color, 0, 50, 0, r, 0, 0, 1);
            }
        }

        //If we have more geometries to add restart the whole loop
        setTimeout(function () {
            buildShape();
        }, 100);
    } else {

        //We are done building our geometry
        log("Geometry Done");

        //Initiate the shader

        var shaderMaterial = new THREE.ShaderMaterial({
            attributes: {},
            uniforms: {},
            vertexShader: THREETUT.Shaders.Lit.vertex,
            fragmentShader: THREETUT.Shaders.Lit.fragment,
            side: THREE.FrontSide
        });


        //Initiate Material

        var materials = [
			new THREE.MeshLambertMaterial({
                vertexColors: THREE.VertexColors,
//                color: "rgb(0.2,0.2,0.2)",
//                ambient: "rgb(0.2,0.2,0.2)",
                color: "rgb(10.9,10.9,10.9)",
                ambient: "rgb(10.9,10.9,10.9)",
                shininess: 1,
                lights: true
            }),
			new THREE.MeshLambertMaterial({
                vertexColors: THREE.VertexColors,
                color: "rgb(0.5,0.5,0.5)",
                ambient: "rgb(0.5,0.5,0.5)",
                shininess: 1,
                lights: true
            })
		];

        var material = new THREE.MeshFaceMaterial(materials);

        
        //Create a mesh from the geometry

        mesh = new THREE.Mesh(groupGeometry, material);

        //mesh.position.set(offset_x * 3, offset_y * 3, offset_z * 3);
        mesh.rotation.set(r, 0, 0);
        mesh.scale.set(scale_factor * scale_x, scale_factor * scale_y, 0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add(mesh);

        
        //Too make it a little more fancy, add a directional light

        var directionalLight = new THREE.DirectionalLight(0xeeeeee, 1);
        directionalLight.position.set(0, 400, 200);
        directionalLight.target = mesh;
        directionalLight.castShadow = true;
        directionalLight.shadowDarkness = 0.5;
        scene.add(directionalLight);


        //Now add the renderer to the DOM

        document.body.appendChild(renderer.domElement);


        //And start animating it
        log("animate");

        animate();
        
        //Recalculate if window is resized
        window.addEventListener( 'resize', onWindowResize, false );
        
    }
}


//Adding geometries to group

function addShape(shape, extrude, color, x, y, z, rx, ry, rz, s) {

    //Extrusion settings
    var extrudeSettings = {
        amount: extrude * 50,
        steps: 1,
        material: 0,
        extrudeMaterial: 1,
        bevelEnabled: false
    };

    //Create the geometry
    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    //Set the color for the object
    for (var f = 0; f < geometry.faces.length; f++) {
        geometry.faces[f].color.setRGB(color.r, color.g, color.b);
    }

    //Have a big amount of geometries will slow down THREE.js 
    //Instead we merge all geometries into one geometry
    groupGeometry.merge(geometry, geometry.matrix);
    
}

//Update threejs if window is resized

function onWindowResize() {

		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

function animate() {

    //Animate at 30fs framerate

    setTimeout(function () {
        requestAnimationFrame(animate);
    }, 1000 / 30);

    //Animate the height of the objections

    if (animateHeight) {
        heightScaler += 0.001;
    }

    mesh.scale.set(scale_factor * scale_x, scale_factor * scale_y, heightScaler);
    
    //Render the scene

    renderer.render(scene, camera);
    controls.update(); // mouse scroll controls update
}

// Modify JSON Coordinate Values

function translateLat(lat, latAll) {
    if (!lat) {
        lat = 0;
    }

        lat = (lat - math.mean(latAll))*1000;
        return lat;
        ////Tests
        //return map_range(lat, -90, 90, -10, 10)
        //return (lat - 13.40) * 1000;
}

function translateLng(lng, lngAll) {
    if (!lng) {
        lng = 0;
    }

        lng = ((lng) - math.mean(lngAll))*1000;
        return lng;
        //lng = map_range(lng, )
        //return map_range(lng, -180, 180, -20, 20)
        //return (lng - 52.54) * 100;
}

function map_range(value, low1, high1, low2, high2) {
    return (value - low1) / (high1 - low1) * (high2 - low2) + low2;
}

//// Log Functions ////

function log(m) {
    if (log) {
        console.log(m);
    }
}

function logData(featureCount, LatLngCount, latAll, lngAll) {

    // Log featureCountGEOJSON + CoordinateArray.length + latitude, longitude, & converted values
    log(featureCount+" "+json.features[featureCount].geometry.coordinates.length+" lat(" + json.features[featureCount].geometry.coordinates[0][LatLngCount][0] + ") lng(" + json.features[featureCount].geometry.coordinates[0][LatLngCount][1] + ") meanLat(" +
        math.mean(latAll) + ") meanLng(" + math.mean(lngAll) + ") trsLat(" +
        translateLat(json.features[featureCount].geometry.coordinates[0][LatLngCount][0], latAll) + ") trsLng(" + translateLng(json.features[featureCount].geometry.coordinates[0][LatLngCount][1], lngAll) + ")"
    );
}