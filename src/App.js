import "./styles.css";

import Login from "./login";
import Header from "./header";
import Footer from "./footer";
import Breeds from "./breeds/breeds";
import BreedDetail from "./breeds/breed";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
export default function App() {
  const appStyles = {
    height: "100vh",
    border: "1px solid red",
    display: "flex",
    flexFlow: "column"
  };
  return (
    <Router>
      <hr />
      <div className="App" style={appStyles}>
        <Header />
        <div className="content" style={{ height: "inherit" }}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Breeds} />
            <Route path="/breed" component={BreedDetail} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
