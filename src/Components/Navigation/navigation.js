import React from "react";
import logo from '../../photos/icon_logo.png'
const Navigation=()=>(
    <section className="hero">
        <div className="hero_div">
            <div >
                <img className="logo" src={logo} alt="My Image" />
            </div>


          <ul >
              <div className="header_li">
                  <li className="header_nav_item" id="home_li"><a href="my-app/src/Navigation">Home</a></li>
                  <li className="header_nav_item"><a href="my-app/src/Navigation">Catalog</a></li>
                  <li className="header_nav_item"><a href="my-app/src/Navigation">Card</a></li>
              </div>

      </ul>
      </div>
        <hr></hr>
    </section>



)

export default Navigation;