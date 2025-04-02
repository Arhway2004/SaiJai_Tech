import Navbar from '../../components/navbar';
import {mockData} from '../../data/mockData';
import {NavbarData} from '../../types/types';

const Profile:React.FC =() =>{
    const navbarData: NavbarData = mockData["/profile"];
    return (
        <div>
            <Navbar leftText={navbarData.leftText} rightText={navbarData.rightText}></Navbar>

        </div>
    )
}

export default Profile;