const Hero = () => {
  return (
    <div className="hero py-10">
      <div className="image">
        <img src={"https://github.com/sksandeep4/portfolio/blob/main/src/images.png?raw=true"} alt="Sandeep.jpg" className="propic" />
      </div>
      <div className="container">
        <p /*style="float: right"*/>
          I am <span className="name-highlight">Sandeep</span>. A Full Stack
          Developer. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Obcaecati enim consectetur labore aliquid laudantium dicta nostrum
          iure quidem eveniet. Adipisci cumque blanditiis id delectus. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iusto?
        </p>
        <button className="rounded bg-[#6fecdc] text-black py-1 text-sm mt-8 px-4 contactBtnHero">
          Contact Me
        </button>
      </div>
    </div>
  );
};
export default Hero;
