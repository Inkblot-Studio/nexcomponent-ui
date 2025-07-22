#!/usr/bin/env node

/**
 * @nexcomponent/lib v2.0.0 Import Fix Script
 * 
 * This script helps fix common import issues when migrating to v2.0.0
 * Run this script in your project root directory
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 @nexcomponent/lib v2.0.0 Import Fix Script');
console.log('=============================================\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script in your project root.');
  process.exit(1);
}

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Check if @nexcomponent/lib is installed
if (!packageJson.dependencies?.['@nexcomponent/lib'] && !packageJson.devDependencies?.['@nexcomponent/lib']) {
  console.log('📦 Installing @nexcomponent/lib v2.0.0...');
  try {
    execSync('npm install @nexcomponent/lib@2.0.0', { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Failed to install @nexcomponent/lib v2.0.0');
    process.exit(1);
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to fix imports in a file
function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix default imports to named imports
  const defaultImportRegex = /import\s+(\w+)\s+from\s+['"]@nexcomponent\/lib\/(\w+)['"]/g;
  const defaultImportMatches = content.match(defaultImportRegex);
  
  if (defaultImportMatches) {
    console.log(`  🔄 Fixing default imports in ${path.relative(process.cwd(), filePath)}`);
    content = content.replace(defaultImportRegex, (match, componentName, componentPath) => {
      // Convert to named import
      return `import { ${componentName} } from '@nexcomponent/lib'`;
    });
    modified = true;
  }
  
  // Fix CSS imports
  const cssImportRegex = /import\s+['"]@nexcomponent\/lib\/dist\/style\.css['"]/g;
  if (cssImportRegex.test(content)) {
    console.log(`  🎨 Fixing CSS import in ${path.relative(process.cwd(), filePath)}`);
    content = content.replace(cssImportRegex, "import '@nexcomponent/lib/style.css'");
    modified = true;
  }
  
  // Add CSS import if not present and component imports exist
  const hasComponentImport = /import.*@nexcomponent\/lib/.test(content);
  const hasCssImport = /import.*@nexcomponent\/lib.*style\.css/.test(content);
  
  if (hasComponentImport && !hasCssImport) {
    console.log(`  ➕ Adding CSS import to ${path.relative(process.cwd(), filePath)}`);
    // Add CSS import at the top
    const lines = content.split('\n');
    const importIndex = lines.findIndex(line => line.includes('import') && line.includes('@nexcomponent/lib'));
    if (importIndex !== -1) {
      lines.splice(importIndex + 1, 0, "import '@nexcomponent/lib/style.css';");
      content = lines.join('\n');
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

// Main execution
console.log('🔍 Scanning for files to fix...');

const files = findFiles('.');
let fixedFiles = 0;

files.forEach(file => {
  if (fixImportsInFile(file)) {
    fixedFiles++;
  }
});

console.log(`\n✅ Fixed ${fixedFiles} files`);

// Create/update vite.config.js if it doesn't exist
if (!fs.existsSync('vite.config.js') && !fs.existsSync('vite.config.ts')) {
  console.log('\n📝 Creating vite.config.js for better compatibility...');
  const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@nexcomponent/lib': '@nexcomponent/lib/dist/esm/index.js'
    }
  },
  optimizeDeps: {
    include: ['@nexcomponent/lib']
  }
});`;
  
  fs.writeFileSync('vite.config.js', viteConfig);
  console.log('  ✅ Created vite.config.js');
}

console.log('\n🎉 Migration complete!');
console.log('\n📋 Next steps:');
console.log('1. Test your application');
console.log('2. Check the MIGRATION_GUIDE.md for detailed information');
console.log('3. Update any custom styling if needed');
console.log('4. Run your build process to ensure everything works');

console.log('\n📚 For more help, see:');
console.log('- MIGRATION_GUIDE.md');
console.log('- https://github.com/Inkblot-Studio/nexcomponent-ui'); 