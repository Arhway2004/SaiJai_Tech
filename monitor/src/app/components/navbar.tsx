"use client"
import { NavbarData } from "../types/types"
import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";


// use for?
interface NavbarProps extends NavbarData{}

const Navbar: React.FC<NavbarProps> =  ({leftText, rightText}) => {

    // button 
    const [role, setRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchRole = async () =>{
            try{
                // const response = await axios.get() //api
                // setRole(response.data.role);
            }catch(error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        };
        fetchRole();
    },[]);

    if(loading) return <p>Loding.....</p>;
    return(
        <div className="blue h-20 flex p-5">
            <h1 className="content-center w-[50%] font-bold text-white text-2xl">{leftText}</h1>
            <div className="content-center text-right w-[50%] font-bold text-white text-2xl">
                <span>
                    {role === "admin " ? "admin " : role === "Employee " ? "Employee " : "No Role "}
                </span>
                {/* {role === null && <button className="text-whtie hover:text-gray-300" onClick={() => console.log("Button clicked!")}>+</button>} */}
                <button type="button" onClick={() => console.log("clicked")} className="red text-white rounded-lg px-4 w-[30%] py-2 font-bold hover:bg-black">Login</button>

            </div>
        </div>
    )
}

export default Navbar;