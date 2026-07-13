"use client";

import { motion } from "framer-motion";

export default function MeshBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]"
    >
      <div className="bg-dot-grid absolute inset-0 opacity-70" />

      <motion.div
        className="absolute -top-40 left-[10%] h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 opacity-30 blur-[140px]"
        animate={{
          rotate: 360,
          x: [0, 80, -40, 0],
          y: [0, 50, 90, 0],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          x: { duration: 26, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 32, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute top-[35%] -right-32 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-cyan-300 to-indigo-300 opacity-30 blur-[140px]"
        animate={{
          rotate: -360,
          x: [0, -90, 30, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          rotate: { duration: 70, repeat: Infinity, ease: "linear" },
          x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 24, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
