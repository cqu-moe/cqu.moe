import { ArrowUpRight, CodeXml, ArrowRight } from 'lucide-react';
import { Button, ContentContainer, ThemeMenu } from '@cqu-moe/ui';
import type { ReactNode } from 'react';
import { services } from './services';
export function Frame({ children }: { children: ReactNode }) {
  return <div className="site">
    <a className="skip-link" href="#main-content">跳至正文</a>
    <header className="site-header"><div className="page-width"><div className="header-line">
      <a className="wordmark" href="/" aria-label="CQU Moe 首页">CQU<span>Moe.</span></a>
      <div className="header-actions"><Button asChild variant="ghost"><a href="https://auth.cqu.moe"><ServiceMark brand="auth" compact />账号中心<ArrowUpRight aria-hidden="true" /></a></Button><ThemeMenu /></div>
    </div></div></header>
    <main id="main-content" tabIndex={-1}><ContentContainer>{children}</ContentContainer></main>
    <footer className="site-footer"><div className="page-width"><div className="footer-line"><p>CQU Moe<span className="footer-separator" aria-hidden="true"> / </span>校园工具，一处直达。</p><nav aria-label="相关链接"><a href="https://github.com/cqu-moe/design">设计系统<ArrowUpRight aria-hidden="true" /></a><a href="https://github.com/cqu-moe"><CodeXml aria-hidden="true" />GitHub</a></nav></div></div></footer>
  </div>;
}
export function ServiceLink({ service, prominent = false }: { service: typeof services[number]; prominent?: boolean }) {
  return <Button asChild variant={prominent ? 'default' : 'outline'}><a href={service.url}>{service.action}<ArrowUpRight aria-hidden="true" /></a></Button>;
}
export function Meta({ service }: { service: typeof services[number] }) {
  return <div className="service-meta"><span>{service.category}</span>{service.beta && <span className="beta-tag">内测</span>}</div>;
}
export function TextLink({ service }: { service: typeof services[number] }) {
  return <a className="text-link" href={service.url} aria-label={`${service.action}：${service.name}`}>{service.action}<ArrowRight aria-hidden="true" /></a>;
}

export function ServiceMark({ brand, compact = false }: { brand: string | null; compact?: boolean }) {
  const light = brand === 'quicklogin' ? 'logo.svg' : 'logo-black.svg';
  const dark = brand === 'quicklogin' ? 'logo-dark.svg' : 'logo-white.svg';
  return <span className={compact ? 'brand-mark brand-mark-compact' : 'brand-mark'} aria-hidden="true">
    {brand && <><img className="brand-light" src={`/brand/${brand}/${light}`} width="32" height="32" alt="" /><img className="brand-dark" src={`/brand/${brand}/${dark}`} width="32" height="32" alt="" /></>}
  </span>;
}
