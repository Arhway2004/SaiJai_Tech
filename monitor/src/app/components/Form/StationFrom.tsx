"use client"
import { Radio } from 'antd';
import React, { useState } from 'react';

export default function UserProjectForm() {
    const [projectType, setProjectType] = useState<string>("WaterFlow");
    const [electricityPhase, setElectricityPhase] = useState("Phase 1");
    const [waterFlowType, setWaterFlowType] = useState("Ground water");

    return (
        <div className="relative w-screen h-screen"> 
            <div className="bg-gray-100 w-[30%] h-[80%] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                
                <div
                    className="text-[#FC213D] text-lg text-right px-5 pt-2 font-bold cursor-pointer"
                    onClick={() => window.close()}
                >
                    X
                </div>
                <div className="font-bold text-xl text-center">
                    <h2>Add Station Form</h2>
                </div>

                <div className="px-5 pt-2">
                    <label>Name</label>
                    <input type="text" className="bg-white w-full p-1 rounded-lg" placeholder="Enter your name" required />
                </div>
                <div className="px-5 pt-2">
                    <label>Organization</label>
                    <input type="text" className="bg-white w-full p-1 rounded-lg" placeholder="Enter your organization" required />
                </div>
                <div className="px-5 pt-2">
                    <label>Contact</label>
                    <input type="text" className="bg-white w-full p-1 rounded-lg" placeholder="Enter your contact" required />
                </div>
                <div className="px-5 pt-2">
                    <label>Location</label>
                    <input type="text" className="bg-white w-full p-1 rounded-lg" placeholder="Enter the location" required />
                </div>
                <div className="px-5 pt-2">
                    <label>Google Map Link</label>
                    <input type="text" className="bg-white w-full p-1 rounded-lg" placeholder="Enter Google map link" required />
                </div>
                <div className="px-5 pt-2">
                    <label>Measurement</label>
                    <select className="bg-white w-full p-1 rounded-lg">
                        <option value="">Select measurement</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <div className="px-5 pt-2">
                    <label>Organizing Agency</label>
                    <input type="text" className="bg-white w-full p-1 rounded-lg" placeholder="Enter organizing agency" required />
                </div>

                <div className="px-5 pt-2">
                    <label>{projectType === "Electricity" ? "Electricity Phase" : "Water Flow Type"}</label>
                    {projectType === "Electricity" ? (
                        <Radio.Group value={electricityPhase} onChange={(e) => setElectricityPhase(e.target.value)} className="w-full">
                            <Radio.Button value="Phase 1" className="w-1/2 text-center">Phase 1</Radio.Button>
                            <Radio.Button value="Phase 2" className="w-1/2 text-center">Phase 2</Radio.Button>
                        </Radio.Group>
                    ) : (
                        <Radio.Group value={waterFlowType} onChange={(e) => setWaterFlowType(e.target.value)} className="w-full">
                            <Radio.Button value="Ground water" className="w-1/2 text-center">Ground Water</Radio.Button>
                            <Radio.Button value="Surface water" className="w-1/2 text-center">Surface Water</Radio.Button>
                        </Radio.Group>
                    )}
                </div>

                <div className="flex justify-center items-center mt-4">
                    <button 
                        type="button" 
                        onClick={() => console.log("Submitted:", { 
                            projectType, 
                            electricityPhase: projectType === "Electricity" ? electricityPhase : null,
                            waterFlowType: projectType === "WaterFlow" ? waterFlowType : null
                        })} 
                        className="bg-[#374879] text-white rounded-lg px-4 w-[30%] py-2 font-bold hover:bg-[#2b3c6e] cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
