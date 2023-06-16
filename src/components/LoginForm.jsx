import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineEye } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const passRef = useRef();
    const navigate = useNavigate();
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const handlePassVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const { setToken } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        axios
            .post("https://arun.test.ppm.wtf/login", { email, password })
            .then((res) => {
                toast.success("Successfully logged in", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(res);
                console.log("res.data.token", res?.data?.token);
                localStorage.setItem("token", res?.data?.token);
                setToken(res?.data?.token);
                navigate("/");
                setPassword("");
                setEmail("");
            })
            .catch((error) => {
                toast.error("Login failed", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                console.error(error);
                setIsError(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <form
            onSubmit={handleLogin}
            className="bg-white w-[500px] min-h-[400px] p-14 rounded-lg border-2 border-gray-300 hover:border-gray-400 shadow-lg duration-300"
        >
            <h1 className="font-semibold text-3xl ml-6 uppercase">Sign In</h1>
            <div className="flex flex-col mt-6">
                <label htmlFor="email" className="font-medium">
                    {" "}
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    placeholder="email"
                    className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    ref={inputRef}
                />
            </div>
            <div className="flex flex-col mt-6 relative">
                <label htmlFor="password" className="font-medium">
                    Password
                </label>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="password"
                    className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300 "
                    required
                    ref={passRef}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className="absolute top-[53px] right-5 cursor-pointer" onClick={handlePassVisibility}>
                    <AiOutlineEye className="bg-red" />
                </div>
            </div>
            <div className="flex justify-end mt-14 items-center ">
                <button className="px-4 py-1 bg-black/90 text-white/80 rounded-md font-semibold hover:bg-black/80 w-28">
                    {isLoading ? (
                        <ClipLoader
                            color={"white"}
                            loading={isLoading}
                            // cssOverride={override}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        "LOGIN"
                    )}
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
