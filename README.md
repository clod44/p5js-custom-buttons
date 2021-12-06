# p5js-custom-buttons
[project link](https://editor.p5js.org/rt.sayochi/sketches/qsTrCqQkB)

This is a javascript class depended on [p5js](https://p5js.org/get-started/) which can quickly create nice buttons.\
![gif](https://github.com/clod44/p5js-custom-buttons/blob/master/custombuttons.gif)

keep in mind that:
- the term "void" mostly used as "idle"
- "cache" part is what program using to render. you can change it to create quick cool effects.
  - for example: on default, cacheSize is set to [0,0] whenever the button is created. this will cause button size to easeOut from a point. similar effects can be achieved.

```
  //SIMPLE BUTTON
  btn1 = new Button([posX, posY],
                    [sizeX, sizeY],
                    ["label",textSize],
                    someOnClickFunction.bind(null,argsForFunction));


```
```
//Extra Configurations
  btn2 = new Button([posX, posY],
                    [sizeX, sizeY],
                    ["label",textSize],
                    someOnClickFunction.bind(null,argsForFunction));
  
  //[hoverFunction, pressFunction]
  btn2.functions = [someOnHoverFunction.bind(null, argsForFunction),
                    someOnClickFunction.bind(null, argsForFunction)];
  
  //[0 to 1]
  btn2.animInterpolationSpeed = 0.2;
  
  //[voidSize, hoverSize, PressSize, cacheSize]
  btn2.buttonSize = [ [300,100],
                      [400,90],
                      [200,110],
                      [0,0]
                    ];
  
  //[voidColor, hoverColor,pressColor,cacheColor]
  btn2.buttonPalette = [color(255, 255, 255),
                        color(70,  200, 70 ),
                        color(0,   0,   0  ),
                        color(0,   0,   0  )];
                        
  //[voidSmoothness, HoverSmoothness, PressSmoothness, cacheSmoothness]
  //[topleft,topright,bottomright,bottomleft] corner smoothness
  btn2.buttonCorners = [ 
                         [10,50,10,50],
                         [50,10,50,10],
                         [50,50,50,50],
                         [0,0,0,0]
                       ];
  
  //[voidSize, hoverSize, PressSize, cacheSize]
  btn2.labelSize = [ 42,
                     35,
                     50,
                     0
                   ];
  
  //[voidColor, hoverColor, pressColor, cacheColor]
  btn2.labelPalette = [color(0,   0,   0  ),
                       color(255, 255, 255),
                       color(70,  200,  70),
                       color(0,   0,   0  )]; 
  
  
  //["voidText","hoverText","pressLabel"]
  btn2.label = ["Button Idle!","Hovering!","Pressing!"];
```

