import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

import { addTech } from "../../actions/techActions";

const AddTechModal = ({ addTech }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please Enter the firstname and the lastname" });
    } else {
      addTech({
        firstName,
        lastName,
      });

      M.toast({ html: `${firstName} ${lastName} added as technician` });
      // Clear Fields
      setfirstName("");
      setlastName("");
    }
  };

  return (
    <div id='add-tech-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>New Technician</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-light pink darken-2 btn-large'>
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  height: "40%",
};

AddTechModal.propType = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
