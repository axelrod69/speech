import "./fourth_screen.css";
import { Link } from "react-router-dom";

const FourthScreen = () => {
    return (
        <div className="fourth_screen">
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
                <div style={{ color: "rgb(3, 169, 97)", fontSize: "35px" }}>Register</div>
                <div style={{
                    textAlign: "center",
                    width: "800px",
                    height: "auto",
                    color: "gray",
                    fontWeight: "bold",
                    marginTop: "20px"
                }}>
                    Every year we aim to have an unbelievable time, and this year we'd love it for you to join us. Conference passes only cost $99, one of the best values you'll find.
                </div>
            </div>
            <div className="mainContent" style={{ backgroundColor: "white" }}>
                <div style={{ width: "50%" }}>
                    <div style={{ textAlign: "start", color: "rgb(3, 169, 97)", fontWeight: "bold" }}>Purchase a Conference Pass</div>
                    <div style={{ textAlign: "start", color: "gray", fontWeight: "bold" }}>$99 per pass</div>
                    <div style={{ textAlign: "justify", marginTop: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div>
                        <div style={{ textAlign: "start", marginTop: "20px", color: "rgb(3, 169, 97)", fontWeight: "bold" }}>Why Attend?</div>
                        <div style={{ textAlign: "start" }}>
                            <ul>
                                <li>&#8226; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed!!</li>
                                <br></br>
                                <li>&#8226; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed!!</li>
                                <br></br>
                                <li>&#8226; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed sunt in culpa qui officia deserunt!!</li>
                                <br></br>
                                <li>&#8226; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed!!</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="passForm" style={{ width: "20%" }}>
                    <div>
                        <div style={{ textAlign: "start", marginBottom: "2px", color: "gray", fontWeight: "bold" }}>Name</div>
                        <div style={{ float: "left" }}>
                            <input type="text" placeholder="Full Name"></input>
                        </div>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <div style={{ textAlign: "start", marginBottom: "2px", color: "gray", fontWeight: "bold" }}>Email</div>
                        <div style={{ float: "left" }}>
                            <input type="email" placeholder="Email"></input>
                        </div>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <div style={{ textAlign: "start", marginBottom: "2px", color: "gray", fontWeight: "bold" }}>Number of Passes</div>
                        <div style={{ float: "left" }}>
                            <input type="number" style={{ width: "80px" }}></input>
                        </div>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <div style={{ textAlign: "start", marginBottom: "2px", color: "gray", fontWeight: "bold" }}>Comments</div>
                        <div style={{ float: "left" }}>
                            <textarea className="commentBox" rows="4" cols="30"></textarea>
                        </div>
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

export default FourthScreen;