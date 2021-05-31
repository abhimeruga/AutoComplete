import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const FormButton = ({ title, name, handleClick, ...otherProps }) => {
  return (
    <Button name={name} onClick={handleClick} {...otherProps}>
      {title}
    </Button>
  );
};
export default FormButton;
