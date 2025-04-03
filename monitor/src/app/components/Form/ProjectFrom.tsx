"use client"
import { Radio } from 'antd';
import React, {useState} from 'react';

export default function ProjectFrom (){
    const [fileName, setFileName] = useState<string>("No file choosen");

    const handleFileChange = (e:any) =>{
        if(e.target.files.length > 0){
            setFileName(e.target.files[0].name);
        }else{
            setFileName("No file choosen");
        }
    }
    
    const [selectType, setSelectType] = useState<string>("Electricity");// water flow
    const handleTypeChange = (e:any) =>{
        setSelectType(e.target.value);
    }

    return (
        <div className="relative w-screen h-screen"> 
            <div className="bg-gray-100 w-[30%] h-[50%] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                
                <div
                      className="text-[#FC213D] text-lg text-right px-5 pt-2 font-bold cursor-pointer"
                      onClick={() => window.close()}
                    >
                      X
                </div>
                <div className="font-bold text-xl text-center">
                    <h2>Add project Form</h2>
                </div>

                <div className="px-5 pt-2">
                    <label className=" w-full">Name</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your name"
                        required        
                        />
                </div>
                <div className="px-5 pt-2">
                    <label className="w-full">Project link</label>
                    <input 
                        type="text"
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your project link"
                        required 
                        />
                </div>
                
                <div className="px-5 pt-2">
                    <label className="w-full" >Logo</label>
                    <div className="flex items-center w-full border-1 rounded-lg">
                        <div className="relative">
                            <input 
                                type="file" 
                                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer " //use like hidden it
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <button className="bg-gray-200 border border-gray-400 rounded text-black m-1" type="button">
                                Choose file
                            </button>
                        </div>
                        <span className="text-gray-500 text-sm ml-1">
                            {fileName}
                        </span>
                    </div>
                </div>

                <div className="px-5 pt-2">
                    <label>Type</label>
                    <div className='w-full'>
                        <Radio.Group 
                            className="w-full grid grid-cols-2 gap-0"
                            onChange={handleTypeChange}
                            value={selectType}
                            >
                                
                            <Radio.Button 
                                value="Electricity"  
                                className="text-center border rounded-xs" 
                                style={{ width: '50%' }}
                                >Electricity
                            </Radio.Button>
                            <Radio.Button 
                                value="WaterFlow" 
                                className="text-center border rounded-xs"
                                style={{ width: '50%' }}
                                >Water Flow
                            </Radio.Button>

                        </Radio.Group>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-2 ">
                    {/* <button onClick={()=>console.log("clicked")} className="red text-white rounded-lg px-4 w-[30%] py-2 font-bold " >Login</button> */}
                    <button type="button" onClick={() => console.log("clicked")} className="bg-[#374879]  text-white rounded-lg px-4 w-[30%] py-2 font-bold hover:bg-[#2b3c6e] cursor-pointer">Submit</button>

                </div>
            </div>

        </div>

    )
}