"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
    {
        role: 'assistant',
        content: 'How may I assist you in learning about Victor and his resume?'
    }
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput}]
    setMessages(newMessages);
    setMessageInput('');

    const apiMessage = await fetch(
        '/api',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: newMessages })
        }
    ).then(res => res.json());
    setMessages([...messages, { role: 'system', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
            <div className="logo">VP</div>
            <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
            <ul id="menu" className={ menuOpen ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto:victordavidprieto@gmail.com">Contact</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                  </svg>
                  
            </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hi I'm</small>
                        Victor Prieto
                    </h1>
                    <p>
                        Programmer and Developer in California. Alway's looking to learn
                        and expand my abilities and capabilities. <span>Currently attending
                        California State University - Fullerton graduating December 2024
                        with a Bachelors in Computer Science and a Minor in Mathematics.</span>
                    </p>
                    <div className="call-to-action">
                        <a href="./VDP-RES.pdf" className="button black">
                            View Resume
                        </a>
                        <a href="mailto:victordavidprieto@gmail.com" className="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="#">
                            <img src="./imgs/github.png" alt="GitHub" width="48"/>
                        </a>
                        <a href="#">
                            <img src="./imgs/linkedin.png" alt="LinkedIn" width="48"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="./imgs/picture.png" alt="Victor Prieto" width="100%" />
            </div>
        </section>
        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="./imgs/html.png" alt="HTML" width="112"/>
                    <img src="./imgs/css.png" alt="CSS" width="112"/>
                    <img src="./imgs/py.png" alt="Python" width="112"/>
                    <img src="./imgs/cpp.png" alt="C++" width="112"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="112"/>
                    <img src="./imgs/html.png" alt="HTML" width="112"/>
                    <img src="./imgs/css.png" alt="CSS" width="112"/>
                    <img src="./imgs/py.png" alt="Python" width="112"/>
                    <img src="./imgs/cpp.png" alt="C++" width="112"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="112"/>
                    <img src="./imgs/html.png" alt="HTML" width="112"/>
                    <img src="./imgs/css.png" alt="CSS" width="112"/>
                    <img src="./imgs/py.png" alt="Python" width="112"/>
                    <img src="./imgs/cpp.png" alt="C++" width="112"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="112"/>
                    <img src="./imgs/html.png" alt="HTML" width="112"/>
                    <img src="./imgs/css.png" alt="CSS" width="112"/>
                    <img src="./imgs/py.png" alt="Python" width="112"/>
                    <img src="./imgs/cpp.png" alt="C++" width="112"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="112"/>
                    <img src="./imgs/html.png" alt="HTML" width="112"/>
                    <img src="./imgs/css.png" alt="CSS" width="112"/>
                    <img src="./imgs/py.png" alt="Python" width="112"/>
                    <img src="./imgs/cpp.png" alt="C++" width="112"/>
                    <img src="./imgs/vscode.png" alt="VS Code" width="112"/>
                </div>
            </div>
        </section>
        <section id="skills" className="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <h3>Backend</h3>
                    <ul>
                        <li>Python</li>
                        <li>Cpp</li>
                        <li>Sockets</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p>Hi I'm Victor Prieto, a student
                    at California State University - Fullerton. 
                    I have great interests in Machine Learning, Networks,
                     Artificial Intelligence, and almost everything Computer Science.
                    I have taken many courses which have given me tremendous experience with:
                    algorithms, data structures, C++, Python, AI, Networks and Protocols,
                    OS programming, Socket Programming, and Database management.</p>
                    <p>
                        I will soon be taking courses in Machine Learning, Advanced Networks and security,
                        Big Data, Cloud Computing and Security, Computer System Architecture, and a Mathematics
                        course to complete a Mathematics minor. I will be working on projects involving AI and
                        Machine Learning and plan to work on projects that implement chatbots.

                    </p>
                </div>
            </div>
        </section>
        <section className="work-experience container">
            <h2>
                <small>Recent</small>
                Work Experience
            </h2>
            <div className="jobs">
                <article>
                    <figure>
                        <div>
                            <img src="./imgs/workplace-1.jpg" alt="Floor Associate" width="100%"/>
                            <figcaption>
                                Floor Associate
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Floor Associate/Overnights</h3>
                    <div>2020-2021</div>
                    <p>Floor Assocaite helping customers and restocking aisles.
                        Managed a department and organized the backroom as well as unloaded
                        freight trucks.
                    </p>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="./imgs/workplace-2.jpg" alt="Warehouse Associate" width="100%"/>
                            <figcaption>
                                Warehouse Assocaite
                            </figcaption>
                        </div>
                    </figure>
                    <h3>Warehouse Associate</h3>
                    <div>2022-2023</div>
                    <p>Packaging of products to be sent out for delivery.</p>
                </article>
            </div>
        </section>
        <section id="projects" className="bento">
            <h2>
                <small>
                    Previous
                </small>
                Completed Projects
            </h2>
            <div className="bento-grid">
                <a href="https://github.com/Michael-Scrumlord/254-Project" className="bento-item">
                    <img src="./imgs/bento-1.jpg" alt="Space Website" width="100%"/>
                    </a>
                <a href="https://github.com/DannyCamacho/coin-chase-pygame" className="bento-item">
                    <img src="./imgs/bento-2.jpg" alt="Coin Chase" width="100%"/>
                    </a>
                <a href="https://github.com/BrandonChang1/cpsc471project" className="bento-item">
                    <img src="./imgs/bento-3.jpg" alt="Sockets" width="100%"/>
                    </a>
                <a href="https://github.com/vp1-2-3/Edit-Distance" className="bento-item">
                    <img src="./imgs/bento-4.jpg" alt="Edit Distance" width="100%"/>
                    </a>
                <a href="https://github.com/vp1-2-3/362proj" className="bento-item">
                    <img src="./imgs/bento-5.jpg" alt="Calculator" width="100%"/>
                    </a>
                <a href="https://github.com/vp1-2-3/Flowers-ML" className="bento-item">
                    <img src="./imgs/bento-6.jpg" alt="Machine Learning" width="100%"/>
                    </a>
            </div>
        </section>
        <section className="chatbot container">
            <h2>
                <small>
                    Talk to me
                </small>
                Chatbot
            </h2>
            <div className="chatbot-blue">
                <div className="chat-info">
                    <h3>Azure AI Chatbot</h3>
                    <p>The cahtbot functionality has been removed and is being revamped.
                    </p>
                    <p>There is also a download here if you want to go straight
                        to my resume. I am always looking for new opportunities,
                        so if you have any opportunities I seem fit for, lets get in touch!
                    </p>
                    <a href="./ResumeI.pdf" className="button black">Download Resume</a>
                </div>
                <div className="chat-box">
                    <div className="scroll-area">
                        <ul id="chat-log">
                            {messages.map((message, index) => (
                                <li key={index} className={`${message.role}`}>
                                    <span className={`avatar`}>
                                        {message.role === 'user' ? 'You' : 'AI'}
                                    </span>
                                    <div className="message">{message.content}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form onSubmit={submitForm} className="chat-message">
                        <input type="text" placeholder="Hey Victor, what skills are you best at?"
                        value={messageInput} onChange={ e => 
                            setMessageInput(e.target.value)}/>
                            <button className="button black">Send</button>
                    </form>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
