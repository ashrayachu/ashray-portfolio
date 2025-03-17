import { motion } from "framer-motion";
import Navbar from "../Navbar";


const anim = (variants) => {

  return {

    initial: "initial",

    animate: "enter",

    exit: "exit",

    variants

  }

}



export const opacity = {

  initial: {

    opacity: 0

  },

  enter: {

    opacity: 1,

    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1]

    }

  },

  exit: {

    opacity: 1

  }

}

export const perspective = {

  initial: {

    scale: 1,

    y: 0,

  },

  enter: {

    scale: 1,

    y: 0,

  },

  exit: {

    scale: 0.9,

    y: -150,

    opacity: 0.5,

    transition: {

      duration: 1.5,

      ease: [0.76, 0, 0.24, 1]

    }

  }
}

export const slide = {

  initial: {

    y: "100vh",

  },

  enter: {

    y: "100vh"

  },

  exit: {

    y: 0,

    transition: {

      duration: 1,

      ease: [0.76, 0, 0.24, 1]

    }

  }

}
export default function Inner({ children }) {
  return (
    <div className="inner bg-black">
      <motion.div className='slide bg-white fixed h-screen w-full top-0 left-0  z-10' {...anim(slide)} />
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)} className=" bg-white bg-grid-gray-300">
          <Navbar />
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
