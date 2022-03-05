// function drop() {
// 	document.getElementsByClassName('list').style.display="block";
// }

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

function drop() {
    if (document.getElementById("search-bar").click) {
        document.getElementById("List").style.display = "block";
    }
    // if (document.getElementById("search-bar").click) {
    //     document.getElementById("List").style.display = "block";
}

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