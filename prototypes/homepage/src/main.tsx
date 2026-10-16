import { createRoot } from 'react-dom/client';
import { ThemeProvider, Toaster } from '@cqu-moe/ui';
import { Picker } from './picker';
import '@cqu-moe/theme/styles.css';
import '@cqu-moe/ui/styles.css';
import './styles.css';
import './picker.css';
createRoot(document.getElementById('root')!).render(<ThemeProvider><Picker /><Toaster /></ThemeProvider>);
