import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button, Input, Label, PageHeader, PageState } from '@cqu-moe/ui';
import { Frame, ServiceMark, Meta, TextLink } from './shared';
import { categories, services } from './services';
export function Directory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('全部');
  const matches = services.filter(service => (category === '全部' || (category === '内测工具' ? service.beta : service.category === category)) && `${service.name} ${service.english} ${service.description} ${service.category} ${service.domain}`.toLowerCase().includes(query.trim().toLowerCase()));
  function clear() { setQuery(''); setCategory('全部'); }
  return <Frame><div className="directory-layout"><div className="directory-heading"><p className="eyebrow">CQU MOE / 服务索引</p><PageHeader title="所有服务" description="找到需要的工具，直接开始。" /></div>
    <section aria-label="查找服务" className="directory-tools"><div className="search-field"><Label htmlFor="service-search">搜索服务</Label><div className="search-input"><Search aria-hidden="true" /><Input id="service-search" type="search" placeholder="名称、用途或网址" value={query} onChange={event => setQuery(event.target.value)} /></div></div><div className="filters" role="group" aria-label="服务分类">{categories.map(item => <Button key={item} variant={category === item ? 'secondary' : 'ghost'} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}</div></section>
    <div className="results-heading"><span role="status" aria-live="polite">{matches.length} 项服务</span>{(query || category !== '全部') && <Button variant="ghost" onClick={clear}>清除筛选</Button>}</div>
    {matches.length ? <div className="directory-list">{matches.map(service => <article className="directory-row" key={service.id}><div className="directory-name"><ServiceMark brand={service.brand} /><div><h2>{service.name}</h2><span className="domain">{service.domain}</span></div></div><p>{service.description}</p><Meta service={service} /><TextLink service={service} /></article>)}</div> : <PageState state="empty" title="没有找到匹配的服务" description="换个关键词，或清除筛选查看全部服务。" action={<Button variant="outline" onClick={clear}>查看全部服务</Button>} />}
    <p className="directory-note">标注“内测”的工具仍在打磨中，访问条件请查看对应项目。</p>
  </div></Frame>;
}
