import styles from "./App.module.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
// import MainSlider from './components/MainSlider';
import Footer from "./components/Footer";
import Portfolio from "./components/Main/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Main/Services";
import ForUs from "./components/Main/ForUs";
import Gallery from "./components/Main/Gallery";
import Contacts from "./components/Main/Contacts";
import Card from "./components/Main/Card";
import GalleryKitchen from "./components/Main/GalleryKitchen";
import GalleryBadroom from "./components/Main/GalleryBadroom";
import GalleryBathroom from "./components/Main/GalleryBathroom";
import GalleryChildRoom from "./components/Main/GalleryChildRoom";
import GalleryVitals from "./components/Main/GalleryVitals";

function App() {
    // const [parentData, setParentData] = useState(0);
    // const PullData = (data) => {
    //     setParentData(data);
    // };

    return (
        <>
            <Router>
                <Header />
                {/* <MainSlider/> */}
                <div className={styles.wrapper}>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Main />}
                        />
                        <Route
                            exact
                            path="/gallery"
                            element={<Gallery/>}
                        />
                        <Route
                            exact
                            path="/galleryvit"
                            element={<GalleryVitals/>}
                        />
                        <Route
                            exact
                            path="/gallerych"
                            element={<GalleryChildRoom/>}
                        />
                        <Route
                            exact
                            path="/gallerybth"
                            element={<GalleryBathroom/>}
                        />
                        <Route
                            exact
                            path="/gallerybd"
                            element={<GalleryBadroom/>}
                        />
                        <Route
                            exact
                            path="/gallerykch"
                            element={<GalleryKitchen/>}
                        />
                        {/* <Route
                            exact
                            path="/portfolio"
                            element={<Portfolio parentData={parentData} />}
                        /> */}
                         <Route
                            exact
                            path="/projects"
                            element={<Card />}
                        /> 
                          <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="about" element={<ForUs />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    );
}
export default App;
