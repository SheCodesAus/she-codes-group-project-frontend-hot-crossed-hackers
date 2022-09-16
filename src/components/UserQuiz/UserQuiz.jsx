import React from "react";


function UserQuiz() {

    return (     
    <section>
        <form className="form-box" action="https://formspree.io/f/xzbojbvy" method="post">
<div>
                <input
                    type="text"
                    id="name"
                    className="name"
                    placeholder="Enter Name"
                    name="name"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="email"
                    className="email"
                    placeholder="Email"
                    name="email"
                />
            </div>
            <div>
                <input
                    type="number"
                    id="postcode"
                    className="postcode"
                    placeholder="Postcode"
                    name="postcode"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="gender"
                    className="gender"
                    placeholder="Gender"
                    name="gender"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="indigenousstatus"
                    className="indigenousstatus"
                    placeholder="Indigenous Status"
                    name="indigenousstatus"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="visionimpairment"
                    className="visionimpairment"
                    placeholder="Are you Vision Impaired?"
                    name="visionimpairment"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="lowincome"
                    className="lowincome"
                    placeholder="Are you on a Low Income?"
                    name="lowincome"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="ESOL"
                    className="ESOL"
                    placeholder="Is English your second language?"
                    name="ESOL"
                />
            </div>
            <div>
                <input
                    type="number"
                    id="birthyear"
                    className="birthyear"
                    placeholder="Year of Birth"
                    name="birthyear"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="duration"
                    className="duration"
                    placeholder="What duration of course are you looking for? "
                    name="duration"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="education"
                    className="education"
                    placeholder="What is your level of Education"
                    name="education"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="employment"
                    className="employment"
                    placeholder="What is your current Employment Status?"
                    name="employment"
                />
            </div>
            
            <div>
                <input
                    type="message"
                    id="industry"
                    className="industry"
                    placeholder="Which Industry are you working in?"
                    name="industry"
                />
            </div>

                <div >
                    <button type="submit" className="btn">Send</button>
                </div>
            </form>
    </section>
    );
}

export default UserQuiz;