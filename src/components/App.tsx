/**
 * Import React and CSS
 */
import React from "react";
import "../css/App.css";

/**
 * Importing React Router components
 */
import { HashRouter, Route, Navigate, Routes } from "react-router-dom";

/**
 * Importing components
 */
import ShopPage from "./ShopPage";
import NavigationBar from "./NavigationBar";
import SignInPage from "./AuthPage";
import LegalInformations from "./LegalInformations";

/**
 * App component represents the main component of the application. This component is the router of the application.
 * @returns the main component of the application
 */
function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<ShopPage />} />
        <Route path="/inscription" element={<SignInPage />} />
      </Routes>
      <LegalInformations />
    </HashRouter>
  );
}

export default App;
