// import React from "react";
// import logo from '../../photos/icon_logo.png'
// import Catalog  from'../../pages/Catalog.js'
// import Home from '../../pages/Home.js'
// import Card from '../../pages/Card.js'
// import {
//     BrowserRouter as Router,
//     Switch ,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
// } from "react-router-dom";
// const Navigation=()=>(
//     <Router>
//     <section className="hero">
//         <div className="hero_div">
//             <div >
//                 <img className="logo" src={logo} alt="My Image" />
//             </div>
//
//
//           <ul >
//               <div className="header_li">
//                   <li className="header_nav_item" id="home_li"><Link to="/">Home</Link></li>
//                   {/*<li className="header_nav_item"><a href="">Catalog</a></li>*/}
//                   <li className="header_nav_item"><Link to="/catalog">Catalog</Link></li>
//                   {/*<li className="header_nav_item"><a href="/">Card</a></li>*/}
//                   <li className="header_nav_item"><Link to="/card">Card</Link></li>
//               </div>
//
//       </ul>
//       </div>
//         <hr></hr>
//     </section>
//
//
//
// <Switch>
//     <Route path="/catalog"
//         component={Catalog}
//     </Route>
//
//     <Route path="/"
//         component={Home}
//     </Route>
//     <Route path="/card"
//         component={Card}
//     </Route>
// </Switch>
//
// </Router>
//
//
//
//
// )
//
// export default Navigation;
import React from "react";
import logo from '../../photos/icon_logo.png';
import Catalog from '../../pages/Catalog.js';
import Home from '../../pages/Home.js';
import Card from '../../pages/Card.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, Switch,
    Outlet

} from "react-router-dom";

const Navigation = () => (

        <section className="hero">
            <div className="hero_div">
                <div>
                    <img className="logo" src={logo} alt="My Image" />
                </div>

                <ul>
                    <div className="header_li">
                        <li className="header_nav_item" id="home_li"><Link to="/">Home</Link></li>
                        <li className="header_nav_item"><Link to="/catalog">Catalog</Link></li>
                        <li className="header_nav_item"><Link to="/card">Card</Link></li>
                    </div>
                </ul>

                <div className="search_input">
                    <input type="text" name="search" id="search" placeholder=""/>

                </div>
            </div>
            <hr />



            <Outlet />
        </section>




);

export default Navigation;
