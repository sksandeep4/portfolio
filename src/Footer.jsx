const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex-col ">
        <div className="flex justify-center py-10">
          <i className="fa-brands fa-linkedin fa-xl text-white mx-6"></i>
          <i className="fa-brands fa-github fa-xl text-white mx-6"></i>
          <i className="fa-brands fa-twitter fa-xl text-white mx-6"></i>
        </div>
        <div className="flex justify-end w-11/12">
          <a href="#">
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
