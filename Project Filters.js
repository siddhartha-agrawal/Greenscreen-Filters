var fimage=null;
var bimage=null;
var thresold;
var canvas1, canvas2;

function uploadforeground()
{
    var bt = document.getElementById("fbutton");
    canvas1 = document.getElementById("can1");
    fimage = new SimpleImage(bt);
    fimage.drawTo(canvas1);
}
function uploadbackground()
{
    var bt2 = document.getElementById("bbutton");
    canvas2 = document.getElementById("can2");
    bimage = new SimpleImage(bt2);
    bimage.drawTo(canvas2);
}
function combine()
{
    if(fimage==null || !fimage.complete()){
        alert("Foreground Image not loaded!");
    }
    if(bimage == null || !bimage.complete()){
        alert("Background Image not loaded!");
    }
    clearCanvas();
    var fgimage = fimage;
    var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight())
    for(var pixel of fgimage.values()){
        var x= pixel.getX();
        var y= pixel.getY();
        //var g= pixel.getGreen();
        if(pixel.getGreen()>200)
        {
            var bgpixel= bimage.getPixel(x,y);
            output.setPixel(x,y,bgpixel);
        }
        else{
            output.setPixel(x,y,pixel);
        }
    }
    output.drawTo(canvas1);
}
function doBlackandwhite()
{
    clearCanvas();
    var fgimage=fimage;
    for(var pixel of fgimage.values())
    {
        var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setGreen(avg);
        pixel.setRed(avg);
        pixel.setBlue(avg); 
    }
    fgimage.drawTo(canvas1);
    var bgimage=bimage;
    for(var pixel of bgimage.values())
    {
        var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setGreen(avg);
        pixel.setRed(avg);
        pixel.setBlue(avg); 
    }
    bgimage.drawTo(canvas2);
}
function doRed()
{
    clearCanvas();
    var fgimage=fimage;
    for (var pixel of fgimage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
          pixel.setRed(2 * avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(2* avg - 255);
          pixel.setBlue(2* avg - 255);
        }
      }
      fgimage.drawTo(canvas1);
      var bgimage=bimage;
      for (var pixel of bgimage.values()) {
          var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
          if (avg < 128) {
            pixel.setRed(2 * avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
          } else {
            pixel.setRed(255);
            pixel.setGreen(2* avg - 255);
            pixel.setBlue(2* avg - 255);
          }
        }
        bgimage.drawTo(canvas2);
}
function doGreen()
{
    clearCanvas();
    var fgimage=fimage;
    for (var pixel of fgimage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        } else {
          pixel.setRed(2* avg - 255);
          pixel.setGreen(255);
          pixel.setBlue(2* avg - 255);
        }
      }
      fgimage.drawTo(canvas1);
      var bgimage=bimage;
      for (var pixel of bgimage.values()) {
          var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
          if (avg < 128) {
            pixel.setRed(0);
            pixel.setGreen(2 * avg);
            pixel.setBlue(0);
          } else {
            pixel.setRed(2* avg - 255);
            pixel.setGreen(255);
            pixel.setBlue(2* avg - 255);
          }
        }
        bgimage.drawTo(canvas2);
}
function doBlue()
{
    
    clearCanvas();
    var fgimage=fimage;
    for (var pixel of fgimage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (avg < 128) {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        } else {
          pixel.setRed(2* avg - 255);
          pixel.setGreen(2* avg - 255);
          pixel.setBlue(255);
        }
      }
      fgimage.drawTo(canvas1);
      var bgimage=bimage;
      for (var pixel of bgimage.values()) {
          var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
          if (avg < 128) {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
          } else {
            pixel.setRed(2* avg - 255);
            pixel.setGreen(2* avg - 255);
            pixel.setBlue(255);
          }
        }
        bgimage.drawTo(canvas2);
}
function reset()
{
    fimage=null;
    bimage=null;
    clearCanvas();
}
function clearCanvas()
{
    var context1=canvas1.getContext("2d");
    context1.clearRect(0,0,canvas1.width,canvas1.height);
    var context2=canvas2.getContext("2d");
    context2.clearRect(0,0,canvas2.width,canvas2.height);
}