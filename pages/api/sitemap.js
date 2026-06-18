export default async function handler(req, res) {
  const postsDinamicos = [
    { slug: "introduccion-a-nextjs" },
    { slug: "guia-seo-avanzado" },
  ];

  const paginasEstaticas = ["", "blog", "contacto"];

  const dominioReal = "https://nextjs-seo-project.onrender.com";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>';

  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  paginasEstaticas.forEach((page) => {
    const ruta = page ? `/${page}` : "";

    xml += `
      <url>
        <loc>${dominioReal}${ruta}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === "" ? "1.0" : "0.8"}</priority>
      </url>
    `;
  });

  postsDinamicos.forEach((post) => {
    xml += `
      <url>
        <loc>${dominioReal}/blog/${post.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
      </url>
    `;
  });

  xml += "</urlset>";

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(xml);
}