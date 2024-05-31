// const readmeContent = document.getElementById('readme-content');
// fetch('https://raw.githubusercontent.com/link-05/APCSA_MP3/main/README.md')
//   .then(response => response.text())
//   .then(markdown => {
//     // Create an iframe element and set its src attribute to the Markdown content
//     const iframe = document.createElement('iframe');
//     iframe.srcdoc = markdown;
//     iframe.width = '100%';
//     iframe.height = '600'; // Adjust the height as needed
//     iframe.style.border = '0'; // Remove default iframe border
//     // Replace the existing div content with the iframe
//     readmeContent.innerHTML = '';
//     readmeContent.appendChild(iframe);
//   })
//   .catch(error => {
//     console.error('Error fetching README:', error);
//     readmeContent.textContent = 'Error loading README';
//   });
//Figure out later does not work.

//Pulls link of each file folder in the repo folder. The url will be taken and placed into a mini box.
function getFolderLinks() {
  const url = "https://github.com/link-05/APCSA_MP3/tree/main/frq-solutions";
  const apiUrl = `https://api.github.com/repos/link-05/APCSA_MP3/contents/frq-solutions`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        if (item.type === "dir") {
          createMiniBox(item.name, url + "/" + item.name);
          //The slash will add the item name to a universal link and end up creating a url that is individualized for each folder.
        }
      });
    })
    .catch((error) => console.error("Error fetching folders", error));
}

//Function that will take the link, name of folder
function createMiniBox(title, url) {
  const miniBox = document.createElement("article");
  miniBox.className = "mini-box";

  const link = document.createElement("a");

  link.href = url;
  link.textContent = title;
  link.target = "_blank"; // Add this attribute will force the window to open

  miniBox.appendChild(link);

  document.body.appendChild(miniBox);
}

if (window.location.pathname === "/csfrq.html") {
  // Execute getFolderLinks() only on hub.html
  getFolderLinks();
}

//Code to make the button move left and right
// Wrap the code in a DOMContentLoaded event listener
if (window.location.pathname === "/hub.html") {
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");
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
}

//end of the mini window that hold the links to the different folders
