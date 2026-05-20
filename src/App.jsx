import profile from "./assets/profile.jpeg"
import resume from "./assets/resume.pdf"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-md z-50">

        <h1 className="text-2xl md:text-3xl font-bold text-green-400" style={{ color: 'var(--green-primary)' }}>
          GOKULNATH
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">

          <a href="#home" className="text-2xl text-gray-300 hover-glow">
            Home
          </a>

          <a href="#about" className="text-2xl text-gray-300 hover-glow">
            About
          </a>

          <a href="#skills" className="text-2xl text-gray-300 hover-glow">
            Skills
          </a>

          <a href="#projects" className="text-2xl text-gray-300 hover-glow">
            Projects
          </a>

          <a href="#contact" className="text-2xl text-gray-300 hover-glow">
            Contact
          </a>

        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden text-3xl text-green-400">
          ☰
        </div>

      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center h-[90vh] overflow-hidden px-5"
      >

        {/* Glow Effect */}
        <div className="absolute w-80 h-80 bg-green-500 rounded-full blur-[120px] opacity-20"></div>

        <div className="z-10 flex flex-col items-center">

          {/* Profile Image */}
          <img
            src={profile}
            alt="profile"
            className="w-55 h-55 rounded-full object-cover border-4 border-green-400 shadow-[0_0_40px_rgba(74,222,128,0.6)] mb-8 hover:scale-105 transition duration-300 float-animation"
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
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href={resume}
              download
              className="bg-green-400 text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(74,222,128,0.8)] transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-green-400 px-7 py-3 rounded-2xl hover:bg-green-400 hover:text-black hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] transition duration-300"
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
      <section id="about" className="px-10 py-24 bg-[#0a0a0a]">

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
          <div className="bg-[#111] p-10 rounded-3xl border border-green-400/20 hover:border-green-400 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">

            <div className="space-y-8 text-center">

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

              <div>
                <h3 className="text-green-400 text-xl font-semibold">
                  💻 Technical Skills
                </h3>

                <p className="text-gray-300 mt-2">
                  Java, Python, JavaScript, React.js,
                  Node.js, MongoDB, MySQL, n8n
                </p>
              </div>

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

      </section>

      {/* Skills Section */}
      <section id="skills" className="px-10 py-24 bg-black">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-16 text-green-400">
            My Skills
          </h2><br />

          <div className="grid md:grid-cols-3 gap-10">

            {/* Frontend */}
            <div className="bg-[#111] p-10 rounded-3xl border border-green-400/20 hover:border-green-400 hover:scale-105 shadow-lg hover:shadow-green-500/20 transition duration-300">

              <h3 className="text-3xl font-bold text-green-400 mb-6">
                🎨 Frontend
              </h3>

              <div className="space-y-4 text-lg text-gray-300">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React.js</p>
                <p>Tailwind CSS</p>
              </div>

            </div>

            {/* Backend */}
            <div className="bg-[#111] p-10 rounded-3xl border border-green-400/20 hover:border-green-400 hover:scale-105 shadow-lg hover:shadow-green-500/20 transition duration-300">

              <h3 className="text-3xl font-bold text-green-400 mb-6">
                ⚙️ Backend
              </h3>

              <div className="space-y-4 text-lg text-gray-300">
                <p>Node.js</p>
                <p>MongoDB</p>
                <p>MySQL</p>
                <p>Git & GitHub</p>
                <p>n8n Automation</p>
              </div>

            </div>

            {/* Programming */}
            <div className="bg-[#111] p-10 rounded-3xl border border-green-400/20 hover:border-green-400 hover:scale-105 shadow-lg hover:shadow-green-500/20 transition duration-300">

              <h3 className="text-3xl font-bold text-green-400 mb-6">
                💻 Programming
              </h3>

              <div className="space-y-4 text-lg text-gray-300">
                <p>Java</p>
                <p>Python</p>
                <p>JavaScript</p>
                <p>Problem Solving</p>
                <p>Team Collaboration</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="px-10 py-24 bg-[#0a0a0a]">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16 text-green-400">
            My Projects
          </h2><br />

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="bg-[#111] rounded-3xl overflow-hidden border border-green-400/20 hover:border-green-400 hover:scale-[1.02] shadow-lg hover:shadow-green-500/20 transition duration-300">

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
                    href="https://github.com/gokulnathad-1827"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] transition duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="border border-green-400 px-5 py-2 rounded-xl hover:bg-green-400 hover:text-black hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] transition duration-300"
                  >
                    Live Demo
                  </a>

                </div>
              </div>

            </div>

            {/* Project 2 */}
            <div className="bg-[#111] rounded-3xl overflow-hidden border border-green-400/20 hover:border-green-400 hover:scale-[1.02] shadow-lg hover:shadow-green-500/20 transition duration-300">

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
                    href="https://github.com/gokulnathad-1827"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] transition duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="border border-green-400 px-5 py-2 rounded-xl hover:bg-green-400 hover:text-black hover:shadow-[0_0_20px_rgba(74,222,128,0.8)] transition duration-300"
                  >
                    Live Demo
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Certifications Section */}
      <section className="px-10 py-24 bg-black">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16 text-green-400">
            My Certifications
          </h2><br />

          <div className="grid md:grid-cols-3 gap-10">

            {/* Certificate 1 */}
            <a
              href="https://drive.google.com/file/d/18flX9X44qix_uotVy77PPlCgF9ZanFeG/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#111] p-8 rounded-3xl border border-green-400/20 hover:border-green-400 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">

                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  🌐 Internet of Things
                </h3>

                <p className="text-gray-300 leading-8">
                  NPTEL (IIT Kharagpur) — Elite Certification
                </p>

                <p className="text-gray-400 mt-4">
                  Score: 63%
                </p>

              </div>
            </a>
            {/* Certificate 2 */}
            <a
              href="https://drive.google.com/file/d/1baw0DHLCwynIopi-v6bA89azz67RJID7/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#111] p-8 rounded-3xl border border-green-400/20 hover:border-green-400 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">

                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  🤖 AI & Machine Learning
                </h3>

                <p className="text-gray-300 leading-8">
                  Workshop by Remark Skill Education
                  in association with Pragyan, NIT Trichy
                </p>

              </div>
            </a>

            {/* Certificate 3 */}
            <a
              href="https://drive.google.com/file/d/1iaSuziCub3u2MniPrNLLvax7zoO1Lkqt/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#111] p-8 rounded-3xl border border-green-400/20 hover:border-green-400 hover:-translate-y-2 shadow-lg hover:shadow-green-500/20 transition duration-300">

                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  ⚡ n8n Automation
                </h3>

                <p className="text-gray-300 leading-8">
                  Automate Everything with n8n
                  by LetsUpgrade Edtech Pvt. Ltd.
                </p>

              </div>
            </a>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="px-10 py-24 bg-[#0a0a0a]">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-10 text-green-400">
            Contact Me
          </h2>

          <p className="text-gray-300 text-xl leading-9">
            Feel free to connect with me for collaborations,
            projects, or internship opportunities.
          </p>

          <div className="mt-12 space-y-6 text-lg">

            <a
              href="mailto:gokulnath.ad.1827@gmail.com"
              className="hover:text-green-400 transition"
            >
              <p className="text-gray-300">
                📧 gokulnath.ad.1827@gmail.com
              </p>
            </a>

            <a
              href="tel:+917639499348"
              className="hover:text-green-400 transition"
            >
              <p className="text-gray-300">
                📞 +91 7639499348
              </p>
            </a>

            <a
              href="https://wa.me/917639499348"
              className="hover:text-green-400 transition"
            >
              <p className="text-gray-300">
                📲 +91 7639499348
              </p>
            </a>

            <a
              href="https://linkedin.com/in/gokulnathad1827"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <p className="text-gray-300">
                🔗 linkedin.com/in/gokulnathad1827
              </p>
            </a>

            <a
              href="https://github.com/gokulnathad-1827"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <p className="text-gray-300">
                💻 github.com/gokulnathad-1827
              </p>
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center bg-black">

        <h2 className="text-2xl font-bold text-green-400">
          Gokulnath D
        </h2>

        <p className="text-gray-400 mt-4">
          Full Stack Developer & AI Enthusiast
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © 2026 Gokulnath D. All rights reserved.
        </p>

      </footer>

    </div>
  )
}

export default App