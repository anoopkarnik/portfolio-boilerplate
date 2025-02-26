#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const repoUrl = 'https://github.com/anoopkarnik/portfolio-boilerplate.git';

const main = () => {
  const args = process.argv.slice(2);
  const targetDir = args[0] || 'portfolio';

  console.log(`Cloning the repository into ${targetDir}...`);
  execSync(`git clone --depth=1 ${repoUrl} ${targetDir}`, { stdio: 'inherit' });

  console.log('Copying environment file...');
  execSync(`cp ${path.join(targetDir, 'docker/.env.example.nextjs-app')} ${path.join(targetDir, 'apps/nextjs-app/.env')}`, { stdio: 'inherit' });

  console.log('Installing dependencies...');
  execSync(`cd ${targetDir} && npm install`, { stdio: 'inherit' });


  console.log('Your Portfolio is ready! 🎉');
};

main();
