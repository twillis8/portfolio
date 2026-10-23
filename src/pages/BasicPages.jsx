import { Link } from "react-router";
export function Home() {
  return (
    <section>
      <h1>Tori Willis</h1>
      <p>
        Undergraduate student at Saint Louis University who has learned the
        process of problem solving and software development lifecycle through
        compyter science, creative expression from Studio Art, and oral and
        visual communation through Mandarin Chinese
      </p>
      <h2>Education</h2>
      <h3>Saint Louis University (Aug 2022 - May 2027)</h3>
      <ul className="plain-list">
        <li>Major: B.A. Computer Science</li>
        <li>Minors: Studio Art & Mandarin Chinese</li>
      </ul>
      <Link to="/projects">Explore my projects</Link>
    </section>
  );
}
export function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <h2>SLU Open Source Software Developer (Jan 2026 - Present)</h2>
      <ul>
        <li>Enhanced a bike/computer donation application</li>
        <li>
          Design and created new workflows for the clients and donors using the
          application
        </li>
        <li>Consulted with clients form Bworks to optomize user experience</li>
      </ul>

      <h2>Bayer Associate Software Engineer (Oct 2022 - Feb 2024)</h2>
      <ul>
        <li>Enhancing an app that Bayer crop scientists were using</li>
        <li>
          Consulted with subject matter experts in crop science throughout the
          development phase
        </li>
        <li>Supported Bayer's Crop Science IT business</li>
      </ul>

      <h2>Software Engineer Apprentice (Oct 2022 - April 2023)</h2>
      <ul>
        <li>
          Created and optimized an application that tracks Bayer employees'
          monthly performance
        </li>
        <li>
          Presented app to senior level Bayer management/officials/directors,
          etc.
        </li>
        <li>React frontend and MongoDB backend</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>Java</li>
        <li>C++</li>
        <li>Python</li>
        <li>PostgreSQL</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
}
export function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <ul className="contact-list">
        <li>
          Email: <a href="mailto:tori.willis@slu.edu">tori.willis@slu.edu</a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/twillis8"
            target="_blank"
            rel="noopener noreferrer"
          >
            twillis8
            <span className="visually-hidden"></span>
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/tori-willis21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            tori-willis21
            <span className="visually-hidden"></span>
          </a>
        </li>
      </ul>
    </section>
  );
}
export function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <Link to="/">Return home</Link>
    </section>
  );
}
