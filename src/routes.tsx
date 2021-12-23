import { FC } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { HomePage } from "./pages/home";

export const Pages: FC = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <HomePage />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
