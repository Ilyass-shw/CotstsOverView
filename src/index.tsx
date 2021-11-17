import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app/App";
import { store } from "./components/app/store";

import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
