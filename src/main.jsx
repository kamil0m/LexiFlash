import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <Router/>
    <React.StrictMode>
        <Router/>
    </React.StrictMode>,
)