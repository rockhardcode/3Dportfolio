import Globe from "../GeomentryComponents/Globe";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Stars, Points, PointMaterial } from "@react-three/drei";
import "../../assets/styles/ContactMe.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColladaLoader } from "three/addons/loaders/ColladaLoader";
import { useSprings, a } from "@react-spring/three";
import { IoCallSharp } from "react-icons/io5";
import ContactCard from "../CommonComponents/ContactCard";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const ContactDetails = [
  { name: "PHONE", desc: "+91 6301669130", icon: <IoCallSharp size="1.8em" /> },
  {
    name: "EMAIL",
    desc: "rakesh.aksh7@gmail.com",
    icon: <MdEmail size="1.8em" />,
  },
  {
    name: "LOCATION",
    desc: "Kurnool (Dist), A.P",
    icon: <IoLocation size="1.8em" />,
  },
];

const length = 35;
const colors = [
  "#A2CCB6",
  "#FCEEB5",
  "#EE786E",
  "#e0feff",
  "lightpink",
  "lightblue",
];
const data = Array.from({ length }, () => ({
  args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
}));
const random = (i) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  };
};

function Content() {
  const [springs, set] = useSprings(length, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));
  useEffect(
    () =>
      void setInterval(
        () => set((i) => ({ ...random(i), delay: i * 40 })),
        3000
      ),
    []
  );
  return data.map((d, index) => (
    <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry args={d.args} />
      <a.meshStandardMaterial
        color={springs[index].color}
        roughness={0.75}
        metalness={0.5}
      />
    </a.mesh>
  ));
}
const ContaceMe = () => {
  const form = useRef();
  const [response, setResponse] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1p3cgkf', 'template_ztexwxa', form.current, 'XGn9tFQ-UTzJUXVAg')
      .then((result) => {
          console.log(result);
          setResponse(result)
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    if(response === "OK") {
      
    }
  }, [response])
  return (
    <div className="contact-me">
      <div className="moving-box">
        <Canvas flat shadows camera={{ position: [0, 0, 100], fov: 100 }}>
          <pointLight intensity={0.5} />
          <ambientLight intensity={1} />
          <spotLight
            castShadow
            intensity={0.2}
            angle={Math.PI / 7}
            position={[150, 150, 250]}
            penumbra={1}
            shadow-mapSize={2048}
          />
          <Content />
        </Canvas>
      </div>
      <div className="about-card-contact">
        <div className="get-in-touch">
          <div className="get-in-text">Get In Touch</div>
          <div className="underline"><div className="underline-container"></div></div>
        </div>
        <div className="details">
          <div className="contact-details">
            {ContactDetails.map((item) => {
              return (
                <ContactCard
                  name={item.name}
                  desc={item.desc}
                  icon={item.icon}
                />
              );
            })}
            <div className="link-container">
              <div>
              <FaLinkedin size="1.8em"/>
              </div>
              <div>
              <FaGithubSquare size="1.8em"/>
              </div>
            </div>
          </div>
          <div className="line-contact">
            <div className="line-inner"></div>
          </div>
          <div className="email-form">
            <form ref={form} onSubmit={sendEmail} className="form-container">
              <div>
                <input
                  className="inpt-field"
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                ></input>
                <input
                  className="inpt-field"
                  type="email"
                  placeholder="Email"
                  name="user_email"
                ></input>
              </div>
              <div>
                <input
                  className="inpt-field"
                  type="text"
                  placeholder="Subject"
                  style={{ width: "95%" }}
                  name="user_subject"
                ></input>
              </div>
              <div>
                <textarea
                  className="inpt-field"
                  type="textarea"
                  placeholder="Say something"
                  name="message"
                  style={{
                    width: "95%",
                    paddingBottom: "80px",
                    maxWidth: "350px",
                  }}
                ></textarea>
              </div>
              <div>
                <button type="submit" class="button-56" role="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContaceMe;
