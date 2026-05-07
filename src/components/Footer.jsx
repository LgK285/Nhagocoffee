import { Coffee, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-wood-dark text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Coffee className="w-8 h-8 text-brick" />
              <span className="text-2xl font-display font-bold tracking-tight">
                NHÀ GỖ <span className="text-brick">COFFEE</span>
              </span>
            </div>
            <p className="text-cream/60 text-lg mb-8 max-w-md leading-relaxed">
              Mô hình cà phê với kiến trúc gỗ độc đáo tại Quy Nhơn. Chúng tôi cam kết mang đến trải nghiệm cà phê mộc mạc và chất lượng nhất.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brick transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brick transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start text-cream/70">
                <MapPin className="w-5 h-5 text-brick flex-shrink-0" />
                <span>59 Chương Dương, Quy Nhơn, Bình Định</span>
              </li>
              <li className="flex gap-4 items-center text-cream/70">
                <Phone className="w-5 h-5 text-brick flex-shrink-0" />
                <span>0868 986 877 - 0937 877 879</span>
              </li>
              <li className="flex gap-4 items-center text-cream/70">
                <Mail className="w-5 h-5 text-brick flex-shrink-0" />
                <span>hello@nhagocoffee.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Giờ mở cửa</h4>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-cream/70">Thứ 2 - Chủ nhật</span>
                <span className="text-brick font-bold">6:00-21:00</span>
              </div>
              <p className="text-xs text-cream/40 leading-relaxed">
                Chúng tôi luôn sẵn sàng phục vụ bạn trong ngày.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-cream/40 text-sm">
          <p>© 2026 Nhà Gỗ Coffee. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cream transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-cream transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
