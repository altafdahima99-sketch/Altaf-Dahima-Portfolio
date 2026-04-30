function About() {
  return (
    <section id="about" className="section-padding bg-[var(--card-bg)]" data-name="about" data-file="components/About.js">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group p-4">
            {/* Decorative Frame Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[var(--primary-yellow)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[var(--primary-yellow)] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 overflow-hidden border-2 border-white/10 bg-[var(--card-bg)] shadow-2xl">
              <img 
               src="https://app.trickle.so/storage/public/images/usr_1b475deb10000001/af5279c8-ade3-4066-8f86-d9824d715f30.png" 
               alt="Altaf Dahima" 
               className="w-full h-[550px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          <div>
            <h2 className="section-title">About Me</h2>
            <h3 className="text-2xl text-white mb-6 font-light">
              I am a <span className="text-[var(--primary-yellow)] font-bold">Creator</span> ready to make an impact.
            </h3>
            <div className="space-y-6 text-[var(--text-muted)]">
              <p>My name is Altaf Dahima, a passionate graphic designer based in Jaipur City. I have recently completed my education and am eager to kickstart my professional journey in the creative industry.</p>
              <p>
                My toolkit extends far beyond just photo manipulation. I have mastered <strong>Adobe Illustrator</strong> for vector art, <strong>InDesign</strong> for editorial layouts, <strong>CorelDRAW</strong> for print production, and <strong>Figma</strong> for modern UI/UX design. This versatility allows me to handle every aspect of visual communication.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="icon-layers text-[var(--primary-yellow)] text-xl mr-3 mt-1"></div>
                <div>
                  <h4 className="font-bold text-white uppercase mb-1">Stack</h4>
                  <p className="text-sm text-gray-400">Ps, Ai, Id, Cdr, Figma</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="icon-zap text-[var(--primary-yellow)] text-xl mr-3 mt-1"></div>
                <div>
                  <h4 className="font-bold text-white uppercase mb-1">Status</h4>
                  <p className="text-sm text-gray-400">Open to Work / Freelance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}