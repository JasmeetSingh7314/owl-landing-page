import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "sonner";
import { Suspense } from "react";

//Page Imports
import Home from "./pages/Home";

import Loading from "./components/Loading";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/market"
          element={
            <Suspense
              fallback={
                <Loading className="h-screen w-screen flex justify-center items-center" />
              }
            >
              {" "}
            </Suspense>
          }
        />

        <Route
          path="/profile"
          element={
            <Suspense
              fallback={
                <Loading className="h-screen w-screen flex justify-center items-center" />
              }
            >
              {/* <ProtectedRoutes> */}

              {/* </ProtectedRoutes> */}
            </Suspense>
          }
        />
      </Routes>

      <Toaster
        expand={true}
        position="bottom-right"
        theme="dark"
        richColors={true}
        visibleToasts={2}
        toastOptions={{
          classNames: {
            toast: "bg-gray-700/55",
            title: "text-white",
            description: "text-red-400",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
