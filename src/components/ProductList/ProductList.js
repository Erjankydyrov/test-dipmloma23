import { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductList.css";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const { products } = useContext(AppContext);

  const output = products.map(product => (
    <div>
      <img src={product.picture} alt={product.name} />
      <NavLink to={'/product/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price} som</span>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
    </div>
  );
}