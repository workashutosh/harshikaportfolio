import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <h1>Harshita Patil</h1>
        <p>B.Tech 3rd Year Student</p>
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Harshita Patil, a passionate B.Tech 3rd-year student with
            a keen interest in software development and technology. I love
            learning new things and building projects that solve real-world
            problems.
          </p>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Project 1:</strong> A web application for task management.
            </li>
            <li>
              <strong>Project 2:</strong> A portfolio website showcasing my
              skills and achievements.
            </li>
            <li>
              <strong>Project 3:</strong> A machine learning model for
              predicting outcomes.
            </li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: harshita.patil@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/harshita-patil" target="_blank">linkedin.com/in/harshita-patil</a></p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Harshita Patil. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
