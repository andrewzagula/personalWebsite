'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const skills = [
    ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind', 'Java', 'Python', 'C++'],
    ['Next.js', 'Node.js', 'Firebase', 'Supabase', 'MySQL', 'GitHub'],
    ['Cursor', 'VS Code', 'Figma', 'Photoshop', 'OpenAI API']
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
            Senior at Bridgewater-Raritan High School researching AI/ML with published work in vision-language models and LLM security. USAMO qualifier and USACO Gold competitor.
          </p>
        </section>

        {/* About Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.aboutText}>
            I&apos;m a high school student and researcher passionate about artificial intelligence and machine learning. 
            I&apos;ve had the opportunity to conduct research at{" "}
            <a href="https://www.bu.edu" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>Boston University</a>,{" "}
            <a href="https://www.berkeley.edu" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>UC Berkeley</a>, and{" "}
            <a href="https://www.felician.edu" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>Felician University</a>,{" "}
            working on projects ranging from vision-language models to LLM security and educational technology. 
            My research has been published at conferences including{" "}
            <span className={styles.aboutLink}>NeurIPS 2025</span> and{" "}
            <span className={styles.aboutLink}>JSCI 2025</span>.{" "}
            Beyond research, I&apos;m a{" "}
            <span className={styles.aboutLink}>USA Mathematical Olympiad qualifier</span>,{" "}
            <span className={styles.aboutLink}>USACO Gold competitor</span>, and{" "}
            <span className={styles.aboutLink}>5x AIME qualifier</span>.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Experience</h2>
          
          <div className={styles.itemList}>
            {/* Job 1 */}
            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('work-1')}>
                <div className={styles.itemLogo}>
                  <Image 
                    src="/BU.png" 
                    alt="Boston University" 
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>Boston University</h3>
                    <p className={styles.itemSubtitle}>Student Researcher</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Jun 2025 - Aug 2025</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('work-1') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('work-1') && (
                <div className={styles.itemDetails}>
                  {/* Add your description or bullets here */}
                  <p className={styles.itemDescription}>
                    BabyVLM v2: Toward Developmentally Grounded Vision-Language Models with Real Infant-View Data and Cognitive Evaluation Benchmarks                  </p>
                  <a href="https://arxiv.org/abs/2512.10932" target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    arXiv
                  </a>
                  {/* Example bullets - uncomment and customize as needed */}
                  {/* <ul className={styles.itemBullets}>
                    <li>Responsibility or achievement 1</li>
                    <li>Responsibility or achievement 2</li>
                    <li>Responsibility or achievement 3</li>
                  </ul> */}
                </div>
              )}
            </div>

            {/* Job 2 */}
            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('work-2')}>
                <div className={styles.itemLogo}>
                  <Image 
                    src="/UCB.png" 
                    alt="UC Berkeley" 
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>University of California, Berkeley</h3>
                    <p className={styles.itemSubtitle}>Researcher</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Jul 2024 - Dec 2025</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('work-2') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('work-2') && (
                <div className={styles.itemDetails}>
                  <p className={styles.itemDescription}>
                  AutoAdv: Automated Adversarial Prompting for Multi-Turn Jailbreaking of Large Language Models; 1st-author @ NeurIPS 2025 Lock-LLM Workshop
                  </p>
                  <a href="https://arxiv.org/abs/2511.02376" target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    arXiv
                  </a>
                </div>
              )}
            </div>

            {/* Job 3 */}
            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('work-3')}>
                <div className={styles.itemLogo}>
                  <Image 
                    src="/FLC.png" 
                    alt="Felician University" 
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>Felician University</h3>
                    <p className={styles.itemSubtitle}>Research Assistant</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>May 2024 - Sep 2025</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('work-3') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('work-3') && (
                <div className={styles.itemDetails}>
                  <p className={styles.itemDescription}>
                  AI-Driven Grading and Moderation for Collaborative Projects in Computer Science Education; 2nd-author @ JSCI 2025
                  </p>
                  <a href="https://arxiv.org/abs/2510.03998" target="_blank" rel="noopener noreferrer" className={styles.arxivLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    arXiv
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Education</h2>
          
          <div className={styles.itemList}>

            {/* Education 1 - BRHS */}
            <div className={styles.itemContainer}>
              <div className={styles.item} onClick={() => toggleItem('edu-2')}>
                <div className={styles.itemLogo}>
                  <Image 
                    src="/BR.png" 
                    alt="Bridgewater-Raritan High School" 
                    width={56} 
                    height={56} 
                    className={styles.itemLogoImage}
                    quality={100}
                    unoptimized
                  />
                </div>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>Bridgewater-Raritan High School</h3>
                    <p className={styles.itemSubtitle}>High School Diploma</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Sep 2022 - Jun 2026</span>
                    <svg 
                      className={`${styles.chevron} ${expandedItems.has('edu-2') ? styles.chevronExpanded : ''}`}
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              {expandedItems.has('edu-2') && (
                <div className={styles.itemDetails}>
                  <p className={styles.itemDescription}>
                    GPA: 5.0; SAT: 1570; Varsity Volleyball (Captain); Key Club (President); DECA (President)
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className={styles.sectionLarge}>
          <h2 className={styles.sectionTitleLarge}>Awards</h2>
          
          <div className={styles.itemList}>
            {/* Award 1 - USAMO Qualifier */}
            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>USA Mathematical Olympiad Qualifier</h3>
                    <p className={styles.itemSubtitle}>127.5 AMC 12; 11 AIME</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Mar 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.itemList}>
            {/* Award 2 - USACO Gold */}
            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>USA Computing Olympiad</h3>
                    <p className={styles.itemSubtitle}>Gold Division</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>Jan 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.itemList}>
            {/* Award 3 - 5x AIME Qualifier */}
            <div className={styles.itemContainer}>
              <div className={styles.item}>
                <div className={styles.itemContent}>
                  <div>
                    <h3 className={styles.itemTitle}>5x AIME Qualifier</h3>
                    <p className={styles.itemSubtitle}>1x Distinguished Honor Roll (top 1%); 4x Honor Roll (top 5%)</p>
                  </div>
                  <div className={styles.itemRight}>
                    <span className={styles.itemDate}>2021-2025</span>
                  </div>
                </div>
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

          <div className={styles.projectsGrid}>
            {/* AutoAdv Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePlaceholder}>
                  {/* Placeholder for AutoAdv screenshot */}
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>AutoAdv</h3>
                  <span className={styles.projectYear}>2025</span>
                </div>
                <p className={styles.projectDescription}>
                  Automated Adversarial Prompting for Multi-Turn Jailbreaking of Large Language Models. Research project on LLM security and adversarial attacks, published at NeurIPS 2025 Lock-LLM Workshop.
                </p>
                <div className={styles.projectTech}>
                  {['Python', 'LLM', 'Security', 'AI Research'].map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://github.com/AAN-AutoAdv/AutoAdv" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </div>

            {/* Alumhub Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.projectImagePlaceholder}>
                  {/* Placeholder for Alumhub screenshot */}
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>Alumhub</h3>
                  <span className={styles.projectYear}>2025</span>
                </div>
                <p className={styles.projectDescription}>
                  A platform connecting alumni and students, facilitating networking, mentorship, and career opportunities within educational communities.
                </p>
                <div className={styles.projectTech}>
                  {['React', 'JavaScript', 'Next.js', 'Node.js', 'Firebase', 'Tailwind', 'Vercel'].map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href="https://thealumhub.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
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
                    Source (Private)
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
            <a href="https://www.instagram.com/andrewzagulaa/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Instagram</a>{" "}
            or{" "}
            <a href="mailto:andrewzagula800@gmail.com" className={styles.contactLink}>drop me an email</a>
            , and I&apos;ll reply as soon as I can.
          </p>
        </section>

        {/* Copyright Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            © 2026 Andrew Zagula
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
        <a href="https://www.linkedin.com/in/andrewzagula/" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://github.com/andrewzagula" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://scholar.google.com/citations?user=jiOT0ZoAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="Google Scholar">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L0 9.5l5.242 4.269C6.452 11.249 9.022 9.5 12 9.5s5.548 1.748 6.758 4.269L24 9.5 12 0zm0 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            <path d="M12 11.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/andrewzagulaa/" target="_blank" rel="noopener noreferrer" className={styles.navLink} aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.navIcon} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </nav>
    </main>
  );
}
