import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");

  const submit = (event) => {
    event.preventDefault();

    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert("Invalid Infos");
      return;
    }

    const personInfo = {
      name,
      live,
      email,
    };
    props.swiftInfo(personInfo);

    setName("");
    setLive("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={submit} className="form">
        <div className="div">
          <label htmlFor="name" className="baby">
            <pre>Name : </pre>
          </label>
          <input
            type="text"
            id="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            className="box"
          />
        </div>
        <div className="div">
          <label htmlFor="live" className="baby">
            <pre>Live : </pre>
          </label>
          <input
            type="text"
            id="live"
            onChange={(event) => {
              setLive(event.target.value);
            }}
            className="box"
          />
        </div>
        <div className="div">
          <label htmlFor="email" className="baby">
            <pre>Email : </pre>
          </label>
          <input
            type="email"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="box"
          />
        </div>
        <button type="submit" className="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default Form;
