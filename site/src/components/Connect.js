import React from "react";
import './Connect.css';
import logo from '../i/LI-Logo.png';

const Connect = () => {
    return (
        <div className="Connect-content">
            <h1>Connect with Me</h1>
            <p>
                Looking forward to connecting with you! Whether it's for a new software project, a new venture, a conference, or anything else, I'm
                hoping I can help in some way. Let's build something cool together!
            </p>
            <div className="Connect-logos">
                <div className="Connect-logo">
                    <a href="https://linkedin.com/in/timjimsimms" target="_new">
                        <img src={logo} alt="LinkedIn" />
                    </a>
                </div>

               <style>
               .libutton {
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 padding: 7px;
                 text-align: center;
                 outline: none;
                 text-decoration: none !important;
                 color: #ffffff !important;
                 width: 200px;
                 height: 32px;
                 border-radius: 16px;
                 background-color: #0A66C2;
                 font-family: "SF Pro Text", Helvetica, sans-serif;
               }
               </style>
               <a class="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=timjimsimms" target="_blank">Follow on LinkedIn</a>
            </div>
        </div>
    );
};

export default Connect;
