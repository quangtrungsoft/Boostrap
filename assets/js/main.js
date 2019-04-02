document.addEventListener('DOMContentLoaded', function () {
    var btnSearch = document.getElementById("btnSearch");
    btnSearch.onclick = function () {
        document.getElementById("searchBox").classList.toggle('hide');
        if (btnSearch.textContent == "Search") {
            btnSearch.textContent = '';
            btnSearch.innerHTML = '<i class="fa fa-search"></i>';
        }
        else btnSearch.textContent = "Search";
    }

    var btnMenu = document.getElementById("navbarCollapse");
    var menuItem = document.getElementById("menu-item");
    var navBar = document.getElementById("navbar");
    btnMenu.onclick = function(){
        navBar.classList.toggle("show-menu-res");
        menuItem.classList.toggle("show");
    }
}, false);
