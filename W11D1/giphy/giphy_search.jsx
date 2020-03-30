import React from 'react';
import ReactDOM from 'react-dom';
// import {fetchSearchGiphys} from "./util/api_util";
import {receiveSearchGiphys, fetchSearchGiphys} from "./actions/giphy_actions";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    // window.fetchSearchGiphys = fetchSearchGiphys;
    const store = configureStore();

    window.store = store;
    window.fetchSearchGiphys = fetchSearchGiphys;
    window.receiveSearchGiphys = receiveSearchGiphys;

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root);
});
