import { useParams, useHistory } from "react-router-dom";
import React from "react";
import CoverImg from "../../../../assets/images/cover-img.jpeg"

import './Project.css'

export default function Project() {
    const { id } = useParams();
    const history = useHistory();

    return(
        <div className="projectDetails">
            <img style={{position:"relative"}} className="coverImg" src={CoverImg} />
                <div className="btn-container">
                    <button onClick={history.goBack} className="primary-button" style={{ margin:"0.5em", top:"0", padding:"0.2em 1em", marginLeft:"0"}}> &lt; back</button>
                </div>
            <div style={{"margin-top": "0vh"}} className="details-container">
                <h2>Project Title of project with id={id} </h2>
                <p> Project id: {id} </p>
                <div className="event-details">
                    <p>Mode: 💻 Online</p>
                    <p>Starts On: Mar 28, 2022, 06:00 PM IST</p>
                    <p>Ends On: April 02, 2022, 11:59 PM IST</p>
                </div>
                <div>
                    <h5>Overview</h5>
                    <p>Netflix Conductor is a Workflow Orchestration engine that runs in the cloud. It is designed to be totally flexible - your microservices can run in any cloud, in any language, and Conductor can wire them together into a resilient workflow.

Conductor was built by Orkes’ founders while at Netflix and was then open-sourced, resulting in widespread adoption driven by a passionate developer community. A wide range of enterprises from Fortune 100s to startups depends on Conductor for mission-critical business cases.

Orkes is a cloud hosted, fully managed version of Netflix Conductor offering full compatibility with the open source version.
This hackathon utilizes Orkes Playground, a free fully managed browser based sandbox environment of Conductor.

Welcome to the The Orkes Hack where you have the opportunity to collaborate intensively on Netflix Conductor with creative minds from across the globe and win amazing prizes! </p>
                </div>
                <div>
                    <h5>Rules</h5>
                    <p>
                        <ul>
                            <li>All the participant teams by virtue of registering for the hackathon, conform to publicizing the ideas and submissions on social media as a part of the promotional efforts of this hackathon by Orkes.</li>
                            <li>Please ensure to use the same email address for starring the Github Repository and creating the workflow on the Orkes platform.</li>
                            <li>The participants must star the Netflix Conductor Github Repository to be eligible for the prizes.</li>
                            <li>All the participant teams by virtue of registering for the hackathon, conform to publicizing the ideas and submissions on social media as a part of the promotional efforts of this hackathon by Orkes.</li>
                            <li>Please ensure to use the same email address for starring the Github Repository and creating the workflow on the Orkes platform.</li>
                            <li>The participants must star the Netflix Conductor Github Repository to be eligible for the prizes.</li>
                            <li>All the participant teams by virtue of registering for the hackathon, conform to publicizing the ideas and submissions on social media as a part of the promotional efforts of this hackathon by Orkes.</li>
                            <li>Please ensure to use the same email address for starring the Github Repository and creating the workflow on the Orkes platform.</li>
                            <li>The participants must star the Netflix Conductor Github Repository to be eligible for the prizes.</li>
                            <li>All the participant teams by virtue of registering for the hackathon, conform to publicizing the ideas and submissions on social media as a part of the promotional efforts of this hackathon by Orkes.</li>
                            <li>Please ensure to use the same email address for starring the Github Repository and creating the workflow on the Orkes platform.</li>
                            <li>The participants must star the Netflix Conductor Github Repository to be eligible for the prizes.</li>
                            <li>All the participant teams by virtue of registering for the hackathon, conform to publicizing the ideas and submissions on social media as a part of the promotional efforts of this hackathon by Orkes.</li>
                            <li>Please ensure to use the same email address for starring the Github Repository and creating the workflow on the Orkes platform.</li>
                            <li>The participants must star the Netflix Conductor Github Repository to be eligible for the prizes.</li>
                            <li>All the participant teams by virtue of registering for the hackathon, conform to publicizing the ideas and submissions on social media as a part of the promotional efforts of this hackathon by Orkes.</li>
                            <li>Please ensure to use the same email address for starring the Github Repository and creating the workflow on the Orkes platform.</li>
                            <li>The participants must star the Netflix Conductor Github Repository to be eligible for the prizes.</li>
                        </ul>
                    </p>
                </div>
                <div >
                    <h5>Prizes</h5>
                    <ul>
                        <li>First Prize</li>
                        <li>Second Prize</li>
                        <li>Third Prize</li>
                    </ul>
                </div>
                <div>
                    <h5>FAQs</h5>
                Do I need to pay any money to register for the Hackathon? No. You do not have to pay anything to anyone to register yourself for any Hackathon on HackerEarth.

Do I need to have any specific qualifications to be a participant for the Hackathon? If you love to code, you are more than welcome to participate in the Hackathon.

How do I submit what I have made for the Hackathon? You have to develop the application on your local system and submit it on HackerEarth in tar/zip file format along with instructions to run the application and source code.

Do we need to have the entire idea fully working? The entire idea need not be fully implemented however, the submission should be functional so that it can be reviewed by the judges.

How is the environment? Will your environment support any language? Will you provide any IDE and DB for us to work on ideas? You have to develop the entire software application on your local system and submit it on HackerEarth in tar/zip file format along with instructions to run the application and source code.

Does one have to be online and available for the entire duration of the Hackathon? No, one does not need to be logged in on HackerEarth or be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.


                </div>
            </div>
        </div>
    )
}