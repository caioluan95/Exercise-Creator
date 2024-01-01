"use client";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/core/contexts/auth/authContext";
import { post } from "@/core/services/fetchFacade";

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  async function login(data) {
    const response = await post("users/signIn", data);

    const responseString = JSON.stringify(response);
    localStorage.setItem("responseRequest", responseString);
    setSession(response);

    return response;
  }

  useEffect(function () {
    function sessionFromLocalStorage() {
      const storedSession = localStorage.getItem("responseRequest");
      if (storedSession) {
        setSession(JSON.parse(storedSession));
      }
    }

    sessionFromLocalStorage();
  }, []);

  function logout() {
    localStorage.removeItem("responseRequest");
    setSession("null");
  }

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
