import { motion } from "framer-motion";
import { Star } from "lucide-react";

const menuData = [
  {
    category: "Cà Phê Phin",
    sub: "FIN COFFEE",
    items: [
      { name: "Cà phê đen", price: "24k" },
      { name: "Cà phê sữa", price: "28k" },
      { name: "Bạc xỉu", price: "30k" },
      { name: "Cà phê muối", price: "35k", featured: true },
      { name: "Cà phê cốm", price: "39k" },
      { name: "Findi hạnh nhân", price: "42k", featured: true },
      { name: "Cà phê dừa", price: "39k" },
    ]
  },
  {
    category: "Cà Phê Máy",
    sub: "ESPRESSO",
    items: [
      { name: "Espresso đen", price: "26k" },
      { name: "Espresso sữa", price: "30k" },
      { name: "Bạc xỉu pha máy", price: "32k", featured: true },
      { name: "Cà phê muối", price: "37k" },
      { name: "Cappuccino", price: "42k" },
      { name: "Latte", price: "45k" },
      { name: "Cà phê kem Ý", price: "50k" },
    ]
  },
  {
    category: "Nước Ép",
    sub: "JUICE",
    items: [
      { name: "Cam hạt chia", price: "35k" },
      { name: "Thơm", price: "37k" },
      { name: "Dưa hấu", price: "35k" },
      { name: "Cà rốt", price: "35k" },
      { name: "Dừa Trái", price: "37k" },
      { name: "Dừa đác thơm", price: "39k" },
      { name: "Chanh / Chanh dây", price: "35k" },
      { name: "Mix 2 loại", price: "39k" },
      { name: "Nguyên chất", price: "+5k" },
    ]
  },
  {
    category: "Trà",
    sub: "TEA",
    items: [
      { name: "Trà Lipton", price: "35k", featured: true },
      { name: "Trà gừng / Hoa cúc nóng", price: "32k" },
      { name: "Trà cam đào", price: "39k" },
      { name: "Trà mãng cầu", price: "39k" },
      { name: "Trà dưa hấu", price: "39k", featured: true },
      { name: "Trà lài đác thơm", price: "35k" },
    ]
  },
  {
    category: "Sữa Chua",
    sub: "YOGURT",
    items: [
      { name: "Sữa chua đá", price: "30k" },
      { name: "Sữa chua trái cây tươi", price: "42k", featured: true },
      { name: "Sữa chua xoài / Việt quất / Đác Thơm", price: "37k", featured: true },
      { name: "Sữa chua cốm mít", price: "39k" },
      { name: "Sữa chua cà phê", price: "35k" },
      { name: "Sữa chua hũ", price: "25k" },
    ]
  },
  {
    category: "Đá Xay",
    sub: "SMOOTHIE",
    items: [
      { name: "Oreo đá xay", price: "49k" },
      { name: "Matcha đá xay", price: "49k" },
      { name: "Sinh tố xoài / Việt quất", price: "47k", featured: true },
      { name: "Sinh tố dừa", price: "42k" },
    ]
  },
  {
    category: "Cacao & Matcha",
    sub: "CHOCO & GREEN TEA",
    items: [
      { name: "Ca cao sữa", price: "35k" },
      { name: "Ca cao kem", price: "39k", featured: true },
      { name: "Matcha latte", price: "42k" },
      { name: "Matcha kem", price: "47k" },
    ]
  },
  {
    category: "Khác",
    sub: "OTHER",
    items: [
      { name: "Hạt dưa / Hướng dương", price: "18k" },
      { name: "Kem vani", price: "37k" },
      { name: "Cocacola", price: "25k" },
      { name: "Bò húc", price: "30k" },
      { name: "Nước suối", price: "20k" },
    ]
  }
];

export default function Menu({ onImageClick }) {
  return (
    <section id="menu" className="section-padding bg-[#F9F6F0] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brick/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-4 text-brick">
              <div className="w-12 h-[1px] bg-brick"></div>
              <span className="font-display font-bold tracking-[0.3em] uppercase text-xs">Menu Highlights</span>
              <div className="w-12 h-[1px] bg-brick"></div>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl text-wood-dark font-display"
          >
            Thực Đơn Của <span className="italic font-serif text-brick">Nhà</span>
          </motion.h2>
        </div>

        {/* Menu Layout Mimicking Physical Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {menuData.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="mb-8 border-b border-wood-primary/10 pb-4">
                <h3 className="text-3xl text-wood-dark font-display font-bold flex items-baseline gap-3">
                  {cat.category}
                  <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-body uppercase font-medium">
                    {cat.sub}
                  </span>
                </h3>
              </div>

              <div className="space-y-6">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-end group">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-neutral-700 font-medium group-hover:text-brick transition-colors">
                          {item.name}
                        </span>
                        {item.featured && (
                          <Star className="w-3 h-3 fill-brick text-brick" />
                        )}
                      </div>
                    </div>
                    <div className="flex-grow border-b border-dotted border-neutral-300 mx-4 mb-1"></div>
                    <span className="text-wood-dark font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Images from physical menu vibe */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group cursor-zoom-in"
            onClick={() => onImageClick("https://lh3.googleusercontent.com/grass-cs/ANxoTn3wos6V6bgHiEvEhQ3cKfz1hOXzO5Sf3QPLVnhUdqmgW9yeyipxU1ybKi5YYUKO3alsTjdQMeclrglcYCamO07B0tx7wR8qMFoJn7PkkdnQnYPt_ub7NyaB5snpw9p1QSQdG3otGZ_QRwAc=k-no", "Cà Phê Muối - Best Seller của quán")}
          >
            <img
              src="https://lh3.googleusercontent.com/grass-cs/ANxoTn3wos6V6bgHiEvEhQ3cKfz1hOXzO5Sf3QPLVnhUdqmgW9yeyipxU1ybKi5YYUKO3alsTjdQMeclrglcYCamO07B0tx7wR8qMFoJn7PkkdnQnYPt_ub7NyaB5snpw9p1QSQdG3otGZ_QRwAc=k-no"
              alt="Cà Phê Muối"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-display italic">Cà Phê Muối - Best Seller của quán</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group cursor-zoom-in"
            onClick={() => onImageClick("https://lh3.googleusercontent.com/gps-cs-s/APNQkAElrC0xw697Y8oW29TUL7gf5RaqCN0W369Goe7WETl7cD0OYkmkRJtDVtVk4xluSVehM7Gq5bd5aOqNF-l98gXC3lLU01PLEUOfR-jZulkXnQY7Ke1N1E5sjoGIy9SBodA8qLdkiihWrscN=s2048", "Thanh mát cùng Sữa Chua Trái Cây Tươi")}
          >
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAElrC0xw697Y8oW29TUL7gf5RaqCN0W369Goe7WETl7cD0OYkmkRJtDVtVk4xluSVehM7Gq5bd5aOqNF-l98gXC3lLU01PLEUOfR-jZulkXnQY7Ke1N1E5sjoGIy9SBodA8qLdkiihWrscN=s2048"
              alt="Sữa Chua Trái Cây Tươi"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white text-xl font-display italic">Thanh mát cùng Sữa Chua Trái Cây Tươi</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-400 text-sm mb-6">Giá trên đã bao gồm thuế VAT và các ưu đãi khác</p>
        </div>
      </div>
    </section>
  );
}
