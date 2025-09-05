import React, { useState } from "react";
import "./App.css";
//import DndDraggableExample from "./DndDraggableExample";
import DndDraggableExample from "https://raw.githubusercontent.com/rahulm2210/cms1/refs/heads/main/DndDraggableExample.jsx";

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <DndDraggableExample />
      </React.Suspense>
    </>
  );
}

export default App;
