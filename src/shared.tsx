import { ArrowUpRight, CodeXml, ArrowRight } from 'lucide-react';
import { Button, ContentContainer } from '@cqu-moe/ui';
import type { ReactNode } from 'react';
import type { Service, ServiceBrand } from './services';

export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="site">
      <a className="skip-link" href="#main-content">跳至正文</a>
      <header className="site-header">
        <div className="page-width header-line">
          <a className="wordmark" href="/" aria-label="CQU Moe 首页">
            <ServiceMark brand="cqu-moe" />
            <span className="wordmark-name">CQU<span>Moe.</span></span>
          </a>
          <div className="header-actions">
            <Button asChild variant="ghost">
              <a href="https://auth.cqu.moe">
                <ServiceMark brand="auth" size={24} />账号中心<ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <div id="appearance" className="appearance" />
          </div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}><ContentContainer>{children}</ContentContainer></main>
      <footer className="site-footer">
        <div className="page-width footer-line">
          <p>CQU Moe<span className="footer-separator" aria-hidden="true"> / </span>校园工具，一处直达。</p>
          <nav aria-label="相关链接">
            <a href="https://github.com/cqu-moe/design">设计系统<ArrowUpRight aria-hidden="true" /></a>
            <a href="https://github.com/cqu-moe"><CodeXml aria-hidden="true" />GitHub</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export function ServiceLink({ service, prominent = false }: { service: Service; prominent?: boolean }) {
  return (
    <Button asChild variant={prominent ? 'default' : 'outline'}>
      <a href={service.url}>{service.action}<ArrowUpRight aria-hidden="true" /></a>
    </Button>
  );
}

export function TextLink({ service }: { service: Service }) {
  return (
    <a className="text-link" href={service.url} aria-label={service.action + '：' + service.name}>
      {service.action}<ArrowRight aria-hidden="true" />
    </a>
  );
}

export function ServiceMark({ brand, size = 32 }: { brand: ServiceBrand | 'auth' | 'cqu-moe' | null; size?: 24 | 32 }) {
  const light = brand === 'quicklogin' ? 'logo.svg' : 'logo-black.svg';
  const dark = brand === 'quicklogin' ? 'logo-dark.svg' : 'logo-white.svg';
  return (
    <span className={'brand-mark' + (size === 24 ? ' brand-mark-compact' : '')} aria-hidden="true">
      {brand && <>
        <img className="brand-light" src={'/brand/' + brand + '/' + light} width={size} height={size} alt="" />
        <img className="brand-dark" src={'/brand/' + brand + '/' + dark} width={size} height={size} alt="" />
      </>}
    </span>
  );
}
