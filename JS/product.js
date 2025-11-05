// Product cup cake Data and Rendering Logic
const cupCake = [
    {
      title: 'Cookies Cupcake',
      imagePath: '../Images/chocolatecookiescreamcupcakes.jpg',
      price: '129.00 SEK',
      link: '../HTML/recipe.html'
    },
    {
      title: 'Vanilla Cupcake',
      imagePath: '../Images/Perfectly-Moist-Cupcake.webp',
      price: '85.00 SEK',
      link: '../HTML/recipe.html'
    },
    {
      title: 'Blueberry Cupcake',
      imagePath: '../Images/Blueberry-Cupcakes.jpg',
      price: '119.00 SEK',
      link: '../HTML/recipe.html'
    },
    {
      title: 'Carrot Cupcake',
      imagePath: '../Images/Carrot-Cake-Cupcakes.jpg',
      price: '99.00 SEK',
      link: '../HTML/recipe.html'
    },
    {
      title: 'Brown Sugar Cupcake',
      imagePath: '../Images/easy-brown-sugar-cupcakes.webp',
      price: '125.00 SEK',
      link: '../HTML/recipe.html'
    },
    {
      title: 'Strawberry Cupcake',
      imagePath: '../Images/strawberry-shortcake-cupcakes.jpg',
      price: '89.00 SEK',
      link: '../HTML/recipe.html'
    },
    {
      title: 'Chocolate Cupcake',
      imagePath: '../Images/Chocolate-cupcakes.jpg',
      price: '119.50 SEK',
      link: '../HTML/recipe.html'
    },
    {
      title: 'Rainbow Cupcake',
      imagePath: '../Images/Rainbowcupcakes.jpg',
      price: '95.00 SEK',
      link: '../HTML/recipe.html'
    }
  ];

// Rendering Cupcake Products
const cupCakesContainer = document.getElementById('cup-cakes');
cupCake.forEach(cake => {
    const cakeDiv = document.createElement('div');
    cakeDiv.className = 'product-item';

    const link = document.createElement('a');
    link.href = cake.link;
    link.onclick = (event) => selectImage(event, cake.imagePath, cake.title);

    const imagePath = document.createElement('img');
    imagePath.src = cake.imagePath;
    imagePath.alt = cake.title;

    const title = document.createElement('h2');
    title.textContent = cake.title;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = cake.price;

    link.appendChild(imagePath);
    cakeDiv.appendChild(link);
    cakeDiv.appendChild(title);
    cakeDiv.appendChild(price);

    cupCakesContainer.appendChild(cakeDiv);
});

// Wedding Cake Data and Rendering Logic
const weddingCake = [{
    title: 'Edible Art Wedding Cake',
    imageSrc: '../Images/edible-art-wedding-cake.jpg',
    link: '../HTML/recipe.html',
    price: '3890.00 SEK'
  },
  {
    title: 'Opulent Pearl Wedding Cake',
    imageSrc: '../Images/pearl-wedding-cake.jpg',
    link: '../HTML/recipe.html',
    price: '4500.75 SEK'
  },
  {
    title: 'Stunning Drip Wedding Cake',
    imageSrc: '../Images/drip-wedding-cake.jpg',
    link: '../HTML/recipe.html',
    price: '2999.00 SEK'
  },
  {
    title: 'Warm Waves Wedding Cake',
    imageSrc: '../Images/weding1.jpg',
    link: '../HTML/recipe.html',
    price: '5500.00 SEK'
  },
  {
    title: 'Vintage Wedding Cake',
    imageSrc: '../Images/weding.jpg',
    link: '../HTML/recipe.html',
    price: '4200.75 SEK'
  },
  {
    title: 'Towering Wedding Cake',
    imageSrc: '../Images/weding3.jpg',
    link: '../HTML/recipe.html',
    price: '3999.50 SEK'
  },
  {
    title: 'Semi-Naked Wedding Cake',
    imageSrc: '../Images/semi-naked-wedding-cake.jpg',
    link: '../HTML/recipe.html',
    price: '2999.00 SEK'
  },
  {
    title: 'Lace Flowers Wedding Cake',
    imageSrc: '../Images/lace-wedding-cake.jpg',
    link: '../HTML/recipe.html',
    price: '4499.00 SEK'
  }];

// Rendering Wedding Cake Products
const weddingCakesContainer = document.getElementById('wedding-cakes');
weddingCake.forEach(cake => {
    const cakeDiv = document.createElement('div');
    cakeDiv.className = 'product-item';

    const link = document.createElement('a');
    link.href = cake.link;
    link.onclick = (event) => selectImage(event, cake.imageSrc, cake.title);

    const imagePath = document.createElement('img');
    imagePath.src = cake.imageSrc;
    imagePath.alt = cake.title;

    const title = document.createElement('h2');
    title.textContent = cake.title;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = cake.price;

    link.appendChild(imagePath);
    cakeDiv.appendChild(link);
    cakeDiv.appendChild(title);
    cakeDiv.appendChild(price);

    weddingCakesContainer.appendChild(cakeDiv);
});

// Function to handle image selection and navigation
function selectImage(event, imagePath, newTitle) {
  event.preventDefault(); // stop instant navigation
  localStorage.setItem("selectedImage", imagePath);
  localStorage.setItem("newTitle", newTitle);
  window.location.href = "recipe.html"; // navigate after saving
}