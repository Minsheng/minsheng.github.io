jQuery("#simulation")
  .on("click", ".s-591a7fc9-7706-457a-afe2-a76b9133d338 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/84779577-ba77-4938-87b2-ca2bb9509fd4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/555a3bb5-5dec-486f-b8a0-1de39c840224"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/aca53346-520f-4062-9143-ead7c981f6c2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c2e4e839-d047-46ba-b9a8-c0b37961035c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/591a7fc9-7706-457a-afe2-a76b9133d338"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a95b1142-be18-47d3-ab80-0ed56a7ab577"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9bf53af0-f205-49e3-9cd0-4f864a76423a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/aca53346-520f-4062-9143-ead7c981f6c2"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "sortButtonClicked"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes": {
                        "background-color": "#EBEBEB",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(29 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(22 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px",
                        "-pie-background": "#EBEBEB",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(29 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(22 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_11"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "sortButtonClicked",
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(29 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(22 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(29 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(22 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_11"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "sortButtonClicked",
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-591a7fc9-7706-457a-afe2-a76b9133d338 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "15px 15px 15px 15px",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(200 - 1 - 1 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 8 - 8, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "15px 15px 15px 15px",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(200 - 1 - 1 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 8 - 8, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-591a7fc9-7706-457a-afe2-a76b9133d338 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "15px 15px 15px 15px",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions": {
                        "width": "Math.max(200 - 1 - 1 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 8 - 8, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "15px 15px 15px 15px",
                        "padding-top": "8px",
                        "padding-right": "8px",
                        "padding-bottom": "8px",
                        "padding-left": "8px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(200 - 1 - 1 - 8 - 8, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 8 - 8, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-591a7fc9-7706-457a-afe2-a76b9133d338 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_9": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_11": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-591a7fc9-7706-457a-afe2-a76b9133d338 #s-Input_13": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-591a7fc9-7706-457a-afe2-a76b9133d338 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_13")) {
      jEvent.undoCases(jFirer);
    }
  });