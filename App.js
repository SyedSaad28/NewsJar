import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  const handleProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={2} color="#FFFFFF" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={handleProgress}
                pageSize={5}
                country="us"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={handleProgress}
                key="business"
                pageSize={5}
                country="us"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={handleProgress}
                key="entertainment"
                pageSize={5}
                country="us"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={handleProgress}
                key="general"
                pageSize={5}
                country="us"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={handleProgress}
                key="health"
                pageSize={5}
                country="us"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={handleProgress}
                key="science"
                pageSize={5}
                country="us"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={handleProgress}
                key="sports"
                pageSize={5}
                country="us"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={handleProgress}
                key="technology"
                pageSize={5}
                country="us"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
