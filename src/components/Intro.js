import { motion } from "framer-motion";
import "./Intro.css"


const test1="Hi, i'm"
const test2="Zhang    zhuyan"
const test3="Software developer"

const spanVariants={
    visible:{y:0,scaleY:1},
    hover:{ y:[-1,-2,-2.8,0.9,0],scaleY:[1,1.3,0.8,1,1.2],color: "blue"}
}
const Intro = () => {
  return (
    <>
      <div className="home-page">
        <section className="landing-left-section">
          <div className="text">
            <h1>{
            
            test1.split("").map((letter,id)=>(
                <motion.span key={id} variants={spanVariants} initial="visible" whileHover="hover">{letter}</motion.span>
            ))}</h1>
             <h1>{
            
            test2.split("").map((letter,id)=>(
                <span key={id}>{letter}</span>
            ))}</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Intro;
