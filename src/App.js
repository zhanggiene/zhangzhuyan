import React  from "react";
import {Tabs,Tab,AppBar} from "@material-ui/core";
import {BrowserRouter,Route,Switch,Link,Redirect} from "react-router-dom";
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage'

import './App.css'


// action creater





export default function App() {
    const routes =["/home","/projects"];
  return (
    <div className="App">

     
          <BrowserRouter>
          
          
      <div>
        <Route
          path="/"
          render={(history) => (
            <AppBar position="static">
              <Tabs centered
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
              >

<Tab
                  value={routes[0]}
                  label="home"
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="Projects"
                  component={Link}
                  to={routes[1]}
                />


                </Tabs>
            </AppBar>
          )}
        />

<Switch>
<Route exact path="/">
    <Redirect to="/home" />
</Route>
          <Route path="/home" component={Home} />
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}