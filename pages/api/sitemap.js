export default async function handler(req, res) {
  // Datos simulados de tu base de datos
  const postsDinamicos = [
    { slug: "introduccion-a-nextjs" },
    { slug: "guia-seo-avanzado" },
  ];

  // Páginas fijas
  const paginasEstaticas = ["", "blog", "contacto"];
  
  // Tu subdominio de Render
  const dominioReal = "https://nextjs-seo-project.onrender.com";

  // CORREGIDO: Formato urlset oficial y completo con comillas limpias
  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  xml += "<urlset xmlns=\"http://sitemaps.org\">";

  // Páginas estáticas
  paginasEstaticas.forEach((page) => {
    const ruta = page === "" ? "" : "/" + page;
    xml += '<url>';
    xml += '<loc>' + dominioReal + ruta + '</loc>';
    xml += '<changefreq>daily</changefreq>';
    xml += '<priority>' + (page === "" ? "1.0" : "0.8") + '</priority>';
    xml += '</url>';
  });
  
  // Rutas dinámicas
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
