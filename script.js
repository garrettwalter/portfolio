$(document).ready(function(){

    console.log("hi");

    const url = ["./pictures/","./pictures/","./pictures/"]

    $("#title").css("background-image","url('"+ url +"')");

    $("#creations").hide();
    $("#resume").hide();
    $("#contact").hide();
    $("#homePage").show();

    $("#nav-create").click(function() {
        $("#creations").show();
        $("#resume").hide();
        $("#contact").hide();
        $("#homePage").hide();
    });

    $("#nav-resume").click(function() {
        $("#resume").show();
        $("#creations").hide();
        $("#contact").hide();
        $("#homePage").hide();
    });

    $("#nav-contact").click(function() {
        $("#contact").show();
        $("#creations").hide();
        $("#resume").hide();
        $("#homePage").hide();
    });

})
