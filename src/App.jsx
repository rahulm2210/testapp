import React, { useState } from "react";
import "./App.css";
//import DndDraggableExample from "./DndDraggableExample";
//import DndDraggableExample from "https://testapp-ncgp.vercel.app/DndDraggableExample.jsx";
const DndDraggableExample = React.lazy(() =>
  import("https://testapp-ncgp.vercel.app/DndDraggableExample.jsx")
);
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
