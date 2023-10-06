import './navbar.css';
import logo from '../Images/IITG.jpg';
import bell from '../Images/Bell.jpg';
import text from '../Images/ChatCircleText-r.jpg';
import mag from '../Images/MagnifyingGlass.jpg';
import profile from '../Images/Male.png';
import down from '../Images/down.jpg';


const navbar = () => {
    return ( 
        <div>
            <div className="navbar">
                <div className="logo">
                    <div><img src={ logo } alt="" /></div>
                    Shodh Portal
                </div>
                {/* the following three div will in future be links
                <div className="tabs">Home</div>
                <div className="tabs">Find Talent</div>
                <div className="tabs">Community</div>
                 */}
                <div className="search">
                    <div><img src={mag} alt="" /></div>
                    <input type="text" placeholder='Search for talents,community...'/>
                </div>
                
                <div className="bell"><img src={bell} alt="" /></div>
                <div className="bell"><img src={text} alt="" /></div>
                
                <div className="profile">
                    <div className="pic"><img src={profile} alt="" /></div>
                    <div className="down"><img src={down} alt="" /></div>
                </div>
                <div className="btn">
                    <button>Post Job</button>
                </div>
            </div>
        </div>
    );
}
 
export default navbar;