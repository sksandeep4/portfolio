import "./Services.css";
const Services = () => {
  return (
    <div id="services" className="my-10 mt-40">
      <hr />
      <h1 className="my-10 mb-6 text-center text-4xl text-white">Services</h1>
      <div className="flex justify-center">
        <hr className="w-1/6 mb-10" />
      </div>
      <section className="services flex m-auto w-5/6">
        {/* Service 1 */}
        <div className="service mx-10 flex-col p-4 pb-8 rounded">
          <div className="flex justify-center">
            <i className="fa-solid fa-code mt-8 mb-4 fa-xl"></i>
          </div>

          <h4 className="text-center">Web Development</h4>
          <div className="flex justify-center">
            <hr className="w-1/6 my-2 mb-4" />
          </div>
          <p className="items-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, enim
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* End of Service 1 */}
        {/* Service 2 */}
        <div className="service mx-10 flex-col p-4 pb-8 rounded">
          <div className="flex justify-center">
            <i className="fa-brands fa-sketch mt-8 mb-4 fa-xl"></i>
          </div>

          <h4 className="text-center">Web Design</h4>
          <div className="flex justify-center">
            <hr className="w-1/6 my-2 mb-4" />
          </div>
          <p className="items-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, enim
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* End of Service 2 */}
        {/* Service 3 */}
        <div className="service mx-10 flex-col p-4 pb-8 rounded">
          <div className="flex justify-center">
            <i className="fa-brands fa-android mt-8 mb-4 fa-xl "></i>
          </div>

          <h4 className="text-center">App Design</h4>
          <div className="flex justify-center">
            <hr className="w-1/6 my-2 mb-4" />
          </div>
          <p className="items-center text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, enim
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* End of Service 3 */}
      </section>
      <hr className="my-12" />
    </div>
  );
};
export default Services;
