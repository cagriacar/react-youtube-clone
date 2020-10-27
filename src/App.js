import React from "react";
import "./App.css";
import { Header, Sidebar, RecommendedVideos,SearchPage } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideo */}
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* RecommendedVideo */}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
