import React from "react";
const GetInTouch = ({heading,message,email}) => <div id="contact"><p className="eyebrow">Get in touch</p><h2>{heading}</h2><p>{message}</p><a className="contact-email" href={`mailto:${email}`}>{email} ↗</a></div>;
export default GetInTouch;
