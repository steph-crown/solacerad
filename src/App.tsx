import React, { useEffect } from "react";
import "./App.css";
import { Pages } from "./routes";
// import { useHistory } from "react-router";

function App() {
    // const history = useHistory();
    // console.log(history);

    useEffect(() => {
        return () => {};
    }, []);
    return (
        <div className="App">
            <Pages />
        </div>
    );
}

export default App;
