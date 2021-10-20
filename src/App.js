import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstScreen from './first_screen/first_screen';
import SecondScreen from './second_screen/second_screen';
import ThirdScreen from './third_screen/third_screen';
import FourthScreen from './fourth_screen/fourth_screen.';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <FirstScreen></FirstScreen> */}
        <Switch>
          <Route path="/first_screen">
            <FirstScreen />
          </Route>
          <Route path="/second_screen">
            <SecondScreen />
          </Route>
          <Route path="/third_screen">
            <ThirdScreen />
          </Route>
          <Route path="/fourth_screen">
            <FourthScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
