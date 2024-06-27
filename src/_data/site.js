const CANONICAL_URL = 'sprightly-mermaid-c6bdda.netlify.app';
const isDevelopmentBuild = process.env.ELEVENTY_ENV === 'dev';
const isNetlifyProductionDeployment = process.env.CONTEXT === 'production';

// Netlify build URL
const netlifyBuildUrl = isNetlifyProductionDeployment ?
  CANONICAL_URL : process.env.DEPLOY_PRIME_URL;

// Point to localhost URL for development builds
const url = isDevelopmentBuild ? 'http://localhost:8080' : netlifyBuildUrl;

module.exports = {
    title: 'Keenan',
    email: 'keenan@gkeenan.co',
    description: 'A very good website by Keenan',
    url,
    mediaFilesUrl: ''
  }