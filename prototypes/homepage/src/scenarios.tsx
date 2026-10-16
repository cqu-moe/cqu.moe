import { ArrowDownRight } from 'lucide-react';
import { Frame, ServiceMark, Meta, TextLink } from './shared';
import { services } from './services';
export function Scenarios() {
  return <Frame><div className="scenario-layout"><section className="scenario-intro" aria-labelledby="scenario-title"><p className="eyebrow">CQU MOE / 从一件小事开始</p><h1 id="scenario-title">今天，<br />想做点什么？</h1><p className="lead">安排下一节课，找一条通知，<br />或让熟悉的操作再顺手一点。</p><div className="intro-sign"><ArrowDownRight aria-hidden="true" /><span>选一件你要做的事</span></div></section>
    <section className="scenario-services" aria-label="按使用场景浏览服务">{services.map((service, i) => <article className="scenario-row" key={service.id}><span className="scenario-number" aria-hidden="true">0{i + 1}</span><div className="scenario-body"><Meta service={service} /><h2>{service.intent}</h2><p>{service.description}</p><p className="scenario-detail">{service.detail}</p><div className="scenario-bottom"><span className="service-name"><ServiceMark brand={service.brand} />{service.name}</span><TextLink service={service} /></div></div></article>)}</section>
  </div></Frame>;
}
