import logo from './logo.svg';
import './App.css';
import Register from './Components/Register/Register';
// import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Dashboard from './Components/Dashboard/Dashboard';
import Landing from './Components/Landing/Landing';
import Fav from './Components/Fav/Fav';
import Login from './Components/Login/Login';
import DashboardEdit from './Components/DashboardEdit/DashboardEdit'

import { BrowserRouter as Router ,Route,Switch } from "react-router-dom";

// import Test from "./Components/Test/Test";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Router>
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/edit" component={DashboardEdit} />
          <Route exact path="/favourite" component={Fav} />

        </Switch>
      </Router>
       <Footer /> 
    </div>
  );
}

export default App;
