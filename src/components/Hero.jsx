import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqCJW1XhNM_UpppxJPIs4pRhdLokn7mdIgluGlGc6lQ-82owzAMeUEbGSUW6jVvDiaDK2fxFHZQwytfX4pU3dNXVMqVp97FiT1KTIp6QWdBI2_RqqAqdTXK6spkDl1Zn1AsfmoKcIYOcrr=s2048"
          alt="Nhà Gỗ Coffee Facade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-dark/80 via-wood-dark/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-[2px] bg-brick"></div>
            <span className="text-cream text-sm font-medium tracking-[0.2em] uppercase">
              Hơn cả một tách cà phê
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1]">
            Nhà Gỗ <br />
            <span className="text-brick">Coffee</span>
          </h1>

          <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Không gian kiến trúc gỗ độc đáo, mộc mạc và ấm cúng. Nơi bạn tìm thấy sự bình yên giữa lòng Quy Nhơn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="btn-primary flex items-center justify-center gap-2 group">
              Khám phá thực đơn
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.google.com/maps/place/Nh%C3%A0+G%E1%BB%97+coffee/@13.7526238,109.2135055,21z/data=!4m6!3m5!1s0x316f6d007862f49f:0xb9bcc6cccf51db94!8m2!3d13.7526238!4d109.2135055!16s%2Fg%2F11z65lzdd6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-all shadow-xl"
            >
              <MapPin className="w-4 h-4 text-brick" />
              59 Chương Dương, Quy Nhơn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-brick rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
