import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout({}));
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Header className="w-auto" />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="w-full" />
    </div>
  ) : null;
}

export default App;
