"use client";
import HomePage from "@/module/homePage/Views";
import { store } from "@/store";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Provider } from "react-redux";
export default function Home() {
  // const booleanValue = useSelector((state) => state.boolean.value);
  // const dispatch = useDispatch();
  // const handleButtonClick = () => {
  //   dispatch(toggleState()); // Dispatch the toggleState action when the button is clicked
  // };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 5, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <Box>
          {/* <button onClick={handleButtonClick}>Toggle State</button>
          <p>Boolean State: {booleanValue ? "true" : "false"}</p> */}
          <Provider store={store}>
            <HomePage />
          </Provider>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
