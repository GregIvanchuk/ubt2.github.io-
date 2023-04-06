import styles from "./Main.module.css";
import { Helmet } from "react-helmet";
import SecondSlider from "./SecondSlider";
import Services from "./Services";
import YellowBlock from "./YellowBlock";
import MainSlider from "./MainSlider";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card";
import ForUs from "./ForUs";
import HowWEWork from "./HowWeWork";

// import testSlider from "./testSlider";
function Main({ parentData }) {
    const sectionRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        if (location.hash && sectionRef.current) {
            const element = sectionRef.current.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <main>
                <section ref={sectionRef} id="home">
                    <MainSlider />
                </section>
                <div className="container">
                    {/* <div className={styles.yellowBlock}>
                        <h1>ЗРУЧНІ ТА ДОСТУПНІ ПРОЕКТИ ДИЗАЙНУ ІНТЕР’ЄРУ</h1>
                        <button className={styles.detail}>Детальніше</button>
                    </div> */}
                    {/* <testSlider/> */}
                    <section id="services"><Services /></section>
                  
                    <section className={styles.projects} id="projects">
                        <Card />
                    </section>
                    <section id="about">
                      <HowWEWork/>
                      <ForUs />
                    <YellowBlock />
                    {/* <SecondSlider />  */}
                    </section>
                </div>
            </main>
        </>
    );
}
export default Main;
