const About = () => {
  return (
    <div>
      <section className="section" style={{ paddingTop: '8rem', backgroundColor: 'var(--secondary)', color: 'var(--text-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Consultant" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 40px rgba(0,0,0,0.4)' }} />
            </div>
            <div>
              <h1>About Me</h1>
              <p>With over 15 years of experience in strategic consulting, I specialize in helping mid-sized companies achieve sustainable growth and operational excellence.</p>
              <p>My expertise spans across various industries, from technology to manufacturing, providing tailored solutions that drive real results.</p>
              <h3 style={{ marginTop: '2rem' }}>Experience</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0, color: 'var(--text-light)' }}>
                <li style={{ paddingBottom: '0.5rem' }}>✓ 15+ years in business consulting</li>
                <li style={{ paddingBottom: '0.5rem' }}>✓ 100+ successful projects</li>
                <li>✓ Fortune 500 companies served</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-light)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Past Clients</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop" alt="TechCorp" style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '5px', marginBottom: '1rem' }} />
              <p style={{ fontWeight: '600' }}>TechCorp</p>
            </div>
            <div style={{ padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=120&h=120&fit=crop" alt="StartupXYZ" style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '5px', marginBottom: '1rem' }} />
              <p style={{ fontWeight: '600' }}>StartupXYZ</p>
            </div>
            <div style={{ padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=120&fit=crop" alt="Manufacturing Inc" style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '5px', marginBottom: '1rem' }} />
              <p style={{ fontWeight: '600' }}>Manufacturing Inc</p>
            </div>
            <div style={{ padding: '2rem', borderRadius: '10px', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=120&h=120&fit=crop" alt="GlobalRetail" style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '5px', marginBottom: '1rem' }} />
              <p style={{ fontWeight: '600' }}>GlobalRetail</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;