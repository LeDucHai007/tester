// backtop
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $("#backtop").fadeIn();
        } else {
            $("#backtop").fadeOut();
        }
    });
    $("#backtop").click(function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
});

// accordion
$(document).ready(function() {
    $(".accordion-header").click(function() {
        $(this).parent().toggleClass("active");
        $(this).parent().children(".accordion-body").slideToggle();
    });
});

$(document).ready(function() {
    $(".accordion-header-mobile").click(function() {
        $(this).parent().toggleClass("active");
        $(this).parent().children(".accordion-body-mobile").slideToggle();
    });
});

// read more-less
$(".readmore-btn").on("click", function() {
    $(this).parent().toggleClass("showContent");
    var replaceText = $(this).parent().hasClass("showContent") ?
        "Read less" :
        "Read more";
    $(this).text(replaceText);
});

//side bar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
};

$(document).ready(function() {
    $(".sidebar").fadeOut(0);
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".sidebar").fadeIn();
        } else {
            $(".sidebar").fadeOut(0);
        }
    });
});