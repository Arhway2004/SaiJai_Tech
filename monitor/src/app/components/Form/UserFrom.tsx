export default function ProjectFrom (){
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
                        placeholder="Enter your name"
                        required   
                        />
                </div>
                <div className="px-5 pt-2 text-base">
                    <label>Username</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your name"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    <label >Password</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your name"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your name"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    <label>Position</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your name"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    {/* Drop down */}
                    <label >Role</label>
                </div>
                <div className="px-5 pt-2">
                    <label>Contact</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your name"
                        required   
                        />
                </div>
                <div className="px-5 pt-2">
                    {/* Dropdown take data from project */}
                    <label>Project</label>
                </div>
                <div className="px-5 pt-2">
                    <label>Profile</label>
                    
                </div>

                <div className="flex justify-center items-center mt-2 ">
                    {/* <button onClick={()=>console.log("clicked")} className="red text-white rounded-lg px-4 w-[30%] py-2 font-bold " >Login</button> */}
                    <button type="button" onClick={() => console.log("clicked")} className="bg-[#FC213D]  text-white rounded-lg px-4 w-[30%] py-2 font-bold hover:bg-[#e21d36]">Login</button>

                </div>
            </div>
        </div>

    )
}