import { renderToStaticMarkup } from 'react-dom/server';
import { Button } from '@cqu-moe/ui';
import { Homepage } from './homepage';
import { Frame } from './shared';

export function renderPage(notFound = false) {
  return renderToStaticMarkup(notFound ? (
    <Frame>
      <section className="hero not-found">
        <p className="eyebrow">404 / CQU MOE</p>
        <h1>这个页面不存在。</h1>
        <p className="lead">链接可能已变更，回到首页查找你需要的服务。</p>
        <Button asChild><a href="/">返回首页</a></Button>
      </section>
    </Frame>
  ) : <Homepage />);
}
