const CaseStudies = () => {
  return (
    <div>
      <section className="section" style={{ paddingTop: '8rem', textAlign: 'center', backgroundColor: 'var(--secondary)', color: 'var(--text-light)' }}>
        <div className="container">
          <h1>Case Studies</h1>
          <p style={{ color: 'var(--text-muted)' }}>Real results from real projects.</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" alt="Case Study 1" style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} />
              <h3>TechCorp Growth Initiative</h3>
              <p>Helped a mid-sized tech company increase market share by 35% through strategic partnerships and product diversification.</p>
              <p style={{ color: 'var(--accent)', fontWeight: '600' }}>Results: 35% revenue growth, 20% market share increase</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)' }}>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop" alt="Case Study 2" style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} />
              <h3>Manufacturing Turnaround</h3>
              <p>Turned around a struggling manufacturing firm by optimizing supply chain and implementing lean manufacturing principles.</p>
              <p style={{ color: 'var(--accent)', fontWeight: '600' }}>Results: 50% cost reduction, 25% efficiency improvement</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', backgroundColor: 'var(--tertiary)', color: 'var(--text-light)' }}>
              <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop" alt="Case Study 3" style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} />
              <h3>Retail Expansion Strategy</h3>
              <p>Guided a retail chain through successful expansion into new markets with data-driven location selection and branding.</p>
              <p style={{ color: 'var(--accent)', fontWeight: '600' }}>Results: 40% sales increase, successful entry into 3 new markets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;