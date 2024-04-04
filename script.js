document.getElementById("username").addEventListener("input", function () {
  var alertDiv = document.getElementById("username-exists-alert");
  var alertwarn = document.getElementById("warning");
  var userN = document.getElementById("username");
  if (this.value.trim() !== "") {
    alertDiv.style.display = "flex";
    alertwarn.style.display = "block";
    userN.style.background = "rgba(255, 0, 0, 0.1)";
  } else {
    alertDiv.style.display = "none";
    alertwarn.style.display = "none";
  }
});

document.getElementById("finish-button").addEventListener("click", function () {
  alert("Survey finished!");
});

function toggleAfterClick(element) {
  var circleIcon = element.querySelector(".circle-icon");
  var afterClick = element.querySelector(".after-click");
  var multiple = element.querySelector(".multiple");
  var pressButton = element.querySelector(".press-button");

  // Toggle circle icon classes
  circleIcon.classList.toggle("fa-solid");
  circleIcon.classList.toggle("fa-circle-check");

  // Toggle active class on the option element
  element.classList.toggle("active");

  // Toggle display of after-click, multiple, and press-button elements
  if (afterClick && multiple && pressButton) {
    afterClick.style.display =
      afterClick.style.display === "none" ? "block" : "none";
    multiple.style.display =
      multiple.style.display === "none" ? "block" : "none";
    pressButton.style.display =
      pressButton.style.display === "none" ? "block" : "none";
  } else {
    pressButton = document.querySelector(".press-button");
    multiple = document.querySelector(".multiple");
    if (pressButton && multiple) {
      pressButton.style.display = "block";
      multiple.style.display = "block";
    }
  }
}

function redirectToLogin() {
  window.location.href = "login.html";
}

// Function to handle file upload
function handleFileUpload(event) {
  const file = event.target.files[0]; // Get the uploaded file
  const reader = new FileReader(); // Create a FileReader object

  reader.onload = function () {
    const img = document.querySelector(".avatar-section .image-row img"); // Get the img element
    img.src = reader.result; // Set the src attribute of the img element to the uploaded file
  };

  if (file) {
    reader.readAsDataURL(file); // Read the uploaded file as a data URL
  }
}

// Function to trigger file input click event
function triggerFileInputClick() {
  document.getElementById("fileInput").click();
}

// Add event listener to the file input element

document.getElementById('readUrl').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('uploadedImage').setAttribute('src', event.target.result);
      document.getElementById('uploadedImage').style.display = 'block';
    });
  }
});