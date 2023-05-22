import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const PORT = parseInt(process.env.VITE_PORT) || 5173;

  return defineConfig({
    plugins: [react()],
    server: {
      port: PORT,
      host: true,
    },
    preview: {
      port: PORT,
      host: true,
    },
  });
};
