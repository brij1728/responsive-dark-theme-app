import { Portrait } from "../../assets";

export const Main = () => {
  return (
    <div>
      <div className="main__image">
        {/* <img src={Portrait} alt="Instagram" /> */}
      </div>

      <div className="main__text">
        <div className="main__text-1">Hello 👋</div>

        <div className="main__text-2">
          I'm <span>Miya Ruma</span>
        </div>

        <div className="main__text-3">A Designer From</div>

        <div className="main__text-4">Tokyo, Japan</div>
      </div>
    </div>
  );
};
