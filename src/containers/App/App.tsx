import React from "react";
import Header from "../../components/header";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Score from "../Score";
import Settings from "../Settings";
import { useSelector } from "react-redux";
import GamePolygon from "../GamePolygon";

function App() {
    const game = useSelector((state: any) => state.game.game);
    return (
        <>
            <Header />
            <main className="container">
                {!game && (
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
                )}
                {game && <GamePolygon />}
            </main>
        </>
    );
}

export default App;
