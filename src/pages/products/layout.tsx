export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <header style={{padding: 40, fontSize: 30}}>
          SOY UN HEADER DEL LAYOUT PARA LA PÁGINA PRODUCTS
        </header>
        <section>
          {children} {/* El contenido específico de products se renderiza aquí */}
        </section>
      </div>
    );
  }