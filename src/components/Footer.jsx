import { LinkedinLogo, TwitterLogo, GithubLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--text-light)', padding: '3rem 0', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ color: 'var(--accent)' }}>Consultant Portfolio</h3>
            <p style={{ color: 'var(--text-muted)' }}>Strategic Business Growth for Mid-Sized Companies</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p>&copy; 2024 All rights reserved.</p>
            <div 
  style={{
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    justifyContent: "flex-end"
  }} className="social-icons">
              <LinkedinLogo size={24} color="var(--accent)" />
              <TwitterLogo size={24} color="var(--accent)" />
              <GithubLogo size={24} color="var(--accent)" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;