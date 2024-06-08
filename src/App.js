import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes";
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback="loading........">
          <AppRoute />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
export default App;
