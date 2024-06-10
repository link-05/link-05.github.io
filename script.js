//Pulls link of each file folder in the repo folder. The url will be taken and placed into a mini box.
function getFolderLinks() {
  const url = "https://github.com/link-05/APCSA_MP3/tree/main/frq-solutions";
  const apiUrl = `https://api.github.com/repos/link-05/APCSA_MP3/contents/frq-solutions`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        if (item.type === "dir") {
          createMiniBoxS(item.name, url + "/" + item.name);
          //The slash will add the item name to a universal link and end up creating a url that is individualized for each folder.
        }
      });
    })
    .catch((error) => console.error("Error fetching folders", error));
}

//End of Function that will take the link, name of folder

//Function to make mini boxes that have embed text with links
function createMiniBoxS(title, url) {
  const miniBoxS = document.createElement("article");
  miniBoxS.className = "mini-boxS";
  const link = document.createElement("a");

  link.href = url;
  link.textContent = title;
  link.target = "_blank"; // Add this attribute will force the window to open

  miniBoxS.appendChild(link);

  document.body.appendChild(miniBoxS);
}

if (window.location.pathname === "/csfrq.html") {
  // Execute getFolderLinks() only on hub.html
  getFolderLinks();
}

//Code to make the button move left and right
// Wrap the code in a DOMContentLoaded event listener
// if (window.location.pathname === "/index.html") {
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  let buttonLeft = 0;
  let buttonDirection = 1; // 1 for right, -1 for left
  function moveButton() {
    buttonLeft += buttonDirection;
    button.style.left = buttonLeft + "px";
    if (
      buttonLeft >= window.innerWidth - button.offsetWidth ||
      buttonLeft <= 0
    ) {
      buttonDirection *= -1;
    }
    requestAnimationFrame(moveButton);
  }
  moveButton();
});
// }

//end of the mini window that hold the links to the different folders
