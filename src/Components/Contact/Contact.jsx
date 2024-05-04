import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper container-fluid text-danger" id="contact">
      <div className="contact-content">

        <h2 className="text-center">
          LET'S START WORKING TOGETHER ON YOUR AMAZING PROJECT
        </h2>
        <form action="" className="contact-form mx-auto">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <input
                type="text"
                className="form-control" placeholder="First name" />
            </div>
            <div className="col-lg-6">
              <input
                type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="col-12">
              <textarea name="message" cols="30" className="mt-4 form-control message" rows="10" placeholder="Write your message here"></textarea>
            </div>
            <div className="col-12 mt-4">
              <button className=" submit-btn">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
