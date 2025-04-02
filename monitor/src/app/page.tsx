import Image from 'next/image';

export default function Home () {
    return (
        <div className="relative w-screen h-screen">
            <div className="blue w-[30%] h-[50%] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

                <div className=' item-center flex justify-center pt-5'>
                    <Image src="/logo.jpg" alt='logo ' width={80} height={80}/>
                </div>
                <div className="px-5 pt-5"> 
                    <label className="text-white w-full">Username</label>
                    <input 
                        type="text" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your username"
                        required
                    />
                </div>

                <div className="w-full px-5 py-5" >
                    <label className=" text-white ">Password</label>
                    <input 
                        type="password" 
                        className="bg-white w-full p-1 rounded-lg"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="flex justify-center items-center mt-2">
                    <button className="red text-white rounded-lg px-4 w-[30%] py-2 font-bold">Login</button>
                </div>
            </div>
        </div>
    );
}
