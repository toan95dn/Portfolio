const containerVariants_1 = {
  hidden: {
    opacity: 0,
    x: "100vw",
    rotate: "90deg",
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4 },
    x: 0,
    rotate: 0,
  },
  exit: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.4 },
    x: "-100vw",
  },
};

const containerVariants_2 = {
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

const containerVariants_3 = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    rotate: "90deg",
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4 },
    x: 0,
    rotate: 0,
  },
  exit: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.4 },
    x: "-100vw",
  },
};

const AllContainerVariants = [
  containerVariants_1,
  containerVariants_2,
  containerVariants_3,
];

export default AllContainerVariants;
