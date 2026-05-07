import { motion } from "framer-motion";

const images = [
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqCJW1XhNM_UpppxJPIs4pRhdLokn7mdIgluGlGc6lQ-82owzAMeUEbGSUW6jVvDiaDK2fxFHZQwytfX4pU3dNXVMqVp97FiT1KTIp6QWdBI2_RqqAqdTXK6spkDl1Zn1AsfmoKcIYOcrr=s2048",
    title: "Mặt tiền gỗ độc đáo",
    size: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHge5CFjw87ymBFe5F7SZWcVKkg5NcxZDYHY9ZRWN0OtFkGhfRE2-2QUrpI5z5x7YluBITc_M-8pWVR18vEkwZrPN_ScPROtMyadMjSXpawekeIha_pCe5to3DRE7K1taHExkgY9nuAJ3M=s2048",
    title: "Góc học tập & làm việc",
    size: ""
  },
  {
    url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHQhdbDjHHb8k90pXsCZ7HHK3cTCk3REgbTyJjUcUrcWpC5URZjNWGnXJ-C8yNYbAz2r3Qh2L_eUcByy9Wi1PtBR5uaSpI5Bo9kdQB9ysPKCpI1Y7xZ-ebHt63WCCSpD_FQnqDWRmU1CO8=s2048",
    title: "Không gian xung quanh",
    size: ""
  },
  {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    title: "Chi tiết mộc mạc",
    size: "md:col-span-2"
  }
];

export default function Gallery({ onImageClick }) {
  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-brick font-semibold uppercase tracking-widest text-sm mb-4 block">
              Không gian quán
            </span>
            <h2 className="text-4xl md:text-5xl text-wood-dark">
              Nét đẹp <span className="italic">Thời Gian</span>
            </h2>
          </div>
          <p className="max-w-md text-neutral-500 text-lg">
            Khám phá từng góc nhỏ bình yên tại Nhà Gỗ, nơi sự mộc mạc của gỗ và gạch nung tạo nên một bản giao hưởng ấm áp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group cursor-zoom-in ${img.size}`}
              onClick={() => onImageClick(img.url, img.title)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <h3 className="text-white text-xl font-medium">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
