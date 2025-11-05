const date = new Date();
const year = date.getFullYear;
export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white font-bold w-full py-8 text-center px-6">
      {year} © 2025 Padaria Rosa
    </footer>
  );
}
