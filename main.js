som="";
function preload()
{
    som=loadSound("music.mp3");
}
function setup()
{
    caixa=createCanvas(500,1000);
    caixa.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,20,500,350);
}
function iniciar()
{
    som.play();
}