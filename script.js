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

function getFolderLinks() {
  const url = "https://raw.githubusercontent.com/link-05/APCSA_MP3/main/frq-solutions";
  const apiUrl = `https://api.github.com/repos/link-05/APCSA_MP3/contents/frq-solutions`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        if (item.type === "dir") {
          createMiniBox(item.name, url + "/" + item.name);
        }
      });
    })
    .catch(error => console.error("Error fetching folders", error));
}

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

getFolderLinks();