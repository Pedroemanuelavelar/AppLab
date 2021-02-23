// toggle
const toggle = document.querySelector('.togglerr');
const priceAnnually = document.querySelectorAll('.price-annually');
const priceMonth = document.querySelectorAll('.price-month');

// Function toggle changed prince table
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        priceMonth.forEach(price => price.classList.add('hidden'));
        priceAnnually.forEach(price => price.classList.remove('hidden'));
    } else {
        priceMonth.forEach(price => price.classList.remove('hidden'));
        priceAnnually.forEach(price => price.classList.add('hidden'));
    }
});


// Add active class to the current labels (highlight it)
var header = document.getElementById("active");
var labels = header.getElementsByClassName("single");
var current = document.getElementsByClassName("active");
for (var i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function() {
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

// FAQ function
var accordion = document.getElementsByClassName("accordion");
var contador;

for (contador = 0; contador < accordion.length; contador++) {
  accordion[contador].addEventListener("click", function() {
    this.classList.toggle("active-acc");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    /* if(panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.ScrollHeigth + "px";
    } */
  });
}



