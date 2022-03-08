import React, { useState } from "react";

import NavBar from "./components/NavBar";
import NewsComponent from "./components/NewsComponent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API;

  const increaseProgress = (progress) => {
    console.log(
      "process.env.REACT_APP_NEWS_API",
      process.env.REACT_APP_NEWS_API
    );
    setProgress(progress);
  };

  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <LoadingBar color='#f11946' progress={progress} />
        <Switch>
          <Route path='/' exact>
            <NewsComponent
              increaseProgress={increaseProgress}
              apiKey={apiKey}
              key='general'
              pageSize={6}
              country='in'
              category='general'
            ></NewsComponent>
          </Route>
          <Route path='/business' exact>
            <NewsComponent
              increaseProgress={increaseProgress}
              apiKey={apiKey}
              key='business'
              pageSize={6}
              country='in'
              category='business'
            ></NewsComponent>
          </Route>
          <Route path='/entertainment' exact>
            <NewsComponent
              increaseProgress={increaseProgress}
              apiKey={apiKey}
              key='entertainment'
              pageSize={6}
              country='in'
              category='entertainment'
            ></NewsComponent>
          </Route>
          <Route path='/health' exact>
            <NewsComponent
              increaseProgress={increaseProgress}
              apiKey={apiKey}
              key='health'
              pageSize={5}
              country='in'
              category='health'
            ></NewsComponent>
          </Route>
          <Route path='/science' exact>
            <NewsComponent
              increaseProgress={increaseProgress}
              apiKey={apiKey}
              key='science'
              pageSize={5}
              country='in'
              category='science'
            ></NewsComponent>
          </Route>
          <Route path='/sports' exact>
            <NewsComponent
              increaseProgress={increaseProgress}
              apiKey={apiKey}
              key='sports'
              pageSize={5}
              country='in'
              category='sports'
            ></NewsComponent>
          </Route>
          <Route path='/technology' exact>
            <NewsComponent
              increaseProgress={increaseProgress}
              apiKey={apiKey}
              key='technology'
              pageSize={5}
              country='in'
              category='technology'
            ></NewsComponent>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
