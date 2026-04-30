function Portfolio() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [selectedProject, setSelectedProject] = React.useState(null);

  const categories = ['All', 'Manipulation', 'Posters', 'Social Media', 'Branding', 'Web Design'];

  const projects = [
    {
      id: 10,
      title: "Nike Air Max Branding",
      category: "Branding",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/d4f51915-9b5a-490b-b814-97a4254909b4.png",
      size: "wide"
    },
    {
      id: 1,
      title: "Surreal Mindscapes",
      category: "Manipulation",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/09c26da4-8db9-4121-b731-5f16856db28a.png",
      size: "large"
    },
    {
      id: 2,
      title: "Cinematic Movie Poster",
      category: "Posters",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/ad52489f-05ce-4be9-a16c-d64853169db3.png",
      size: "tall"
    },
    {
      id: 4,
      title: "Web Interface Design",
      category: "Web Design",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/41c15876-4a67-442b-b9ae-f4d0141c951a.png",
      size: "tall"
    },
    {
      id: 8,
      title: "Cosmetic Brand Identity",
      category: "Branding",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/361a5b76-4601-4bad-8856-794600c8be8e.png",
      size: "tall"
    },
    {
      id: 6,
      title: "Editorial Magazine Cover",
      category: "Branding",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/1e221640-3b0e-4844-8107-4546abc856a4.png",
      size: "tall"
    },
    {
      id: 5,
      title: "Brand Social Cover",
      category: "Social Media",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/d03e2d93-4ad1-4604-a922-2001211a547a.png",
      size: "wide"
    },
    {
      id: 3,
      title: "Food & Beverage Creative",
      category: "Social Media",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/cb4b06e7-e317-4560-83ca-36324523c7ee.png",
      size: "small"
    },
    {
      id: 9,
      title: "Festival Campaign",
      category: "Social Media",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/5370cf68-6a17-47c6-a3f5-cc9ee5978791.png",
      size: "wide"
    },
    {
      id: 7,
      title: "Product Retouching",
      category: "Manipulation",
      image: "https://app.trickle.so/storage/public/images/usr_1b475deb10000001/2f5bdd93-f55f-4133-84a3-d74f34ec5366.png",
      size: "small"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large': return 'aspect-square md:aspect-auto md:col-span-2 md:row-span-2';
      case 'wide': return 'aspect-video md:aspect-auto md:col-span-2';
      case 'tall': return 'aspect-[3/4] md:aspect-auto md:row-span-2';
      default: return 'aspect-square md:aspect-auto';
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-[var(--card-bg)]" data-name="portfolio" data-file="components/Portfolio.js">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="section-title">Selected Works</h2>
             <p className="text-[var(--text-muted)] mt-2">A curation of my best pixels.</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-sm font-bold uppercase tracking-wider px-4 py-2 transition-all ${
                  activeFilter === cat 
                    ? 'bg-[var(--primary-yellow)] text-black' 
                    : 'text-gray-400 hover:text-white border border-white/10 hover:border-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[300px] grid-flow-row-dense print:grid print:grid-cols-2 print:gap-4 print:auto-rows-auto">
           {filteredProjects.map((project, idx) => (
             <div 
               key={project.id}
               className={`group relative overflow-hidden bg-gray-900 cursor-pointer ${getSizeClasses(project.size)} print:col-span-1 print:row-span-1 print:h-auto print:mb-0 print:break-inside-avoid print:border print:border-white/20`}
               onClick={() => setSelectedProject(project)}
             >
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 print:h-48 print:object-cover"
               />
               {/* Web View Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300 print:hidden">
                 <div className="absolute top-4 right-4 bg-[var(--primary-yellow)] rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="icon-maximize-2 text-black text-lg"></div>
                 </div>
                 <span className="text-[var(--primary-yellow)] text-xs font-bold uppercase tracking-widest mb-2">
                   {project.category}
                 </span>
                 <h3 className="text-2xl font-bold text-white leading-tight">
                   {project.title}
                 </h3>
               </div>

               {/* Print View Info (Below Image) */}
               <div className="hidden print:block p-3 bg-black border-t border-white/10">
                 <span className="text-[var(--primary-yellow)] text-[10px] font-bold uppercase tracking-widest block mb-1">
                   {project.category}
                 </span>
                 <h3 className="text-sm font-bold text-white leading-tight">
                   {project.title}
                 </h3>
               </div>
             </div>
           ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#" className="inline-flex items-center text-white hover:text-[var(--primary-yellow)] font-bold uppercase tracking-widest transition-colors group">
             View All Projects 
             <div className="icon-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></div>
           </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
        >
            <div 
                className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center animate-zoom-in"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    className="absolute -top-12 right-0 text-white/50 hover:text-[var(--primary-yellow)] transition-colors"
                    onClick={() => setSelectedProject(null)}
                >
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold uppercase tracking-widest">Close</span>
                        <div className="icon-x text-3xl"></div>
                    </div>
                </button>
                
                <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10 rounded-sm"
                />
                
                <div className="mt-6 text-center">
                    <h3 className="text-3xl font-bold text-white font-oswald uppercase tracking-wide">{selectedProject.title}</h3>
                    <p className="text-[var(--primary-yellow)] font-bold uppercase tracking-widest text-sm mt-2">{selectedProject.category}</p>
                </div>
            </div>
        </div>
      )}
    </section>
  );
}
