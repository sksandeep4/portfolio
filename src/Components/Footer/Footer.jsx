import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex-col ">
        <div className="flex justify-center py-10">
          <a
            href="https://www.linkedin.com/in/sandeep-subramanya-kumar-788897148/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-links pb-2"
          >
            <i className="fa-brands fa-linkedin fa-xl text-white mx-6"></i>
          </a>
          <a
            href="https://github.com/sksandeep4"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-links pb-2"
          >
            <i className="fa-brands fa-github fa-xl text-white mx-6"></i>
          </a>
          <a
            href="https://twitter.com/maybesandeep"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-links pb-2"
          >
            <i className="fa-brands fa-x-twitter fa-xl text-white mx-6"></i>
          </a>
        </div>
        <div className="flex justify-end w-11/12">
          <a href="#" id="backtotop">
            <i className="fa-solid fa-arrow-up fa-xl text-white"></i>
          </a>
        </div>
        <div className="footer flex justify-center text-white pb-4">
          © Made by Sandeep
        </div>
      </div>
    </div>
  );
};
export default Footer;
