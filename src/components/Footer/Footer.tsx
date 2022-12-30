import { Behance, Dribble, Instagram, Twitter } from "../../assets";

export const Footer = () => {
  return (
    <div>
      <div className="footer__instagram">
        <img src={Instagram} alt="Instagram" />
      </div>

      <div className="footer__twitter">
        <img src={Twitter} alt="Twitter" />
      </div>

      <div className="footer__dribbble">
        <img src={Dribble} alt="Dribble" />
      </div>

      <div className="footer__behance">
        <img src={Behance} alt="Behance" />
      </div>
    </div>
  );
};
