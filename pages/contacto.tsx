import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Contáctanos | Soporte y Asesoría Web</title>
        <meta name="description" content="¿Tienes dudas sobre Next.js? Ponte en contacto con nuestro equipo experto." />
        <meta name="keywords" content="Next.js, contacto, soporte tecnico, asesoria web" />
        
        {/* Metadatos Open Graph Agregados */}
        <meta property="og:title" content="Contacto - Habla con Nosotros" />
        <meta property="og:description" content="Formulario de contacto para soporte y proyectos web." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <nav style={styles.nav}>
        <Link href="/" style={styles.navLink}>Home</Link>
        <Link href="/blog" style={styles.navLink}>Blog</Link>
        <Link href="/contacto" style={{...styles.navLink, ...styles.activeLink}}>Contacto</Link>
      </nav>

      <main style={styles.main}>
        <h1 style={styles.title}>¿Tienes un proyecto en mente?</h1>
        <p style={styles.subtitle}>Escríbenos y optimizaremos tu plataforma web.</p>

        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div style={{marginBottom: "20px"}}>
            <label style={styles.label}>Nombre Completo</label>
            <input type="text" placeholder="Tu nombre" style={styles.input} />
          </div>
          <div style={{marginBottom: "20px"}}>
            <label style={styles.label}>Correo Electrónico</label>
            <input type="email" placeholder="correo@ejemplo.com" style={styles.input} />
          </div>
          <div style={{marginBottom: "20px"}}>
            <label style={styles.label}>Mensaje</label>
            <textarea placeholder="Cuéntanos sobre tu sitio web..." rows={4} style={styles.textarea}></textarea>
          </div>
          <button type="submit" style={styles.button}>Enviar Mensaje</button>
        </form>
      </main>
    </div>
  );
}

const styles = {
  container: { backgroundColor: "#0B0F19", color: "#F3F4F6", minHeight: "100vh", fontFamily: "system-ui, sans-serif", padding: "0 20px" },
  nav: { display: "flex", justifyContent: "center", gap: "20px", padding: "20px 0", borderBottom: "1px solid #1E293B" },
  navLink: { color: "#9CA3AF", textDecoration: "none", fontWeight: "500" },
  activeLink: { color: "#3B82F6", borderBottom: "2px solid #3B82F6", paddingBottom: "4px" },
  main: { maxWidth: "500px", margin: "40px auto", textAlign: "center" as const },
  title: { fontSize: "32px", fontWeight: "800", marginBottom: "16px", background: "linear-gradient(to right, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  subtitle: { fontSize: "16px", color: "#9CA3AF", marginBottom: "30px" },
  form: { background: "#1E293B", padding: "30px", borderRadius: "12px", border: "1px solid #334155", textAlign: "left" as const },
  label: { display: "block", marginBottom: "8px", fontSize: "14px", color: "#CBD5E1", fontWeight: "500" },
  input: { width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#0F172A", color: "#FFF", fontSize: "15px", boxSizing: "border-box" as const },
  textarea: { width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #334155", backgroundColor: "#0F172A", color: "#FFF", fontSize: "15px", boxSizing: "border-box" as const, resize: "none" as const },
  button: { width: "100%", padding: "12px", borderRadius: "6px", border: "none", backgroundColor: "#3B82F6", color: "#FFF", fontSize: "16px", fontWeight: "600", cursor: "pointer" }
};
