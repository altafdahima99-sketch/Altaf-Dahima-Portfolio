function Footer() {
  const currentYear = 2026; // Static for now or pass as prop
  
  return (
    <footer className="bg-black py-12 border-t border-white/10" data-name="footer" data-file="components/Footer.js">
      <div className="container mx-auto px-6 text-center">
        <a href="#" className="text-3xl font-bold tracking-tighter inline-block mb-6">
          ALTAF<span className="text-[var(--primary-yellow)]">.</span>DAHIMA
        </a>
        
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Creating visual experiences that matter. Based in Jaipur City, working worldwide.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
           <a href="#about" className="text-sm font-bold text-white hover:text-[var(--primary-yellow)] uppercase">About</a>
           <a href="#portfolio" className="text-sm font-bold text-white hover:text-[var(--primary-yellow)] uppercase">Portfolio</a>
           <a href="#contact" className="text-sm font-bold text-white hover:text-[var(--primary-yellow)] uppercase">Contact</a>
        </div>
        
        <div className="text-xs text-gray-600 uppercase tracking-widest">
          &copy; {currentYear} Altaf Dahima Portfolio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
