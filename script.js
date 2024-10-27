
// const container = document.createElement("div");
// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.gap = "10px";
// container.style.justifyContent = "center";
// container.style.padding = "20px";
// document.body.appendChild(container);

// const seeMoreButton = document.createElement("button");
// seeMoreButton.innerText = "See More";
// seeMoreButton.style.marginTop = "20px";
// seeMoreButton.style.padding = "10px 20px";
// seeMoreButton.style.fontSize = "16px";
// seeMoreButton.style.cursor = "pointer";
// seeMoreButton.style.border = "none";
// seeMoreButton.style.borderRadius = "5px";
// seeMoreButton.style.backgroundColor = "#333";
// seeMoreButton.style.color = "#fff";
// document.body.appendChild(seeMoreButton);


// const colors = [
//   "#FF6F61",
//   "#6B5B95",
//   "#88B04B",
//   "#F7CAC9",
//   "#92A8D1",
//   "#955251",
//   "#B565A7",
//   "#009B77",
// ];

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((products) => {
//     let displayedIndex = 0; 

//     function displayCardsBatch(batchSize) {
//       const batch = products.slice(displayedIndex, displayedIndex + batchSize);
//       batch.forEach((product, index) => {
//         setTimeout(() => {
          
//           const card = document.createElement("div");
//           card.style.display = "inline-block";
//           card.style.border = "1px solid #ccc";
//           card.style.borderRadius = "8px";
//           card.style.width = "200px";
//           card.style.margin = "10px";
//           card.style.padding = "10px";
//           card.style.textAlign = "center";
//           card.style.backgroundColor =
//             colors[(displayedIndex + index) % colors.length]; 
//           card.style.color = "#fff";

//           const img = document.createElement("img");
//           img.src = product.image;
//           img.style.maxWidth = "100%";
//           img.style.height = "auto";
//           img.style.borderRadius = "8px";
//           card.appendChild(img);

         
//           const title = document.createElement("h3");
//           title.innerText = product.title;
//           card.appendChild(title);

//           const button = document.createElement("button");
//           button.innerText = "Buy Now";
//           button.style.marginTop = "10px";
//           button.style.padding = "5px 10px";
//           button.style.border = "none";
//           button.style.backgroundColor = "#fff";
//           button.style.color = "#333";
//           button.style.cursor = "pointer";
//           button.style.borderRadius = "4px";
//           card.appendChild(button);

//           container.appendChild(card);
//         }, index * 2000); 
//       });

//       displayedIndex += batchSize; 
//     }
//     displayCardsBatch(4);
//     seeMoreButton.addEventListener("click", () => {
//       displayCardsBatch(4); 
//     });
//   })
//   .catch((error) => console.error("Error fetching data:", error));



// Select the container element and add it to the body
const container = document.getElementById("product-container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "10px";
container.style.justifyContent = "center";
container.style.padding = "20px";

// Array of colors for unique background colors
const colors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#955251", "#B565A7", "#009B77"];

let products = [];  // To store fetched products
let displayedIndex = 0; // Tracks the last displayed index

// Fetch data from FakeStore API
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        products = data; // Save the products to use later
        displayMoreCards(4); // Display the first batch of cards
    })
    .catch(error => console.error("Error fetching data:", error));

// Function to display a batch of cards
function displayMoreCards(batchSize = 4) {
    const batch = products.slice(displayedIndex, displayedIndex + batchSize);
    batch.forEach((product, index) => {
        setTimeout(() => {
            // Create a card element
            const card = document.createElement("div");
            card.style.display = "inline-block";
            card.style.border = "1px solid #ccc";
            card.style.borderRadius = "8px";
            card.style.width = "200px";
            card.style.margin = "10px";
            card.style.padding = "10px";
            card.style.textAlign = "center";
            card.style.backgroundColor = colors[(displayedIndex + index) % colors.length]; // Unique background color
            card.style.color = "#fff";
            
            // Add image to the card
            const img = document.createElement("img");
            img.src = product.image;
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            img.style.borderRadius = "8px";
            card.appendChild(img);
            
            // Add title to the card
            const title = document.createElement("h3");
            title.innerText = product.title;
            card.appendChild(title);
            
            // Add button to the card
            const button = document.createElement("button");
            button.innerText = "Buy Now";
            button.style.marginTop = "10px";
            button.style.padding = "5px 10px";
            button.style.border = "none";
            button.style.backgroundColor = "#fff";
            button.style.color = "#333";
            button.style.cursor = "pointer";
            button.style.borderRadius = "4px";
            card.appendChild(button);
            
            // Append card to the container
            container.appendChild(card);
        }, index * 2000); // Display each card in batch after 2 seconds
    });

    displayedIndex += batchSize; // Update displayed index
}
