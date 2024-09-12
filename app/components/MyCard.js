// In order to use react hooks (`useState`, `useEffect`), we must specify that this component runs on the client
"use client";
// We import react functions
import { useEffect, useState } from "react";
// Import the styles from the css file.
import classes from "./my-card-styles.module.css";

function MyCard(props) {
  // Creating a React State to keep
  const [numClicks, setNumClicks] = useState(0);

  // Side effect: we can react to numClicks reaching a certain value
  useEffect(() => {
    if (numClicks >= 10) {
      // log this message to the browser console (right click + inspect element or F12)
      console.log("We have clicked more than 10 times!");
    }
  }, [numClicks]);

  // Handler function to increase the number of clicks by one
  function incrementNumClicks() {
    setNumClicks(numClicks + 1);
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.text}>{props.text}</p>
      <button onClick={incrementNumClicks}>{props.buttonText}</button>
      <p>
        You clicked the button{" "}
        <span className={classes.counter}>{numClicks}</span> times!
      </p>
    </div>
  );
}

export default MyCard;
