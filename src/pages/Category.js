import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";
import { useContext } from "react";
import { AppContext } from "../App";
import ProductList from "../components/ProductList/ProductList";

export default function Category() {
  const { params } = useMatch("/categories/:slug");
  // получить список категорий из App
  const { categories } = useContext(AppContext);

  // найти категорию которая имеет params.slug
  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return <NotFound />
  }

  return (
    <div className="Category">
      <h1>{category.name}</h1>
      <ProductList />
    </div>
  );
}