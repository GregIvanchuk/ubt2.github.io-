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
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <main>
                <section id="home">
                    <MainSlider />
                </section>
                <div className="container">
                    <section id="services">
                        <Services />
                    </section>
                    <section id="projects">
                        <Card callback={handleMain} />
                    </section>
                    <section id="about">
                        <ForUs /> 
                        </section>
                    <section id="contacts"><Contacts/></section>
                    {/* <SecondSlider />  */}
                </div>
            </main>
        </>
    );
}
export default Main;
