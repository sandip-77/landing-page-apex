import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //   </PersistGate>
  // </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
