import React, { useContext, useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { AuthContext } from "../context/AuthContext";
import AadharCard from "../components/AadharCard";
import axios from "axios";

const Home = () => {
    const [aadharData, setAadharData] = useState("");
    const { token, userRole } = useContext(AuthContext);
    console.log("aadhardataHom", aadharData);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    // console.log(token);
    const fetchAadhar = async () => {
        const res = await axios.get("https://arun.test.ppm.wtf/aadhar", { headers });
        console.log("fetch", res?.data);
        setAadharData(res?.data);
    };
    useEffect(() => {
        fetchAadhar();
    }, []);
    return (
        <div className="min-h-screen bg-gray-100 flex pt-32 items-center flex-col">
            {
                userRole !=='admin' && (<h1 className="text-5xl font-semibold mb-10"> Your Aadhar Card</h1>)
            }
            {userRole === "admin" ? <UserForm /> : aadharData && <AadharCard {...aadharData} />}
        </div>
    );
};

export default Home;
