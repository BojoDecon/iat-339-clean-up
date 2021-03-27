'use strict';

/* Single Product */

function imageShowcase1() {
	document.getElementById("image-showcase").src = "assets/img/product/vac1.jpg";
}

function imageShowcase2() {
	document.getElementById("image-showcase").src = "assets/img/product/vac2.jpg";
}

function imageShowcase3() {
	document.getElementById("image-showcase").src = "assets/img/product/vac3.jpg";
}

function imageShowcase4() {
	document.getElementById("image-showcase").src = "assets/img/product/vac4.jpg";
}

/*Product list side filter accordion*/
/*Reference: https://www.w3schools.com/howto/howto_js_accordion.asp*/
/*Category accordion*/
let categoryBtn = document.getElementById("category-btn");
categoryBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    
    let panel = this.nextElementSibling;
    let iconIndex="category-chevron";

    if (panel.style.display === "block"){
        document.getElementById(iconIndex).setAttribute("name", "chevron-down-outline");
        panel.style.display = "none";
        
    } else {
        panel.style.display = "block";
        document.getElementById(iconIndex).setAttribute("name", "chevron-up-outline");
    }
});
/*Features accordion*/
let featuresBtn = document.getElementById("features-btn");
featuresBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    
    let panel = this.nextElementSibling;
    let iconIndex="features-chevron";

    if (panel.style.display === "block"){
        document.getElementById(iconIndex).setAttribute("name", "chevron-down-outline");
        panel.style.display = "none";
        
    } else {
        panel.style.display = "block";
        document.getElementById(iconIndex).setAttribute("name", "chevron-up-outline");
    }
});


/*Product list Sort By Dropdown*/
/*Reference: https://www.w3schools.com/howto/howto_js_dropdown.asp*/
function dropDown() {
    document.getElementById("sort-by-dropdown").classList.toggle("show");
}
  
window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}