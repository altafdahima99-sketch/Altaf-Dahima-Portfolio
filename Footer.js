function Contact() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:altafdahima1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-[var(--card-bg)] relative overflow-hidden" data-name="contact" data-file="components/Contact.js">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-blue)] opacity-5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--primary-yellow)] opacity-5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="section-title">Let's Create</h2>
            <h3 className="text-3xl font-bold mb-6 text-white">Have a project in mind?</h3>
            <p className="text-[var(--text-muted)] mb-10 text-lg">
              I'm currently available for freelance projects. Whether you need a killer album cover, a brand refresh, or daily social content, let's talk.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 bg-[#000] border border-white/10 flex items-center justify-center mr-4 group-hover:border-[var(--primary-yellow)] transition-colors">
                  <div className="icon-mail text-[var(--primary-yellow)]"></div>
                </div>
                <div>
                  <span className="block text-xs uppercase text-gray-500 tracking-wider">Email Me</span>
                  <a href="mailto:altafdahima1@gmail.com" className="text-xl font-bold group-hover:text-[var(--primary-yellow)] transition-colors">altafdahima1@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                 <div className="w-12 h-12 bg-[#000] border border-white/10 flex items-center justify-center mr-4 group-hover:border-[var(--primary-yellow)] transition-colors">
                  <div className="icon-phone text-[var(--primary-yellow)]"></div>
                </div>
                <div>
                  <span className="block text-xs uppercase text-gray-500 tracking-wider">Call Me</span>
                  <span className="text-xl font-bold group-hover:text-[var(--primary-yellow)] transition-colors">+91 774096 9668</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter', 'linkedin'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[var(--primary-yellow)] hover:border-[var(--primary-yellow)] hover:text-black transition-all">
                    <div className={`icon-${social} text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#000] p-8 md:p-10 border border-white/5 shadow-2xl print:hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Your Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:outline-none focus:border-[var(--primary-yellow)] transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Your Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:outline-none focus:border-[var(--primary-yellow)] transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">Project Details</label>
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-[#121212] border border-white/10 p-4 text-white focus:outline-none focus:border-[var(--primary-yellow)] transition-colors h-32"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-4 text-base">
                Send Message via Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}