import React from "react";


function ContactPage() {
    return (     
    <section>
                <a id="Contact"></a>
        <h1 class="section-title">Connect</h1>
        <h1 class="sub-section-title">Reach out for all enquiries!</h1>
        <form action="https://formspree.io/f/xzbojbvy" method="post">

                <div class="form-item">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div class="form-item">
                    <label for="mail">Email</label>
                    <input type="email" id="mail" name="email"/>
                </div>
                <div class="form-item">
                    <label for="message"> Message</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <div class="form-item">
                    <button type="submit">Send</button>
                </div>
            </form>


    </section>
    );
}

export default ContactPage;