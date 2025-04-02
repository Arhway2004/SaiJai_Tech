import Navbar from '../../components/navbar';
import {mockData} from '../../data/mockData';
import {NavbarData} from '../../types/types';

const Station:React.FC =() =>{
    const navbarData: NavbarData = mockData["/station"];
    return (
        <div>
            <Navbar leftText={navbarData.leftText} rightText={navbarData.rightText}></Navbar>

        </div>
    )
}

export default Station;