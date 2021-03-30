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

/* Single Product Alt */

function altImageShowcase1() {
    document.getElementById("image-showcase").src = "assets/img/product/vac1-alt.png";
}

function altImageShowcase2() {
    document.getElementById("image-showcase").src = "assets/img/product/vac2-alt.jpg";
}

function altImageShowcase3() {
    document.getElementById("image-showcase").src = "assets/img/product/vac3-alt.jpg";
}

function altImageShowcase4() {
    document.getElementById("image-showcase").src = "assets/img/product/vac4-alt.jpg";
}

/* Pop up for add to cart and wishlist */

function addToWishlist() {
    var popUp = document.getElementById("add-to-wishlist");
    if (!popUp.classList.contains("pop-up")) {
        popUp.classList.add("pop-up");
        setTimeout(() => {  popUp.classList.remove("pop-up"); }, 3000);
    }
}

/* Reviews Section page selection*/

function reviewsPage1() {
    var reviewsPage1 = document.getElementById("reviews-1");
    reviewsPage1.classList.remove("hidden");

    var reviewsPage2 = document.getElementById("reviews-2");
    reviewsPage2.classList.add("hidden");
}

function reviewsPage2() {
    var reviewsPage1 = document.getElementById("reviews-1");
    reviewsPage1.classList.add("hidden");

    var reviewsPage2 = document.getElementById("reviews-2");
    reviewsPage2.classList.remove("hidden");
}

/*Product list side filter accordion*/
/*Reference: https://www.w3schools.com/howto/howto_js_accordion.asp*/
/*Category accordion*/
let categoryBtn = document.getElementById("category-btn");
if(categoryBtn) {
    categoryBtn.addEventListener("click", function(){
        this.classList.toggle("active");
        
        let panel = this.nextElementSibling;
        let icon ="category-chevron";
    
        if (panel.style.display === "block"){
            document.getElementById(icon).setAttribute("name", "chevron-down-outline");
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
            document.getElementById(icon).setAttribute("name", "chevron-up-outline");
        }
    });
}

/*Features accordion*/
let featuresBtn = document.getElementById("features-btn");
if(featuresBtn) {
    featuresBtn.addEventListener("click", function(){
        this.classList.toggle("active");
        
        let panel = this.nextElementSibling;
        let icon ="features-chevron";
    
        if (panel.style.display === "block"){
            document.getElementById(icon).setAttribute("name", "chevron-down-outline");
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
            document.getElementById(icon).setAttribute("name", "chevron-up-outline");
        }
    });
}

/*Price range accordion*/
let priceRangeBtn = document.getElementById("price-range-btn");
if(priceRangeBtn) {
    priceRangeBtn.addEventListener("click", function(){
        this.classList.toggle("active");
        
        let panel = this.nextElementSibling;
        let icon ="price-range-chevron";
    
        if (panel.style.display === "block"){
            document.getElementById(icon).setAttribute("name", "chevron-down-outline");
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
            document.getElementById(icon).setAttribute("name", "chevron-up-outline");
        }
    });
}



/*Customer rating accordion*/
let customerRatingBtn = document.getElementById("customer-rating-btn");
if(customerRatingBtn) {
    customerRatingBtn.addEventListener("click", function(){
        this.classList.toggle("active");
        
        let panel = this.nextElementSibling;
        let icon ="customer-rating-chevron";
    
        if (panel.style.display === "block"){
            document.getElementById(icon).setAttribute("name", "chevron-down-outline");
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
            document.getElementById(icon).setAttribute("name", "chevron-up-outline");
        }
    });
}

/*Product list and Single product Sort By Dropdown*/
/*Reference: https://www.w3schools.com/howto/howto_js_dropdown.asp*/
function dropDownPrice() {
    document.getElementById("sort-by-dropdown-price").classList.toggle("show");
}

function dropDownRating() {
    document.getElementById("sort-by-dropdown-rating").classList.toggle("show");
}

/*Mobile hamburger menu*/
/*Reference: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp*/
function mobileMenu() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/* To show dropdown selection properly */
function newToOld() {
    document.getElementById("dropdown").innerHTML = 'New to old <ion-icon name="chevron-down-outline"></ion-icon>';
}

function highestRating() {
    document.getElementById("dropdown").innerHTML = 'Highest rating <ion-icon name="chevron-down-outline"></ion-icon>';
}

function lowestRating() {
    document.getElementById("dropdown").innerHTML = 'Lowest rating <ion-icon name="chevron-down-outline"></ion-icon>';
}

function oldToNew() {
    document.getElementById("dropdown").innerHTML = 'Old to new <ion-icon name="chevron-down-outline"></ion-icon>';
}

function bestSelling() {
    document.getElementById("dropdown").innerHTML = 'Best selling <ion-icon name="chevron-down-outline"></ion-icon>';
}

function highestPrice() {
    document.getElementById("dropdown").innerHTML = 'Highest price <ion-icon name="chevron-down-outline"></ion-icon>';
}

function lowestPrice() {
    document.getElementById("dropdown").innerHTML = 'Lowest price <ion-icon name="chevron-down-outline"></ion-icon>';
}


let leftButton = document.getElementById("left-arrow");
let rightButton = document.getElementById("right-arrow");

var reviews = [
    [
        'Great present',
        'I got this for the wife for Christmas, and it has changed our life. We run it 1-2x a day and it gets every nook and cranny. It’s bin is always at least half full to full from its 45 minutes of vacuuming.',
        'James Miller',
        'Bought the iRoomba 860 SuperClean',
        'men/26.jpg',
        '1'
    ],
    [
        'Cleans intelligently',
        'I am impressed with how well it performs. It has features that recognizes stairways and navigates around the house on both hardwood and carpet without getting stuck on furniture.',
        'Anna Smithers',
        'Bought the Dyson v12 EasyVac',
        'women/26.jpg',
        '2'
    ],
    [
        'Just set and relax',
        'iRobot has set the bar very high for its competitors. I found this vacuum to be very quiet, it does a great job cleaning, I do not have to worry about keeping an eye on it like I did with my older model.',
        'Charlene Jolly',
        'Bought the Eufy 11S Vacuum',
        'women/28.jpg',
        '3'
    ]
]

var reviewElements = ["review-1", "review-2", "review-3"]

function populateReview(reviewId, reviewContent) {


    var currentReview = document.getElementById(reviewId);
    currentReview.querySelector("h2.review-heading").innerHTML = reviewContent[0];
    currentReview.querySelector("p.review-body").innerHTML = reviewContent[1];
    currentReview.querySelector("h3.review-info-name").innerHTML = reviewContent[2];
    currentReview.querySelector("p.review-info-description").innerHTML = reviewContent[3];
    currentReview.querySelector("img.review-info-image").src = "https://randomuser.me/api/portraits/" + reviewContent[4];
    currentReview.setAttribute("data-current", reviewContent[5]);
    console.log("populated review", currentReview);
}


function scrollReview(currentReview, direction) {
    var reviewList = document.querySelectorAll(".review-element");
    for (var i = 0; i < reviewList.length; i++) {
        if (direction == "left") {
            var currentReviewNumber = reviewList[i].getAttribute("data-current") - 1;
            if (currentReviewNumber == 2) {
                populateReview(reviewList[i].id, reviews[0]);
            } else {
                populateReview(reviewList[i].id, reviews[currentReviewNumber + 1]);
            }
        } else if (direction="right") {
            var currentReviewNumber = reviewList[i].getAttribute("data-current") - 1;
            if (currentReviewNumber == 0) {
                populateReview(reviewList[i].id, reviews[2]);
            } else {
                populateReview(reviewList[i].id, reviews[currentReviewNumber - 1]);
            }
        }
    }
}

if (leftButton || rightButton) {
    leftButton.addEventListener("click", function() {
        scrollReview(document.getElementById("review-2"), "left");
    });
    rightButton.addEventListener("click", function() {
        scrollReview(document.getElementById("review-2"), "right");
    });
}