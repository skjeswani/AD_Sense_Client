import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import "./Welcome.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";

const Text = ({ value }) => (
  <div className="welcome">
    <div className="text">
      {value.split("").map((char, i) => (
        <div key={i} className="letter" style={{ "--delay": `${i * 0.2}s` }}>
          <span className="source">{char}</span>
          <span className="shadow">{char}</span>
          <span className="overlay">{char}</span>
        </div>
      ))}
    </div>
  </div>
);

const Welcome = () => {
  const [value, setValue] = useState("");
  const history = useNavigate();

  const handleSubmit = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.displayName);
      localStorage.setItem("user", data.user.displayName);
      history("/admission");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("user"));
  });

  const myRef = React.createRef();

  const unmount = useCallback(() => {
    // Remove the page from the DOM
    if (myRef.current && myRef.current.parentNode) {
      myRef.current.parentNode.removeChild(myRef.current);
    }

    // Cancel any ongoing network requests
    if (Welcome.request) {
      Welcome.request.abort();
    }
  }, [myRef]);

  useEffect(() => {
    unmount();
  }, [unmount]);

  return (
    <div className="container">
      {/* <Text value="THE" /> */}
      <Text value="ADS" />
      <Text value="THAT" />
      <Text value="CREATE" />
      <Text value="IMPACT" />

      <Link
        onClick={handleSubmit}
        // to={"/admission"}
        ref={Welcome.myRef}
        className="begin"
      >
        Begin
      </Link>
    </div>
  );
};

export default Welcome;
