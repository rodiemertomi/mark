$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});

var newWindow;
var w, h = 0;
var width = window.innerWidth;
var height = window.innerHeight;

function ResumePIC(){
    newWindow = open("viewcv.html", "viewcv", "width=651, height=740");
    w = width / 2;
    h = height / 2;
    newWindow.moveBy(w-300, h-200);
    newWindow.focus();
}
function ProjectsPIC(){
    newWindow = open("projects.html", "projects", "width=1045, height=800");
    w = width / 2;
    h = height / 2;
    newWindow.moveBy(w-300, h-200);
    newWindow.focus();
}