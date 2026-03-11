// import Listgroup from "./components/ListGroup";
// <Listgroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> 

import React from "react";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { UserContext } from './contexts/UserContext'

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const handleSelectItem = (item: string) => { //Seperate Event Handler
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  const [value, setValue] = useState("Hello from context")

  return (
    <UserContext.Provider value={{value, setValue}}>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}

      <Button text="Show Alert" onClick={() => setAlertVisibility(true)} />

      <Button text="Change Value" color="secondary" onClick={() => setValue(value === "Bye from context" ? "Hello from context" : "Bye from context")} />
    </UserContext.Provider>
  );
}

export default App;
