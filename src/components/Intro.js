import { motion } from "framer-motion";
import React  from "react";
import './Intro.css'
// import "./Intro.css"

// https://www.youtube.com/watch?v=hYLaPpxPDmo&ab_channel=AlejandeoDekiev

const test1="Hi,i'm"
const test2="Zhang Zhuyan"
const test3="Software developer"

const spanVariants={
    visible:{y:0,scaleY:1},
    hover:{ y:[-1,-2,-2.8,0.9,0],scaleY:[1,1.3,0.8,1,1.2],color: "blue"}
}

const list={
  visible:{
    opacity:1,
    transition:{
      when: 'beforeChildren',
      staggerChildren: 0.3
    },
  },
  hidden:{
    opacity:0,
    transition:
    {
      when : "afterChildren",
    }
  }
}
const item={
  visible:{
    opacity:1,
    y:[-1,-1.9,-2.7,1],
    scaleY:[1,1.3,0.8,1]
  },
  hidden:{
    opacity: 0,
  }
}
const Intro = () => {
  return (
    <>
      <div className="home-page">
        <section className="landing-left-section">
          <div className="text">


          <motion.h1 variants={list} initial='hidden' animate='visible'>{
            
            test1.split("").map((letter,id)=>(
            <motion.span variants={item}>
<motion.span key={id} variants={spanVariants} initial="visible" whileHover="hover">{letter}</motion.span>

</motion.span>
              ))}</motion.h1>
            <motion.h1 variants={list} initial='hidden' animate='visible'>{
            
            test2.split("").map((letter,id)=>{

              if (letter==='Z') return(
                <motion.span key={id}  style={{

                  color:"red",fontSize:"10vmin",fontWeight:"bold",
                  textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    textShadowColor: 'blue',
                
                
                }}>{letter}</motion.span>);
                else return  (
                <motion.span variants={item}>
                <motion.span key={id} variants={spanVariants} initial="visible" whileHover="hover">{letter}</motion.span>
                </motion.span>
                
                );
              })}</motion.h1>



<motion.h1 variants={list} initial='hidden' animate='visible'>{
            
            test3.split("").map((letter,id)=>(
            <motion.span variants={item}>
<motion.span key={id} variants={spanVariants} initial="visible" whileHover="hover">{letter}</motion.span>

</motion.span>
              ))}</motion.h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Intro;
