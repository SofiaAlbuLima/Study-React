// import Listgroup from "./components/ListGroup";
// <Listgroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> 

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const handleSelectItem = (item: string) => { //Seperate Event Handler
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}

      <Button text="Show Alert" onClick={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App;
