import Home from "./components/Home";
import ShowData from "./components/ShowData";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Redux Test
        </p>
        <Home/>
        <ShowData/>
      </header>
    </div>
  );
}

export default App;
