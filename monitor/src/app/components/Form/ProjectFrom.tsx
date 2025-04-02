export default function ProjectFrom (){
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
                    <label >Logo</label>
                </div>
                <div className="px-5 pt-2">
                    <label>Type</label>
                </div>
                <div className="flex justify-center items-center mt-2 ">
                    {/* <button onClick={()=>console.log("clicked")} className="red text-white rounded-lg px-4 w-[30%] py-2 font-bold " >Login</button> */}
                    <button type="button" onClick={() => console.log("clicked")} className="bg-[#FC213D]  text-white rounded-lg px-4 w-[30%] py-2 font-bold hover:bg-[#e21d36]">Login</button>

                </div>
            </div>

        </div>

    )
}