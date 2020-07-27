import React, { Fragment, useEffect } from "react";
import SearchBar from "../src/components/layout/SearchBar";
import Logs from "../src/components/logs/Logs";
import AddBtn from "../src/components/layout/AddBtn";
import AddLogModal from '../src/components/logs/AddLogModal';

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
