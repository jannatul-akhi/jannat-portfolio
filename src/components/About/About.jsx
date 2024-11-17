import akhi1 from "../../assets/Images/img2.png";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the Facebook icon
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl text-center font-bold mb-12">
          About Me
        </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-6">
          <img className="md:h-80 rounded-2xl" src={akhi1} alt="About img" />
          <ul>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <h1 className="text-2xl md:text-2xl font-bold leading-normal mb-3 text-opacity-30">
                  Jannatul Ferdous
                </h1>
                <p className="text-lg md:text-md leading-tight">
                  Hello! I am a front-end web developer focused on creating
                  engaging and user-friendly experiences while writing clean
                  code. Proficient in HTML, CSS, JavaScript, and ReactJS, I
                  actively embrace modern technologies to craft innovative web
                  solutions.
                </p>

                <div>
                  <ul className="flex gap-4 mt-4">
                    <a href="https://www.facebook.com/profile.php?id=100019176511052">
                      <li>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="2x"
                          color="#3b5998"
                        />
                      </li>
                    </a>
                    <a href="https://github.com/jannatul-akhi">
                      <li>
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="2x"
                          color="#333"
                        />
                      </li>
                    </a>
                    <a href="https://www.linkedin.com/in/jannatul-ferdous-87087221b/">
                      <li>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="2x"
                          color="#0077b5"
                        />
                      </li>
                    </a>
                  </ul>
                </div>

                <a href="#Resume">
                  <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-xl bg-[#465697]">
                    Resume
                  </button>
                </a>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
