import "./first_screen.css";
import React from "react";
import { Link } from "react-router-dom";
import Speaker from "./speakers.jpg";
import Auditorium from "./auditorium.jpg";
import Entrance from "./entrance.jpg";

export default class FirstScreen extends React.Component {

    buttonClick = () => {
        alert("Button Clicked");
    }

    render() {
        return (
            <div className="first_screen">
                <div className="navigation">
                    <div style={{ fontSize: "60px" }}>
                        <div style={{ textAlign: "start" }}>Styles</div>
                        <div>Conference</div>
                    </div>
                    <div className="navigation_box">
                        <div style={{ textAlign: "end", color: "rgb(3, 169, 97)" }}>August 24-26th--Chicago, IL</div>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link className="link" to="/first_screen">Home</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/second_screen">Speakers</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/third_screen">Schedule</Link>
                                    </li>
                                    <li>
                                        <Link className="link" to="/fourth_screen">Register</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="navbar_continued">
                    <div style={{ fontWeight: "bold", color: "rgb(3, 169, 97)" }}>Dedicated to the Craft of Building Websites</div>
                    <div style={{ fontSize: "25px" }}>Every year the brightest web designers and front-end-developers descend on</div>
                    <div style={{ fontSize: "25px" }}>Chicago to discuss the latest technologies.Join us this August</div>
                    <div className="buttonStyle" onClick={this.buttonClick} style={{ fontSize: "15px" }}>Register Now</div>
                </div>
                <div className="content" style={{ backgroundColor: "white" }}>
                    <div>
                        <div className="caption">SPEAKERS</div>
                        <div>
                            <img src={Speaker} alt="Speaker"></img>
                        </div>
                        <div className="heading_description">World-Class Speakers</div>
                        <div className="description">
                            Joining us from all around the world are twenty fantastic speakers here to share their stories
                        </div>
                    </div>
                    <div>
                        <div className="caption">SCHEDULE</div>
                        <div>
                            <img src={Auditorium} alt="Auditorium"></img>
                        </div>
                        <div className="heading_description">Three Inspiring Days</div>
                        <div className="description">
                            Enjoy three inspiring and action-packed days of talks, gatherings and all-around goodtimes
                        </div>
                    </div>
                    <div>
                        <div className="caption">VENUE</div>
                        <div>
                            <img src={Entrance} alt="Entrance"></img>
                        </div>
                        <div className="heading_description">Madison Square Garden</div>
                        <div className="description">
                            Within the heart of downtown Chicago.The Chicago Theatre will provide a beautiful conference venue.
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div style={{marginTop : "50px"}}>&copy; Styles Conference</div>
                    <div style={{marginTop : "40px"}}>
                        <nav>
                            <ul>
                                <li>
                                    <Link className="link" to="/first_screen">Home</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/second_screen">Speakers</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/third_screen">Schedule</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/fourth_screen">Register</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}