import React, { createContext, useState } from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const AuthToken = localStorage.getItem('token');
    console.log('authtoken', AuthToken);
    const [token, setToken] = useState(AuthToken);
    let userRole;
    if (token) {
        const decodedToken = jwtDecode(token);
        console.log("decoded9", decodedToken);
        userRole = decodedToken.email;
        console.log("userRole", userRole);
    }
    return <AuthContext.Provider value={{ token, setToken, name: "test", userRole }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
