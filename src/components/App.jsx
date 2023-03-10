import React from "react";
import victorImg from "../images/image-victor.jpg";
import bgPattern from "../images/bg-pattern-card.svg";

function App() {

    // const myStyle = {
    //     //backgroundImage: `url(${tree})`,
    //     // height:'100vh',
    //     // backgroundSize: 'cover',
    //     // backgroundRepeat: 'no-repeat',
    //     backgroundColor: "red",
    //     width: "50%",
    //     height: "50%",
    //     position: ""
    // };

    return (
        <div className="body-div" >
        <div className="main-div">
                <img className="div-bg-img" src={bgPattern} alt="Background pattern" />
            <div className="victor-img-div">
                <img className="victor-img" src={victorImg} alt="A man passport pic" /> 
            </div>
            <div className="mid-div">
                <h3 className="heading">Victor Crest <span>26</span></h3>
                <p className="para-place">London</p><hr />  
            </div>
            <div className="last-div">
                <div className="child">
                    <h3 className="child-heading">80K</h3>
                    <p className="child-para">Followers</p>
                </div>
                <div className="child">
                    <h3 className="child-heading">803K</h3>
                    <p className="child-para">Likes</p>
                </div>
                <div className="child">
                    <h3 className="child-heading">1.4K</h3>
                    <p className="child-para">Photos</p>
                </div>
            </div>


        </div>
        </div>
        )

}


export default App;