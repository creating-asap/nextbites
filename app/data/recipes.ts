export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Pasta",
    cuisine: "Italian",
    minutes: 25,
    description: "Delicious pasta with a creamy sauce.",
  },
  {
    id: 2,
    title: "Veggie Burger",
    cuisine: "American",
    minutes: 30,
    description: "A healthy burger packed with vegetables.",
  },
  {
    id: 3,
    title: "Chicken Biryani",
    cuisine: "Indian",
    minutes: 45,
    description: "Aromatic rice cooked with spices.",
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    cuisine: "French",
    minutes: 20,
    description: "Soft pancakes topped with chocolate.",
  },
];