"use client"
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

    const [role, setRole] = useState<string>("Admin");// I will set role later like for user change name and update uer profile some from will block
    const handleRoleChange = (e:any) =>{
        setRole(e.target.value);
    }

    return (
        <div className="relative w-screen h-screen"> 
            <div className="bg-gray-100 w-[30%] h-[90%] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                
                <div
                      className="text-[#FC213D] text-lg text-right px-5 pt-2 font-bold cursor-pointer"
                      onClick={() => window.close()}
                    >
                      X
                </div>
                <div className="font-bold text-xl text-center">
                    <h2>Add member Form</h2>
                </div>

                <div className="px-5 pt-2">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter user name"
                        required   
                        />
                </div>
                <div className="px-5 pt-2 text-base">
                    <label>Username</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter user username"
                        // required   
                        />
                </div>
                <div className="px-5 pt-2">
                    <label >Password</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter user password"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter user email"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    <label>Position</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter user position"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    {/* Drop down */}
                    <label >Role</label>
                    <select className='w-full bg-white p-1 rounded-lg'>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    
                </div>
                <div className="px-5 pt-2">
                    <label>Contact</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter user contact"
                        required   
                        />
                </div>

                <div className="px-5 pt-2">
                    {/* Dropdown take data from project */}
                    <label>Project</label>
                    <select className='w-full bg-white p-1 rounded-lg'>
                        <option value="Project1">Project1</option>
                        <option value="Project2">Project2</option>
                    </select>
                </div>

                <div className="px-5 pt-2">
                    <label>Profile</label>
                    <div className='flex item-center w-full border-1 rounded-lg'>
                        <div className='relative'>
                            <input 
                                type="file" 
                                className='absolute inset-0 opacity-0 w-full h-full cursor-pointer' //use like hidden it
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <button className='bg-gray-200 border border-gray-400 rounded text-black m-1' type="button">
                                Choose file
                            </button>
                            <span className='text-gray-500 text-sm ml-1'>
                                {fileName}
                            </span>
                        </div>
                        
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