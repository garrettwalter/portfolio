$(document).ready(function(){

    console.log("hi");

    let currentStage = 0;
    const stage = [
        {
            "url": "./pictures/me2.JPG",
            "story": "This is me, I am currently living in downtown Atlanta, Ga. I was born and raised just outside of Atlanta, in Suwanee, Ga."
        },
        {
            "url": "./pictures/me.JPG",
            "story": "I am currently studying to become a Full-Stack Developer in the Georgia Tech Coding Bootcamp. I chose this because I have never wanted to go to college, and after taking a coding class my senior year of HS, I decided that coding was for me. I love it. After starting the bootcamp It has become a hobby. Along with the high volume of class work, I have started coding my own projects, just for fun."
        },
        {
            "url": "./pictures/biz.jpg",
            "story": "A couple months me and a close friend set out to start a reselling business of wholesale goods. We chose to start it up with a 3rd partner that screwed us over. We are currently in the process of getting our products and earnings back."
        },
        {
           "url": "./pictures/hockey.jpg",
           "story": "One interesting thing about me is that I used to play Ice Hockey! My Highschool team won the State Championship 3 times. I also played on a travel team, and got to travel to alot of cool places throughout my teenage years."
        },
        {
            "url": "./pictures/travel.JPG",
            "story": "I love the beach. I just thought you should know. Any chance I get to go to the beach, trust me, i'm taking it."
        },
        {
            "url": "./pictures/car.jpg",
            "story": "The Mac I code on and this beauty right here are my 2 most prized possessions. I have always been super into cars, and I think I always will."
        }  
    ];

    $("#title").css("background-image","url('"+ stage[currentStage].url +"')");
    $("#title").css("background-size","cover");
    $("#title").css("align","center");
    $("#storyText").text(stage[currentStage].story);

    $("#backBtn").click(function() {
        if (currentStage === 0){
            currentStage = 5;
            $("#title").css("background-image","url('"+ stage[currentStage].url +"')");
            $("#storyText").text(stage[currentStage].story);
        } else {
            currentStage = currentStage - 1;
            $("#title").css("background-image","url('"+ stage[currentStage].url +"')");
            $("#storyText").text(stage[currentStage].story);
        }
    });

    $("#nextBtn").click(function() {
        if (currentStage === 5){
            currentStage = 0;
            $("#title").css("background-image","url('"+ stage[currentStage].url +"')");
            $("#storyText").text(stage[currentStage].story);
        } else {
            currentStage = currentStage + 1;
            $("#title").css("background-image","url('"+ stage[currentStage].url +"')");
            $("#storyText").text(stage[currentStage].story);
        }
    });

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

});
