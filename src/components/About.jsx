import { motion } from "framer-motion";
import { Clock, Coffee, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-brick/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-wood-primary/10 rounded-full blur-2xl"></div>
          <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 aspect-[4/5] lg:aspect-auto lg:h-[600px]">
            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHge5CFjw87ymBFe5F7SZWcVKkg5NcxZDYHY9ZRWN0OtFkGhfRE2-2QUrpI5z5x7YluBITc_M-8pWVR18vEkwZrPN_ScPROtMyadMjSXpawekeIha_pCe5to3DRE7K1taHExkgY9nuAJ3M=s2048"
              alt="Nhà Gỗ Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-wood-primary/10 rounded-full flex items-center justify-center">
                <Clock className="text-wood-primary w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 font-medium">Mở cửa</p>
                <p className="text-xl font-bold text-wood-dark">6:00-21:00</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-brick font-semibold uppercase tracking-widest text-sm mb-4 block">
            Về chúng tôi
          </span>
          <h2 className="text-4xl md:text-5xl text-wood-dark mb-8 leading-tight">
            Nơi thời gian <br /> <span className="italic">ngừng lại</span> bên tách cà phê
          </h2>
          <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
            Nhà Gỗ Coffee không chỉ là một quán cà phê, mà là một tác phẩm kiến trúc được thổi hồn từ gỗ tự nhiên và gạch nung mộc mạc. Chúng tôi mang đến một không gian tĩnh lặng, tách biệt với sự ồn ào của phố thị, nơi bạn có thể làm việc, thư giãn hay hàn huyên cùng bạn bè vào bất cứ lúc nào trong ngày.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-brick/10 rounded-lg flex items-center justify-center">
                <Coffee className="text-brick w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-wood-dark mb-1">Cà phê chất</h4>
                <p className="text-sm text-neutral-500">Hạt cà phê Robusta & Arabica thượng hạng.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
              <div className="flex-shrink-0 w-10 h-10 bg-wood-primary/10 rounded-lg flex items-center justify-center">
                <ShieldCheck className="text-wood-primary w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-wood-dark mb-1">Không gian thật</h4>
                <p className="text-sm text-neutral-500">Kiến trúc gỗ tự nhiên 100% cực kỳ ấm cúng.</p>
              </div>
            </div>
          </div>

          <button className="mt-10 btn-primary">
            Tìm hiểu thêm
          </button>
        </motion.div>
      </div>
    </section>
  );
}
