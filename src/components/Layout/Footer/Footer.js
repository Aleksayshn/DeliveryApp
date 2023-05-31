import "./Footer.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineFacebook } from "react-icons/ai";
export const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <span>
            <a href="https://www.facebook.com/alexsashka.belaruska" target="blank">
              <AiOutlineFacebook />
            </a>
          </span>
          <span>
            <a href="https://github.com/Aleksayshn" target="blank">
              <AiFillGithub />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/oleksandra-tiankina-6a2162201/" target="blank">
              <AiFillLinkedin />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};