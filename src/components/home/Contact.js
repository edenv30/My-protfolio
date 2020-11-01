import React, { useState } from "react";
import { contactDescription } from '../../assests/configurations.json';
import {
  icons,
} from '../../assests/configurations.json';
import * as emailjs from 'emailjs-com';

const serviceIDemailJS = 'service_x32xfgo';
const templateIDemailJS = 'template_yv9mt2y';
const userIDemailJS = 'user_BRhs6IHAGRGZDoLoKFVbZ'

const Contact = () => {

  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const [hoverstatus, setHoverstatus] = useState(
    new Array(icons.length).fill("socialicons")
  );

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
        newhoverStatus[data.icon.id] = "socialicons";
        return setHoverstatus(newhoverStatus);
    }
  };

  const checkValidation = () => {
    if(name && email && subject && msg )
      return true;
    return false;
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMsg('');
  };

  const sendMessage = async (event) => {
      event.preventDefault();
      const flag = checkValidation();
      if (flag){
        const templateParams = {
          from_name: name,
          from_email: email,
          to_name: 'EDEN',
          subject,
          message: msg,
        };
        emailjs.send(
          serviceIDemailJS,
          templateIDemailJS,
          templateParams,
          userIDemailJS
        )
        .then(
          function(response) {
            if(response.status === 200){
            alert(`Thanks for your contact!\n Your message sent to Eden, She will contact you back within 24 hours!`);
            resetForm();
          }
            // console.log("SUCCESS!", response.status, response.text);
          },
          function(err) {
            alert("Your message was not able to be sent");
          }
        );        
      }
      else {
        alert('You must fill all the details');
      }
      
    };

    

    return (
        <div id="contactme" className="jumbotron jumbotron-fluid m-0">
        <div className="container container-fluid p-5">
          <div className="row">
              <div className="col-5 d-none d-lg-block align-self-center">
                <h1 className="display-4 mb-5 text-center">Contact</h1>
                {icons.map((icon) => (
                 <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                  >
                  <i
                      className={
                          `${(icon.id === 5)? `fas` : `fab`} ${icon.image}  fa-3x ${hoverstatus[icon.id]}`
                        }
                      onMouseOver={() => toggleHover({ icon, event: "enter" })}
                      onMouseOut={() => toggleHover({ icon, event: "leave" })}
                  />
                  </a>
                ))}
                  <p className="lead text-center">{contactDescription}</p>
              </div>
            <div className={`col-lg-7`}>
              <h1 className="display-4 mb-5 text-center">Send a message</h1>
              <form id="contact-form">
                <div className="form-group">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 mx-auto">
                            <input
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                id="name"
                                placeholder='Name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group hidden">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <input
                        type="email"
                        name="_replyto"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group hidden">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <input
                        type="text"
                        name="subject"
                        className="form-control form-control-lg"
                        id="subject1"
                        placeholder='Your subject'
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group hiddenRight">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <textarea
                        name="message"
                        className="form-control form-control-lg"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder='Write your message...'
                        value={msg}
                        onChange={e => setMsg(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row text-md-right text-sm-center">
                  <div className="col-12 col-sm-12 col-md-6 mx-auto">
                    <button
                        type="submit"
                        value="Send"
                        className="btn btn-outline-light btn-lg"
                        onClick={ (event) => sendMessage(event)}>
                        Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Contact;