import Link from "next/link";

const navItems = [
  { href: "/plans", label: "方案中心" },
  { href: "/partners", label: "合作入驻" },
  { href: "/dashboard", label: "用户面板" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          SmartNest
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:border-gray-300 hover:text-black"
          >
            登录
          </Link>
          <Link
            href="/plans"
            className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
          >
            选择方案
          </Link>
        </div>
      </div>
    </header>
  );
}
