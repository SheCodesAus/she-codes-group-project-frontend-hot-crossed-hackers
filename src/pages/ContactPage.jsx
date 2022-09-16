import React from "react";


function ContactPage() {
    return (     
    <section>
                <a id="Contact"></a>
        <h1 class="section-title">Connect</h1>
        <h1 class="sub-section-title">Reach out for all enquiries!</h1>
        <form className="form-box" action="https://formspree.io/f/xzbojbvy" method="post">

<div>
                <input
                    type="text"
                    id="username"
                    className="username"
                    placeholder="Enter username"
                />
            </div>
            <div>
                <input
                    type="email"
                    id="email"
                    className="email"
                    placeholder="Email"

                />
            </div>
            <div>
                <input
                    type="message"
                    id="message"
                    className="message"
                    placeholder="Message"
                />
            </div>

                <div >
                    <button type="submit" className="btn">Send</button>
                </div>
            </form>


    </section>
    );
}

export default ContactPage;