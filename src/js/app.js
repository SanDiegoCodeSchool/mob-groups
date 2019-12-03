import React from "react";
import { Admin } from "./admin";
import { Group } from "./group";
import Home from "./home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/admin">Admin</Link>
                            </li>
                            <li>
                                <Link to="/group">Group</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
};
