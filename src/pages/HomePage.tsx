import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-badge">Production-ready demo</div>
        <h1 className="hero-title">
          Full-Stack App built with
          <span className="hero-highlight"> Laravel + React + MongoDB</span>
        </h1>
        <p className="hero-subtitle">
          A polished demo project with a REST API backend, type-safe React SPA, and containerized deployment support.
          Perfect for learning, presentation, or a fast prototype.
        </p>
        <div className="hero-actions">
          <Link to="/posts" className="btn btn-primary">
            View Demo CRUD
          </Link>
          <a
            href="https://hoidanit.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Hỏi Dân IT
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <strong>100%</strong>
            <span>Type-safe frontend</span>
          </div>
          <div className="stat-card">
            <strong>REST</strong>
            <span>API-first architecture</span>
          </div>
          <div className="stat-card">
            <strong>Docker</strong>
            <span>Ready to deploy</span>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-icon">&#9881;</div>
            <h3>Laravel</h3>
            <p>RESTful API, request validation, and clean Eloquent models.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">&#9883;</div>
            <h3>React + TypeScript</h3>
            <p>Fast SPA with routing, type safety, and responsive UI patterns.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">&#9776;</div>
            <h3>MongoDB</h3>
            <p>Flexible data storage for scalable CRUD workflows.</p>
          </div>
          <div className="tech-card">
            <div className="tech-icon">&#9830;</div>
            <h3>Docker</h3>
            <p>Containerized services with Docker Compose and Caddy proxy.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Core Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <span className="feature-check">&#10003;</span>
            <span>RESTful API with versioning (api/v1) cc</span>
          </div>
          <div className="feature-item">
            <span className="feature-check">&#10003;</span>
            <span>Full CRUD operations with pagination</span>
          </div>
          <div className="feature-item">
            <span className="feature-check">&#10003;</span>
            <span>Server-side validation using Form Requests</span>
          </div>
          <div className="feature-item">
            <span className="feature-check">&#10003;</span>
            <span>Type-safe React components and UI flow</span>
          </div>
          <div className="feature-item">
            <span className="feature-check">&#10003;</span>
            <span>Client routing with React Router v7</span>
          </div>
          <div className="feature-item">
            <span className="feature-check">&#10003;</span>
            <span>Production-ready Docker multi-stage build</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
