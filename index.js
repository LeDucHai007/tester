document.getElementById("myUL").style.display = "none";

function drop() {
    document.getElementById("myUL").style.display = "inline";
}

function undrop() {
    document.getElementById("myUL").style.display = "none";
}

function search() {
    // Declare variables
    var input, filter, ul, li, a, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("List");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
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

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop) {
            $("header").addClass("sticky");
        }
    });
});
// sidebar

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