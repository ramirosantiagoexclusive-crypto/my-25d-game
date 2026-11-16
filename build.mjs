import { existsSync, readdirSync } from 'fs';
import { execSync } from 'child_process';

const distHasHtml = existsSync('dist/index.html');
const hasVite = existsSync('node_modules/vite/bin/vite.js');

if (hasVite) {
  execSync('node node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
} else if (distHasHtml) {
  console.log('node_modules not available — using pre-built dist/');
} else {
  console.error('Cannot build: no node_modules and no pre-built dist/');
  process.exit(1);
}
