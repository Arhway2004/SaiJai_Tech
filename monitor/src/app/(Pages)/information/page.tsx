import Navbar from '../../components/navbar';
import {mockData} from '../../data/mockData';
import {NavbarData} from '../../types/types';

const Information:React.FC = () =>{
    const navbarData: NavbarData = mockData["/information"];
    return (
        <div>
            <Navbar leftText={navbarData.leftText} rightText={navbarData.rightText}></Navbar>
        </div>
    )
}
export default Information;