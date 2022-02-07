import React from 'react'
import {motion} from 'framer-motion'

function Button({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <motion.button 
                    
                    whileHover={
                        {  
                            textShadow: " 0px 0px 8px rgb(30,255,255)",
                            boxShadow: " 0px 0px 8px rgb(30,255,255)",
                           
                        }
                    }
                    type="button" onClick={()=> filter(cat)} className="btn">{cat}</motion.button>
                })
            }
        </div>
    )
}

export default Button;