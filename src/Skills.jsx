const Skills = () => {
  return (
    <div id="skills">
      <section className="section-title">
        <div className="section-title">
          <h2 className="my-20 mb-6 text-center text-4xl text-white">Skills</h2>
          <div className="flex justify-center">
            <hr className="w-1/6 mb-10" />
          </div>
        </div>

        <div className="section-center skills-center">
          <article>
            <div className="flex justify-evenly">
              {/* Left Half */}

              <div className="left-skills w-2/5">
                {/* Skill 1 */}
                <div className="skill my-8">
                  <p className="text-white my-1 ml-2">HTML</p>
                  <div className="skill-container bg-white rounded w-5/6 h-5 my-1 ml-1">
                    <div className="skill-value"></div>
                    <p className="skill-text text-center pl-2 bg-[#6fecdc] h-5 w-3/5">
                      60%
                    </p>
                  </div>
                </div>

                {/* End of Skill 1 */}
                {/* Skill 2 */}
                <div className="skill my-8">
                  <p className="text-white my-1 ml-2">CSS</p>
                  <div className="skill-container bg-white rounded w-5/6 h-5 my-1 ml-1">
                    <div className="skill-value"></div>
                    <p className="skill-text text-center pl-2 bg-[#6fecdc] h-5 w-4/6">
                      70%
                    </p>
                  </div>
                </div>
                {/* End of Skill 2 */}
                {/* Skill 3 */}
                <div className="skill my-8">
                  <p className="text-white my-1 ml-2">JavaScript</p>
                  <div className="skill-container bg-white rounded w-5/6 h-5 my-1 ml-1">
                    <div className="skill-value"></div>
                    <p className="skill-text text-center pl-2 bg-[#6fecdc] h-5 w-1/2">
                      50%
                    </p>
                  </div>
                </div>
                {/* End of Skill 3 */}
              </div>
              {/* Left Half END*/}
              {/* Right Half */}
              <div className="right-skills w-2/5">
                {/* Skill 4 */}
                <div className="skill my-8">
                  <p className="text-white my-1 ml-2">React</p>
                  <div className="skill-container bg-white rounded w-5/6 h-5 my-1 ml-1">
                    <div className="skill-value"></div>
                    <p className="skill-text text-center pl-2 bg-[#6fecdc] h-5 w-4/6">
                      65%
                    </p>
                  </div>
                </div>

                {/* End of Skill 4 */}
                {/* Skill 5 */}
                <div className="skill my-8">
                  <p className="text-white my-1 ml-2">Bootstrap</p>
                  <div className="skill-container bg-white rounded w-5/6 h-5 my-1 ml-1">
                    <div className="skill-value"></div>
                    <p className="skill-text text-center pl-2 bg-[#6fecdc] h-5 w-3/5">
                      60%
                    </p>
                  </div>
                </div>
                {/* End of Skill 5 */}
                {/* Skill 6 */}
                <div className="skill my-8">
                  <p className="text-white my-1 ml-2">Tailwind CSS</p>
                  <div className="skill-container bg-white rounded w-5/6 h-5 my-1 ml-1">
                    <div className="skill-value"></div>
                    <p className="skill-text text-center pl-2 bg-[#6fecdc] h-5 w-4/5">
                      80%
                    </p>
                  </div>
                </div>
                {/* End of Skill 6 */}
              </div>
            </div>
          </article>
        </div>
      </section>
      <hr className=" my-10" />
    </div>
  );
};

export default Skills;
