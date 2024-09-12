"use client";
// title -> h2
// text -> p
// button text -> button
import { useEffect, useState } from "react";
import classes from "./my-card-styles.module.css";

function MyCard(props) {
  const [lebronCount, setLebronCount] = useState(0);

  useEffect(() => {
    if (lebronCount >= 10) {
      console.log(lebronCount);
    }
  }, [lebronCount]);

  function increaseCount() {
    setLebronCount(lebronCount + 1);
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.heading}</h2>
      <p className={classes.text}>{props.paragraph}</p>
      <button onClick={increaseCount}>{props.buttonText}</button>
      <p>
        You clicked lebron <span className={classes.count}>{lebronCount}</span>{" "}
        times!
      </p>
    </div>
  );
}

export default MyCard;
