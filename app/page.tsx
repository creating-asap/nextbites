import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main className="home">
      <h1>Welcome to NextBites! 🍽️</h1>

      <p className="subtitle">
        Discover delicious recipes for every day.
      </p>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}