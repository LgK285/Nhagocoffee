import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ImageModal({ isOpen, image, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.url}
              alt={image.title || "Zoomed image"}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            {image.title && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/40 backdrop-blur-md text-white rounded-full text-sm">
                {image.title}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
