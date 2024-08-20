const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

async function generateSitemap() {
  try {
    const apiUrl = 'http://localhost:3000/api/data'; // Replace with your production URL if needed
    console.log(`Fetching data from: ${apiUrl}`);
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${apiUrl}: ${response.statusText}`);
    }

    const data = await response.json();

    const urls = data.map(item => item.url);

    // Create XML structure
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
      <url>
        <loc>https://yourwebsite.com${url}</loc> <!-- Replace with actual domain -->
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      `).join('')}
    </urlset>
    `;

    // Write to public directory
    const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
  }
}

generateSitemap();
