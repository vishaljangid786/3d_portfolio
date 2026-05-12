import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import ContactModel from "../components/ContactModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const containerRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-content", {
        opacity: 0,
        x: -50,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 80%",
        }
      });

      gsap.from(".contact-model", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".contact-model",
          start: "top 70%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setIsAnimating(true);
  const handleBlur = () => setIsAnimating(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsAnimating(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vishal Jangid",
          from_email: form.email,
          to_email: "vishaljangid80550786@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Message sent! I'll reply soon. 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setIsAnimating(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setIsAnimating(false);

          showAlert({
            show: true,
            text: "Oh no, message failed. Please try again. 😢",
            type: "danger",
          });
        }
      );
  };

  return (

    <section ref={containerRef} id="contact" className="relative flex lg:flex-row flex-col max-container section-padding">
      {alert.show && <Alert {...alert} />}

      <div className="contact-content flex-1 min-w-[50%] flex flex-col bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6 break-words">
          Get In <span className="glow-text-gold">Touch</span>
        </h1>
        <p className="text-gray-400 font-exo mb-12 text-lg break-words">
          Have a project in mind or just want to say hi? Fill out the form below.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-10"
        >
          <div className="space-y-3">
            <label className="text-[10px] font-orbitron text-[#c5a059] uppercase tracking-[0.3em] font-bold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-white/5 border-b border-white/10 p-4 text-white font-exo focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-700"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-orbitron text-[#c5a059] uppercase tracking-[0.3em] font-bold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-white/5 border-b border-white/10 p-4 text-white font-exo focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-700"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-orbitron text-[#c5a059] uppercase tracking-[0.3em] font-bold">
              Your Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full bg-white/5 border-b border-white/10 p-4 text-white font-exo focus:border-[#c5a059] outline-none transition-all resize-none placeholder:text-gray-700"
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group relative w-full py-5 bg-[#c5a059] text-black font-orbitron font-black hover:shadow-[0_0_50px_rgba(197,160,89,0.3)] transition-all overflow-hidden"
          >
            <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </form>
      </div>


      <div className="contact-model lg:w-1/2 w-full lg:h-[700px] md:h-[550px] h-[350px] pointer-events-none">

        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 50,
          }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#c5a059" />
          <Suspense fallback={<Loader />}>
            <ContactModel isAnimating={isAnimating} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;

