import React, { useRef } from "react";
import "./Form.css";

const Form = (props) => {
  const nameInputRef = useRef();
  const liveInputRef = useRef();
  const emailInputRef = useRef();

  const submit = (event) => {
    event.preventDefault();

    if (
      nameInputRef.current.value.trim().length === 0 ||
      liveInputRef.current.value.trim().length === 0 ||
      emailInputRef.current.value.trim().length === 0
    ) {
      alert("Invalid Infos");
      return;
    }

    const personInfo = {
      name: nameInputRef.current.value,
      live: liveInputRef.current.value,
      email: emailInputRef.current.value,
    };
    props.swiftInfo(personInfo);

    nameInputRef.current.value = "";
    liveInputRef.current.value = "";
    emailInputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={submit} className="form">
        <div className="div">
          <label htmlFor="name" className="baby">
            <pre>Name : </pre>
          </label>
          <input type="text" id="name" ref={nameInputRef} className="box" />
        </div>
        <div className="div">
          <label htmlFor="live" className="baby">
            <pre>Live : </pre>
          </label>
          <input type="text" id="live" ref={liveInputRef} className="box" />
        </div>
        <div className="div">
          <label htmlFor="email" className="baby">
            <pre>Email : </pre>
          </label>
          <input type="email" id="email" ref={emailInputRef} className="box" />
        </div>
        <button type="submit" className="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default Form;
