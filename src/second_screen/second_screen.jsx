import "./second_screen.css";
import { Link } from "react-router-dom";
import Alan from "./alan.jpg";
import Larry from "./larry.jpg";
import Steve from "./steve.jpg";

const SecondScreen = () => {
    return (
        <div className="second_screen">
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
                <div style={{ color: "rgb(3, 169, 97)", fontSize: "35px" }}>Speakers</div>
                <div style={{
                    textAlign: "center",
                    width: "800px",
                    height: "auto",
                    color: "gray",
                    fontWeight: "bold",
                    marginTop: "20px"
                }}>
                    We're happy to present over twenty speakers to present on the industry's latest technologies. Prepare for an inspirational extragavanza.
                </div>
            </div>
            <div className="speakers" style={{backgroundColor : "white"}}>
                <div className="details" style={{margin : "30px 0 30px 0px"}}>
                    <div className="bio">
                        <div className="name">
                            <div style={{color : "rgb(3, 169, 97)", fontSize : "20px"}}>Alan Turing</div>
                            <div style={{color : "gray", fontWeight : "bold", fontSize : "10px"}}>DESIGNING &#38; CULTURE OF DESIGN</div>
                        </div>
                        <div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className="about">About Alan</div>
                        <div className="about_speaker">Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Massa enim nec dui nunc mattis enim. Odio eu feugiat pretium nibh ipsum consequat. Cras tincidunt lobortis feugiat vivamus at. Quis varius quam quisque id. Nisl tincidunt eget nullam non nisi est. Quisque non tellus orci ac.</div>
                    </div>
                    <div className="email">
                        <div className="image">
                            <img className="profile_pic" src={Alan} alt="Alan Turing"></img>
                            <div>@christopher</div>
                            <div style={{fontSize : "11px", textAlign : "center"}}>turing.alan@father.com</div>
                        </div>
                    </div>
                </div>
                <div className="details" style={{margin : "30px 0 30px 0px"}}>
                    <div className="bio">
                        <div className="name">
                            <div style={{color : "rgb(3, 169, 97)", fontSize : "20px"}}>Steve Jobs</div>
                            <div style={{color : "gray", fontWeight : "bold", fontSize : "10px"}}>DESIGNING &#38; CULTURE OF DESIGN</div>
                        </div>
                        <div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className="about">About Steve</div>
                        <div className="about_speaker">Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Massa enim nec dui nunc mattis enim. Odio eu feugiat pretium nibh ipsum consequat. Cras tincidunt lobortis feugiat vivamus at. Quis varius quam quisque id. Nisl tincidunt eget nullam non nisi est. Quisque non tellus orci ac.</div>
                    </div>
                    <div className="email">
                        <div className="image">
                            <img className="profile_pic" src={Steve} alt="Steve Jobs"></img>
                            <div>@steve</div>
                            <div style={{fontSize : "11px", textAlign : "center"}}>stayfoolishstayhungry@apple.com</div>
                        </div>
                    </div>
                </div>
                <div className="details" style={{margin : "30px 0 30px 0px"}}>
                    <div className="bio">
                        <div className="name">
                            <div style={{color : "rgb(3, 169, 97)", fontSize : "20px"}}>Larry Page</div>
                            <div style={{color : "gray", fontWeight : "bold", fontSize : "10px"}}>DESIGNING &#38; CULTURE OF DESIGN</div>
                        </div>
                        <div className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className="about">About Larry</div>
                        <div className="about_speaker">Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Massa enim nec dui nunc mattis enim. Odio eu feugiat pretium nibh ipsum consequat. Cras tincidunt lobortis feugiat vivamus at. Quis varius quam quisque id. Nisl tincidunt eget nullam non nisi est. Quisque non tellus orci ac.</div>
                    </div>
                    <div className="email">
                        <div className="image">
                            <img className="profile_pic" src={Larry} alt="Larry Page"></img>
                            <div>@larry</div>
                            <div style={{fontSize : "11px", textAlign : "center"}}>theinternet@google.com</div>
                        </div>
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

export default SecondScreen;