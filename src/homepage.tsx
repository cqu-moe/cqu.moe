import { Frame, ServiceMark, ServiceLink, TextLink } from './shared';
import { dailyServices, tools } from './services';

export function Homepage() {
  return (
    <Frame>
      <section className="hero" aria-labelledby="homepage-title">
        <p className="eyebrow">CQU MOE / 校园工具集</p>
        <h1 id="homepage-title">上课、看通知。<br /><span>从这里开始。</span></h1>
        <p className="lead">把常用的校园服务放在一起，<br className="mobile-break" />让找入口这件事简单一点。</p>
      </section>
      <section aria-labelledby="daily-title" className="service-section">
        <div className="section-heading"><h2 id="daily-title">日常所需</h2><span>两个入口，接上校园日常</span></div>
        <div className="primary-grid">
          {dailyServices.map((service, index) => (
            <article className="service-card" key={service.id}>
              <div className="card-top">
                <ServiceMark brand={service.brand} />
                <span className="service-code">0{index + 1} / {service.english}</span>
              </div>
              <div className="card-body"><h3>{service.name}</h3><p>{service.description}</p></div>
              <div className="card-bottom">
                <ServiceLink service={service} prominent={service.id === 'schedule'} />
                <span className="domain">{service.domain}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section aria-labelledby="tools-title" className="service-section">
        <div className="section-heading"><h2 id="tools-title">再顺手一点</h2><span>正在打磨的小工具</span></div>
        <div className="tools-grid">
          {tools.map(service => (
            <article className="tool-card" key={service.id}>
              <ServiceMark brand={service.brand} />
              <div className="tool-body">
                <div className="title-line"><h3>{service.name}</h3>{service.beta && <span className="beta-tag">内测</span>}</div>
                <p>{service.description}</p>
                <div className="service-meta">{service.category}</div>
                <TextLink service={service} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </Frame>
  );
}
