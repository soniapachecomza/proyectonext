import Link from "next/link";

export const metadata = {
  title: 'Tienda oficial'
}
export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Sección Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/laptop">Productos</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
