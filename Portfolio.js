function Skills() {
  const skills = [
    { name: 'Adobe Photoshop', level: 98, icon: 'icon-image' },
    { name: 'Adobe Illustrator', level: 95, icon: 'icon-pen-tool' },
    { name: 'CorelDRAW', level: 90, icon: 'icon-pencil' },
    { name: 'Figma (UI/UX)', level: 92, icon: 'icon-layout-dashboard' },
    { name: 'Adobe InDesign', level: 88, icon: 'icon-book-open-text' },
    { name: 'Photo Manipulation', level: 96, icon: 'icon-wand-sparkles' },
    { name: 'Brand Identity', level: 94, icon: 'icon-fingerprint' },
    { name: 'Print Media', level: 90, icon: 'icon-printer' },
    { name: 'Social Media Design', level: 92, icon: 'icon-share-2' },
  ];

  return (
    <section id="skills" className="section-padding" data-name="skills" data-file="components/Skills.js">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mt-4">
            A comprehensive toolkit for visual problem solving, ranging from vector art to layout design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-3 print:gap-4 print:content-start">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[var(--card-bg)] p-8 border border-white/5 hover:border-[var(--primary-yellow)] transition-all duration-300 group print-break-avoid print:p-4 print:border-black/10 print:bg-white">
              <div className="flex justify-between items-center mb-6 print:mb-2">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary-yellow)] transition-colors duration-300 print:hidden">
                  <div className={`${skill.icon} text-2xl text-[var(--primary-yellow)] group-hover:text-black transition-colors duration-300`}></div>
                </div>
                <span className="text-3xl font-bold font-oswald text-white/20 group-hover:text-[var(--primary-yellow)] transition-colors duration-300 print:text-black print:text-xl">{skill.level}%</span>
              </div>
              <h3 className="text-xl font-bold mb-3 print:text-black print:mb-1 print:text-lg">{skill.name}</h3>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden print:bg-gray-200">
                <div 
                  className="bg-[var(--primary-yellow)] h-full transition-all duration-1000 ease-out print:bg-black" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-[var(--accent-blue)]/20 to-transparent border-l-4 border-[var(--accent-blue)]">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Versatile Design Workflow</h3>
                    <p className="text-gray-300">I seamlessly switch between vector illustration, page layout, and UI prototyping to deliver complete brand experiences.</p>
                </div>
                <a 
                    href="https://app.trickle.so/storage/public/images/usr_1b475deb10000001/82bb6178-77df-480d-a62e-6a82cb5a8589.png?w=1208&h=1536" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-[var(--accent-blue)] text-[var(--accent-blue)] hover:bg-[var(--accent-blue)] hover:text-white transition-all uppercase text-sm font-bold tracking-wider inline-block"
                >
                    Download Resume
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}