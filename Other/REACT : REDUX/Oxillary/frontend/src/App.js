import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";

import Navigation from "./components/Navigation";
import Home from "./components/PublicHomePage/Home.js";
import Footer from "./components/PublicHomePage/Footer.js"
import Header from "./components/PublicHomePage/Header.js"
import SearchPage from "./components/PublicHomePage/SearchPage.js"
import LoginForm from "./components/LoginFormModal/LoginForm.js"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
        <Navigation isLoaded={isLoaded} />
        <Header />

          {isLoaded && (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route> 
              <Route path="/login">
                <LoginForm />
              </Route>
              <Route path="/search">
                <SearchPage />
              </ Route>
              <Route path="/signup">
                <SignupFormPage />
              </Route>
            </Switch>
      )}
        <Footer />

    </>
  );
}

export default App;
