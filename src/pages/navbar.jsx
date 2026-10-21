import { useState } from "react"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a href="/" aria-label="Addox home" className="shrink-0">
          <img
            src="/assets/www-addox-co-in.element.Woblo.png"
            alt="Addox"
            className="h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex bg-amber-100 py-4 px-10 rounded-4xl">
          <a
            href="/"
            className="text-sm font-medium text-slate-900 transition-colors hover:text-amber-600"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
          >
            About
          </a>
          <a
            href="#glass-category"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
          >
            Glass category
          </a>
        </div>

        <a
          href="#admin"
          className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600 md:block"
        >
          Admin
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-100 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm font-medium text-slate-900">
              Home
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600">
              About
            </a>
            <a href="#glass-category" className="text-sm font-medium text-slate-600">
              Glass category
            </a>
            <a href="#admin" className="text-sm font-semibold text-amber-600">
              Admin
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
