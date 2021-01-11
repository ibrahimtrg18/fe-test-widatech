import React from "react";
import "./App.css";

import Form from "./Form/Form";
import Event from "./Event/Event";
import Graph from "./Graph/Graph";

const App = () => {
  const [openForm, setOpenForm] = React.useState(false);
  return (
    <div className="container">
      <button
        className="btn btn-primary new"
        type="button"
        onClick={() => setOpenForm(!openForm)}
      >
        {!openForm ? "Create event" : "Close form"}
      </button>
      {openForm && <Form />}
      <Event />
      <Graph />
    </div>
  );
};

export default App;
