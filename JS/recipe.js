// Retrieve and display the selected image and title on recipe.html
const newImage = localStorage.getItem("selectedImage");
document.getElementById("newImage").src = newImage;

const newTitle = localStorage.getItem("newTitle");
document.getElementById("newTitle").textContent = newTitle;