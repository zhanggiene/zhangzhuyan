

import chineseChess from './img/chineseChess.jpg'
import cube from './img/project1.png'
import opengl from './img/openglCover.png'
import snake from './img/snake.png'
import trex from './img/Trex_overview.png'
import linearregression from './img/linear_regression.png'
import dashboard from './img/dashboard.png';
export default [
    {
        id:1,
        image: chineseChess,
        title: 'Multi-player online chinese chess ',
        categories: ['Socket Programming','Python','Multi-threading'],
        description: 'Multi-player online chinese chess ',
        link: "https://github.com/zhanggiene/chinese_chess_ai"
    },
    {
        id:2,
        image: cube,
        title: "3D interactive Rubik's cube ",
        categories: ["Pyopengl","Python","Linear algebra"],
        description: "3D interactive Rubik's cube",
        link: "https://github.com/zhanggiene/Rubic_cube_animation_python"
    },

    {
        id:3,
        image: opengl,
        title: 'from a simple triangle to 3d animation',
        categories: ["C++","Opengl","Linear algebra"],
        description: '3d computer graphic decoder',
        link: "https://github.com/zhanggiene/OPENGL-SKELETON-ANIMATION-in-cPLUS-PLUS",
    },

    {
        id:4,
        image: trex,
        title: 'AI play Trex game with reinforcement learning',
        categories: ["Python","Reinforcement learning"],
        description: 'AI learn the mechanism of T-rex game on browser by self-playing',
        link: "https://github.com/zhanggiene/T_Rex_game_AI",
    },

    {
        id:5,
        image: snake,
        title: 'simple snake game',
        categories: ["C++"],
        description: 'simple snake game with my own data structure and algorithm',
        link: "https://github.com/zhanggiene/snake_game-in-c-and-sfml",
    },

    {
        
            id:6,
            image: linearregression,
            title: 'Gradient descent on linear regression in action',
            categories: ["Python"],
            description: 'animate the progress of gradient descent to achieve minumum loss',
            link: "https://github.com/zhanggiene/linear_regression",
        
    }
    ,
    {
        
        id:7,
        image: dashboard,
        title: 'Portfolio visualization website',
        categories: ["Python","Javascript","React","Flask","Redux"],
        description: 'visualise the value of portfolio by selecting different stocks',
        link: "https://github.com/zhanggiene/Dashboard",
    
}


];