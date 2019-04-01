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
}, false);
