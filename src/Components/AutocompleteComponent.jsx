/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";

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

  const filterConditions = [
    "Instance state",
    "Instance state 2",
    "Instance state 3",
    "Instance state 4",
  ];

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

  const filterOptions = (options, state) => {
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
];
