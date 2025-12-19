import './style.css'

// Portfolio Data
const portfolioData = {
  name: "Zienab Khaled Hassan",
  title: "Full Stack Web Developer",
  location: "Alexandria, Egypt",
  email: "zienab.khaled26@gmail.com",
  phone: "01211470485",
  github: "https://github.com/Zienab-Khaled",
  linkedin: "https://www.linkedin.com/in/zienab-khaled-hassan/",
  upwork: "https://www.upwork.com/freelancers/~011ce17067ecd83cb",
  resume: "/Zienab Khaled.pdf", // Add your resume file path here
  profileImage: "/WhatsApp Image 2025-12-19 at 00.34.03.jpeg", // Add your profile image here
  
  summary: "Experienced Backend Developer specializing in Laravel, with proficiency in PHP Native and a solid understanding of Python Django. Skilled in project management, client communication, and task delegation, ensuring efficient project delivery.",
  
  experience: [
    {
      title: "Full Stack Developer",
      company: "SehaAPP - DHBS Agency",
      period: "March 2025 - Present (Part Time)",
      responsibilities: [
        "Managing both frontend and backend development of the website.",
        "Acting as Product Owner, defining product vision, prioritizing features, and aligning development with business goals.",
        "Monitoring and optimizing website performance to nsure optimal user experience.",
      ]
    },
    {
      title: "Back-end developer",
      company: "ZONE99",
      period: "Sep 2023 - Present",
      responsibilities: [
        "Gather client requirements and prepare detailed proposal plans.",
        "Develop backend development plans and architecture.",
        "Work on integrations with AI and various third-party services.",
        "Communicate with clients, translate requirements into tasks, and ensure alignment with business needs.",
        "Oversee the team, assign tasks, and provide accurate time estimations."
      ]
    }
  ],
  
  education: [
    {
      degree: "CS50x 2023",
      institution: "Harvard",
      period: "Jun 2023 - Aug 2023",
      details: "Software Student with more than 28 assignments, 1 full stack project and one final project."
    },
    {
      degree: "Information Technology Institute",
      institution: "Alexandria",
      period: "Nov 2022 - Mar 2023",
      details: "Full Stack Web Development using PHP."
    },
    {
      degree: "Faculty of Engineering",
      institution: "Alexandria",
      period: "2017-2022",
      details: "Mechanical Engineering - Grade: good."
    }
  ],
  
  projects: [
    {
      name: "Nartik",
      type: "USA Client",
      link: "https://play.google.com/store/apps/details?id=com.nartik.clone",
      technologies: ["Laravel", "Python", "AI Integration", "Plaid API", "MySQL"],
      description: [
        "Built an AI-driven financial analysis system from scratch.",
        "Integrated Plaid for users to connect their bank accounts securely.",
        "Developed an algorithm to analyze user spending patterns and recommend the best credit cards based on potential savings.",
        "Worked with multiple third-party services for data analysis and AI-driven recommendations."
      ]
    },
    {
      name: "I Makeup",
      type: "Saudi Arabia",
      link: "https://i-makeup.com/en/?srsltid=AfmBOopP8Gu-7YqfWlEOLxRti14XbUPp6Jrta40FHjbT6GhvqYAm2am2",
      technologies: ["Laravel", "ERP System", "Payment Gateways", "Shipping APIs", "MySQL"],
      description: [
        "A full ERP system for managing cosmetics and beauty products.",
        "Implemented advanced inventory management, purchase orders, and financial tracking.",
        "Integrated multiple payment gateways (Tabby, Tamara, PayTabs, HyperPay) and shipping services (Torod, Aramex)."
      ]
    },
    {
      name: "Haj System",
      type: "Saudi Arabia",
      technologies: ["Laravel", "Kiosk System", "Frontend", "Backend", "MySQL"],
      description: [
        "A simple kiosk-based system developed for the Hajj season, allowing pilgrims to access their information quickly.",
        "Users enter their National ID, Residence ID, or Passport number to retrieve their complete Hajj itinerary.",
        "Displays accommodation details in Mecca, Mina, and Arafat, along with assigned tour guide information.",
        "Provides full travel itinerary and route details for each pilgrim's journey."
      ]
    },
    {
      name: "BuzzApex",
      type: "South Africa Client",
      link: "https://www.buzzapex.com",
      technologies: ["Laravel", "Vue.js", "Frontend", "Backend", "MySQL"],
      description: [
        "Working with a major South African organization to rebuild their existing website.",
        "Developing a new modern platform using Laravel for backend and Vue.js for frontend.",
        "Migrating from the old system while maintaining data integrity and improving user experience.",
        "Building a scalable and maintainable solution for the organization's digital presence."
      ]
    },
    {
      name: "Amoy Supply",
      type: "Saudi Arabia",
      link: "https://amoysupply.com/en/",
      technologies: ["Laravel", "B2B Platform", "Multi-shipping", "Supply Chain", "MySQL"],
      description: [
        "A B2B platform for customized cup sleeves, bags, and packaging solutions.",
        "Built a system where clients request samples or bulk orders, which are processed via the supply chain in China.",
        "Integrated shipping methods (land, sea, and air) to provide flexible logistics options."
      ]
    },
    {
      name: "Happy Ordering",
      type: "USA Client",
      technologies: ["Laravel", "Stripe API", "Multi-tenant", "Payment Processing", "MySQL"],
      description: [
        "Developed the backend for the platform.",
        "Integrated Stripe - Express for tenant and super master payment processing.",
        "Optimized the payment flow and ensured smooth financial transactions."
      ]
    },
    {
      name: "Social Followers",
      type: "CodeIgniter Project",
      technologies: ["Laravel", "API Integration", "Automation", "Social Media APIs", "MySQL"],
      description: [
        "A platform for buying and selling likes, followers, and engagement across various social media platforms.",
        "Integrated with third-party services that provide real-time social media engagement.",
        "Developed a secure and automated system for order processing and fulfillment.",
        "Managed API integrations to ensure seamless transactions and delivery of services."
      ]
    },
    {
      name: "E-Commerce Backend API",
      type: "Laravel Project",
      technologies: ["Laravel", "RESTful API", "JWT Authentication", "Payment Integration", "MySQL"],
      description: [
        "Built a comprehensive RESTful API for e-commerce platform with Laravel.",
        "Implemented JWT authentication and role-based access control (RBAC).",
        "Developed complex order management system with inventory tracking and automated notifications.",
        "Integrated multiple payment gateways with webhook handling for secure transactions."
      ]
    },
  ],
  
  skills: {
    languages: [
      { name: "Laravel", level: 95 },
      { name: "Python", level: 60 },
      { name: "Node.js", level: 60 },
      { name: "Vue.js", level: 65 }
    ],
    backend: [
      { name: "Docker", level: 65 },
      { name: "RESTful API Development", level: 100 },
      { name: "Third-Party API Integrations (Payment gateways, AI services, social media platforms)", level: 100 },
      { name: "Microservices Architecture", level: 90 },
      { name: "ERP System Development", level: 95 }
    ],
    webScraping: [
      { name: "Python Scrapy", level: 85 },
      { name: "BeautifulSoup", level: 80 }
    ],
    databases: [
      { name: "MySQL", level: 95 },
      { name: "Elasticsearch", level: 70 }
    ]
  }
};

// Loading Animation
const showLoading = () => {
  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <p class="loader-text">Loading Portfolio...</p>
    </div>
  `;
  document.body.appendChild(loader);
};

const hideLoading = () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  }
};

// Show loading
showLoading();

// App initialization
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="portfolio">
    <!-- Scroll Progress Indicator -->
    <div class="scroll-progress">
      <div class="progress-line-fill"></div>
      <a href="#home" class="progress-dot active" data-section="home">
        <span class="tooltip">Home</span>
      </a>
      <a href="#about" class="progress-dot" data-section="about">
        <span class="tooltip">About</span>
      </a>
      <a href="#experience" class="progress-dot" data-section="experience">
        <span class="tooltip">Experience</span>
      </a>
      <a href="#projects" class="progress-dot" data-section="projects">
        <span class="tooltip">Projects</span>
      </a>
      <a href="#skills" class="progress-dot" data-section="skills">
        <span class="tooltip">Skills</span>
      </a>
      <a href="#contact" class="progress-dot" data-section="contact">
        <span class="tooltip">Contact</span>
      </a>
    </div>

    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-container">
        <div class="logo logo-gradient">ZK</div>
        <div class="nav-links">
          <a href="#home" class="nav-link active">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <div class="nav-actions">
          <button class="theme-toggle" aria-label="Toggle theme">
            <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          <button class="menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero hero-new-design">
      <div class="hero-background-grid"></div>
      
      <div class="hero-content-new">
        <div class="availability-badge">
          <span class="availability-dot">•</span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </div>
        
        <p class="hero-greeting">Hi, I'm</p>
        
        <h1 class="hero-name-new">
          <span class="name-part-1">ZIENAB</span>
          <span class="name-part-2">KHALED</span>
        </h1>
        
        <p class="hero-description-new">
          A <strong>Full-Stack Developer</strong> with a strong focus on backend development, specializing in <strong>Laravel</strong> and experienced with <strong>Python</strong> and <strong>Django</strong>. I also work with <strong>Vue.js</strong>, <strong>Tailwind CSS</strong>, and native JavaScript to build modern, scalable applications.
        </p>
        
        <div class="hero-buttons-new">
          <button class="btn-primary-new" data-scroll-to="projects">
            View Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button class="btn-secondary-new" data-scroll-to="contact">Contact Me</button>
          <a href="${portfolioData.resume}" download class="btn-resume-new">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>
        
        <div class="connect-section">
          <p class="connect-label">CONNECT WITH ME</p>
          <div class="social-icons-new">
            <a href="${portfolioData.github}" target="_blank" class="social-icon-new" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="${portfolioData.linkedin}" target="_blank" class="social-icon-new" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:${portfolioData.email}" class="social-icon-new" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
            <a href="https://wa.me/2001211470485" target="_blank" class="social-icon-new" title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="tel:+2001030733959" class="social-icon-new" title="Phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-profile-image" data-aos>
            <div class="profile-image-wrapper" id="profileImageWrapper">
              <img src="${portfolioData.profileImage}" alt="${portfolioData.name}" class="profile-img" id="profileImage" />
              <div class="profile-image-border"></div>
            </div>
          </div>
          <div class="about-text">
            <p class="about-summary">
              I'm currently working at two companies, bringing diverse expertise to each role. At one company, I serve as a <strong>Mid-level Backend Developer</strong>, while at the other, I work as a <strong>Full Stack Developer</strong>, handling both native frontend development and Laravel backend.
            </p>
            <p class="about-summary">
              I started my journey at my full-time company from the ground up, and now I manage projects from <strong>A to Z</strong>. This includes conducting client meetings, gathering requirements, translating them into business logic, converting business needs into actionable ideas, structuring projects collaboratively, distributing tasks to team members, and tracking progress to ensure successful delivery.
            </p>
            <p class="about-summary">
              Beyond my technical skills, my strengths lie in <strong>client communication</strong> and <strong>business strategy</strong>. I excel at understanding client needs, translating them into technical solutions, and building strong professional relationships. Additionally, I'm highly skilled at leveraging <strong>AI tools</strong> to streamline workflows, automate repetitive tasks, and enhance productivity in my development process.
            </p>
            <div class="about-stats">
              <div class="stat" data-aos>
                <div class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <span class="stat-number">2+</span>
                <p class="stat-label">Years Experience</p>
              </div>
              <div class="stat" data-aos>
                <div class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    <polyline points="9 13 12 16 22 6"/>
                  </svg>
                </div>
                <span class="stat-number">12+</span>
                <p class="stat-label">Projects Completed</p>
              </div>
              <div class="stat" data-aos>
                <div class="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <span class="stat-number">10+</span>
                <p class="stat-label">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience">
      <div class="container">
        <h2 class="section-title">Work Experience</h2>
        <div class="timeline">
          ${portfolioData.experience.map((exp, index) => `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <ul>
                  ${exp.responsibilities.map(resp => {
                    // Extract key achievements and make them bold
                    const parts = resp.split(/(?:Built|Developed|Integrated|Implemented|Created|Designed|Managed|Optimized|Gathered|Oversee|Worked|Communicate|Translate|Ensure)/i);
                    if (parts.length > 1) {
                      const match = resp.match(/(Built|Developed|Integrated|Implemented|Created|Designed|Managed|Optimized|Gathered|Oversee|Worked|Communicate|Translate|Ensure)(.+)/i);
                      if (match) {
                        return `<li><strong>${match[1]}</strong>${match[2]}</li>`;
                      }
                    }
                    return `<li>${resp}</li>`;
                  }).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>

        <h2 class="section-title" style="margin-top: 4rem;">Education</h2>
        <div class="education-grid">
          ${portfolioData.education.map((edu, index) => `
            <div class="education-card" data-aos="fade-up" data-aos-delay="${index * 100}">
              <h3>${edu.degree}</h3>
              <h4>${edu.institution}</h4>
              <p class="period">${edu.period}</p>
              <p>${edu.details}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          ${portfolioData.projects.map((project, index) => `
            <div class="project-card" data-aos="zoom-in" data-aos-delay="${index * 100}" data-project-index="${index}">
              <div class="project-image">
                <div class="project-image-placeholder" style="background: linear-gradient(135deg, ${['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'][index % 5]} 0%, ${['#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#667eea'][index % 5]} 100%);">
                  <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 3v18"/>
                  </svg>
                </div>
              </div>
              <div class="project-header">
                <h3>${project.name}</h3>
                <span class="project-type project-type-${project.type.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}">${project.type}</span>
              </div>
              ${project.technologies ? `
                <div class="project-technologies">
                  ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
              ` : ''}
              <ul class="project-description">
                ${project.description.map(desc => `<li>${desc}</li>`).join('')}
              </ul>
              <div class="project-actions">
                <button class="project-details-btn">View Details</button>
                ${project.link ? `
                  <a href="${project.link}" target="_blank" class="project-link">
                    View Live Site
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">Technical Arsenal</h2>
        <div class="skills-terminal">
          <div class="terminal-header">
            <div class="terminal-controls">
              <span class="control red"></span>
              <span class="control yellow"></span>
              <span class="control green"></span>
            </div>
            <div class="terminal-title">skills.config</div>
          </div>
          <div class="terminal-body">
            <div class="skill-stack" data-aos="fade-up">
              <div class="stack-header">
                <span class="stack-icon">💻</span>
                <h3>Programming Languages</h3>
              </div>
              <div class="skill-items">
                ${portfolioData.skills.languages.map((lang, i) => {
                  const skillName = typeof lang === 'string' ? lang : lang.name;
                  const skillLevel = typeof lang === 'string' ? (95 - i * 5) : lang.level;
                  return `
                  <div class="skill-item" style="animation-delay: ${i * 0.1}s">
                    <div class="skill-name">
                      <span class="bullet">▹</span>
                      ${skillName}
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: ${skillLevel}%"></div>
                    </div>
                  </div>
                `;
                }).join('')}
              </div>
            </div>

            <div class="skill-stack" data-aos="fade-up" data-aos-delay="100">
              <div class="stack-header">
                <span class="stack-icon">⚙️</span>
                <h3>Backend Development</h3>
              </div>
              <div class="skill-items">
                ${portfolioData.skills.backend.map((skill, i) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillLevel = typeof skill === 'string' ? (90 - i * 3) : skill.level;
                  return `
                  <div class="skill-item" style="animation-delay: ${i * 0.1}s">
                    <div class="skill-name">
                      <span class="bullet">▹</span>
                      ${skillName}
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: ${skillLevel}%"></div>
                    </div>
                  </div>
                `;
                }).join('')}
              </div>
            </div>

            <div class="skill-stack" data-aos="fade-up" data-aos-delay="200">
              <div class="stack-header">
                <span class="stack-icon">🕷️</span>
                <h3>Web Scraping & Data Processing</h3>
              </div>
              <div class="skill-items">
                ${portfolioData.skills.webScraping.map((skill, i) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  const skillLevel = typeof skill === 'string' ? (92 - i * 4) : skill.level;
                  return `
                  <div class="skill-item" style="animation-delay: ${i * 0.1}s">
                    <div class="skill-name">
                      <span class="bullet">▹</span>
                      ${skillName}
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: ${skillLevel}%"></div>
                    </div>
                  </div>
                `;
                }).join('')}
              </div>
            </div>

            <div class="skill-stack" data-aos="fade-up" data-aos-delay="300">
              <div class="stack-header">
                <span class="stack-icon">🗄️</span>
                <h3>Database & Search Technologies</h3>
              </div>
              <div class="skill-items">
                ${portfolioData.skills.databases.map((db, i) => {
                  const skillName = typeof db === 'string' ? db : db.name;
                  const skillLevel = typeof db === 'string' ? (88 - i * 3) : db.level;
                  return `
                  <div class="skill-item" style="animation-delay: ${i * 0.1}s">
                    <div class="skill-name">
                      <span class="bullet">▹</span>
                      ${skillName}
                    </div>
                    <div class="skill-bar">
                      <div class="skill-progress" style="width: ${skillLevel}%"></div>
                    </div>
                  </div>
                `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <p class="contact-intro">I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
          <div class="contact-methods">
            <a href="mailto:${portfolioData.email}" class="contact-method">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <span>${portfolioData.email}</span>
            </a>
            <a href="https://wa.me/201211470485" target="_blank" class="contact-method">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <span>01211470485 (WhatsApp)</span>
            </a>
            <a href="tel:01030733959" class="contact-method">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <span>01030733959</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; ${new Date().getFullYear()} ${portfolioData.name}</p>
        <div class="footer-links">
          <a href="${portfolioData.github}" target="_blank">GitHub</a>
          <a href="${portfolioData.linkedin}" target="_blank">LinkedIn</a>
          <a href="${portfolioData.upwork}" target="_blank">Upwork</a>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button class="scroll-to-top" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>

    <!-- Project Modal -->
    <div class="project-modal" id="projectModal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close" aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div class="modal-body">
          <div class="modal-header">
            <h2 class="modal-title"></h2>
            <span class="modal-type"></span>
          </div>
          <div class="modal-description"></div>
          <div class="modal-footer">
            <a href="#" target="_blank" class="modal-link" style="display: none;">
              Visit Live Site
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Lightbox Modal -->
    <div id="imageLightbox" class="image-lightbox">
      <button class="lightbox-close" id="closeLightbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <img src="" alt="" id="lightboxImage" class="lightbox-image" />
    </div>
  </div>
`;

// Navigation functionality
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

// Sticky navigation
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav?.classList.add('sticky');
  } else {
    nav?.classList.remove('sticky');
  }
});

// Mobile menu toggle
menuToggle?.addEventListener('click', () => {
  navLinksContainer?.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Smooth scrolling function
const smoothScrollTo = (targetId: string) => {
  const targetSection = document.querySelector(`#${targetId}`);
  if (targetSection) {
    const navHeight = 70;
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Smooth scrolling and active link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId!);
    
    if (targetSection) {
      const navHeight = 70; // Height of fixed navigation
      const targetPosition = targetSection.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Close mobile menu
    navLinksContainer?.classList.remove('active');
    menuToggle?.classList.remove('active');
  });
});

// Smooth scrolling for hero buttons
document.querySelectorAll('[data-scroll-to]').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-scroll-to');
    if (targetId) {
      smoothScrollTo(targetId);
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Observe animated elements
document.querySelectorAll('[data-aos]').forEach(el => {
  observer.observe(el);
});

// Theme Toggle Functionality
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark mode
const getTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  // Default to dark mode
  return 'dark';
};

// Set initial theme
const currentTheme = getTheme();
html.setAttribute('data-theme', currentTheme);

// Toggle theme
themeToggle?.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Add animation class
  html.classList.add('theme-transition');
  setTimeout(() => {
    html.classList.remove('theme-transition');
  }, 300);
});

// Listen to system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
  }
});

// Particles Animation
const canvas = document.getElementById('particlesCanvas') as HTMLCanvasElement;
if (canvas) {
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }
  
  const particles: Particle[] = [];
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2
    });
  }
  
  function animate() {
    if (!ctx || !canvas) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
      ctx.fill();
      
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
    });
    
    // Connect nearby particles
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Scroll Hint Click Handler
const scrollHint = document.querySelector('.scroll-hint');
if (scrollHint) {
  scrollHint.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Scroll Progress Indicator
const progressDots = document.querySelectorAll('.progress-dot');
const progressLineFill = document.querySelector('.progress-line-fill');
const sections = document.querySelectorAll('section');

// Update active dot and progress line based on scroll position
const updateProgressDots = () => {
  let currentSection = 'home';
  let currentSectionIndex = 0;
  
  // Check if we're at the bottom of the page
  const scrollPosition = window.scrollY + 100;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;
  
  if (isAtBottom) {
    // Force last section (contact) to be active when at bottom
    currentSection = 'contact';
    currentSectionIndex = sections.length - 1;
  } else {
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id') || 'home';
        currentSectionIndex = index;
      }
    });
  }
  
  // Update dots
  progressDots.forEach(dot => {
    if (dot.getAttribute('data-section') === currentSection) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  
  // Update progress line fill
  const totalSections = sections.length;
  const progressPercentage = ((currentSectionIndex + 1) / totalSections) * 100;
  if (progressLineFill) {
    (progressLineFill as HTMLElement).style.height = `${progressPercentage}%`;
  }
  
  // Update nav links too
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${currentSection}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

// Listen to scroll
window.addEventListener('scroll', updateProgressDots);

// Initial call to set correct active state
updateProgressDots();

// Click on dots to scroll to section
progressDots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = dot.getAttribute('href');
    const targetSection = document.querySelector(targetId!);
    
    if (targetSection) {
      const navHeight = 70; // Height of fixed navigation
      const targetPosition = targetSection.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// Smooth scroll function with easing
const smoothScrollToTop = () => {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = startPosition - targetPosition;
  const duration = 1000; // 1 second
  let start: number | null = null;

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition - distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Show/hide button based on scroll position
const toggleScrollToTop = () => {
  if (window.scrollY > 300) {
    scrollToTopBtn?.classList.add('visible');
  } else {
    scrollToTopBtn?.classList.remove('visible');
  }
};

// Scroll to top functionality
scrollToTopBtn?.addEventListener('click', () => {
  smoothScrollToTop();
});

// Listen to scroll event
window.addEventListener('scroll', toggleScrollToTop);

// Project Modal Functionality
const projectModal = document.getElementById('projectModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const projectCards = document.querySelectorAll('.project-card');
const projectDetailsBtns = document.querySelectorAll('.project-details-btn');

// Open modal function
const openProjectModal = (projectIndex: number) => {
  const project = portfolioData.projects[projectIndex];
  if (!project || !projectModal) return;

  const modalTitle = projectModal.querySelector('.modal-title');
  const modalType = projectModal.querySelector('.modal-type');
  const modalDescription = projectModal.querySelector('.modal-description');
  const modalLink = projectModal.querySelector('.modal-link') as HTMLAnchorElement;

  if (modalTitle) modalTitle.textContent = project.name;
  if (modalType) modalType.textContent = project.type;
  
  if (modalDescription) {
    modalDescription.innerHTML = `
      <h3>Project Overview</h3>
      <ul>
        ${project.description.map(desc => `<li>${desc}</li>`).join('')}
      </ul>
      ${project.type === 'Current Project' ? `
        <div class="modal-note">
          <strong>Status:</strong> This project is currently in active development.
        </div>
      ` : ''}
    `;
  }

  if (modalLink && project.link) {
    modalLink.href = project.link;
    modalLink.style.display = 'inline-flex';
  } else if (modalLink) {
    modalLink.style.display = 'none';
  }

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close modal function
const closeProjectModal = () => {
  if (projectModal) {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Event listeners
projectDetailsBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const projectCard = btn.closest('.project-card');
    const projectIndex = projectCard?.getAttribute('data-project-index');
    if (projectIndex) {
      openProjectModal(parseInt(projectIndex));
    }
  });
});

// Close modal on overlay click
modalOverlay?.addEventListener('click', closeProjectModal);

// Close modal on close button click
modalClose?.addEventListener('click', closeProjectModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal?.classList.contains('active')) {
    closeProjectModal();
  }
});

// Image Lightbox functionality
setTimeout(() => {
  const profileImage = document.getElementById('profileImage');
  const imageLightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage') as HTMLImageElement;
  const closeLightboxBtn = document.getElementById('closeLightbox');

  const openLightbox = () => {
    if (imageLightbox && lightboxImage && profileImage) {
      lightboxImage.src = (profileImage as HTMLImageElement).src;
      lightboxImage.alt = (profileImage as HTMLImageElement).alt;
      imageLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    if (imageLightbox) {
      imageLightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Open lightbox on profile image click
  profileImage?.addEventListener('click', openLightbox);

  // Close lightbox on close button click
  closeLightboxBtn?.addEventListener('click', closeLightbox);

  // Close lightbox on backdrop click
  imageLightbox?.addEventListener('click', (e) => {
    if (e.target === imageLightbox) {
      closeLightbox();
    }
  });

  // Close lightbox on Escape key for image lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageLightbox?.classList.contains('active')) {
      closeLightbox();
    }
  });
}, 100);

// Hide loading when page is ready
window.addEventListener('load', () => {
  setTimeout(() => {
    hideLoading();
  }, 500);
});

// Fallback: hide loading after DOM is ready
if (document.readyState === 'complete') {
  setTimeout(() => {
    hideLoading();
  }, 500);
}

// Add dark nav class when hero-new-design is present
const heroSection = document.querySelector('.hero-new-design');
if (heroSection && nav) {
  nav.classList.add('dark-nav');
}
