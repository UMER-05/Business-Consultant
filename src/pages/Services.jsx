import { ChartLine, Users, CurrencyDollar, Gear } from '@phosphor-icons/react';

const Services = () => {
  return (
    <div>
      <section className="section" style={{ paddingTop: '8rem', backgroundColor: 'var(--secondary)', textAlign: 'center', color: 'var(--text-light)' }}>
        <div className="container">
          <h1>Our Services</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Comprehensive consulting solutions tailored for mid-sized companies.</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', textAlign: 'center', color: 'var(--text-light)', backgroundColor: 'var(--tertiary)' }}>
              <ChartLine size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Strategic Planning</h3>
              <p>Develop long-term strategies to position your company for growth and competitive advantage.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', textAlign: 'center', color: 'var(--text-light)', backgroundColor: 'var(--tertiary)' }}>
              <Users size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Organizational Development</h3>
              <p>Optimize team structures, processes, and culture for maximum efficiency and productivity.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', textAlign: 'center', color: 'var(--text-light)', backgroundColor: 'var(--tertiary)' }}>
              <CurrencyDollar size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Financial Consulting</h3>
              <p>Improve financial performance through cost optimization, revenue enhancement, and risk management.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '10px', textAlign: 'center', color: 'var(--text-light)', backgroundColor: 'var(--tertiary)' }}>
              <Gear size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3>Operational Excellence</h3>
              <p>Streamline operations, implement best practices, and drive continuous improvement initiatives.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;