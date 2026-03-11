import Listgroup from "./components/ListGroup";
import { UserContext } from './contexts/UserContext'

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <div>
      {" "}
      <Listgroup items={items} heading="Cities" /> 
      {" "}
    </div>
  );
}

export default App;
