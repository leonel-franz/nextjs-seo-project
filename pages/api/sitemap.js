export default async function handler(req, res) {
  // Datos simulados de la base de datos
  const postsDinamicos = [
    { slug: "introduccion-a-nextjs" },
    { slug: "guia-seo-avanzado" },
  ];

  // Páginas fijas
  const paginasEstaticas = ["", "blog", "contacto"];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://sitemaps.org">`;

  // CORREGIDO: Ahora usa correctamente ${page} con la barra diagonal /
  paginasEstaticas.forEach((page) => {
    const ruta = page === "" ? "" : `/${page}`;
    xml += `
      <url>
        <loc>https://mi-sitio.com${ruta}</loc>
        <changefreq>daily</changefreq>
        <priority>${page === "" ? "1.0" : "0.8"}</priority>
      </url>
    `;
  });
  
  // CORREGIDO: Ahora usa correctamente ${post.slug}
  postsDinamicos.forEach((post) => {
    xml += `
      <url>
        <loc>https://mi-sitio.com{post.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
      </url>
    `;
  });

  xml += `</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();
}
