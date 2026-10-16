import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Direct } from './direct';
import { Scenarios } from './scenarios';
import { Directory } from './directory';
const variants = [{ name: 'Direct', Component: Direct }, { name: 'Scenes', Component: Scenarios }, { name: 'Index', Component: Directory }];
function initialVariant() { const value = Number(new URLSearchParams(location.search).get('v')); return Number.isInteger(value) && value >= 1 && value <= variants.length ? value - 1 : 0; }
export function Picker() {
  const [current, setCurrent] = useState(initialVariant);
  const [replay, setReplay] = useState(0);
  const picker = useRef<HTMLElement>(null);
  const highlight = useRef<HTMLSpanElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  function select(index: number) { setCurrent(index); setReplay(value => value + 1); }
  useLayoutEffect(() => {
    function measure() { const item = items.current[current]; if (!item || !highlight.current) return; highlight.current.style.width = `${item.offsetWidth}px`; highlight.current.style.transform = `translateX(${item.offsetLeft}px)`; }
    measure(); window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure);
  }, [current]);
  useEffect(() => { const url = new URL(location.href); url.searchParams.set('v', String(current + 1)); history.replaceState(null, '', url); document.title = `${variants[current].name} · CQU Moe 首页原型`; }, [current]);
  useEffect(() => { let second = 0; const first = requestAnimationFrame(() => { second = requestAnimationFrame(() => picker.current?.setAttribute('data-ready', '')); }); return () => { cancelAnimationFrame(first); cancelAnimationFrame(second); }; }, []);
  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      if (event.defaultPrevented || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable || target.closest('[role="menu"]') || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
      const number = Number(event.key);
      if (number >= 1 && number <= variants.length) select(number - 1);
      else if (event.key === 'ArrowRight') { event.preventDefault(); select((current + 1) % variants.length); }
      else if (event.key === 'ArrowLeft') { event.preventDefault(); select((current - 1 + variants.length) % variants.length); }
      else if (event.key.toLowerCase() === 'r') setReplay(value => value + 1);
    }
    document.addEventListener('keydown', handleKey); return () => document.removeEventListener('keydown', handleKey);
  }, [current]);
  const Variant = variants[current].Component;
  return <><Variant key={`${current}-${replay}`} /><nav className="proto-picker" aria-label="Prototype variants" ref={picker}><span className="proto-picker-highlight" aria-hidden="true" ref={highlight} />{variants.map((variant, index) => <button key={variant.name} className="proto-picker-item" ref={el => { items.current[index] = el; }} data-active={current === index ? '' : undefined} aria-current={current === index ? 'true' : undefined} onClick={() => select(index)}>{variant.name}</button>)}</nav></>;
}
