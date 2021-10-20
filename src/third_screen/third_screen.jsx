import "./third_screen.css";
import { Link } from "react-router-dom";

const ThirdScreen = () => {
    return (
        <div className="third_screen">
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
            <div className="middle_nav" style={{
                backgroundImage: "linear-gradient(to right,  rgba(212, 246, 162, 0.65), rgba(226, 247, 196, 1))",
            }}>
                <div style={{ color: "rgb(3, 169, 97)", fontSize: "35px" }}>Schedule</div>
                <div style={{
                    textAlign: "center",
                    width: "800px",
                    height: "auto",
                    color: "gray",
                    fontWeight: "bold",
                    marginTop: "20px"
                }}>
                    The conference opens with amazing workshops and continues with two days of incredible talks and keynotes all of which are facilitated by industry-leading experts.
                </div>
            </div>
            <div className="schedule_content" style={{ backgroundColor: "white" }}>
                <div className="details_content">
                    <div style={{ color: "rgb(3, 169, 97)", fontSize: "20px", fontWeight: "bold" }}>Workshops</div>
                    <div style={{ width: "600px", marginLeft: "20px" }}>
                        <div style={{ color: "gray", fontWeight: "bold", fontSize: "15px", textAlign: "start", marginBottom: "10px" }}>August 24th</div>
                        <hr></hr>
                    </div>
                </div>
                <div className="details_content">
                    <div style={{ color: "gray", fontWeight: "bold", fontSize: "13px", textAlign: "start", marginBottom: "10px" }}>8:30AM</div>
                    <div style={{ width: "600px", marginLeft: "71px" }}>
                        <div style={{ color: "gray", fontWeight: "bold", fontSize: "15px", textAlign: "start", marginBottom: "10px" }}>Registration</div>
                        <hr></hr>
                    </div>
                </div>
                <div className="details_content">
                    <div style={{ color: "gray", fontWeight: "bold", fontSize: "13px", textAlign: "start", marginBottom: "10px" }}>9:00AM</div>
                    <div className="workshopSpeakers" style={{ width: "600px", marginLeft: "71px" }}>
                        <div>
                            <div style={{ color: "rgb(3, 169, 97)", fontWeight: "bold", textAlign: "start" }}>Adam Connor</div>
                            <div>
                                Lights! Camera! Interaction! Design Inspiration From Filmakers
                            </div>
                        </div>
                        <div className="secondLast">
                            <div style={{ color: "rgb(3, 169, 97)", fontWeight: "bold", textAlign: "start" }}>Jennifer Jones</div>
                            <div>What Designers Can Learn From Parenting</div>
                        </div>
                    </div>
                </div>
                <div className="details_content">
                    <div style={{ color: "gray", fontWeight: "bold", fontSize: "13px", textAlign: "start", marginBottom: "10px" }}>12:30PM</div>
                    <div style={{ width: "600px", marginLeft: "71px" }}>
                        <div style={{ color: "gray", fontWeight: "bold", fontSize: "15px", textAlign: "start", marginBottom: "10px" }}>Lunch</div>
                        <hr></hr>
                    </div>
                </div>
                <div className="details_content">
                    <div style={{ color: "gray", fontWeight: "bold", fontSize: "13px", textAlign: "start", marginBottom: "10px" }}>2:00PM</div>
                    <div className="workshopSpeakers" style={{ width: "600px", marginLeft: "71px" }}>
                        <div>
                            <div style={{ color: "rgb(3, 169, 97)", fontWeight: "bold", textAlign: "start" }}>Tessa Harmon</div>
                            <div>
                                Crafty Coding: Generating Knitting Patterns
                            </div>
                        </div>
                        <div className="secondLast">
                            <div style={{ color: "rgb(3, 169, 97)", fontWeight: "bold", textAlign: "start" }}>Russ Unger</div>
                            <div>From Muppets To Mastery: Core UX Principles from Mr.Jim Henson</div>
                        </div>
                    </div>
                </div>
                <div className="details_content">
                    <div style={{ color: "rgb(3, 169, 97)", fontSize: "20px", fontWeight: "bold", marginTop: "30px" }}>Conference</div>
                    <div style={{ width: "600px", marginLeft: "20px" }}>
                        <div style={{ color: "gray", fontWeight: "bold", fontSize: "15px", textAlign: "start", marginBottom: "10px" }}>August 25th</div>
                        <hr></hr>
                    </div>
                </div>
                <div className="details_content">
                    <div style={{ color: "gray", fontWeight: "bold", fontSize: "13px", textAlign: "start", marginBottom: "10px" }}>8:30AM</div>
                    <div style={{ width: "600px", marginLeft: "71px" }}>
                        <div style={{ color: "gray", fontWeight: "bold", fontSize: "15px", textAlign: "start", marginBottom: "10px" }}>Registration</div>
                        <hr></hr>
                    </div>
                </div>
                <div className="details_content">
                    <div style={{ color: "gray", fontWeight: "bold", fontSize: "13px", textAlign: "start", marginBottom: "10px" }}>9:00AM</div>
                    <div style={{ width: "600px", marginLeft: "71px" }}>
                        <div style={{ color: "rgb(3, 169, 97)", fontWeight: "bold", textAlign: "start" }}>Vitaly Friedman</div>
                        <div style={{ textAlign: "start" }}>Responsive Web Design: Clever Tips and Techniques</div>
                        <hr></hr>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div style={{ marginTop: "50px" }}>&copy; Styles Conference</div>
                <div style={{ marginTop: "40px" }}>
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

export default ThirdScreen;