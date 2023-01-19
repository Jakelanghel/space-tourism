export const navVariants = {
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    x: "100vw",
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.5,
    },
  },
};

// const navVariants = (navIsOpen) => {
//   return width >= 800
//     ? {
//         visible: {
//           x: 0,
//           transition: {
//             duration: 0.5,
//           },
//         },
//         hidden: {
//           x: "100vw",
//         },
//         exit: {
//           x: "100vw",
//           transition: {
//             duration: 0.5,
//           },
//         },
//       }
//     : {
//         visible: {
//           x: 0,
//         },
//         hidden: {
//           x: 0,
//         },
//         exit: {
//           x: 0,
//         },
//       };
// };
