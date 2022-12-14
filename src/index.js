import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react"
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/filter_context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-tr8pzvh5cv444lx3.us.auth0.com"
    clientId="IijwFJJXqzdooR7ygCJo8UUl7MukgLmy"
    redirectUri={window.location.origin}
>
<AppProvider>
<FilterContextProvider> 
    <App />
    </FilterContextProvider>
    </AppProvider>
   </Auth0Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
