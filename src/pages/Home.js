import '../Components/Navigation/navigationcss.css'
import Navigation from "../Components/Navigation/navigation.js";
import React, { useState } from "react";

import Header from "../Components/Header/header.js";
import '../Components/Header/header.css'

import General from "../Components/General/general.js";
import '../Components/General/general.css'

import Footer from "../Components/Footer/Footer.js";
import '../Components/Footer/Footer.css'

import Button from "../Components/button/button.js";
import '../Components/button/button.css'


// function Home() {
//     return (
//         <div>
//
//             <Header/>
//             <General/>
//             <Button/>
//             <Footer/>
//         </div>
//     );
// }
//
// export default Home;

// Home.js


// function Home() {
//     const [displayedElements, setDisplayedElements] = useState(3);
//
//     const handleViewMore = () => {
//         setDisplayedElements(displayedElements + 3);
//     };
//
//     return (
//         <div>
//             <Header />
//             <General displayedElements={displayedElements} />
//             <Button onClick={handleViewMore} />
//             <Footer />
//         </div>
//     );
// }
//
// export default Home;


// Home.js


function Home() {
    const [displayedElements, setDisplayedElements] = useState(3);
    const [isViewMore, setIsViewMore] = useState(true);

    const handleViewToggle = () => {
        setIsViewMore(!isViewMore);

        // Adjust the number of displayed elements based on the toggle state
        setDisplayedElements(isViewMore ? displayedElements + 3 : 3);
    };

    return (
        <div>
            <Header />
            <General displayedElements={displayedElements} />
            <Button onClick={handleViewToggle} isViewMore={isViewMore} />
            <Footer />
        </div>
    );
}

export default Home;
