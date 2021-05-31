import React from "react";

import TextField from "@material-ui/core/TextField";

const FormInput = ({ name, label, handleInput, otherProps }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {label}
      <TextField id={name} name={name} onChange={handleInput} {...otherProps} />
    </div>
  );
};

export default FormInput;
