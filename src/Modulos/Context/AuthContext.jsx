import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    
    const register = (newUser) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find(u => u.email === newUser.email);

        if (exists) {
            return false;
        }

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        const token = "token_" + Date.now();

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(newUser));

        setUser(newUser);
        return true;
    };

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userFound = users.find(
            u => u.email === email && u.password === password
        );

        if (!userFound) {
            return false;
        }

        const token = "token_" + Date.now();

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userFound));

        setUser(userFound);
        return true;
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);