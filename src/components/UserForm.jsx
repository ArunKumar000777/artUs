import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const UserForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        homeAddress: "",
        aadharNumber: "",
        password: "",
    });
    // console.log("formValues", formValues);
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const { token } = useContext(AuthContext);
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const handleCreateUser = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        try {
            const res = await axios.post("https://arun.test.ppm.wtf/aadhar", formValues, { headers });
            setFormValues({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                homeAddress: "",
                aadharNumber: "",
                password: "",
            });
            toast.success("Successfully created", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            // console.log(res);
        } catch (error) {
            toast.error("creation failed", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setIsError(true);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <form
            onSubmit={handleCreateUser}
            className="bg-white w-2/3  p-14 rounded-lg border-2 border-gray-400  duration-300 "
        >
            <h1 className="font-semibold text-xl uppercase">Create User</h1>
            <div className="w-full mt-8">
                <div className="flex items-center justify-between w-full gap-3">
                    <div className="flex flex-col w-full">
                        <label htmlFor="firstname" className="text-sm font-medium">
                            {" "}
                            Firstname
                        </label>
                        <input
                            name="firstName"
                            type="text"
                            id="firstname"
                            placeholder="firstname"
                            className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300 "
                            required
                            onChange={handleChange}
                            value={formValues.firstName}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="lastname" className="text-sm font-medium">
                            Lastname
                        </label>
                        <input
                            name="lastName"
                            type="text"
                            id="lastname"
                            placeholder="lastname"
                            className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300"
                            required
                            onChange={handleChange}
                            value={formValues.lastName}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full gap-3 mt-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="phonenumber" className="text-sm font-medium">
                            {" "}
                            Phone Number
                        </label>
                        <input
                            name="phoneNumber"
                            type="number"
                            id="phonenumber"
                            placeholder="phone-number"
                            className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300"
                            required
                            onChange={handleChange}
                            value={formValues.phoneNumber}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="email"
                            className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300"
                            required
                            onChange={handleChange}
                            value={formValues.email}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            id="password"
                            placeholder="password"
                            className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300"
                            required
                            onChange={handleChange}
                            value={formValues.password}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full gap-3 mt-4">
                    <div className="flex flex-col w-full">
                        <label htmlFor="address" className="text-sm font-medium">
                            {" "}
                            Home Address
                        </label>
                        <input
                            name="homeAddress"
                            type="text"
                            id="address"
                            placeholder="My Home, My localicty, pincode"
                            className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300"
                            required
                            onChange={handleChange}
                            value={formValues.homeAddress}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="aadharNumber" className="text-sm font-medium">
                            Aadhar
                        </label>
                        <input
                            name="aadharNumber"
                            type="number"
                            id="aadharNumber"
                            placeholder="aadhar Number"
                            className="h-10 px-3 rounded-md mt-4 w-full bg-gray-100 border border-gray-300"
                            required
                            onChange={handleChange}
                            value={formValues.aadharNumber}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-10">
                <button className="px-4 py-2 bg-black text-white rounded-md font-semibold hover:bg-black/70  w-36">
                    {isLoading ? (
                        <ClipLoader
                            color={"white"}
                            loading={isLoading}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        "CREATE"
                    )}
                </button>
            </div>
        </form>
    );
};

export default UserForm;
