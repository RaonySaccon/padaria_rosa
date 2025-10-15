import { navItems } from "../../data/navItems";
export default function Aside() {
  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-full bg-black/60 backdrop-blur-sm z-90"></div>
      <div className="fixed h-screen left-0 top-0 bg-white px-6 z-100">
        <header className="w-full flex justify-between px-4 py-2 mb-6"></header>
        <nav>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li>
                <a href="">{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
