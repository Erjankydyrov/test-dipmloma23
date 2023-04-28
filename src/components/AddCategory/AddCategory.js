import { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {

  }

  return (
    <div className="AddCategory">
      <input
        size="15"
        type="text"
        value={category}
        placeholder="Category name"
        onChange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
};

export default AddCategory;
