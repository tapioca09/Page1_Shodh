import './home.css';
import Progress_bar from './progressBar';
import house from '../Images/Home.jpg';
import briefcase from '../Images/briefcase.jpg';
import file from '../Images/file.jpg';
import calendar from '../Images/Calendar.jpg';
import users from '../Images/users.jpg';
import add from '../Images/gg_add.jpg';
import comp from '../Images/comp.jpg';
import dev from '../Images/dev.jpg';
import mech from '../Images/mech.jpg';
import cepstrum from '../Images/cepstrum.jpg';
import people from '../Images/people.jpg';
import down from '../Images/down.jpg';
import exclaim from '../Images/exclaim.jpg';
import girl from '../Images/girl.jpg';

const Home = () => {

    document.addEventListener('DOMContentLoaded', () => {
        const halfDiv = document.querySelector('.half');
        const labelElement = document.querySelector('.label');
        const bodyElement = document.querySelector('.body');
        const rightElement = document.querySelector('.rside');    
        const nameElement = document.querySelector('.name');   
        halfDiv.addEventListener('mouseover', () => {
            // halfDiv.style.opacity = '0.8';
            labelElement.style.display = 'inline';
            bodyElement.style.opacity = '0.75';

            const bodyChildren = bodyElement.querySelectorAll('*');
            bodyChildren.forEach(child => {
                child.style.opacity = '0.75';
            });
    
            rightElement.style.opacity = '0.7';
            const rightChildren = rightElement.querySelectorAll('*');
            rightChildren.forEach(child => {
                child.style.opacity = '0.7';
            });
            
        });
    
        halfDiv.addEventListener('mouseout', () => {
            halfDiv.style.opacity = '';
            labelElement.style.display = 'none';

            bodyElement.style.opacity = '';
            const bodyChildren = bodyElement.querySelectorAll('*');
            bodyChildren.forEach(child => {
                child.style.opacity = '';
            });
    
            rightElement.style.opacity = '';
            const rightChildren = rightElement.querySelectorAll('*');
            rightChildren.forEach(child => {
                child.style.opacity = '';
            });
        });
    });
    
    return (  
        <div className="home">
            <div className="one">
                <div className="half">
                    <div className="sidebar">
                        <div className="notcal icon-container">
                            <div className="icon"><img src={house} alt="" /></div>
                            <div className="label">Home</div>
                        </div>
                        <div className="notcal icon-container" id="one">
                            <div className="icon"><img src={briefcase} alt="" /></div>
                            <div className="label">Jobs by you</div>
                        </div>
                        <div className="notcal icon-container"  id="one">
                            <div className="icon"><img src={file} alt="" /></div>
                            <div className="label">Manage Applications</div>
                        </div>
                        <div className="calen icon-container" id="one">
                            <div className="icon"><img src={calendar} alt="" /></div>
                            <div className="label">Calendar</div>
                        </div>
                        <div className="notcal icon-container"  id="one">
                            <div className="icon"><img src={users} alt="" /></div>
                            <div className="label">Community</div>
                        </div>
                        <div className="notcal icon-container"  id="one">
                            <div className="icon"><img src={add} alt="" /></div>
                            <div className="label">Add Post</div>
                        </div>
                    </div>
                </div>

                <div className="body">
                    <div><h1 className="name">Hello Ayushi!</h1></div>
                    <div className="startup">
                        <div>
                            <h1>Add your Startup and start recruting!</h1>
                            <button>Get Started</button>
                        </div>
                        <div className="computer">
                            <img src={comp} alt="" />
                        </div>
                    </div>
                    <div className="two">
                        <div className="commu">
                            <div className="left">
                                <h4>Connect with the people from your community</h4>
                                <div>
                                    <div className="small"><img src={dev} alt="" /></div>
                                    <div className='title'>
                                        <h5>Developers</h5>
                                        <p>150 Members</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="small"><img src={mech} alt="" /></div>
                                    <div className='title'>
                                        <h5>Mechanical</h5>
                                        <p>30 Members</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="peo"><img src={people} alt="" /></div>
                                <div>
                                    <div className="small"><img src={cepstrum} alt="" /></div>
                                    <div className='title'>
                                        <h5>ECE Cepstrum</h5>
                                        <p>30 Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <button>Explore more <img src={down} alt="" /></button>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <p className='nums'>1</p>
                            <h3>Add your Startup to your account</h3>
                            <p>Give a brief description of your startup, including its name and mission and start building your job post.</p>
                        </div>
                        <div className="step">
                            <p className='nums'>2</p>
                            <h3>Create your job post</h3>
                            <p>Add the job title along with all the necessary information, and you are on the way to find the perfect hire.</p>
                        </div>
                        <div className="step">
                            <p className='nums'>3</p>
                            <h3>Start by posting your job</h3>
                            <p>Let us help you connect with promising candidates and smoothly set your hiring process in motion.</p>
                        </div>
                    </div>
                </div>
                
                <div className="rside">
                    <div className="pay">
                        <div className="exclaim"><img src={exclaim} alt="" /></div>
                        <h3>Never pay anyone to recruite through this website</h3>
                        <p>Fraudsters may ask you to invest money either to earn more OR to get you a job. <br /> Never make such payments.</p>
                        <button>Learn more</button>
                    </div>
                    <div className="status">
                        <div className="row">
                            <h3>Complete your profile!</h3>
                            <div className='girl'><img src={girl} alt="" /></div>
                        </div>
                        <Progress_bar bgcolor="orange" progress='70'  height={7} />
                        <button>Add Profile Photo</button>
                        <button>Add your Occupation</button>
                        <button>Add Contact Info</button>
                        <button>Add Contact Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;