import { ChartLine, Users, CurrencyDollar } from '@phosphor-icons/react';
import TypingEffect from '../components/TypingEffect';
import {Link} from 'react-router-dom';
const Home = () => {
  const words = ['Strategy Consultant', 'Business Growth Expert', 'Operational Turnaround'];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--primary) 100%)', color: 'var(--text-light)', padding: '10rem 0 5rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-alt) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Welcome to My Portfolio</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            I am a <TypingEffect words={words} />
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>Specializing in Strategic Business Growth for Mid-Sized Companies</p>
          <Link to="/contact">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center' }}>
              <ChartLine size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Strategic Planning</h3>
              <p>Develop comprehensive strategies to drive business growth and operational efficiency.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center' }}>
              <Users size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Team Optimization</h3>
              <p>Enhance team performance and productivity through targeted interventions.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '10px', textAlign: 'center' }}>
              <CurrencyDollar size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Financial Turnaround</h3>
              <p>Turn around struggling businesses with proven financial strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-light)' }} className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Client Testimonials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop" alt="John Smith" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1rem' }} />
                <div>
                  <p style={{ margin: 0, fontWeight: '600' }}>Sarah Johnson</p>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>CEO, TechCorp</p>
                </div>
              </div>
              <div style={{ display: 'flex', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {'★★★★★'.split('').map((star, i) => <span key={i} style={{ color: 'var(--accent)', marginRight: '0.05rem' }}>{star}</span>)}
              </div>
              <p>"Incredible results! Our revenue increased by 40% in just 6 months. The strategic insights provided were game-changing for our business."</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="Sarah Johnson" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1rem' }} />
                <div>
                  <p style={{ margin: 0, fontWeight: '600' }}>John Smith</p>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Founder, StartupXYZ</p>
                </div>
              </div>
              <div style={{ display: 'flex', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {'★★★★★'.split('').map((star, i) => <span key={i} style={{ color: 'var(--accent)', marginRight: '0.05rem' }}>{star}</span>)}
              </div>
              <p>"Professional and insightful. Highly recommend for any business challenges. They understood our market perfectly and delivered results beyond expectations."</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)', borderRadius: '10px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop" alt="Michael Chen" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '1rem' }} />
                <div>
                  <p style={{ margin: 0, fontWeight: '600' }}>Michael Chen</p>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Director, ManufactureCo</p>
                </div>
              </div>
              <div style={{ display: 'flex', marginBottom: '1rem' ,fontSize: '1.2rem'}}>
                {'★★★★★'.split('').map((star, i) => <span key={i} style={{ color: 'var(--accent)', marginRight: '0.05rem' }}>{star}</span>)}
              </div>
              <p>"Transformed our operations completely. Their lean methodology cut our costs by 35% while improving efficiency. Exceptional expertise and execution."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact me today for a free consultation.</p>
          <Link to="/contact">
            <button className="btn">Contact Me</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;