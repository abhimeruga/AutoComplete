import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";

import { filterConditions, top100Films } from "./Constants";

export default function AutocompleteComponent() {
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(true);
  const [filterValue, setFilterValue] = useState([":"]);

  useEffect(() => {
    const input = inputValue.slice(
      inputValue.lastIndexOf(":", inputValue.length - 1)
    );
    if (filterValue.length > 1)
      setInputValue(filterValue.reverse().join(" ").concat(input));
  }, [filterValue]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setFilterValue([...new Set([...filterValue, event.target.name])]);
    } else {
      setFilterValue(filterValue.filter((fv) => fv !== event.target.name));
    }
  };

  const filterSection = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "60%",
        margin: "auto",
      }}
    >
      {filterConditions.map((filterCondition, index) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={index}
        >
          {filterCondition}:
          <Checkbox
            id={filterCondition}
            name={filterCondition}
            value={checked}
            color="default"
            inputProps={{
              "aria-label": "checkbox with default color",
              name: filterCondition,
            }}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );

  const handleAutoCompleteChange = (event) => {
    setInputValue(inputValue + event.target.textContent + " , ");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filterOptions = (options) => {
    const inputOnFilter =
      inputValue.indexOf(":") > 0
        ? inputValue.slice(inputValue.lastIndexOf(":") + 1, inputValue.length)
        : inputValue;

    if (inputOnFilter)
      return options.filter((option) => option?.includes(inputOnFilter));
    return options;
  };

  return (
    <div style={{ width: "100%" }}>
      Filters : {filterSection()}
      <Autocomplete
        getOptionLabel={(option) => option}
        options={top100Films.map((option) => option.title)}
        filterOptions={filterOptions}
        size={"small"}
        style={{ flexGrow: 2, margin: "10px", padding: "10px" }}
        onChange={handleAutoCompleteChange}
        value={inputValue}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Filter Items"
            onChange={handleInputChange}
          />
        )}
      />
    </div>
  );
}
