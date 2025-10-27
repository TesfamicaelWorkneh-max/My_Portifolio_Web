import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nasa from "../assets/nasa.jpg";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa"; // Success / congrats icon
import { FaTimesCircle } from "react-icons/fa"; // Error icon
const Contact = () => {
  const globeRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let rotation = 0;
    const rotate = () => {
      rotation = (rotation + 0.9) % 360;
      if (globeRef.current) {
        globeRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      requestAnimationFrame(rotate);
    };
    rotate();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },

    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    const backendURL =
      window.location.hostname === "localhost"
        ? "http://localhost:5000/api/email"
        : import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError(false);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 max-sm:py-20 overflow-x-hidden dark:bg-slate-950 backdrop-blur-sm px-6">
      <div className="w-full max-w-6xl flex justify-center max-lg:flex-col gap-4">
        <motion.div
          className="relative w-1/2 max-lg:w-full flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <div
            ref={globeRef}
            className="w-80 h-80 max-sm:w-60 max-sm:h-60 rounded-full flex items-center justify-center overflow-hidden bg-red-500"
          >
            <img
              src="Images/nasa.jpg"
              alt="Globe"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h1 className="absolute text-5xl lg:text-6xl font-bold dark:text-slate-50 text-purple-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full text-center">
            Get In{" "}
            <span className="text-red-400 underline underline-offset-8">
              Touch
            </span>
          </h1>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-1/2 dark:bg-slate-950 backdrop-blur-2xl bg-white max-lg:w-full flex flex-col justify-center gap-4 p-2 lg:py-4 rounded-md shadow-xl transition-transform duration-300 hover:scale-[1.01]"
        >
          <motion.div className="w-full flex gap-4 items-center max-sm:flex-col">
            <motion.div
              className="w-full flex-1"
              variants={cardVariants}
              custom={1}
            >
              <label htmlFor="name" className="text-xl text-red-400 font-bold">
                Name
              </label>
              <input
                ref={nameRef}
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="w-full p-3 rounded-md mt-4 dark:bg-white/10 bg-slate-950/80 backdrop-blur-md text-white placeholder:text-lg placeholder:text-white placeholder:font-bold"
              />
            </motion.div>

            <motion.div
              className="w-full flex-1"
              variants={cardVariants}
              custom={2}
            >
              <label htmlFor="email" className="text-xl text-red-400 font-bold">
                Email
              </label>
              <input
                ref={emailRef}
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="w-full p-3 rounded-md mt-4 dark:bg-white/10 bg-slate-950/80 backdrop-blur-md text-white placeholder:text-lg placeholder:text-white placeholder:font-bold"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full flex-1 flex flex-col items-start"
            variants={cardVariants}
            custom={3}
          >
            <label htmlFor="message" className="text-xl text-red-400 font-bold">
              Message
            </label>
            <textarea
              ref={messageRef}
              rows={8}
              className="w-full rounded-md mt-4 p-2 dark:bg-white/10 bg-slate-950/80 backdrop-blur-sm text-white placeholder:text-lg placeholder:text-white placeholder:font-bold"
              id="message"
              name="message"
              placeholder="Message.........."
            />
          </motion.div>

          <motion.div className="py-2" variants={cardVariants} custom={4}>
            <button
              type="submit"
              className="bg-gradient-to-r from-red-400 to-blue-500 p-2 rounded-md text-xl text-white font-bold transition-all duration-300 hover:from-blue-500 hover:to-green-400 shadow-md"
            >
              Submit
            </button>
          </motion.div>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className=" z-10 mt-4 p-3 rounded-md bg-green-500 text-white font-bold text-center"
              >
                <FaCheckCircle size={24} />
                Message sent successfully!
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-4 p-3 rounded-md bg-red-500 text-white font-bold text-center"
              >
                <FaTimesCircle size={24} />
                Failed to send message. Try again
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
