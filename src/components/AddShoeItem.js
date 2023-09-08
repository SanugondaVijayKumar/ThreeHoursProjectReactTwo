import React from "react";
import AddShoeItemForm from "./AddShoeItemForm";
import Card from "../UI/Card";

const AddShoeItem = (props) => {
  const formDataHandler = (data) => {
    props.formData(data);
  };

  return (
    <Card>
      <AddShoeItemForm formData={formDataHandler}></AddShoeItemForm>
    </Card>
  );
};

export default AddShoeItem;
