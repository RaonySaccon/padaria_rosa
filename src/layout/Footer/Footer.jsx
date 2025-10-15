const date = new Date();
const year = date.getFullYear;
export default function Footer() {
  return (
    <footer className="bg-black/20 w-full py-8 text-center px-6">
      {year} © 2025 Nome_Empresa
    </footer>
  );
}
