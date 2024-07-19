import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {
  const route = useRoutes(routes);

  return <div className="App">{route}</div>;
}

export default App;
