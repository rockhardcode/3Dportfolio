import image1 from "../../assets/images/Accenture/accenture1.jpg";
import image2 from "../../assets/images/Accenture/accenture2.jpg";
const CareerImg = () => {
  return (
    <div className="experience-container">
      <div className="upper-container">
        <div className="image-exp">
          <img src={image1} alt="" />
        </div>
        <div className="image-exp">
          <img src={image2} alt="" />
        </div>
        <div className="comp-name">
          <div className="heading">Accenture</div>
          <div className="location">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
            quia! Praesentium, minima est fugiat cumque, quibusdam
            necessitatibus vitae porro et, repellat iusto cum eveniet atque
            suscipit accusamus ipsa asperiores officiis.
          </div>
        </div>
      </div>
      <div className="lower-container">
        <div className="role-heading">Roles & Responsibilities</div>
        <div className="role-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque
          esse delectus rerum minus nihil, quos quasi libero dignissimos
          molestiae, aperiam sequi aliquid omnis hic similique sit aliquam.
          Quia, ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque
          esse delectus rerum minus nihil, quos quasi libero dignissimos
          molestiae, aperiam sequi aliquid omnis hic similique sit aliquam.
          Quia, ut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque
          esse delectus rerum minus nihil, quos quasi libero dignissimos
          molestiae, aperiam sequi aliquid omnis hic similique sit aliquam.
          Quia, ut.
        </div>
      </div>
    </div>
  );
};
export default CareerImg;
