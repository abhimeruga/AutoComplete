import React, { useState } from "react";
import { connect } from "react-redux";

import { setStudies } from "../../Redux/Actions/Study.actions";

import FormInput from "../../Components/FormInput.component";
import FormButton from "../../Components/FormButton.component";

const Study = ({ studies, setStudies }) => {
  const [study, setStudy] = useState("");
  const handleClick = (event) => {
    console.log(study);
    setStudies(study);
  };

  const handleInput = (event) => {
    setStudy(event.target.value);
  };

  return (
    <>
      <div style={{ width: "40%", margin: "auto" }}>
        <FormInput name="Study" label="Details" handleInput={handleInput} />
        <FormButton name="add" title="Add Study" handleClick={handleClick} />
      </div>
      <h3>Studies</h3>
      {studies?.map((sduty, index) => (
        <div key={index}>{sduty}</div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  studies: state.study.studies,
});

const mapDispatchToProps = (dispatch) => ({
  setStudies: (study) => dispatch(setStudies(study)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Study);
