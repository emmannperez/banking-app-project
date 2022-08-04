import React from "react";
import {useNavigate} from "react-router-dom";
import NavBar from "./NavBar";
import homePageVector from '../homePageVector.png';
import handLogo from '../handlogo.jpeg';

const HomePage = () => {

return (
    <div className="homePageContainer">
    <NavBar />
    <section className="homeBody">
        <div className="homeLeft">
            <div className="homeLogo">
                <span className='logoBlackL'>BANK<span className='logoGoldL'>OK</span></span>
                <img src={handLogo} id="handLogo"></img>
            </div>
            <div className="homeText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae voluptatem asperiores facilis nesciunt soluta reiciendis maiores, dignissimos, eum rem possimus, sequi laborum. Soluta voluptas cumque unde suscipit ipsa neque.</div>
        </div>
        <div id="homeImgCont">
            <img src={homePageVector} id="homePageVector"></img>
        </div>
    </section>
    </div>
    );
}


export default HomePage;