import {createRoot} from "react-dom/client";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import App from "./App";
import reducer from "./reducer";

const store = configureStore({
    reducer
});

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Provider store={store}>
        <App />
    </Provider>
);