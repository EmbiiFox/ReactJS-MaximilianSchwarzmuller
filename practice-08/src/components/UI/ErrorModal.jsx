import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card.jsx";
import Button from "./Button";
export default function ErrorModal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OKAY</Button>
        </footer>
      </Card>
    </>
  );
}
