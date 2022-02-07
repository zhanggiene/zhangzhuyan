import React  from "react";
import {Tabs,Tab,AppBar} from "@material-ui/core";
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage'

import './App.css'
import SocialMedia from "./components/SocialMedia";


// action creater





export default function App() {
    const routes =["/home","/projects","/contact"];
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
                  label="overview"
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="correlation"
                  component={Link}
                  to={routes[1]}
                />

<Tab
                  value={routes[2]}
                  label="return_distribution"
                  component={Link}
                  to={routes[2]}
                />
                </Tabs>
            </AppBar>
          )}
        />

<Switch>
          <Route path="/home" component={Home} />
          <Route path="/projects" component={ProjectsPage} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}