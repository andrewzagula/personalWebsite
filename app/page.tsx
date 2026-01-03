import styles from './page.module.css';

export default function Home() {
  const skills = [
    ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Blazor', 'Tailwind', 'Bootstrap'],
    ['Framer Motion', 'Vite', '.NET', 'Node', 'Express', 'Firebase', 'Supabase', 'MySQL', 'GitHub'],
    ['Bitbucket', 'VS Code', 'Figma', 'Photoshop']
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Hi, I&apos;m Andrew 👋
          </h1>
          <p className={styles.heroDescription}>
            description
          </p>
        </section>

        {/* About Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.aboutText}>
            By the middle of 2024, I graduated with a{" "}
            <span>🎓</span>{" "}
            <a href="#" className={styles.aboutLink}>Bachelor of Science in Information Technology, majoring in Web Development</a>,{" "}
            <a href="#" className={styles.aboutLink}>interned at one of the first IT company in Bataan</a> and{" "}
            <a href="#" className={styles.aboutLink}>landed my first job as an Assistant Junior Programmer.</a>{" "}
            In the past, I had the opportunity to join{" "}
            <a href="#" className={styles.aboutLink}>IRCITE 2024</a>{" "}
            for a paper presentation and also won the{" "}
            <a href="#" className={styles.aboutLink}>Best Paper in the IT Category</a> at{" "}
            <a href="#" className={styles.aboutLink}>Bataan Peninsula State University.</a>
          </p>
        </section>

        {/* Work Experience Section */}
        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Work Experience</h2>
          
          <div className={styles.itemList}>
            {/* Job 1 */}
            <div className={styles.item}>
              <div className={styles.itemLogo}>
                <span className={`${styles.itemLogoText} ${styles.itemLogoTextBlue}`}>NSPIRE</span>
              </div>
              <div className={styles.itemContent}>
                <div>
                  <h3 className={styles.itemTitle}>NSPIRE Software and Technology Solutions Inc.</h3>
                  <p className={styles.itemSubtitle}>Assistant Junior Programmer</p>
                </div>
                <span className={styles.itemDate}>Jun 2024 - Present</span>
              </div>
            </div>

            {/* Job 2 */}
            <div className={styles.item}>
              <div className={styles.itemLogo}>
                <span className={`${styles.itemLogoText} ${styles.itemLogoTextBlue}`}>NSPIRE</span>
              </div>
              <div className={styles.itemContent}>
                <div>
                  <h3 className={styles.itemTitle}>NSPIRE Software and Technology Solutions Inc.</h3>
                  <p className={styles.itemSubtitle}>UI/UX Designer Intern</p>
                </div>
                <span className={styles.itemDate}>Mar 2024 - May 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Education</h2>
          
          <div className={styles.itemList}>
            {/* Education 1 - BPSU */}
            <div className={styles.item}>
              <div className={styles.itemLogo}>
                <span className={`${styles.itemLogoText} ${styles.itemLogoTextRed}`}>BPSU</span>
              </div>
              <div className={styles.itemContent}>
                <div>
                  <h3 className={styles.itemTitle}>Bataan Peninsula State University</h3>
                  <p className={styles.itemSubtitle}>Bachelor&apos;s Degree in Information Technology (BSIT)</p>
                </div>
                <span className={styles.itemDate}>Sep 2020 - Sep 2024</span>
              </div>
            </div>

            {/* Education 2 - Eastwoods */}
            <div className={styles.item}>
              <div className={styles.itemLogo}>
                <span className={styles.itemLogoTextSmall}>EASTWOODS</span>
              </div>
              <div className={styles.itemContent}>
                <div>
                  <h3 className={styles.itemTitle}>Eastwoods Academy of Science and Technology</h3>
                  <p className={styles.itemSubtitle}>Information and Communications Technology (ICT)</p>
                </div>
                <span className={styles.itemDate}>Sep 2018 - Apr 2020</span>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Awards</h2>
          
          <div className={styles.itemList}>
            {/* Award 1 - IRCITE 2024 */}
            <div className={styles.item}>
              <div className={styles.itemLogo}>
                <span className={`${styles.itemLogoText} ${styles.itemLogoTextRed}`}>BPSU</span>
              </div>
              <div className={styles.itemContent}>
                <div>
                  <h3 className={styles.itemTitle}>Best Paper in the IT Category</h3>
                  <p className={styles.itemSubtitle}>IRCITE 2024 - Bataan Peninsula State University</p>
                </div>
                <span className={styles.itemDate}>2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          
          <div className={styles.skillsContainer}>
            {skills.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.skillsRow}>
                {row.map((skill) => (
                  <span key={skill} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className={styles.sectionLarge}>
          <div className={styles.projectsTag}>My Projects</div>
          <h2 className={styles.projectsTitle}>Check out my latest works.</h2>
          <p className={styles.projectsSubtitle}>
            I developed and designed websites, from simple pages to advanced web applications. Here are a few of my favorites.
          </p>

          <div className={styles.projectsGrid}>
            {/* Invex Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePlaceholder}>
                  {/* Placeholder for Invex screenshot */}
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>Invex: Inventory Management System</h3>
                  <span className={styles.projectYear}>2025</span>
                </div>
                <p className={styles.projectDescription}>
                  Designed and developed a comprehensive system to manage suppliers, products, purchase orders, stock movements, and inventory levels.
                </p>
                <div className={styles.projectTech}>
                  {['React', 'TypeScript', 'TanStack', 'React Router', 'Radix UI', 'Framer Motion', 'Tailwind', 'Vite'].map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website (Private)
                  </a>
                  <a href="#" className={styles.projectLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source (Private)
                  </a>
                </div>
              </div>
            </div>

            {/* Koffee Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePlaceholder}>
                  {/* Placeholder for Koffee screenshot */}
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>Koffee</h3>
                  <span className={styles.projectYear}>2025</span>
                </div>
                <p className={styles.projectDescription}>
                  Designed and developed a minimalist coffee shop website to elevate product showcase and simplify online ordering, enhancing the customer experience.
                </p>
                <div className={styles.projectTech}>
                  {['React', 'Express', 'MongoDB', 'Node', 'Axios', 'React Router', 'JavaScript', 'Framer Motion', 'Tailwind', 'Vite'].map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website
                  </a>
                  <a href="#" className={styles.projectLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.sectionLarge}>
          <div className={styles.contactTag}>Contact</div>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <p className={styles.contactText}>
            Want to chat? Just shoot me a DM with a direct question on{" "}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Instagram</a>{" "}
            or{" "}
            <a href="mailto:" className={styles.contactLink}>drop me an email</a>
            , and I&apos;ll reply as soon as I can.
          </p>
        </section>

        {/* Copyright Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            © 2026 • made by andrew zagula
          </p>
        </footer>
      </div>

      {/* Floating Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink} aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </nav>
    </main>
  );
}
