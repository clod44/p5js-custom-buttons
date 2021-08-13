function emptyFunction(){}

class Button{
  
  constructor(pos,buttonSize,label,PressFunction){
    /*
    [  
       [x,y], 
       [voidSize, hoverSize, PressSize, cacheSize],
       ["label", labelSize],
       functionABC.bind(null,args)
    ]
    */
    
    
    this.situation = 0; //0,1,2 = void,hover,press
    this.functions = [emptyFunction,PressFunction];//[hoverFunction, pressFunction]
    //speed of button animation
    this.animInterpolationSpeed = 0.3; //[0 to 1]
    
    
    
    
    //BUTTON FEATURES
    this.pos = pos;
    //[voidSize, hoverSize, PressSize, cacheSize]
    this.buttonSize = [ buttonSize,
                        [buttonSize[0]*1.05,buttonSize[1]*1.05],
                        [buttonSize[0]*0.95,buttonSize[1]*0.95],
                        [0,0]
                      ];
  
    //[voidColor, hoverColor,pressColor,cacheColor]
    this.buttonPalette = [color(200, 200, 200),
                          color(200, 200, 255),
                          color(0,   0,   50 ),
                          color(0,   0,   0  )];
    
    //[voidSmoothness, HoverSmoothness, PressSmoothness, cacheSmoothness]
    //[topleft,topright,bottomright,bottomleft] corner smoothness
    this.buttonCorners = [ 
                           [5,5,5,5], 
                           [5,5,5,5],
                           [5,5,5,5],
                           [5,5,5,5]
                        ];
    
    
    
    
    //LABEL FEATURES
    //["voidText","hoverText","pressLabel"]
    this.label = [label[0],label[0],label[0]];
    
    //[voidSize, hoverSize, PressSize, cacheSize]
    this.labelSize = [ label[1],
                       label[1]*1.2,
                       label[1]*0.9,
                        0
                      ];
    
    //[voidColor, hoverColor, pressColor, cacheColor]
    this.labelPalette = [color(0,   0,   0  ),
                         color(0,   0,   0  ),
                         color(255, 255, 255),
                         color(0,   0,   0  )]; 
    
    
    
    
    //stuff so we dont have to keep calculating in mouse detection
    this.limitX = [this.pos[0]-this.buttonSize[0][0]/2,
                   this.pos[0]+this.buttonSize[0][0]/2]; //[minX,maxX]
    this.limitY = [this.pos[1]-this.buttonSize[0][1]/2,
                   this.pos[1]+this.buttonSize[1][1]/2]; //[minY,maxY]
    
    //to prevent infinite triggering
    this.alrHover = false;
    this.alrPress = false;
  }
  
  situationCheck(){
    if(this.limitY[0] < mouseY && mouseY < this.limitY[1] && 
       this.limitX[0] < mouseX && mouseX < this.limitX[1])
    {
        if(this.alrHover == false)
        {
          this.alrHover  = true;
          this.situation = 1;//hover
          this.functions[0]();
        }
        
        if(mouseIsPressed)
        {
          if(this.alrPress == false)
          {
            this.alrPress  = true;
            this.situation = 2;//press
            this.functions[1]();
          }
        }
        else
        {
          this.alrPress = false;
          this.situation = 1;//hover
        }
    }
    else
    {
      this.alrHover = false;
      this.situation = 0;//void
    }
  }
  
  show(){
    this.situationCheck();
    noStroke();
    
    //draw BUTTON
    
    this.buttonPalette[3] = lerpColor(this.buttonPalette[3],
                                      this.buttonPalette[this.situation],
                                      this.animInterpolationSpeed);
    
    //buttonSize = [originalSize,hoverSize,PressSize,cacheSize]
    this.buttonSize[3][0] = lerp(this.buttonSize[3][0],
                                 this.buttonSize[this.situation][0],
                                 this.animInterpolationSpeed);
    
    this.buttonSize[3][1] = lerp(this.buttonSize[3][1],
                                 this.buttonSize[this.situation][1],
                                 this.animInterpolationSpeed);
    
    fill(this.buttonPalette[3]);
    
    this.buttonCorners[3][0] = lerp(this.buttonCorners[3][0],
                                 this.buttonCorners[this.situation][0],
                                 this.animInterpolationSpeed);
    this.buttonCorners[3][1] = lerp(this.buttonCorners[3][1],
                                 this.buttonCorners[this.situation][1],
                                 this.animInterpolationSpeed);
    this.buttonCorners[3][2] = lerp(this.buttonCorners[3][2],
                                 this.buttonCorners[this.situation][2],
                                 this.animInterpolationSpeed);
    this.buttonCorners[3][3] = lerp(this.buttonCorners[3][3],
                                 this.buttonCorners[this.situation][3],
                                 this.animInterpolationSpeed);

    
    rect(this.pos[0]-this.buttonSize[3][0]/2,
         this.pos[1]-this.buttonSize[3][1]/2,
         this.buttonSize[3][0],
         this.buttonSize[3][1],
         this.buttonCorners[3][0],
         this.buttonCorners[3][1],
         this.buttonCorners[3][2],
         this.buttonCorners[3][3]);
    
    
    
    //draw LABEL
    this.labelPalette[3] = lerpColor(this.labelPalette[3],
                                      this.labelPalette[this.situation],
                                      this.animInterpolationSpeed);
    fill(this.labelPalette[3]);
    
    textAlign(CENTER,CENTER);
    
    this.labelSize[3] = lerp(this.labelSize[3],
                             this.labelSize[this.situation],
                             this.animInterpolationSpeed);
    textSize(this.labelSize[3]);
    
    text(this.label[this.situation],
         this.pos[0],
         this.pos[1])
  }
}