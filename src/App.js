import {BrowserRouter as Router, Route} from "react-router-dom"

import Profiles from "./components/Profiles"
function App() {
  return (
    <div className="App">
      <Router>
          <Route to="/profiles" exact= {true} component={Profiles}/>
      </Router>
    </div>
  );
}

export default App;
