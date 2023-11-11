const Projects = () => {
  return (
    <div id="projects" className="mb-20">
      <div>
        <h1 className="my-10 mb-6 text-center text-4xl text-white">Projects</h1>
        <div className="flex justify-center">
          <hr className="w-1/6 mb-10" />
        </div>
        <section className="flex justify-center">
          <div className="project-card text-center w-1/4 h-20 bg-[#cfa] m-6 mx-20">
            Project 1
          </div>
          <div className="project-card text-center w-1/4 h-20 bg-[#cfa] m-6 mx-20">
            Project 2
          </div>
        </section>
        <section className="flex justify-center">
          <div className="project-card text-center w-1/4 h-20 bg-[#cfa] m-6 mx-20">
            Project 3
          </div>
          <div className="project-card text-center w-1/4 h-20 bg-[#cfa] m-6 mx-20">
            Project 4
          </div>
        </section>
      </div>
    </div>
  );
};
export default Projects;
