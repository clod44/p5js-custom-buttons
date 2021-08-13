let btn1, btn2;
function setup() {
  createCanvas(500, 500);
  initButtons();
}

function draw() {
  background(60);
  btn1.show();
  btn2.show();
}

function initButtons(){
  //SIMPLE BUTTON
  btn1 = new Button([width/2,height/4*1.5],
                    [300,100],
                    ["Button",42],
                    doThis.bind(null,"simple Pressed"));
  
  
  
  
  
  //BUTTON CONFIGURATION OPTIONS
  btn2 = new Button([width/2,height/4*2.5],
                    [300,100],
                    ["Button",42],
                    doThis.bind(null,"configured Pressed"));
  
  //[hoverFunction, pressFunction]
  btn2.functions = [doThis.bind(null,"configured hovered"),
                    doThis.bind(null,"configured Pressed")];
  
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
  btn2.label = ["Button","Hover","Press"];
  
  
}




let count = 0;
function doThis(stuff){
  count++;
  print(stuff, count);
}