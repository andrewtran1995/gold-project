// Add courses.js code
var button = document.createElement("button");
button.innerHTML = "Add to GES";

var td = document.getElementById("pageContent_criteriaLabel");
td.appendChild(button);

button.addEventListener("click", function() {
    alert("Added to GEH Schedule");
});
