//imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import MiddlePage from './components/middlePage';
import Content from './components/Content';

//css
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/search'>
            <Content />
          </Route>
          <Route exact path="/">
            <Header />
            <MiddlePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
