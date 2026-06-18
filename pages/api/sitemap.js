export default async function handler(req, res) {
  // Datos simulados de tu base de datos
  const postsDinamicos = [
    { slug: "introduccion-a-nextjs" },
    { slug: "guia-seo-avanzado" },
  ];

  // Páginas fijas
  const paginasEstaticas = ["", "blog", "contacto"];
  
  // Tu dominio real de Render
  const dominioReal = "https://onrender.com";

  // CORREGIDO: Formato de urlset oficial que exige Google
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://sitemaps.org">';

  // CORREGIDO: Páginas estáticas con tu dominio real
  paginasEstaticas.forEach((page) => {
    const ruta = page === "" ? "" : "/" + page;
    xml += '<url>';
    xml += '<loc>' + dominioReal + ruta + '</loc>';
    xml += '<changefreq>daily</changefreq>';
    xml += '<priority>' + (page === "" ? "1.0" : "0.8") + '</priority>';
    xml += '</url>';
  });
  
  // CORREGIDO: Rutas dinámicas con el slug real y dominio de Render
  postsDinamicos.forEach((post) => {
    xml += '<url>';
    xml += '<loc>' + dominioReal + '/blog/' + post.slug + '</loc>';
    xml += '<changefreq>weekly</changefreq>';
    xml += '<priority>0.6</priority>';
    xml += '</url>';
  });

  xml += '</urlset>';

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();
}
