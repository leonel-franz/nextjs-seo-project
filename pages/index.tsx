import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicComponent = dynamic(() => import("@/components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
        
        {/* Etiqueta de verificación de Google agregada con éxito */}
        <meta name="google-site-verification" content="ogHJ4M7PFMYA4cByUny0KBCr3xQIlNUgvbo3TTzXoxU" />
      </Head>

      {/* Menú de Navegación */}
      <nav style={styles.nav}>
        <Link href="/" style={{...styles.navLink, ...styles.activeLink}}>Home</Link>
        <Link href="/blog" style={styles.navLink}>Blog</Link>
        <Link href="/contacto" style={styles.navLink}>Contacto</Link>
      </nav>

      {/* Contenido Principal */}
      <main style={styles.main}>
        <h1 style={styles.title}>Bienvenido a mi página optimizada</h1>
        <p style={styles.subtitle}>Aprende cómo mejorar el rendimiento y SEO en Next.js con las mejores prácticas.</p>
        
        <div style={styles.imageContainer}>
          <Image
            src="/images/seo-image.png"
            width={600}
            height={400}
            alt="Ejemplo de imagen optimizada"
            priority
            style={styles.image}
          />
        </div>

        <DynamicComponent />
      </main>
    </div>
  );
}

// Estilos globales compartidos
const styles = {
  container: { backgroundColor: "#0B0F19", color: "#F3F4F6", minHeight: "100vh", fontFamily: "system-ui, sans-serif", padding: "0 20px" },
  nav: { display: "flex", justifyContent: "center", gap: "20px", padding: "20px 0", borderBottom: "1px solid #1E293B" },
  navLink: { color: "#9CA3AF", textDecoration: "none", fontWeight: "500", fontSize: "16px", transition: "0.2s" },
  activeLink: { color: "#3B82F6", borderBottom: "2px solid #3B82F6", paddingBottom: "4px" },
  main: { maxWidth: "800px", margin: "40px auto", textAlign: "center" as const },
  title: { fontSize: "36px", fontWeight: "800", marginBottom: "16px", background: "linear-gradient(to right, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  subtitle: { fontSize: "18px", color: "#9CA3AF", marginBottom: "40px", lineHeight: "1.6" },
  imageContainer: { borderRadius: "12px", overflow: "hidden" as const, boxShadow: "0 10px 30px rgba(0,0,0,0.5)", marginBottom: "40px", display: "inline-block" },
  image: { display: "block", maxWidth: "100%", height: "auto" },
  card: { background: "#1E293B", padding: "24px", borderRadius: "12px", textAlign: "left" as const, border: "1px solid #334155", marginTop: "20px" },
  cardTitle: { fontSize: "20px", fontWeight: "600", color: "#3B82F6", marginBottom: "10px" }
};
