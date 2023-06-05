function Contact() {
  return (
    <div name="Contact" className=" w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col justify-center items-center  sm:mb-18 p-4">
    
        <h1 className=" mt-9 text-4xl font-bold w-80 mb-10 border-b-4 border-gray-500">Contact details</h1>
        
        <div className="form w-[350px] sm:w-[489px] mb-[200px] sm:mb-20">
          <h3 className="font-semibold text-gray-700 text-xl text-center">GET IN TOUCH</h3>
          <h1 className="font-bold text-4xl text-center">Contact.</h1>

          <form  action="https://getform.io/f/8b1e055d-3ca6-480d-a03a-146e51d26c50"  method="POST">
            <label htmlFor="">
              <h2 className="">Your Name</h2>
              <input
                type="text"
                name="name"
                placeholder="What's your good name?"
                required
              />
            </label>

            <label htmlFor="">
              <h2>Your email</h2>
              <input
                type="email"
                name="email"
                placeholder="What's your web address?"
                required
              />
            </label>

            <label htmlFor="">
              <h2>Your Message</h2>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="What you want to say?"
                required
              ></textarea>
            </label>

            <div className="text-center">
              <button className="btn hover:scale-105 duration-200">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
