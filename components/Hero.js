function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--dark-bg)]/95 backdrop-blur-sm border-b border-white/10 py-4' : 'bg-transparent py-6'}`} data-name="navbar" data-file="components/Navbar.js">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          ALTAF<span className="text-[var(--primary-yellow)]">.</span>DAHIMA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-[var(--primary-yellow)] transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 border border-[var(--primary-yellow)] text-[var(--primary-yellow)] px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[var(--primary-yellow)] hover:text-black transition-all cursor-pointer"
          >
            <div className="icon-file-down text-lg"></div>
            Save as PDF
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-[var(--primary-yellow)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={isOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[var(--dark-bg)] border-b border-white/10 p-6 md:hidden flex flex-col space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium hover:text-[var(--primary-yellow)] transition-colors uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => window.print(), 100);
              }}
              className="flex items-center gap-2 text-[var(--primary-yellow)] font-bold uppercase tracking-widest pt-4 border-t border-white/10 w-full text-left"
            >
              <div className="icon-file-down text-lg"></div>
              Save as PDF
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
