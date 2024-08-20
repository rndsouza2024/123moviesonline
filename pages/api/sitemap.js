// const fs = require('fs');
// const path = require('path');
// const fetch = require('node-fetch');

// export default async function handler(req, res) {
//   const response = await fetch('https://example.com/api/data');
//   const data = await response.json();
//   res.status(200).json(data);
// }

// const sitemap = `
// <?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://yourwebsite.com/</loc>
//     <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>daily</changefreq>
//     <priority>1.0</priority>
//   </url>
//   <!-- Add more URLs here -->
// </urlset>
// `;

// const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

// fs.writeFileSync(sitemapPath, sitemap, 'utf8');

// console.log('Sitemap generated successfully!');

// export default async function handler(req, res) {
//     try {
//       const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
//       const sitemap = fs.readFileSync(sitemapPath, 'utf8');
//       res.setHeader('Content-Type', 'application/xml');
//       res.status(200).send(sitemap);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to read sitemap' });
//     }
//   }


import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    // Fetch dynamic URLs from your data source
    const response = await fetch('http://localhost:3000/api/data'); // Update this URL to your actual data source
    if (!response.ok) {
      throw new Error(`Failed to fetch from API: ${response.statusText}`);
    }
    const data = await response.json();

    // Example data format: [{ "url": "/page1" }, { "url": "/page2" }]
    // Adjust the data parsing based on your actual data structure
    const urls = data.map(item => item.url);

    // Create XML sitemap
    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
      <url>
        <loc>https://yourwebsite.com${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
      `).join('')}
    </urlset>
    `;

    // Set content type and send the XML response
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    res.status(500).json({ error: 'Failed to generate sitemap' });
  }
}

  