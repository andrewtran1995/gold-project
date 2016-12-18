var button = document.createElement("button");
button.innerHTML = "Add to GES";

// Get all td's with ID starting with "pageContent_CourseList_PermNbr_"
var courseHeaders = document.querySelectorAll('td[id^="pageContent_CourseList_PermNbr_"]');

var td = document.getElementById("pageContent_criteriaLabel");
td.appendChild(button);

button.addEventListener("click", function() {
    alert("Added to GEH Schedule");
});
