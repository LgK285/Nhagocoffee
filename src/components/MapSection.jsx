import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413.918901243163!2d109.2135055!3d13.7526238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6d007862f49f%3A0xb9bcc6cccf51db94!2zTmjDoCBH4buXIGNvZmZlZQ!5e0!3m2!1svi!2s!4v1715094200000!5m2!1svi!2s";
  const directLink = "https://www.google.com/maps/place/Nh%C3%A0+G%E1%BB%97+coffee/@13.7526238,109.2135055,21z/data=!4m6!3m5!1s0x316f6d007862f49f:0xb9bcc6cccf51db94!8m2!3d13.7526238!4d109.2135055!16s%2Fg%2F11z65lzdd6";

  return (
    <section id="contact" className="section-padding bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <span className="text-brick font-semibold uppercase tracking-widest text-sm mb-4 block">
              Tìm chúng tôi
            </span>
            <h2 className="text-4xl md:text-5xl text-wood-dark mb-8">
              Ghé thăm <br /> <span className="italic">Nhà Gỗ</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-brick/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brick w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood-dark">Địa chỉ</h4>
                  <p className="text-neutral-600">59 Chương Dương, Quy Nhơn, Bình Định</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-wood-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Navigation className="text-wood-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood-dark">Chỉ đường</h4>
                  <p className="text-neutral-600">Nằm ngay mặt tiền đường Chương Dương năng động.</p>
                </div>
              </div>
            </div>

            <a
              href={directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Mở trong Google Maps
              <Navigation className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nhà Gỗ Coffee Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
