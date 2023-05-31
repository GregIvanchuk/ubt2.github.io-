import styles from "./App.module.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
// import MainSlider from './components/MainSlider';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Services from "./components/Main/Services";
import ForUs from "./components/Main/ForUs";

import Contacts from "./components/Main/Contacts";
import Card from "./components/Main/Card";
import Pr1 from "./components/Main/Pr1";
import Pr2 from "./components/Main/Pr2";
import Pr3 from "./components/Main/Pr3";
import Pr4 from "./components/Main/Pr4";
import Pr5 from "./components/Main/Pr5";
import Pr6 from "./components/Main/Pr6";
import Conect from "./components/Conect/Conect";
import ButtonV from "./components/ButtonV/ButtonV";

function App() {
   
    const ScrollToTop = () => {
        const location = useLocation();
    
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
    
        return null;
      };
    // const [parentData, setParentData] = useState(0);
    // const PullData = (data) => {
    //     setParentData(data);
    // };

    return (
        <>
            <Router>
            <ScrollToTop />
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
                            path="/pr1"
                            element={<Pr1/>}
                        />
                        <Route
                            exact
                            path="/pr2"
                            element={<Pr2/>}
                        />
                        <Route
                            exact
                            path="/pr3"
                            element={<Pr3/>}
                        />
                        <Route
                            exact
                            path="/pr4"
                            element={<Pr4/>}
                        />
                        <Route
                            exact
                            path="/pr5"
                            element={<Pr5/>}
                        />
                        <Route
                            exact
                            path="/pr6"
                            element={<Pr6/>}
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
            </Router>
            <Conect/>
            <ButtonV/>
            <Footer />
           
        </>
    );
}
export default App;
