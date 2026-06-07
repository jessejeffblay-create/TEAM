import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="logo">
            <span className="logo-icon">🏠</span>
            <span className="logo-text">RoofAI <span className="logo-accent">Growth</span></span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="btn btn-sm btn-primary">Get Started</a>
          </div>
          <button className="mobile-menu-btn" onClick={() => document.querySelector('.nav-links').classList.toggle('nav-open')}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-inner">
          <div className="hero-badge">🚀 Trusted by UK Roofing Companies</div>
          <h1 className="hero-title">
            Never Miss Another <span className="highlight">Roofing Lead</span>
          </h1>
          <p className="hero-subtitle">
            The complete AI-powered growth system that answers every call, books every appointment, 
            and follows up every lead — automatically. One package. One monthly fee.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-lg">Book a Free Demo</a>
            <a href="#features" className="btn btn-outline btn-lg">See How It Works</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">80%</span>
              <span className="stat-label">of missed calls become lost jobs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3x</span>
              <span className="stat-label">more leads converted with instant response</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">£15k+</span>
              <span className="stat-label">average job value we help secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features / AI Receptionist */}
      <section id="features" className="section features">
        <div className="container">
          <div className="section-label">What You Get</div>
          <h2 className="section-title">Your Complete Roofing Growth System</h2>
          <p className="section-subtitle">
            Everything you need to capture, convert, and keep every roofing lead — with zero extra effort from your team.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Receptionist</h3>
              <p>Your 24/7 AI receptionist answers every call instantly with a warm, professional voice. Never miss a lead because your office was closed or your team was on another line.</p>
              <ul className="feature-list">
                <li>Answers within 1 ring</li>
                <li>Natural conversation, not a robot</li>
                <li>Qualifies & screens every lead</li>
                <li>Transfers hot leads to you</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Smart Appointment Booking</h3>
              <p>Prospects book roof surveys and consultations instantly — no back-and-forth. Integrated with your calendar. Automated reminders halve your no-show rate.</p>
              <ul className="feature-list">
                <li>Real-time calendar sync</li>
                <li>Automated SMS & email reminders</li>
                <li>Book from web, text, or call</li>
                <li>Blocked for jobs in progress</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Lead Follow-Up Automation</h3>
              <p>Every missed call gets an instant text back. Every web enquiry gets followed up within 60 seconds. No lead slips through the cracks ever again.</p>
              <ul className="feature-list">
                <li>Missed-call text-back in seconds</li>
                <li>Scheduled follow-up sequences</li>
                <li>Personalised quoting links</li>
                <li>Lead scoring & prioritisation</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Review Collection</h3>
              <p>Automatically request Google and Trustpilot reviews after every completed job. More reviews = higher rankings = more leads. Simple.</p>
              <ul className="feature-list">
                <li>Auto-request after job completion</li>
                <li>Google & Trustpilot integration</li>
                <li>Review response assistant</li>
                <li>Reputation dashboard</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>High-Converting Website</h3>
              <p>A professional, mobile-optimised site built for roofing. Fast load times, clear calls to action, and designed to convert visitors into leads.</p>
              <ul className="feature-list">
                <li>Built for roofing specifically</li>
                <li>Mobile-first responsive design</li>
                <li>SEO-optimised structure</li>
                <li>Service pages & project gallery</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Monthly Analytics</h3>
              <p>Know exactly how many leads came in, how fast you responded, what converted, and where to improve. Data-driven decisions for steady growth.</p>
              <ul className="feature-list">
                <li>Lead source tracking</li>
                <li>Response time metrics</li>
                <li>Conversion funnel analytics</li>
                <li>Monthly growth report</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section how-it-works">
        <div className="container">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">From First Call to Finished Roof — We Handle the Middle</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Lead Arrives</h3>
                <p>Phone call, website enquiry, Google review, or text — our AI captures it instantly, day or night.</p>
              </div>
              <div className="step-arrow">→</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>AI Engages</h3>
                <p>Your AI receptionist answers, qualifies the lead, and books a free roof survey appointment directly into your calendar.</p>
              </div>
              <div className="step-arrow">→</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>You Quote</h3>
                <p>You arrive, inspect, and quote. No admin, no phone tag, no missed follow-ups. Focus on the work that pays.</p>
              </div>
              <div className="step-arrow">→</div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Job Done → Review Requested</h3>
                <p>When you mark the job complete, we automatically request a review. More reviews drive more leads.</p>
              </div>
              <div className="step-arrow step-arrow-final">✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Demo */}
      <section className="section booking-demo">
        <div className="container">
          <div className="section-label">In Action</div>
          <h2 className="section-title">See How Fast Booking Works</h2>
          <div className="booking-demo-card">
            <div className="booking-demo-chat">
              <div className="chat-msg chat-msg-customer">
                <strong>Homeowner:</strong> "Hi, I've got a leak in my conservatory roof. Can someone take a look?"
              </div>
              <div className="chat-msg chat-msg-ai">
                <span className="chat-tag">AI Receptionist</span>
                <strong>RoofAI:</strong> "I'm sorry to hear that! I can book a free survey for you. We have slots available this Thursday morning or Friday afternoon. Which works best for you?"
              </div>
              <div className="chat-msg chat-msg-customer">
                <strong>Homeowner:</strong> "Thursday morning, please."
              </div>
              <div className="chat-msg chat-msg-ai">
                <span className="chat-tag">AI Receptionist</span>
                <strong>RoofAI:</strong> "Perfect! I've booked you for Thursday at 9:30 AM. You'll receive a confirmation text and a reminder the day before. Can I also grab your postcode to send over a quick quote form?"
              </div>
              <div className="chat-msg chat-msg-system">
                ✅ Appointment booked in 47 seconds — no human needed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Showcase */}
      <section className="section reviews">
        <div className="container">
          <div className="section-label">Social Proof</div>
          <h2 className="section-title">Trusted by Roofing Companies Across the UK</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"We were losing 3-4 calls a day. Since RoofAI took over, we haven't missed a single lead. Best investment we've made."</p>
              <div className="review-author">
                <div className="review-avatar">MP</div>
                <div>
                  <strong>Mark Phillips</strong>
                  <span>Phillips Roofing, Manchester</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Setup was straightforward, and the booking system alone saved us hours on the phone every week. The AI sounds surprisingly natural too."</p>
              <div className="review-author">
                <div className="review-avatar">SH</div>
                <div>
                  <strong>Sarah Hussain</strong>
                  <span>Pinnacle Roofing, Birmingham</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Our Google reviews went from 12 to 47 in three months thanks to the automated collection. We're ranking higher than ever."</p>
              <div className="review-author">
                <div className="review-avatar">DT</div>
                <div>
                  <strong>David Turner</strong>
                  <span>Turner & Sons, Bristol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section pricing">
        <div className="container">
          <div className="section-label">Simple Pricing</div>
          <h2 className="section-title">One Complete Package. One Monthly Fee.</h2>
          <p className="section-subtitle">
            No hidden costs, no per-lead fees, no long contracts. Everything included.
          </p>
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-badge">Most Popular</div>
              <h3>Growth</h3>
              <div className="pricing-amount">
                <span className="pricing-currency">£</span>
                <span className="pricing-number">1,500</span>
              </div>
              <p className="pricing-period">one-time setup</p>
              <div className="pricing-monthly">
                + <strong>£795</strong>/month
              </div>
              <ul className="pricing-features">
                <li>✓ High-converting roofing website</li>
                <li>✓ AI receptionist (24/7 call answering)</li>
                <li>✓ Automated appointment booking</li>
                <li>✓ Missed-call text-back system</li>
                <li>✓ Lead follow-up automation</li>
                <li>✓ Review collection (Google + Trustpilot)</li>
                <li>✓ Monthly analytics report</li>
                <li>✓ UK-based support</li>
              </ul>
              <a href="#contact" className="btn btn-primary btn-full">Get Started</a>
            </div>
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Best Value</div>
              <h3>Enterprise</h3>
              <div className="pricing-amount">
                <span className="pricing-currency">£</span>
                <span className="pricing-number">2,500</span>
              </div>
              <p className="pricing-period">one-time setup</p>
              <div className="pricing-monthly">
                + <strong>£1,295</strong>/month
              </div>
              <ul className="pricing-features">
                <li>✓ Everything in Growth</li>
                <li>✓ Multi-location support (up to 5)</li>
                <li>✓ Custom AI receptionist voice</li>
                <li>✓ Advanced lead scoring & CRM</li>
                <li>✓ Google Ads integration</li>
                <li>✓ Competitor review monitoring</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Priority support (24h response)</li>
              </ul>
              <a href="#contact" className="btn btn-primary btn-full">Get Started</a>
            </div>
            <div className="pricing-card">
              <div className="pricing-badge">Starter</div>
              <h3>Essentials</h3>
              <div className="pricing-amount">
                <span className="pricing-currency">£</span>
                <span className="pricing-number">1,000</span>
              </div>
              <p className="pricing-period">one-time setup</p>
              <div className="pricing-monthly">
                + <strong>£495</strong>/month
              </div>
              <ul className="pricing-features">
                <li>✓ AI receptionist (business hours)</li>
                <li>✓ Missed-call text-back</li>
                <li>✓ Appointment booking</li>
                <li>✓ Review collection</li>
                <li>✓ Monthly analytics</li>
                <li>✗ Custom website</li>
                <li>✗ Lead follow-up sequences</li>
                <li>✗ UK-based support</li>
              </ul>
              <a href="#contact" className="btn btn-outline btn-full">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Stats */}
      <section className="section case-study">
        <div className="container">
          <div className="case-study-inner">
            <div className="case-study-content">
              <div className="section-label">Case Study</div>
              <h2 className="section-title">How Bristol Roofing Ltd Doubled Their Revenue in 6 Months</h2>
              <p className="case-study-text">
                A 3-man roofing team in Bristol was losing over 15 calls per week to voicemail. 
                After implementing RoofAI Growth, they went from answering 40% of calls to 100%. 
                Booked appointments increased by 280%, and their monthly revenue went from £28k to £61k.
              </p>
              <div className="case-study-results">
                <div className="cs-result">
                  <span className="cs-number">280%</span>
                  <span className="cs-label">More Appointments</span>
                </div>
                <div className="cs-result">
                  <span className="cs-number">100%</span>
                  <span className="cs-label">Call Answer Rate</span>
                </div>
                <div className="cs-result">
                  <span className="cs-number">2.2x</span>
                  <span className="cs-label">Revenue Increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Ready to Stop Missing Leads?</h2>
          <p className="section-subtitle">
            Book a free 15-minute demo. We'll show you exactly how RoofAI Growth works for your roofing business.
          </p>
          <div className="contact-form-wrapper">
            {formSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Thank you! We'll be in touch within 2 hours.</h3>
                <p>In the meantime, feel free to browse our site or call us directly at <strong>0800 123 4567</strong></p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. John Smith" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} placeholder="e.g. Smith Roofing Ltd" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@smithroofing.co.uk" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="07700 900000" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">What's your biggest challenge right now?</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="e.g. We're struggling to keep up with calls during busy periods..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full btn-lg">Book My Free Demo</button>
                <p className="form-disclaimer">No commitment required. No spam. We respect your privacy.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">🏠</span>
              <span className="logo-text">RoofAI <span className="logo-accent">Growth</span></span>
            </div>
            <p>The complete AI-powered growth system for UK roofing companies.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#contact">Book a Demo</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#">Case Studies</a>
              <a href="#">ROI Calculator</a>
              <a href="#">Help Centre</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 RoofAI Growth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
