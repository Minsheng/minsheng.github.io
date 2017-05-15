(function(window, undefined) {
  var dictionary = {
    "591a7fc9-7706-457a-afe2-a76b9133d338": "Favourite",
    "84779577-ba77-4938-87b2-ca2bb9509fd4": "CollectionDetailMJ",
    "9bf53af0-f205-49e3-9cd0-4f864a76423a": "Shop",
    "2483df7c-338d-4eec-96ce-77bc42cc5f21": "CollectionDetailSonofMan",
    "aca53346-520f-4062-9143-ead7c981f6c2": "Profile",
    "36fdbffa-53ef-4667-8722-f1be598d0b25": "ExternalROM",
    "c2e4e839-d047-46ba-b9a8-c0b37961035c": "Collections",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "555a3bb5-5dec-486f-b8a0-1de39c840224": "CollectionDetailAGothic",
    "a95b1142-be18-47d3-ab80-0ed56a7ab577": "Blog",
    "a5210d72-e0aa-4c5a-a6da-68dd37a1ce1c": "Register",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);