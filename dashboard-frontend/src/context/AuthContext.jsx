import { createContext, useContext, useEffect, useState } from "react";
import { mockUsers } from "../data/mockData";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("civanta_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {}
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    // Mock auth — replace with API call
    await new Promise((r) => setTimeout(r, 600));
    const found = mockUsers.find((u) => u.email === email);
    const u = found || mockUsers[0];
    if (password.length < 4) throw new Error("Invalid credentials");
    setUser(u);
    localStorage.setItem("civanta_user", JSON.stringify(u));
    return u;
  };

  const register = async (data) => {
    await new Promise((r) => setTimeout(r, 600));
    const u = {
      id: "U-" + Date.now(),
      name: data.name,
      email: data.email,
      role: "user",
      language: data.language || "en",
      createdAt: new Date().toISOString(),
    };
    setUser(u);
    localStorage.setItem("civanta_user", JSON.stringify(u));
    return u;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("civanta_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
