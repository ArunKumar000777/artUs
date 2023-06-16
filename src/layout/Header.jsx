import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
    const { setToken, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        toast.success("logout successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false, 
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate("/");
    };
    return (
        <div className="h-20 px-10 bg-black/90 flex justify-between items-center">
            <h1 className="text-white font-semibold">Aadhar</h1>
            {token ? (
                <button
                    className="px-4 py-1  text-white rounded-md font-semibold border-2 border-white/90 hover:text-white/90 duration-200"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default Header;
