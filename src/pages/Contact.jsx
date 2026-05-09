import { Envelope, Phone, MapPin } from '@phosphor-icons/react';

const Contact = () => {
  return (
    <div>
      <section className="section" style={{ paddingTop: '8rem', textAlign: 'center', backgroundColor: 'var(--secondary)', color: 'var(--text-light)' }}>
        <div className="container">
          <h1>Contact Me</h1>
          <p style={{ color: 'var(--text-muted)' }}>Get in touch for a free consultation.</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="container">
          <div className='contactUs-wrapper'>
            <div style={{ color: 'var(--text-light)' }}>
              <h2>Get In Touch</h2>
              <p>I'm always open to discussing new opportunities and partnerships.</p>
              <div style={{ marginTop: '2rem' }}>
                <p><Envelope size={20} style={{ marginRight: '1rem' }} /> email@example.com</p>
                <p><Phone size={20} style={{ marginRight: '1rem' }} /> +1 (555) 123-4567</p>
                <p><MapPin size={20} style={{ marginRight: '1rem' }} /> New York, NY</p>
              </div>
            </div>
            <div>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Your Name" style={{ padding: '1rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '5px', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)' }} />
                <input type="email" placeholder="Your Email" style={{ padding: '1rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '5px', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)' }} />
                <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '5px', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)' }}></textarea>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;