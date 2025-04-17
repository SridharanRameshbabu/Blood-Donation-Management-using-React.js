import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Userdashboard.css";
// import { FaTint, FaHome, FaHandPaper, FaDonate, FaInbox } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { FaHandHoldingHeart, FaClipboardList,FaEnvelopeOpenText} from 'react-icons/fa';


const Userdashboard = () => {

    const storedDonations = JSON.parse(localStorage.getItem('donations'))
    const storedRequests = JSON.parse(localStorage.getItem("bloodRequests"))
    const storedmyRequests = JSON.parse(localStorage.getItem("mybloodRequests"))
  return (
    <div>
        <Navbar />
        <div className='main'>
            <div>
                <Sidebar />
            </div>

            <div className="content">
                <div className='card p-3 mb-3 mydonation' role='button' onClick={() => window.location.href = '/mydonation'}>
                    <h1><FaHandHoldingHeart style={{ marginRight: '10px' }} />My Donation</h1>
                    <h4>{storedDonations ? storedDonations.length : 0}</h4>
                </div>

                <div className='card p-3 mb-3 requests' role='button' onClick={() => window.location.href = '/bloodrequest'}>
                    <h1><FaClipboardList style={{ marginRight: '10px' }} />Blood Requests</h1>
                    <h4>{storedRequests ? storedRequests.length: 0}</h4>
                </div>

                <div className='card p-3 mb-3 myrequest' role='button' onClick={() => window.location.href = '/myrequest'}>
                    <h1><FaEnvelopeOpenText style={{ marginRight: '10px' }} />My Request</h1>
                    <h4>{storedmyRequests ? storedmyRequests.length : 0}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userdashboard
