const categories = [
  {
    id: 1,
    name: "Shisha Amy Deluxe",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    color: "white"
  },
  {
    id: 2,
    name: "Shisha Boss",
    icon: "floor-lamp",
    backgroundColor: "#fd9644",
    color: "white"
  },
  {
    id: 3,
    name: "Shisha Alfaher",
    icon: "floor-lamp",
    backgroundColor: "#fed330",
    color: "white"
  }
];

const getCategories = () => categories;

const getCategory = id => categories.find(c => c.id === id);

module.exports = {
  getCategories,
  getCategory
};
