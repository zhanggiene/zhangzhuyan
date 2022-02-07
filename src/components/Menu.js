
import React from 'react'
import {motion} from "framer-motion"

function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item,i) =>{
                    return <motion.div className="item-con" key={item.id}
                    
                    initial={{scale:0}}
                    animate={{scale:1}}
                    whileHover={{y:-50}}
                    transition={{
                        scale:{duration:0.6 ,delay: i*0.3}
                        }}
                    >
                        <div className="item-container">
                            <img src={item.image} alt=""/>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                })
            }
        </div>
    )
}

export default Menu;