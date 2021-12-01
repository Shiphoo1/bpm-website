import styles from "./QuestionForm.module.css";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const QuestionForm = () => {
  const [userInput, setInput] = useState({
    enteredName: "",
    enteredEmail: "",
    enteredPhone: "",
  });
  const nameChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  };
  const emailChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, enteredEmail: event.target.value };
    });
  };
  const phoneChangeHandler = (event) => {
    setInput((prevState) => {
      return { ...prevState, enteredPhone: event.target.value };
    });
  };
  // const nameFocusHandler = () => {
  //   if (userInput.enteredName === "Adınızı daxil edin") {
  //     setInput((prevState) => {
  //       return { ...prevState, enteredName: "" };
  //     });
  //   }
  // };
  // const emailFocusHandler = () => {
  //   if (userInput.enteredEmail === "Emailinizi daxil edin") {
  //     setInput((prevState) => {
  //       return { ...prevState, enteredEmail: "" };
  //     });
  //   }
  // };
  // const phoneFocusHandler = () => {
  //   if (userInput.enteredPhone === "Telefon nömrənizi daxil edin") {
  //     setInput((prevState) => {
  //       return { ...prevState, enteredPhone: "" };
  //     });
  //   }
  // };
  //   const nameChangeHandler = () => {};
  return (
    <>
      <form className={styles.form}>
        <label className={styles.label}>Adiniz</label>
        <input
          className={styles.input}
          value={userInput.enteredName}
          onChange={nameChangeHandler}
          placeHolder={"Adınızı daxil edin"}
          type="text"
        ></input>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          value={userInput.enteredEmail}
          onChange={emailChangeHandler}
          placeHolder={"Emailinizi daxil edin"}
          type="text"
        ></input>
        <label className={styles.label}>Telefon</label>
        <input
          className={styles.input}
          value={userInput.enteredPhone}
          onChange={phoneChangeHandler}
          placeHolder={"Telefon nömrənizi daxil edin"}
          type="text"
        ></input>
        <input
          className={styles.input}
          placeHolder={"Müraciyətiniz daxil edin"}
          type="text"
        ></input>
      </form>
      <div className={styles.button}>
        GÖNDƏR
        <BsArrowRight size={"2.2rem"} />
      </div>
    </>
  );
};
export default QuestionForm;
