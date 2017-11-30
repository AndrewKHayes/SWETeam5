//dropdown menu, min price
function minFunction() {
   
    document.getElementById("myDrop").classList.toggle("show");
   

}

    window.onclick = function(Event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns =
            document.getElementsByClassName("dropdown-content");
            var i;
            for(i=0;i<dropdowns.length;i++){
                var openDropdown=dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
    }
}

//dropdown menu, max price    
function maxFunction() {
   
    document.getElementById("myDrop2").classList.toggle("show");
}

    window.onclick = function(Event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns =
            document.getElementsByClassName("dropdown-content");
            var i;
            for(i=0;i<dropdowns.length;i++){
                var openDropdown=dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
    }
}

//dropdown menu, bedrooms    
function bedFunction() {
   
    document.getElementById("myDrop3").classList.toggle("show");
}

    window.onclick = function(Event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns =
            document.getElementsByClassName("dropdown-content");
            var i;
            for(i=0;i<dropdowns.length;i++){
                var openDropdown=dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
    }
}

//dropdown menu, number of guests    
function guestFunction() {
   
    document.getElementById("myDrop4").classList.toggle("show");
    
}

    window.onclick = function(Event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns =
            document.getElementsByClassName("dropdown-content");
            var i;
            for(i=0;i<dropdowns.length;i++){
                var openDropdown=dropdowns[i];
                if(openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
    }
}
    


// Get the modal, for property images
var modal = document.getElementById('propertyModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('mainImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


//slideshow, for the property image modal
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
