import { createRoot } from 'react-dom/client';
import { ThemeMenu, ThemeProvider, Toaster } from '@cqu-moe/ui';
import '@cqu-moe/theme/styles.css';
import '@cqu-moe/ui/styles.css';
import './styles.css';

// Service links are already HTML; only appearance controls need client-side React.
const appearance = document.getElementById('appearance');
if (appearance) {
  createRoot(appearance).render(
    <ThemeProvider><ThemeMenu /><Toaster /></ThemeProvider>,
  );
}
