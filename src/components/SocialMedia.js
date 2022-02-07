import React from 'react';
import './SocialMedia.css'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {Stack} from '@material-ui/core'
import{motion} from 'framer-motion'
const SocialMedia = () => {
  return (
  <motion.div
  initial={{scale:0,y:-40}}
  animate={{scale:1,y:0}}
  transition={{
      scale:{duration:0.6 ,delay: 0.4}
      }}
  >
  <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github"  iconSize="5" roundness="20%" url="https://github.com/zhanggiene" size="80" />
  <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube"  iconSize="5" roundness="20%" url="https://github.com/zhanggiene" size="80" />
  <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin"  iconSize="5" roundness="20%" url="https://www.linkedin.com/in/zhangzhuyan987654321/" size="80" />
  </motion.div>);
};

export default SocialMedia;
