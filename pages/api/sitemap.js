export default async function handler(req, res) {
  const postsDinamicos = [
    { slug: "introduccion-a-nextjs" },
    { slug: "guia-seo-avanzado" },
  ];

  const paginasEstaticas = ["", "blog", "contacto"];
  const dominioReal = "https://onrender.com";

  let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
  xml += "<urlset xmlns=\"http://sitemaps.org\">";

  paginasEstaticas.forEach((page) => {
    const ruta = page === "" ? "" : "/" + page;
    xml += '<url>';
    xml += '<loc>' + dominioReal + ruta + '</loc>';
    xml += '<changefreq>daily</changefreq>';
    xml += '<priority>' + (page === "" ? "1.0" : "0.8") + '</priority>';
    xml += '</url>';
  });
  
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
