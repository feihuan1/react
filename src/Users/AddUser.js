import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  const [error, setError] = useState();

  // handle when submit
  const addUserHandler = (event) => {
    //prevent submit default
    event.preventDefault();
     
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    //validate user input
    if (
        enteredName.trim().length === 0 ||
        enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    //lifting state up
    const data = {
      username: enteredName,
      age: enteredUserAge,
    };
    props.onSave(data);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };


  //reset error to falssy so modal will be gone
  const closeModal = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={closeModal}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            ref={nameInputRef}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age (years)</label>
          <input 
            ref={ageInputRef}
            type="number"
            id="age"
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
}
