import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading";
import { DashboardLayout } from "./pages/pagesMap";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <DashboardLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <p>test</p>
              </Suspense>
            }
          />
        </Route>
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
