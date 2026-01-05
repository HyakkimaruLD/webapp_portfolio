import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for frontend-backend communication
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// Default route
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vlad Chernukha - Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body>
        <!-- Header Navigation -->
        <header class="header" id="header">
            <nav class="nav-container">
                <div class="logo">
                    <span class="logo-bracket">&lt;</span>
                    <span class="logo-text">VC</span>
                    <span class="logo-bracket">/&gt;</span>
                </div>
                <ul class="nav-menu">
                    <li><a href="#home" class="nav-link active">Home</a></li>
                    <li><a href="#about" class="nav-link">About</a></li>
                    <li><a href="#skills" class="nav-link">Skills</a></li>
                    <li><a href="#projects" class="nav-link">Projects</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <section id="home" class="hero-section">
            <div class="particles" id="particles"></div>
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="glitch" data-text="Vlad Chernukha">Vlad Chernukha</h1>
                    <div class="typing-container">
                        <span class="typing-text"></span>
                        <span class="cursor">|</span>
                    </div>
                    <p class="hero-description">
                        Aspiring Software Engineer with passion for clean code and innovative solutions
                    </p>
                    <div class="hero-buttons">
                        <a href="#projects" class="btn btn-primary">
                            <span>View My Work</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                        <a href="#contact" class="btn btn-secondary">
                            <span>Get In Touch</span>
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="image-container">
                        <div class="image-placeholder">
                            <i class="fas fa-user"></i>
                            <img src="/static/media/myself.jpg" alt="Vlad Chernukha" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
                        </div>
                        <div class="image-border"></div>
                    </div>
                </div>
            </div>
            <div class="scroll-indicator">
                <span>Scroll</span>
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about-section">
            <div class="section-container">
                <h2 class="section-title" data-aos="fade-up">
                    <span class="title-number">01.</span>
                    About Me
                    <div class="title-line"></div>
                </h2>
                <div class="about-content" data-aos="fade-up" data-aos-delay="100">
                    <div class="about-text">
                        <p>
                            I am an aspiring software engineer with a strong focus on programming and 
                            information technology. I have mid-level practical experience gained through 
                            a multi-year programming course, as well as academic and personal projects 
                            covering desktop, web, and foundational data-oriented development.
                        </p>
                        <p>
                            I am motivated to continue developing in software engineering and IT, with 
                            an emphasis on clean architecture, structured code, and practical problem-solving.
                        </p>
                        <div class="about-highlights">
                            <div class="highlight-item">
                                <i class="fas fa-code"></i>
                                <h4>Clean Code</h4>
                                <p>Writing maintainable and scalable code</p>
                            </div>
                            <div class="highlight-item">
                                <i class="fas fa-lightbulb"></i>
                                <h4>Problem Solving</h4>
                                <p>Creative solutions to complex challenges</p>
                            </div>
                            <div class="highlight-item">
                                <i class="fas fa-rocket"></i>
                                <h4>Continuous Learning</h4>
                                <p>Always exploring new technologies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="skills-section">
            <div class="section-container">
                <h2 class="section-title" data-aos="fade-up">
                    <span class="title-number">02.</span>
                    Skills & Technologies
                    <div class="title-line"></div>
                </h2>
                <div class="skills-grid">
                    <!-- Programming Languages -->
                    <div class="skill-category" data-aos="fade-up">
                        <div class="category-header">
                            <i class="fas fa-code"></i>
                            <h3>Programming Languages</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">C#</div>
                            <div class="skill-tag">C++</div>
                            <div class="skill-tag">Python</div>
                            <div class="skill-tag">JavaScript</div>
                        </div>
                    </div>

                    <!-- Core Concepts -->
                    <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
                        <div class="category-header">
                            <i class="fas fa-brain"></i>
                            <h3>Core Concepts</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">OOP</div>
                            <div class="skill-tag">Data Structures</div>
                            <div class="skill-tag">Algorithms</div>
                            <div class="skill-tag">Event-Driven Programming</div>
                            <div class="skill-tag">Generics</div>
                            <div class="skill-tag">Delegates</div>
                            <div class="skill-tag">Exception Handling</div>
                        </div>
                    </div>

                    <!-- Desktop Development -->
                    <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
                        <div class="category-header">
                            <i class="fas fa-desktop"></i>
                            <h3>Desktop Development</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">C# Windows Forms</div>
                            <div class="skill-tag">Console Applications</div>
                            <div class="skill-tag">UI Logic</div>
                            <div class="skill-tag">Event Handling</div>
                        </div>
                    </div>

                    <!-- Web Development -->
                    <div class="skill-category" data-aos="fade-up">
                        <div class="category-header">
                            <i class="fas fa-globe"></i>
                            <h3>Web & Mobile Development</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">HTML</div>
                            <div class="skill-tag">CSS</div>
                            <div class="skill-tag">JavaScript ES6</div>
                            <div class="skill-tag">jQuery</div>
                            <div class="skill-tag">DOM Manipulation</div>
                            <div class="skill-tag">React Native</div>
                        </div>
                    </div>

                    <!-- Databases -->
                    <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
                        <div class="category-header">
                            <i class="fas fa-database"></i>
                            <h3>Databases & Data</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">SQL</div>
                            <div class="skill-tag">MySQL</div>
                            <div class="skill-tag">Database Design</div>
                        </div>
                    </div>

                    <!-- Cloud & DevOps -->
                    <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
                        <div class="category-header">
                            <i class="fas fa-cloud"></i>
                            <h3>Cloud & DevOps</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">Docker</div>
                            <div class="skill-tag">Azure Cloud</div>
                        </div>
                    </div>

                    <!-- Data Science -->
                    <div class="skill-category" data-aos="fade-up">
                        <div class="category-header">
                            <i class="fas fa-chart-line"></i>
                            <h3>Data Science & ML</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">Python</div>
                            <div class="skill-tag">Jupyter Notebook</div>
                            <div class="skill-tag">Machine Learning</div>
                            <div class="skill-tag">PyTorch</div>
                            <div class="skill-tag">Neural Networks</div>
                        </div>
                    </div>

                    <!-- Tools -->
                    <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
                        <div class="category-header">
                            <i class="fas fa-tools"></i>
                            <h3>Tools & Environments</h3>
                        </div>
                        <div class="category-content">
                            <div class="skill-tag">Visual Studio</div>
                            <div class="skill-tag">VS Code</div>
                            <div class="skill-tag">Git</div>
                            <div class="skill-tag">.NET Framework</div>
                            <div class="skill-tag">3ds Max</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
            <div class="section-container">
                <h2 class="section-title" data-aos="fade-up">
                    <span class="title-number">03.</span>
                    Featured Projects
                    <div class="title-line"></div>
                </h2>
                <div class="projects-grid">
                    <div class="project-card" data-aos="fade-up">
                        <div class="project-image">
                            <div class="project-placeholder">
                                <i class="fas fa-desktop"></i>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3>Desktop Applications</h3>
                            <p>Built with C# Windows Forms featuring complex UI logic and event handling</p>
                            <div class="project-tags">
                                <span>C#</span>
                                <span>WinForms</span>
                                <span>.NET</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="project-image">
                            <div class="project-placeholder">
                                <i class="fas fa-globe"></i>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3>Web Applications</h3>
                            <p>Interactive web projects using modern JavaScript and responsive design</p>
                            <div class="project-tags">
                                <span>JavaScript</span>
                                <span>HTML/CSS</span>
                                <span>jQuery</span>
                            </div>
                        </div>
                    </div>

                    <div class="project-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="project-image">
                            <div class="project-placeholder">
                                <i class="fas fa-brain"></i>
                            </div>
                        </div>
                        <div class="project-info">
                            <h3>Machine Learning</h3>
                            <p>Data analysis and ML projects using Python and PyTorch</p>
                            <div class="project-tags">
                                <span>Python</span>
                                <span>PyTorch</span>
                                <span>Jupyter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact-section">
            <div class="section-container">
                <h2 class="section-title" data-aos="fade-up">
                    <span class="title-number">04.</span>
                    Get In Touch
                    <div class="title-line"></div>
                </h2>
                    <div class="contact-methods">
                        <a href="mailto:vladislav.ch2008@gmail.com?subject=Portfolio%20Contact" class="contact-method">
                            <i class="fas fa-envelope"></i>
                            <span>Email Me</span>
                        </a>

                    <!--    <a href="https://github.com" target="_blank" class="contact-method">
                            <i class="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>  -->

                        <a href="https://www.linkedin.com/in/vladislav-chernukha-6a0238305/" target="_blank" class="contact-method">
                            <i class="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://t.me/Trpd9" target="_blank" class="contact-method">
                            <i class="fab fa-telegram"></i>
                            <span>Telegram</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <p>Designed & Built by Vlad Chernukha</p>
            <p>&copy; 2025. All rights reserved.</p>
        </footer>

        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
