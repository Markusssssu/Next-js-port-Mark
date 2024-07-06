import { motion } from "framer-motion";

//variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index fot stoggred delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render & motion divs, each representing of the stair
  
  Each div will have the same animatoin defined by the stairs
  
  */}

      {[...Array(6)].map((_, index) => {
        return (
         <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-accent relative"
        />
        )
        
      })}
      
    </>
  );
};

export default Stairs;
