import React from 'react';
import Routes from './src/routes';
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {

  console.log('app js');
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  )
}