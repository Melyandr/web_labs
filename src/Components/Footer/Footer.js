import React from "react";
import logo from "../../photos/icon_logo.png";
import facebook from "../../photos/facebookjpg.jpg";
import twitter from "../../photos/twitter.jpg";
import google from "../../photos/google_sevice.png";
import linkedin from "../../photos/linkedinpng.png";
const Footer=()=>(
    <section className="footer_section">
        <hr></hr>

        <div className="footer_div">
            <div className="footer_text">
                <p className="title_footer">Buy pencilcase</p>
                <p className="footer_p">You can see that pencilcase mede by Kite is so cool and beaitiful. Please make a choice</p>
            </div>

            <div className="footer_logo_div">
                <img src={logo} alt="pencilcases" className="footer_logo"/>
            </div>

            <div className="social_media">
                <ul>
                <li className="media_li"><a href=""> <img src={facebook} alt="social media" className="footer_four_photos"/></a></li>
                <li  className="media_li"><a href=""> <img src={twitter} alt="social media" className="footer_four_photos"/></a></li>
                <li  className="media_li"><a href=""><img src={google} alt="social media" className="footer_four_photos"/></a></li>
                <li  className="media_li"><a href=""><img src={linkedin} alt="social media" className="footer_four_photos"/></a></li>
                </ul>

            </div>

        </div>





        <hr className="last_hr"></hr>
        <p className="text_iot"> Iot 2023 ir-21 Melya</p>
    </section>

)
export default Footer;