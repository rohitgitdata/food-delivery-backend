require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("./models/Food");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const foods = [
  {
    name: "Margherita Pizza",
    price: 299,
    description: "Classic cheesy pizza with tomato sauce",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },

  {
    name: "Veg Burger",
    price: 149,
    description: "Crispy veg burger with fresh veggies",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },

  {
    name: "White Sauce Pasta",
    price: 199,
    description: "Creamy white sauce pasta with herbs",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },

  {
    name: "Paneer Tikka",
    price: 249,
    description: "Spicy grilled paneer tikka",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
  },

  {
    name: "French Fries",
    price: 99,
    description: "Crispy golden french fries",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
  },

  {
    name: "Momos",
    price: 129,
    description: "Steamed momos with spicy chutney",
    image:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb",
  },

  {
    name: "Cold Coffee",
    price: 89,
    description: "Refreshing cold coffee with ice cream",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },

  {
    name: "Chocolate Shake",
    price: 119,
    description: "Rich chocolate milkshake",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767",
  },

  {
    name: "Biryani",
    price: 279,
    description: "Hyderabadi style spicy biryani",
    image:
      "https://images.unsplash.com/photo-1633945274309-2c1c9682a8b",
  },

  {
    name: "Noodles",
    price: 169,
    description: "Chinese style spicy noodles",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
  },

  {
    name: "Spring Rolls",
    price: 159,
    description: "Crunchy veg spring rolls",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  },

  {
    name: "Pav Bhaji",
    price: 139,
    description: "Mumbai special buttery pav bhaji",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
  },

  {
    name: "Chole Bhature",
    price: 179,
    description: "Punjabi chole with fluffy bhature",
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
  },

  {
    name: "Masala Dosa",
    price: 149,
    description: "South Indian crispy masala dosa",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
  },

  {
    name: "Ice Cream Sundae",
    price: 109,
    description: "Delicious ice cream sundae",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  },

  {
    name: "Tacos",
    price: 189,
    description: "Mexican tacos with spicy filling",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
  },

  {
    name: "Garlic Bread",
    price: 119,
    description: "Cheesy garlic bread",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c",
  },

  {
    name: "Samosa",
    price: 49,
    description: "Crispy spicy potato samosa",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa9064",
  },

  {
    name: "Falooda",
    price: 99,
    description: "Sweet and chilled falooda dessert",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
  },

  {
    name: "Paneer Burger",
    price: 179,
    description: "Loaded paneer burger with cheese",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
];

insertFoods();

async function insertFoods() {
  try {
    await Food.deleteMany();
    await Food.insertMany(foods);

    console.log("Food Data Inserted Successfully 🍕");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
}