import styles from './Pr1.module.css';
import { Link } from "react-router-dom";
import React from "react";

function Pr1() {
  const [itemIndex, setItemIndex] = React.useState(null);
  const [itemClicked, setItemClicked] = React.useState(false);

  const func = (index) => {
    setItemClicked(!itemClicked)
    setItemIndex(index);
  };

  const img = [
    "/images/Photos/pr11.JPG",
    "/images/Photos/pr12.JPG",
    "/images/Photos/pr13.JPG",
    "/images/Photos/pr14.JPG",
    "/images/Photos/pr15.JPG",
    "/images/Photos/pr16.JPG",
    "/images/Photos/pr17.JPG",
    "/images/Photos/pr18.JPG",
    "/images/Photos/pr19.JPG"
  ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.gallery}>
          {img.map((item, index) => (
            <div className={(itemIndex === index && itemClicked  )   ? styles.activeCont : styles.cont} ><img
              onClick={() => func(index)}
              key={index}
              className={(itemIndex === index && itemClicked  ) ? styles.activeImg : styles.img}
              src={item}
            />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Pr1;