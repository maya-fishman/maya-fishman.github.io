const button2 = document.getElementById("button");
const sidebar = document.getElementById("sidebar");
const sidebarelement = document.getElementsByClassName("notopened");

const heading1 = document.getElementById("showheading");

button2.addEventListener("click", function () {
  console.log("second button clicked"); /* ^ this part works */
  sidebar.id = "clickedsidebar"; //WORKS!!
  button2.id = "clickedopenbutton";
  heading1.id = "hideheading";
});

const closebutton = document.getElementById("closebutton");

const closelist = document.getElementById("closelist");

closebutton.addEventListener("click", function () {
  console.log("close button clicked");
  sidebar.id = "sidebar";
  button2.id = "button";

  heading1.id = "showheading";
});

window.addEventListener("resize", function () {
  let width = window.innerWidth;
  if (width > 560) {
  } else if (width < 560) {
    clickedsidebar.id = "sidebar";
    button2.id = "button";
    heading1.id = "showheading";
  }
});

window.addEventListener("resize", function () {
  let width = window.innerWidth;
  if (width < 560) {
    closebutton.id = "closebutton";
    closelist.id = "closelist";
  }
});
