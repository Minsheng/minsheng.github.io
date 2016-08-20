var THREETUT = THREETUT || {};
THREETUT.Shaders = {
	Pink: {
		'vertex': ["void main() {",
			"gl_Position = projectionMatrix *",
			"modelViewMatrix *",
			"vec4(position,1.0);",
		"}"].join("\n"),

		'fragment': ["void main() {",
			"gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);",
		"}"].join("\n")
	},

	Lit: {
		'vertex': ["varying vec3 vNormal;",
		"void main() {",
			"vNormal = normal;",
			"gl_Position = projectionMatrix *",
			"modelViewMatrix *",
			"vec4(position,1.0);",
		"}"].join("\n"),

		'fragment': ["varying vec3 vNormal;",
			"void main() {",
			"vec3 light = vec3(0.5,0.2,1.0);",
			"light = normalize(light);",
			"float dProd = max(0.0, dot(vNormal, light));",
			"gl_FragColor = vec4(dProd, dProd, dProd, 1.0);",
		"}"].join("\n")
	},

	LitAttribute: {
		'vertex': ["attribute float displacement;", 
		"varying vec3 vNormal;",
		"void main() {",
			"vNormal = normal;",
			"vec3 newPosition = position + normal * vec3(displacement);",
			"gl_Position = projectionMatrix *",
			"modelViewMatrix *",
			"vec4(newPosition,1.0);",
		"}"].join("\n"),

		'fragment': ["varying vec3 vNormal;",
		"void main() {",
			"vec3 light = vec3(0.5,0.2,-1.0);",
			"light = normalize(light);",
			"float dProd = max(0.4, dot(vNormal, light));",
			"gl_FragColor = vec4(dProd, dProd, dProd, 1.0);",
		"}"].join("\n")
	},

	LitAttributeAnimated: {
		'vertex': ["uniform float amplitude;",
		"attribute float displacement;", 
		"varying vec3 vNormal;",
		"void main() {",
			"vNormal = normal;",
			"vec3 newPosition = position + normal * vec3(displacement * amplitude);",
			"gl_Position = projectionMatrix *",
			"modelViewMatrix *",
			"vec4(newPosition,1.0);",
		"}"].join("\n"),

		'fragment': ["varying vec3 vNormal;",
		"void main() {",
			"vec3 light = vec3(0.5,0.2,1.0);",
			"light = normalize(light);",
			"float dProd = max(0.0, dot(vNormal, light));",
			"gl_FragColor = vec4(dProd, dProd, dProd, 1.0);",
		"}"].join("\n")
	}
};