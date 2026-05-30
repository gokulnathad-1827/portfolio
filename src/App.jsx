import profile from "./assets/profile.jpg"
import resume from "./assets/resume.pdf"
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useState } from "react"
import "./App.css"
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState("dark")
  const themeClass = theme === "light" ? "light-theme" : "dark-theme"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <div className={`${themeClass} min-h-screen`}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 sticky top-0 backdrop-blur-md z-50">

        <h1 className="text-2xl md:text-3xl font-bold text-green-400">
          GOKULNATH
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-lg">

          <li>
            <a href="#home" className="text-xl text-gray-300 hover-glow">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="text-xl text-gray-300 hover-glow">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="text-xl text-gray-300 hover-glow">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="text-xl text-gray-300 hover-glow">
              Projects
            </a>
          </li>

          <li>
            <a href="#certifications" className="text-xl text-gray-300 hover-glow">
              Certifications
            </a>
          </li>

          <li>
            <a href="#contact" className="text-xl text-gray-300 hover-glow">
              Contact
            </a>
          </li>

          {/* Theme Button */}

          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 rounded-full border border-green-400/30 px-4 py-2 text-lg hover:bg-green-400 hover:text-black transition"
            >
              {theme === "light" ? "☀️" : "🌙"}
            </button>
          </li>

        </ul>

        {/* Mobile Controls */}

        <div className="flex items-center gap-4 md:hidden">

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-green-400/30 px-3 py-2 hover:bg-green-400 hover:text-black transition"

          >

            {theme === "light" ? "☀️" : "🌙"}

          </button>

          <button
            className="text-3xl text-green-400 hover-glow"
            onClick={() => setMenuOpen(!menuOpen)}

          >

            ☰

          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (

          <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-8 md:hidden border-b border-green-400/20">

            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover-glow"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover-glow"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover-glow"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover-glow"
            >
              Projects
            </a>

            <a
              href="#certifications"
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover-glow"
            >
              Certifications
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-xl text-gray-300 hover-glow"
            >
              Contact
            </a>

          </div>
        )}

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center min-h-screen pt-32 overflow-hidden px-5"
      >

        {/* Glow Effect */}
        <div className="absolute w-80 h-80 bg-green-500 rounded-full blur-[120px] opacity-20"></div>

        <div className="z-10 flex flex-col items-center">

          {/* Profile Image */}
          <img
            src={profile}
            alt="Profile"
            className="p-1.5 w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-4 border-green-400 shadow-[0_0_25px_rgba(74,222,128,0.5)] hover:shadow-[0_0_40px_rgba(74,222,128,0.8)] transition-all duration-500 float-animation"
          />

          <h2 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <br />

            <span className="text-green-400">
              Gokulnath D
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-xl max-w-2xl leading-relaxed px-5">
            Full Stack Developer & AI Enthusiast passionate about
            building modern web applications and intelligent solutions.
          </p><br />
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-green-400 px-5 py-2.5 text-sm font-semibold text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-green-400 px-5 py-2.5 text-sm font-semibold text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/gokulnathad-1827"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-gray-300 hover-glow"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/gokulnathad1827"
              target="_blank"
              rel="noreferrer"
              className="text-4xl text-gray-300 hover-glow"            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-45 bg-black">

        <div className="max-w-6xl mx-auto flex flex-col gap-16 items-center">

          {/* Left Side */}
          <div className="text-center">

            <h2 className="text-5xl font-bold mb-8 text-green-400">
              About Me
            </h2><br />

            <p className="text-gray-200 text-lg leading-9">
              I am Gokulnath D, a passionate Full Stack Developer and
              B.Tech Artificial Intelligence and Data Science student at
              Karpagam College of Engineering, Coimbatore.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-9">
              I have a strong interest in modern web technologies,
              software development, and AI-powered applications.
              I enjoy building innovative projects and continuously
              improving my technical and problem-solving skills.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-9">
              My goal is to become a skilled software engineer and
              contribute to impactful real-world solutions through
              Full Stack Development and Artificial Intelligence.
            </p>

          </div>

          {/* Right Side */}
          <div className="bg-black p-10 rounded-3xl border border-green-400/20 hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">

            <div className="space-y-8 text-center">

              {/* Education */}
              <div>
                <h3 className="text-green-400 text-xl font-semibold">
                  🎓 Education
                </h3>

                <p className="text-gray-300 mt-2">
                  B.Tech Artificial Intelligence and Data Science
                  <br />
                  Karpagam College of Engineering
                </p>
              </div>

              {/* Schooling */}
              <div>
                <h3 className="text-green-400 text-xl font-semibold">
                  🏫 Schooling
                </h3>

                <p className="text-gray-300 mt-2">
                  Sri Venkateswara Matriculation Higher Secondary School
                  <br />
                  Higher Secondary Certificate (HSC)
                </p>
              </div>

              {/* Leadership */}
              <div>
                <h3 className="text-green-400 text-xl font-semibold">
                  🚀 Leadership
                </h3>

                <p className="text-gray-300 mt-2">
                  Treasurer of IEEE KCE Student Branch CIS Society
                </p>
              </div>

            </div>

          </div>

        </div>

      </section >

      {/* Skills Section */}
      < section id="skills" className="px-6 py-45 bg-black" >
        <div className="max-w-5xl mx-auto ">

          <h2 className="text-5xl font-bold text-center text-green-400 mb-12 ">
            Technical Skills
          </h2><br />

          <div className="bg-[#111] border border-green-400/20 rounded-3xl p-8 shadow-lg hover:border-green-400 hover:scale-105 hover:-translate-y-2 hover:shadow-green-500/20 transition duration-300">

            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  🎨 Frontend
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>❖ HTML</li>
                  <li>❖ CSS</li>
                  <li>❖ JavaScript</li>
                  <li>❖ React.js</li>
                  <li>❖ Tailwind CSS</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  ⚙️ Backend & Database
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>❖ Node.js</li>
                  <li>❖ MongoDB</li>
                  <li>❖ MySQL</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  🛠️ Tools & Technologies
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>❖ Git</li>
                  <li>❖ GitHub</li>
                  <li>❖ n8n Automation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  💻 Programming Languages
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>❖ Java</li>
                  <li>❖ Python</li>
                  <li>❖ JavaScript</li>
                </ul>
              </div>

            </div>

            <div className="mt-8 border-t border-green-400/20 pt-6">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">
                🤝 Soft Skills
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>❖ Problem Solving</li>
                <li>❖ Team Collaboration</li>
              </ul>
            </div>

          </div>

        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="px-14 py-45 bg-black" >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16 text-green-400">
            My Projects
          </h2><br />

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="bg-black rounded-3xl overflow-hidden border border-green-400/20 hover:border-green-400 hover:scale-[1.02] shadow-lg hover:shadow-green-500/20 transition duration-300">

              <div className="h-56 bg-linear-to-r from-green-500 to-emerald-700"></div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4 text-green-400">
                  Attendance Tracker System
                </h3>

                <p className="text-gray-300 leading-8">
                  Developed a digital attendance management system to automate
                  attendance recording, monitoring, and report generation,
                  improving accuracy and reducing manual workload.
                </p>

                <div className="flex gap-3 mt-6 flex-wrap">
                  <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-xl">
                    React
                  </span>

                  <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-xl">
                    Node.js
                  </span>

                  <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-xl">
                    MongoDB
                  </span>
                </div>
                <div className="mt-8 flex gap-4 flex-wrap">

                  <a
                    href="https://github.com/gokulnathad-1827/attendance-tracker-system"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">
                    GitHub
                  </a>

                  <a
                    href="https://gokulnath-attendance.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">                    Live Demo
                  </a>

                </div>
              </div>

            </div>

            {/* Project 2 */}
            <div className="bg-black rounded-3xl overflow-hidden border border-green-400/20 hover:border-green-400 hover:scale-[1.02] shadow-lg hover:shadow-green-500/20 transition duration-300">

              <div className="h-56 bg-linear-to-r from-green-500 to-lime-700"></div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4 text-green-400">
                  CampusAssist AI
                </h3>

                <p className="text-gray-300 leading-8">
                  Developed an AI-powered college helpdesk chatbot using
                  Machine Learning and Natural Language Processing (NLP)
                  to automate student query handling and provide instant responses.
                </p>

                <div className="flex gap-3 mt-6 flex-wrap">
                  <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-xl">
                    Python
                  </span>

                  <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-xl">
                    NLP
                  </span>

                  <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-xl">
                    AI/ML
                  </span>
                </div>
                <div className="mt-8 flex gap-4 flex-wrap">

                  <a
                    href="https://github.com/gokulnathad-1827/campusassist-ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">                    GitHub
                  </a>

                  <a
                    href="https://chatbot-project-d5cz.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">
                    Live Demo
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>

      </section >

      {/* Certifications Section */}
      < section id="certifications" className="px-10 py-24 bg-black" >
        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16 text-green-400">
            Certifications
          </h2><br />

          <div className="bg-[#111] border border-green-400/20 rounded-3xl p-8 shadow-lg hover:border-green-400 hover:scale-105 hover:-translate-y-2 hover:shadow-green-500/20 transition duration-300">

            {/* Certification 1 */}
            <div className="flex justify-between items-center py-5 border-b border-green-400/10">
              <div>
                <h3 className="text-green-400 font-semibold text-xl">
                  Internet of Things
                </h3>
                <p className="text-gray-300">
                  NPTEL (IIT Kharagpur)
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-400">
                  Jan – Apr 2026
                </span>

                <a
                  href="https://drive.google.com/file/d/18flX9X44qix_uotVy77PPlCgF9ZanFeG/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300"                >
                  View
                </a>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="flex justify-between items-center py-5 border-b border-green-400/10">
              <div>
                <h3 className="text-green-400 font-semibold text-xl">
                  AI & Machine Learning
                </h3>
                <p className="text-gray-300">
                  Remark Skill Education & Pragyan, NIT Trichy
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-400">
                  Feb 2026
                </span>

                <a
                  href="https://drive.google.com/file/d/1baw0DHLCwynIopi-v6bA89azz67RJID7/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">                 
                   View
                </a>
              </div>
            </div>

            {/* Certification 3 */}
            <div className="flex justify-between items-center py-5 ">
              <div>
                <h3 className="text-green-400 font-semibold text-xl">
                  n8n Automation
                </h3>
                <p className="text-gray-300">
                  LetsUpgrade Edtech Pvt. Ltd.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-400">
                  May 2026
                </span>

                <a
                  href="https://drive.google.com/file/d/1iaSuziCub3u2MniPrNLLvax7zoO1Lkqt/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">
                  View
                </a>
              </div>
            </div>

          </div>
        </div>
      </section >

      {/* Research & Publications */}
      < section className="px-0 py-0 bg-black" >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16 text-green-400">
            Research & Publications
          </h2><br />

          <div className="bg-[#111] p-10 rounded-3xl border border-green-400/20 hover:border-green-400 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">

            <h3 className="text-3xl font-bold text-green-400 mb-6">
              📘 Deep Learning-Driven Solar Power Forecasting for Smart Grid Optimization
            </h3>

            <p className="text-gray-300 leading-9 text-lg">
              Published in IEEE Conference Proceedings, focusing on deep learning
              techniques for renewable energy forecasting and smart grid optimization.
            </p><br/>
            <center>
              <a
                href="https://ieeexplore.ieee.org/document/11416716"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-green-400/30 px-4 py-3 md:px-4 md:py-2 text-sm font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300"
                >
                View Publication
              </a>
            </center>

          </div>

        </div>

      </section >

      {/* Contact Section */}
      <section id="contact" className="px-5 md:px-20 py-24 md:py-40 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-green-400">
            Contact Me
          </h2>

          <p className="text-base md:text-xl text-gray-300 leading-8 md:leading-9 mb-8">
            Feel free to connect with me for collaborations, projects, or internship opportunities.
          </p><br />

          <ul className="space-y-5">

            {/* Email */}
            <li>
              <a
                href="mailto:gokulnath.ad.1827@gmail.com"
                className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-green-400/30 px-4 py-3 text-sm md:text-base font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300"
              >
                <FaEnvelope className="text-xl md:text-2xl transition-transform duration-300" />
                <span className="text-sm md:text-lg break-all">
                  gokulnath.ad.1827@gmail.com
                </span>
              </a>
            </li>

            {/* Phone */}
            <li>
              <a
                href="tel:+917639499348"
                className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-green-400/30 px-4 py-3 text-sm md:text-base font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300"
              >
                <FaPhone className="text-xl md:text-2xl transition-transform duration-300" />
                <span className="text-sm md:text-lg">
                  +91 7639499348
                </span>
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href="https://wa.me/917639499348"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-green-400/30 px-4 py-3 text-sm md:text-base font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300"
              >
                <FaWhatsapp className="text-xl md:text-2xl transition-transform duration-300" />
                <span className="text-sm md:text-lg">
                  WhatsApp: +91 7639499348
                </span>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://linkedin.com/in/gokulnathad1827"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-green-400/30 px-4 py-3 text-sm md:text-base font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300"
              >
                <FaLinkedin className="text-xl md:text-2xl transition-transform duration-300" />
                <span className="text-sm md:text-lg break-all">
                  linkedin.com/in/gokulnathad1827
                </span>
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href="https://github.com/gokulnathad-1827"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-full border border-green-400/30 px-4 py-3 text-sm md:text-base font-semibold text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300"
              >
                <FaGithub className="text-xl md:text-2xl transition-transform duration-300" />
                <span className="text-sm md:text-lg break-all">
                  github.com/gokulnathad-1827
                </span>
              </a>
            </li>

          </ul>

        </div>
      </section>

      {/* Footer */}
      < footer className="border-t border-gray-800 py-8 text-center bg-black" >

        <h2 className="text-2xl font-bold text-green-400">
          Gokulnath D
        </h2>

        <p className="text-gray-400 mt-4">
          Full Stack Developer & AI Enthusiast
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © 2026 Gokulnath D. All rights reserved.
        </p>

      </footer >

    </div >
  )
}

export default App