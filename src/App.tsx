import React from "react";
import Header from "./components/header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Score from "./pages/Score";
import Settings from "./pages/Settings";

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Switch>
                    <Route path="/score">
                        <Score />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        </>
    );
}

export default App;
