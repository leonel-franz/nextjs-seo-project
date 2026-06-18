import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Blog de Tecnología y Desarrollo Web | Mi Sitio</title>
        <meta name="description" content="Artículos y tutoriales sobre programación, Next.js y optimización SEO." />
      </Head>

      <nav style={styles.nav}>
        <Link href="/" style={styles.navLink}>Home</Link>
        <Link href="/blog" style={{...styles.navLink, ...styles.activeLink}}>Blog</Link>
        <Link href="/contacto" style={styles.navLink}>Contacto</Link>
      </nav>

      <main style={styles.main}>
        <h1 style={styles.title}>Nuestro Blog de Rendimiento</h1>
        <p style={styles.subtitle}>Artículos técnicos explicados de forma sencilla.</p>

        {/* Artículo 1 */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Introducción Práctica a Next.js</h2>
          <p style={{color: "#9CA3AF", fontSize: "14px", marginBottom: "10px"}}>Publicado hace 2 días • 5 min de lectura</p>
          <p style={{color: "#CBD5E1"}}>Aprende cómo Next.js maneja el renderizado en el servidor para mejorar los tiempos de respuesta...</p>
        </div>

        {/* Artículo 2 */}
        <div style={{...styles.card, marginTop: "20px"}}>
          <h2 style={styles.cardTitle}>Guía de SEO Avanzado para Desarrolladores</h2>
          <p style={{color: "#9CA3AF", fontSize: "14px", marginBottom: "10px"}}>Publicado hace 1 semana • 8 min de lectura</p>
          <p style={{color: "#CBD5E1"}}>Estrategias clave para optimizar etiquetas Open Graph, generar mapas de sitio e indexar tu web en Google...</p>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: { backgroundColor: "#0B0F19", color: "#F3F4F6", minHeight: "100vh", fontFamily: "system-ui, sans-serif", padding: "0 20px" },
  nav: { display: "flex", justifyContent: "center", gap: "20px", padding: "20px 0", borderBottom: "1px solid #1E293B" },
  navLink: { color: "#9CA3AF", textDecoration: "none", fontWeight: "500" },
  activeLink: { color: "#3B82F6", borderBottom: "2px solid #3B82F6", paddingBottom: "4px" },
  main: { maxWidth: "800px", margin: "40px auto" },
  title: { fontSize: "36px", fontWeight: "800", marginBottom: "16px", background: "linear-gradient(to right, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  subtitle: { fontSize: "18px", color: "#9CA3AF", marginBottom: "40px" },
  card: { background: "#1E293B", padding: "24px", borderRadius: "12px", border: "1px solid #334155" },
  cardTitle: { fontSize: "22px", fontWeight: "600", color: "#F3F4F6", margin: "0 0 8px 0" }
};
