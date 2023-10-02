import './footer.css';
import FB from '../Images/Frame.png';
import Insta from '../Images/insta.png';
import Lin from '../Images/linkd.png';
import Pin from '../Images/pin.png';
import Twit from '../Images/twit.png';
const footer = () => {
    return (  
        <div>
            <div className="foot">
                <div className="info">
                    <div className="loca">
                        <h1>Shodh Portal</h1>
                        <div>
                            <div>
                                SWC, New SAC <br /> IIT Guwahati <br /> Assam 781039
                            </div>
                            <div>
                                swc@iitg.ac.in <br /> +91 807 9083 829
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <div>
                            <h3>Profile</h3>
                            <p>Jobs by you   </p>
                            <p>Application Status</p>
                            <p>Calendar</p>
                            <p>Community</p>
                        </div>
                        <div>
                            <h3>Home</h3>
                            <p>Get Started</p>
                            <p>Profile</p>
                            <p>Post Job</p>
                            <p>Notifications</p>
                            <p>Messages</p>

                        </div>
                        <div>
                            <h3>Community</h3>
                            <p>xyz</p>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <p>Post a Job</p>
                            <p>Community</p>
                            <p>Application Status</p>
                            <p>Search</p>
                            <p>Messages</p>

                        </div>
                    </div>
                </div>

                {/* see ya later */}
                <div className="media">
                    <p>© 2022 Student's Web Committee</p>
                    <div>
                        <img src={FB} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Lin} alt="" />
                        <img src={Pin} alt="" />
                        <img src={Twit} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default footer;