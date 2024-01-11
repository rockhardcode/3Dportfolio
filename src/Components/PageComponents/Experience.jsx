import "../../assets/styles/Experience.scss";
import CareerImg from "../CommonComponents/CareerImg";
import image1 from "../../assets/images/PaySwiff/finalps.jpg";
import image2 from "../../assets/images/Accenture/accfinal.jpg";
import image6 from "../../assets/images/Accenture/exp-back.jpg";
import image3 from "../../assets/images/FirstAmerica/finalfa2.jpg";
import image4 from "../../assets/images/AgsInfo/agsfinal.jpg";
import image5 from "../../assets/images/SystemSoft/ssfinal.jpg";
import { useRef } from "react";
import Fade from "../CommonComponents/Fade";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Typewriter from "typewriter-effect";
import ExpAnimation from "../CommonComponents/ExpAnimation";
import transform from "@react-three/gltfjsx/src/utils/transform";

const Experience = () => {
  return (
    <div className="experience-container">
        {/* <img className="exp-main-back" src={image6} alt="" /> */}
      <motion.div 
      variants={Fade("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      cx={500}
      animate={{ cx: [null, 100] }}
      className="image-exp">
      <motion.img
      className="image-main"
            style={{ width: "250px", height: "400px", "border-radius": "5px" }}
            src={image3}
            alt=""
          />
          <motion.div className="exp-msg-content">
            <div className="year-exp">( 2016-2017 )</div>
            <div className="com-name">First American Ind</div>
            <div className="com-desc">Process Associate</div>
          </motion.div>
      </motion.div>
      <motion.div 
      variants={Fade("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      cx={500}
      animate={{ cx: [null, 100] }}
      className="image-exp">
      <motion.img
      className="image-main"
            style={{ width: "250px", height: "400px", "border-radius": "5px" }}
            src={image1}
            alt=""
          />
          <motion.div className="exp-msg-content">
          <div className="year-exp">( 2017-2020 )</div>
            <div className="com-name">Payswiff Solutions</div>
            <div className="com-desc">Sr Process Associate</div>
          </motion.div>
      </motion.div>
      <motion.div 
      variants={Fade("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      cx={500}
      animate={{ cx: [null, 100] }}
      className="image-exp">
      <motion.img
      className="image-main"
            style={{ width: "250px", height: "400px", "border-radius": "5px" }}
            src={image2}
            alt=""
          />
          <motion.div className="exp-msg-content">
          <div className="year-exp">( 2021-2022 )</div>
            <div className="com-name">Accenture</div>
            <div className="com-desc">Content Moderator</div>
          </motion.div>
      </motion.div>
      <motion.div 
      variants={Fade("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      cx={500}
      animate={{ cx: [null, 100] }}
      className="image-exp">
      <motion.img
      className="image-main"
            style={{ width: "250px", height: "400px", "border-radius": "5px" }}
            src={image4}
            alt=""
          />
          <motion.div className="exp-msg-content">
          <div className="year-exp">( 2022-2022 )</div>
            <div className="com-name">Ags Infotech</div>
            <div className="com-desc">Jr Front-end Developer</div>
          </motion.div>
      </motion.div>
      <motion.div 
      variants={Fade("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      cx={500}
      animate={{ cx: [null, 100] }}
      className="image-exp">
      <motion.img
      className="image-main"
            style={{ width: "250px", height: "400px", "border-radius": "5px" }}
            src={image5}
            alt=""
          />
          <motion.div className="exp-msg-content">
          <div className="year-exp">( 2022-2023 )</div>
            <div className="com-name">System Soft</div>
            <div className="com-desc">Front-End Developer</div>
          </motion.div>
      </motion.div>
    </div>
  );
};
export default Experience;

{
  /* <div className="experience-container">
      <div className="circle-container"></div>
      <motion.div
        className="i-started"
        variants={Fade("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        exit={{ opacity: 0 }}
      >
        I Started in
        <div>2016</div>
      </motion.div>
      <div className="line-upper-cont">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 500 }}
          transition={{ duration: 3, times: [0, 0.2, 1] }}
          className="line-container"
        ></motion.div>
      </div>
      <div className="typing-effect">
        {" "}
        a &nbsp;{" "}
        <span className="effect-text">
          {" "}
          {/* <Typewriter
            options={{
              strings: ["loreamasdijsdlfjsdlfjlsdjflsdfjlsdkfjl;sdkaj"],
              autoStart: true,
              loop: false,
            }}
          /> 
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .start()
                // .stop();
            }}
          />
        </span>
      </div>
    </div> */
}

{
  /* <motion.div
       className="exp-img1"
       variants={Fade("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
       >
        <img style={{width: '250px'}} src={image1} alt="" />
       </motion.div> */
}
{
  /* <motion.div
        className="header"
        variants={Fade("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        Heading
      </motion.div>
      <motion.div
        className="description-exp"
        variants={Fade("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi modi
        laudantium odit eos nihil expedita temporibus, a fuga libero magnam
        dolore cum ab! Magnam recusandae exercitationem reprehenderit, ut
        architecto pariatur!
      </motion.div> */
}

// <div className="exp-inner-cont">
//         <motion.div
//           className="i-started"
//           variants={Fade("up", 0.2)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.7 }}
//           exit={{ opacity: 0 }}
//         >
//           2016
//           <div></div>
//         </motion.div>
//         <div className="image-exp">
//           <motion.img
//             style={{ width: "100px", height: "100px", "border-radius": "50px" }}
//             initial={{opacity: 0}}
//             animate={{opacity:1 }}
//             transition={{ duration: 3 }}
//             src={image2}
//             alt=""
//           />
//           <div className="type-name-exp">
//             <Typewriter
//               onInit={(typewriter) => {
//                 typewriter
//                   .typeString("First American company as Content moderator")
//                   .start();
//                 // .stop();
//               }}
//             />
//           </div>
//         </div>
//         <div className="line-upper-cont" style={{height: '800px'}}>
//         <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: 500 }}
//             transition={{ duration: 3, times: [0, 0.2, 1] }}
//             whileInView={"show"}
//             exit={{ opacity: 0 }}
//             className="line-container"
//           ></motion.div>
//             <div className="inner-height"></div>
//         </div>
//         <motion.div
//           className="i-started"
//           variants={Fade("up", 0.2)}
//           initial="hidden"
//           whileInView={"show"}
//           viewport={{ once: false, amount: 0.7 }}
//           exit={{ opacity: 0 }}
//         >
//           Moved in
//           <div>2016</div>
//         </motion.div>
//         <div className="image-exp">
//           <motion.img
//             style={{ width: "100px", height: "100px", "border-radius": "50px" }}
//             variants={Fade("right", 0.2)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.7 }}
//             cx={500}
//             animate={{ cx: [null, 100] }}
//             src={image3}
//             alt=""
//           />
//           <div className="type-name-exp">
//             <Typewriter
//               onInit={(typewriter) => {
//                 typewriter
//                   .typeString("In Payswiff Solutions as Merchant Retainer")
//                   .start();
//                 // .stop();
//               }}
//             />
//           </div>
//         </div>
//         <div className="line-upper-cont">
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: 500 }}
//             transition={{ duration: 3, times: [0, 0.2, 1] }}
//             className="line-container"
//           ></motion.div>
//         </div>
//         <div>hello</div>
//       </div>