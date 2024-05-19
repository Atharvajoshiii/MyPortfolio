import React from "react";
import './contact.css'
import Social from "../../components/social/Social";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 id="connect"> Let's Connect </h1>
      <p id="connect-para"> Let's Build Something Together </p>
      <div className="form-div">
        <div className="right">
          <div className="form-container">
            <form className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required="" name="email" id="email" type="text"></input>
              </div>
              <div className="form-group">
                <label htmlFor="textarea">How Can I Help You?</label>
                <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
              </div>
              <button type="submit" className="form-submit-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="left">
          <Social/>
        </div>
      </div>

    </div>
  );
};

export default Contact;
