// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     x: "100vw",
//     rotate: "90deg",
//   },
//   visible: {
//     opacity: 1,
//     transition: { delay: 0.4, duration: 0.4 },
//     x: 0,
//     rotate: 0,
//   },
//   exit: {
//     opacity: 1,
//     transition: { ease: "easeInOut", duration: 0.4 },
//     x: "-100vw",
//   },
// };

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4 },
  },
  exit: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.4 },
    scale: 0,
  },
};

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: { delay: 0.4, duration: 0.4 },
//     scale: 1,
//   },
//   exit: {
//     opacity: 1,
//     transition: { ease: "easeInOut", duration: 0.4 },
//     rotate: 180,
//     y: "-100vh",
//   },
// };

export default containerVariants;
