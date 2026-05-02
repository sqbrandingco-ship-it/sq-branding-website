import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Target,
  Users,
  UserCheck
} from 'lucide-react';

export default function App() {
  const phoneNumber = "9054622278";
  const email = "sqbrandingco@gmail.com";
  // Assuming international format for WhatsApp (Canada/US code 1)
  const whatsappLink = `https://wa.me/1${phoneNumber}`; 
  const phoneLink = `tel:${phoneNumber}`;
  const emailLink = `mailto:${email}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            {/* The logo should be placed in the public/ directory as logo.png */}
            <img src="/logo.png" alt="SQ Branding Logo" className="h-10 w-auto mr-3" onError={(e) => {
              // Fallback to text if image not found
              (e.currentTarget.parentElement as HTMLElement).innerHTML = '<span class="text-2xl font-bold tracking-tighter text-white">SQ BRANDING</span>';
            }} />
            <span className="text-2xl font-bold tracking-tighter text-white sr-only">
              SQ BRANDING
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#why-us" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Why Us</a>
            <div className="flex items-center space-x-4">
              <a 
                href={phoneLink}
                className="inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                {phoneNumber}
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <Target className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Private Brand Development
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
              Clarity in Brand. <br />
              <span className="text-gray-400">Strength in Growth.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              We build high-performance digital systems for modern businesses, combining professional web design, AI receptionists, and targeted advertising to capture and convert more leads.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-semibold rounded hover:bg-gray-900 transition-all group"
              >
                Call Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-gray-300 bg-white text-black text-sm font-semibold rounded hover:border-black transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-4">
              Modern Systems for Local Growth
            </h2>
            <p className="text-gray-600 text-lg">
              We implement professional digital infrastructure to elevate your brand presence and automate customer acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">AI Receptionist Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss a customer inquiry. We deploy intelligent AI agents to handle calls, book appointments, and answer common questions 24/7, behaving just like an office receptionist.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Paid Advertising</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic ad campaigns designed for immediate return on investment. We target your exact customer demographic to bring high-intent traffic directly to your business.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Website Design & Redesign</h3>
              <p className="text-gray-600 leading-relaxed">
                Your digital storefront matters. We craft corporate-grade, conversion-optimized websites that establish trust and look flawless on every device.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Lead Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent, predictable pipelines. We capture prospect data and funnel qualified leads directly into your sales process, so you can focus on closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6">
                Elevating Modern Businesses.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At <strong>SQ Branding</strong>, we bridge the gap between strong brand presentation and measurable growth. We understand that a great brand must look professional and perform impeccably.
                </p>
                <p>
                  Our approach is deeply tailored to the realities of local business. Whether you need a corporate website overhaul or an AI system to capture after-hours inquiries, we build it to a premium standard. 
                </p>
                <p>
                  Our goal is simple: construct digital assets that command respect and generate quantifiable leads for your business.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: AI */}
                <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">AI Receptionist<br/>Systems</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">24/7 AI-powered receptionists that answer calls, qualify leads, and book appointments automatically.</p>
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-3">
                      <div className="bg-green-500/20 p-1.5 rounded-full"><Phone className="w-3.5 h-3.5 text-green-500" /></div>
                      <div><p className="text-[9px] text-gray-400">Incoming Call</p><p className="text-[11px] text-white tracking-wider">+1 (555) 123-4567</p></div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-start gap-2.5 w-[90%] self-end">
                      <div className="bg-white p-1 rounded-full shrink-0"><Bot className="w-3 h-3 text-black" /></div>
                      <div><p className="text-[10px] text-white">AI Receptionist</p><p className="text-[10px] text-gray-400 mt-1 leading-snug">Hi, how can I help you today?</p></div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Ads */}
                <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Paid<br/>Advertising</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Data-driven ad campaigns that maximize reach, generate quality leads, and scale your ROI.</p>
                  </div>
                  <div className="mt-auto bg-[#141414] border border-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-4">
                      <div><p className="text-[9px] text-gray-500 mb-0.5">Total Spend</p><p className="text-sm text-white font-semibold">$24,500</p></div>
                      <div className="text-right"><p className="text-[9px] text-gray-500 mb-0.5">Leads</p><p className="text-sm border border-green-500/30 text-green-400 bg-green-500/10 px-1.5 rounded font-medium">312</p></div>
                    </div>
                    <div className="h-12 w-full flex items-end gap-1">
                      {[30, 45, 35, 60, 50, 80, 65, 90, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-white/5 to-white/20 rounded-sm" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card 3: Web */}
                <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Website Design<br/>& Redesign</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">High-converting, premium websites that elevate your brand and turn visitors into customers.</p>
                  </div>
                  <div className="mt-auto bg-black border border-white/10 rounded-t-lg rounded-b-sm h-32 relative overflow-hidden pt-2 px-1 shadow-2xl">
                    <div className="flex gap-1 px-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                    <div className="border border-white/10 h-full rounded-t px-3 py-4 bg-gradient-to-br from-gray-900 to-[#050505] relative">
                      <p className="text-[7px] text-gray-500 tracking-widest uppercase mb-1.5">Brand</p>
                      <h4 className="text-[11px] sm:text-[10px] md:text-xs font-bold text-white leading-tight">Elevate Your Brand.<br/>Drive Real Results.</h4>
                      <div className="mt-3 w-16 h-5 border border-white/20 rounded text-[8px] flex items-center justify-center text-white bg-white/5">Book a Call</div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Lead Gen */}
                <div className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Lead<br/>Generation</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Proven systems that attract, capture, and convert the right leads into paying customers.</p>
                  </div>
                  <div className="mt-auto flex flex-col items-center gap-1.5">
                    <div className="w-full bg-white/5 py-2 px-3 rounded-t-xl rounded-b-md border border-white/5 flex justify-between items-center">
                      <div className="flex items-center gap-2"><Users className="w-3 h-3 text-gray-400"/><span className="text-[10px] text-gray-400">Traffic</span></div>
                      <span className="text-[11px] text-white">10,842</span>
                    </div>
                    <div className="w-[85%] bg-white/10 py-2 px-3 rounded-md border border-white/10 flex justify-between items-center">
                      <div className="flex items-center gap-2"><UserCheck className="w-3 h-3 text-gray-300"/><span className="text-[10px] text-gray-300">Leads</span></div>
                      <span className="text-[11px] text-white">1,256</span>
                    </div>
                    <div className="w-[70%] bg-white py-2 px-3 rounded-t-md rounded-b-xl flex justify-between items-center border border-white">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-black"/><span className="text-[10px] text-black font-medium">Clients</span></div>
                      <span className="text-[11px] text-black font-bold">89</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section id="why-us" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Built on Reliability.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We operate with clarity and precision, without reliance on superficial messaging. Our strategies are built on established direct-response principles, reinforced by advanced systems, and executed with discipline. Every decision is guided by the metrics that materially impact business performance.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Corporate-Standard Execution & Professionalism",
                  "Data-Driven Advertising Strategies",
                  "Cutting-Edge AI Infrastructure",
                  "Dedicated Local Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 sm:p-12 flex flex-col justify-center">
              <Building2 className="w-12 h-12 text-white/50 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
              <p className="text-gray-400 leading-relaxed">
                "We guarantee transparent communication, uncompromising design quality, and a rigorous focus on transforming your digital presence into a measurable asset."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Contact */}
      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-6">
              Ready to Upgrade Your Systems?
            </h2>
            <p className="text-lg text-gray-600">
              Explore how we can elevate and scale your business through focused strategy and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Phone CTA */}
            <a href={phoneLink} className="group bg-white p-8 border border-gray-200 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex justify-center items-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
              <p className="text-gray-500 font-medium">{phoneNumber}</p>
            </a>

            {/* WhatsApp CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group bg-white p-8 border border-gray-200 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex justify-center items-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
              <p className="text-gray-500 font-medium">Message Now</p>
            </a>

            {/* Email CTA */}
            <a href={emailLink} className="group bg-white p-8 border border-gray-200 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex justify-center items-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Email</h3>
              <p className="text-gray-500 font-medium">{email}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-3">
                <img src="/logo.png" alt="SQ Branding Logo" className="h-12 w-auto mr-3" onError={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).innerHTML = '<span class="text-2xl font-bold tracking-tighter text-white block">SQ BRANDING</span>';
                }} />
                <span className="text-2xl font-bold tracking-tighter text-white block sr-only">SQ BRANDING</span>
              </div>
              <p className="text-gray-400 text-sm">Clarity in Brand. Strength in Growth.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <a href={phoneLink} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {phoneNumber}
              </a>
              <a href={emailLink} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {email}
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} SQ Branding. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

