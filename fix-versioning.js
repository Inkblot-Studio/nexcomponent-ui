#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fixing versioning issues...');

// Read current package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
console.log(`📦 Current version: ${packageJson.version}`);

// Check if we're on main branch
try {
  const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  console.log(`🌿 Current branch: ${currentBranch}`);
  
  if (currentBranch !== 'main') {
    console.error('❌ Please switch to main branch before running this script');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Error checking current branch:', error.message);
  process.exit(1);
}

// Get all tags
try {
  const tags = execSync('git tag --sort=-version:refname', { encoding: 'utf8' })
    .split('\n')
    .filter(tag => tag.trim())
    .map(tag => tag.trim());
  
  console.log(`🏷️  Found ${tags.length} tags`);
  
  // Find the latest unique tags
  const uniqueTags = [...new Set(tags)];
  console.log(`🏷️  Unique tags: ${uniqueTags.length}`);
  
  // Find the latest version tag
  const latestTag = uniqueTags[0];
  console.log(`🏷️  Latest tag: ${latestTag}`);
  
  if (latestTag && latestTag !== `v${packageJson.version}`) {
    console.log(`⚠️  Version mismatch: package.json (${packageJson.version}) vs latest tag (${latestTag})`);
  }
  
} catch (error) {
  console.error('❌ Error getting tags:', error.message);
}

console.log('\n📋 Next steps:');
console.log('1. Run: git add .');
console.log('2. Run: git commit -m "fix: update version to 2.2.0 and fix semantic release config"');
console.log('3. Run: git push origin main');
console.log('4. The GitHub Action will automatically create a new release');
console.log('\n💡 If you need to clean up duplicate tags manually:');
console.log('   - git tag -d <duplicate-tag-name> (for each duplicate)');
console.log('   - git push origin :refs/tags/<duplicate-tag-name> (to remove from remote)');

console.log('\n✅ Versioning fix script completed!'); 