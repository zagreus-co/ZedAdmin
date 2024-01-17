import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <p>dashboard</p>
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<Loading />}>
              <p>404</p>
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
