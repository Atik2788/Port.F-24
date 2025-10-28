import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";




const Contact = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_dk7gbnx",
            "template_lgvhqhb",
            form.current!,
            "JFyTTbH9J9uFFBiKF"     // তোমার Public Key (API Keys থেকে)
        )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    toast.success("✅ Message sent successfully! I’ll get back to you soon via email.");
                     form.current?.reset();
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    toast.error("❌ Failed to send message. Please try again later.");
                }
            );

    };




    return (
        <section id="contact" className="dark-bg  px-6 md:px-20 py-16">
            <div className=" mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Text */}
                <div className="lg:w-1/2 flex md:flex-col flex-col justify-center">
                    <h5 className="text-gray-400 text-lg">Get in Touch</h5>
                    <h1 className="text-white text-3xl md:text-4xl font-bold mt-2">
                        Contact Me
                    </h1>
                    <p className="text-gray-400 mt-4">
                        I’m always open to discussing new projects, creative ideas, or opportunities
                        to be part of your visions. Feel free to reach out using the form.
                    </p>
                </div>


                {/* Right Form */}
                <div className="lg:w-1/2 bg-dark-deep p-8 rounded-lg shadow-lg flex-shrink-0">
                    <form ref={form} onSubmit={sendEmail} className="flex md:flex-col flex-col gap-6">
                        <input type="text"  required name="user_name" placeholder="Your Name" className="p-3 rounded dark-bg text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="email"  required name="user_email" placeholder="Your Email" className="p-3 rounded dark-bg text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text"  required name="subject" placeholder="Subject" className="p-3 rounded dark-bg text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea name="message"  required placeholder="Your Message" rows={5} className="p-3 rounded dark-bg text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" >
                        </textarea>
                        <button type="submit" className=" py-3 rounded font-semibold transition-colors button" > Send Message </button>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        pauseOnHover
                        theme="dark"
                    />


                    {/* Optional Contact Info for small screens */}
                    <div className="mt-6 text-gray-300 lg:hidden">
                        <h3 className="text-white font-semibold mb-2">Contact Info</h3>
                        <p>Email: atikur.rahman2788@gmail.com</p>
                        <p>Phone: +880 1303012788</p>
                        <p>Kishoreganj, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>

            {/* Contact Info for large screens */}
            <div className="hidden lg:flex mx-auto mt-16 justify-between text-gray-300">
                <div>
                    <h3 className="text-white font-semibold mb-2 flex justify-center items-center">Email</h3>
                    <p>atikur.rahman2788@gmail.com</p>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-2 flex justify-center items-center">Phone</h3>
                    <p>+880 1303012788</p>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-2 flex justify-center items-center">Address</h3>
                    <p>Kishoreganj, Dhaka, Bangladesh</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
