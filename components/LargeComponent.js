export default function LargeComponent() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
      padding: "30px",
      borderRadius: "12px",
      marginTop: "40px",
      border: "1px solid #334155",
      textAlign: "left",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
    }}>
      <h3 style={{ color: "#10B981", marginTop: 0, fontSize: "20px" }}>
        🚀 Componente Dinámico Activo
      </h3>
      <p style={{ color: "#9CA3AF", margin: 0, lineHeight: "1.5" }}>
        Este bloque de código se descargó de forma diferida (Lazy Loading). El navegador web no tuvo que procesarlo al inicio, mejorando drásticamente la velocidad de carga general.
      </p>
    </div>
  );
}
