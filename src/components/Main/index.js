import styles from "./Main.module.css";
import { Helmet } from "react-helmet";
import SecondSlider from "./SecondSlider";
import Services from "./Services";
import MainSlider from "./MainSlider";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import ForUs from "./ForUs";
import Contacts from "./Contacts";

function Main({ handleApp }) {

    const handleMain = (data) => {
        handleApp(data);
    };
    return (
        <>
            
            <main>
                <section id="home">
                    <MainSlider />
                </section>
                <div className="container">
                        <Services /> 
                        <Card callback={handleMain} />
                        <ForUs /> 
                    <Contacts/>
                    {/* {/* <SecondSlider />  */}
                </div>
            </main>
        </>
    );
}
export default Main;
