import { Recipe } from "../data/recipes";

export default function RecipeCard({
  recipe,
}: {
  recipe: Recipe;
}) {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div className="recipe-details">
        <span>{recipe.cuisine}</span>
        <span>{recipe.minutes} mins</span>
      </div>
    </div>
  );
}