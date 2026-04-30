function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden print:bg-white print:text-black" data-name="hero" data-file="components/Hero.js">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 print:hidden">
        <img 
          src="https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop" 
          alt="Creative Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-[var(--dark-bg)]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark-bg)] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 print:pt-0 print:text-center print:flex print:flex-col print:justify-center print:h-full">
        <div className="max-w-4xl print:mx-auto">
          <p className="text-[var(--primary-yellow)] font-bold tracking-[0.2em] mb-4 animate-fade-in-up print:text-black print:mb-8 print:text-xl">MULTIDISCIPLINARY GRAPHIC DESIGNER</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6 print:text-black print:mb-8">
            DESIGNING <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 print:text-black">IMPACTFUL</span> <br/>
            <span className="text-[var(--primary-yellow)] print:text-black">EXPERIENCES</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed print:text-gray-600 print:mx-auto print:mb-12">
            Proficient in Photoshop, Illustrator, Figma, and CorelDRAW. I craft cohesive brand identities, stunning print media, and engaging user interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 print:hidden">
            <a href="#portfolio" className="btn-primary text-center">View Portfolio</a>
            <a href="#contact" className="btn-outline text-center">Let's Talk</a>
          </div>
          
          {/* Print only contact info on cover */}
          <div className="hidden print:block mt-12 pt-12 border-t-2 border-black/10">
            <p className="text-lg font-bold">Altaf Dahima</p>
            <p>altafdahima1@gmail.com</p>
            <p>+91 774096 9668</p>
            <p>Jaipur City, India</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="icon-arrow-down text-[var(--primary-yellow)] text-2xl"></div>
      </div>
    </section>
  );
}