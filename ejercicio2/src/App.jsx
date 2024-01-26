import data from "./Data/data";
import "./App.css";
import Reviews from "./Ejercicio 2/Reviews";

const { reviews } = data;

function App() {
  return (
    <>
      <Reviews reviews={reviews}></Reviews>
    </>
  );
}

export default App;
