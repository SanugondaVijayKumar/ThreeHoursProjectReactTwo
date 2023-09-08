import React, { useState } from "react";
import Button from "../UI/Button";

const AddShoeItemForm = (props) => {
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [L, setL] = useState("");
  const [M, setM] = useState("");
  const [S, setS] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      id: Math.random(),
      shoeName,
      description,
      price,
      L,
      M,
      S,
    };
    // console.log(formData);
    props.formData(formData);

    setShoeName("");
    setDescription("");
    setPrice("");
    setL("");
    setM("");
    setS("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="shoe-name">Shoe Name:</label>
      <input
        type="text"
        id="shoe-name"
        value={shoeName}
        onChange={(e) => setShoeName(e.target.value)}
      ></input>

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      ></input>

      <label htmlFor="l">L:</label>
      <input
        type="number"
        id="l"
        value={L}
        onChange={(e) => setL(e.target.value)}
      ></input>

      <label htmlFor="m">M:</label>
      <input
        type="number"
        id="m"
        value={M}
        onChange={(e) => setM(e.target.value)}
      ></input>

      <label htmlFor="s">S:</label>
      <input
        type="number"
        id="s"
        value={S}
        onChange={(e) => setS(e.target.value)}
      ></input>

      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default AddShoeItemForm;
