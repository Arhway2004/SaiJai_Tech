import Navbar from '../../components/navbar';
import {mockData} from '../../data/mockData';
import {NavbarData} from '../../types/types';
import Image from 'next/image';
const Station:React.FC =() =>{
    const navbarData: NavbarData = mockData["/station"];
    return (
        <>
            <Navbar leftText={navbarData.leftText} rightText={navbarData.rightText}></Navbar>
            <div className='p-4'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <div className='relative'>
                            <input
                                type="search"
                                className="bg-white w-full p-2 pr-8 rounded-lg border border-gray-300"
                                placeholder="Search..."
                            />
                            <button className='absolute right-2 top-2.5 text-[#FC213D] cursor-pointer'>
                                <Image src={"/search.png"} alt='' width={20} height={20}/>
                            </button>
                        </div>
                        <span className='ml-4 text-gray-700 font-medium whitespace-nowrap'>
                            Total {/* Add your count here */} project
                        </span>
                    </div>

                    <div className='flex items-center'>
                        <button className='bg-gray-300 hover:bg-gray-400 text-black font-bold mr-2 px-5 py-2 rounded-lg'>Filter</button>
                        <button className='bg-[#FC213D] hover:bg-[#e21d36] text-white font-bold px-6 py-2 rounded-lg'>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Station;