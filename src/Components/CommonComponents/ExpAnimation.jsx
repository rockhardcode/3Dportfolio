import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Typewriter from "typewriter-effect";
import Fade from "../CommonComponents/Fade";

const ExpAnimation = (image) => {
  return (
    <div className="exp-inner-cont">
      <motion.div
        className="i-started"
        variants={Fade("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        exit={{ opacity: 0 }}
      >
        Started Career
        <div>2016</div>
      </motion.div>
      <div className="image-exp">
        <motion.img
          style={{ width: "100px", height: "100px", "border-radius": "50px" }}
          variants={Fade("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          cx={500}
          animate={{ cx: [null, 100] }}
          src={image}
          alt=""
        />
        <div className="type-name-exp">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("In First American company as Content moderator")
                .start();
              // .stop();
            }}
          />
        </div>
      </div>
      <div className="line-upper-cont">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 500 }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
          className="line-container"
        ></motion.div>
      </div>
    </div>
  );
};
export default ExpAnimation;
