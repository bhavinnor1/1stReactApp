import React from "react";

const Contact = () => {
    return (
        <div className="center">
            <h1 style={{ marginTop: '80px', textAlign: 'center' }}>Contact us</h1>
            <div class="form-container">
                <div class="sub-form-container">
                    <input type="text" placeholder="Your Name" id="f1" name="name" width="50%" />
                    <input type="text" placeholder="Your Email" id="f2" name="email" width="50%" />
                    <input type="text" placeholder="Subject" name="subject" />
                    <textarea placeholder="Enter Your Message" name="msg" id=""></textarea>
                    <input type="submit" class='btn' value='SEND MESSAGE' />
                </div>
            </div>
        </div>
    )
}
export default Contact;