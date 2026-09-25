import fs from 'fs';
import { execSync } from 'child_process';

console.log('[Atelier Kilim] Checking for frames asset packages...');

if (fs.existsSync('frames.zip')) {
  console.log('[Atelier Kilim] Found frames.zip! Automatically uncompressing...');
  try {
    try {
      execSync('unzip -o -q frames.zip', { stdio: 'inherit' });
    } catch {
      execSync('python3 -m zipfile -e frames.zip .', { stdio: 'inherit' });
    }
    console.log('[Atelier Kilim] Successfully unpacked frames.zip into /frames');
  } catch (err) {
    console.warn('[Atelier Kilim] Notice on extracting frames.zip:', err.message);
  }
} else {
  console.log('[Atelier Kilim] No frames.zip archive found; skipping unzip.');
}
