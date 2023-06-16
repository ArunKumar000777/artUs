import React from "react";
import defaultUserImage from "../assets/defaultUserImage.svg";
import emblem from "../assets/Emblem_of_India.svg.png";
import barcode from "../assets/Share-the-Openclipart-QR-Code.svg";

const AadharCard = ({ firstName, lastName, aadharNumber, email, homeAddress, phoneNumber }) => {
    return (
        <div className="w-[500px] h-[290px] bg-white py-5 px-8 shadow-lg">
            <div className="h-4 mt-2 bg-[#fe6c3e] w-[235px] ml-[85px] rounded-sm"></div>
            <div className="flex items-center gap-10">
                <img src={emblem} alt="emblem" className="h-14 w-12" />
                <h2 className="font-semibold bg-[#62b866] px-8 rounded-sm">Government of India</h2>
            </div>
            <div className="flex justify-between items-center mt-4">
                <img src={defaultUserImage} alt="user-image" className="h-16" />
                <div className="flex flex-col text-sm font-semibold mt-6 gap-1">
                    <span className="text-xs">
                        <span className="font-bold">Name:</span> {firstName + " " + lastName}
                    </span>
                    <span className="text-xs">
                        <span className="font-bold">Phone:</span> {phoneNumber}
                    </span>
                    <span className="text-xs">
                        <span className="font-bold">Aadhar No:</span> {aadharNumber}
                    </span>
                    <span className="text-xs">
                        <span className="font-bold">Address:</span> {homeAddress}
                    </span>
                </div>
                <img src={barcode} alt="" className="h-28 w-28" />
            </div>
            <div className="h-2 bg-[#aa0202] mt-5"></div>
        </div>
    );
};

export default AadharCard;
