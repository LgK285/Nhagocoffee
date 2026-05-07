import { useState, useEffect } from "react";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Thực đơn", href: "#menu" },
    { name: "Không gian", href: "#gallery" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <Coffee className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? "text-wood-primary" : "text-white"}`} />
          <span className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-wood-dark" : "text-white"}`}>
            NHÀ GỖ <span className="text-brick font-bold text-2xl">COFFEE</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:text-brick ${isScrolled ? "text-neutral-600" : "text-white/90 hover:text-white"
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.google.com/maps/place/Nh%C3%A0+G%E1%BB%97+coffee/@13.7526238,109.2135055,21z/data=!4m6!3m5!1s0x316f6d007862f49f:0xb9bcc6cccf51db94!8m2!3d13.7526238!4d109.2135055!16s%2Fg%2F11z65lzdd6"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isScrolled
              ? "bg-wood-primary text-white hover:bg-wood-dark shadow-md shadow-wood-primary/10"
              : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/20"
              }`}
          >
            Đến quán ngay
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-wood-dark" : "text-white"} />
          ) : (
            <MenuIcon className={isScrolled ? "text-wood-dark" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-display font-semibold text-wood-dark hover:text-brick transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-4 w-full py-4 bg-wood-primary text-white rounded-xl font-medium">
            Đến quán ngay
          </button>
        </div>
      </div>
    </nav>
  );
}
