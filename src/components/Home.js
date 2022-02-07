import React from 'react';
import Intro from './Intro'
import './Home.css'
import StarfieldAnimation from 'react-starfield-animation'
import {motion} from "framer-motion"
import { SocialIcon } from 'react-social-icons';
import { saveAs } from "file-saver";
import Button from '@material-ui/core/Button';

function Home() {

  const intro="i like to use computer science and mathemetics to solve interesting problems, please checkout my youtube channels";
  const sentence={
    hidden:{opacity:1},
    visible:{
      opacity:1,
      transition:{
        delay:0.5,
        staggerChildren:0.08,
      },
    },

  }

  const letter={
    hidden:{opacity:0,y: 50},
    visible:{
      opacity:1,
      y: 0,
    }


  }
  const saveFile = () => {
    saveAs(
      "/zhangzhuyan.pdf",
      "zhangzhuyan.pdf"
    );
  };
  return <div className='main'>
  <div className='left-half'> 
  
  <div className="moving_text">  <Intro />   </div> 
  
  
  <div className='description_text'>
   <motion.h1 variants={sentence} initial="hidden" animate="visible"> {

     intro.split("").map((char,index)=>{

      return (
        <motion.span key={char+"-"+index} variants={letter}>{char}</motion.span>
      )
     })
   } </motion.h1>
   </div>
  <motion.div 
  
  
  initial={{scale:0}}
  animate={{scale:1}}
  transition={{
      duration:1 ,delay: 0.4
      }}
  className='socialIcons'>

  <SocialIcon className='icon' url="https://www.linkedin.com/in/zhangzhuyan987654321/" style={{ height: 60, width: 60 }}/>
  <SocialIcon className='icon' bgColor="#ffffff" url="https://github.com/zhanggiene" style={{ height: 60, width: 60 }}/>
  <SocialIcon className='icon' url="https://www.youtube.com/channel/UCt7UbVp-6Qd2adxN-nkaxwQ" style={{ height: 60, width: 60 }} />

  </motion.div>

<motion.div 

initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{
      duration:5 ,delay: 0.4
      }}
className='resumeButton'>
  <Button variant="contained" color="secondary">
        DOWNLOAD RESUME
      </Button>
      </motion.div>
  
  
  
  
  </div>
  
  <div class="right-half">

  <h1></h1>

  <motion.div 
  
  
  initial={{y:50,opacity:0}}
  animate={{y:0,opacity:1}}

  transition={{
    duration:2 ,delay:0
    }}

  class="image"></motion.div>

  <div className='uniText'><h1> Nanyang Technology University </h1>
  <h1>        2019-2023</h1>
  </div>
  </div>



 

</div>;



}

export default Home;






/*

  return <div className='main'>
      <div className='left-half'> <Intro/></div>
      
      <div class="right-half">

      <motion.div 
      
      
      initial={{y:50,opacity:0}}
      animate={{y:0,opacity:1}}

      transition={{
        duration:2 ,delay:0
        }}

      class="image"></motion.div>
      </div>



     

  </div>;

<StarfieldAnimation
style={{
  position: 'absolute',
  width: '100%',
  height: '100%'
}}
/>
*/
