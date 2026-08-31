import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';
import './App.css';

export const createRoot = ViteReactSSG({ routes });
