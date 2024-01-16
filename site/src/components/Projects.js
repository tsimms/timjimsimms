import React from "react";
import './Projects.css';

const Projects = () => {
    //const ref = React.useRef();

    return (
        <div className="Projects-content">
            <h1>Resume</h1>
            { /*
            <p>Okay, let's get our hands dirty a little! And no, I do mean <em>let's</em>! Wanna code a little with me?
            Scroll down and you'll see what I mean. But first, you've gotta pick a project that interests you.</p>
            */ }
            <p>Here's a look back on some of the wonderful experiences I've enjoyed in my career.</p>
            <div id="resume-pages">
                <iframe title="Tim Simms Resume" src="/TimSimms_Resume.pdf#page=1" height={650}></iframe>
                <iframe title="Tim Simms Resume" src="/TimSimms_Resume.pdf#page=2" height={650}></iframe>
            </div>
        </div>
    )

}

export default Projects;