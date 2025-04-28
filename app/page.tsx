"use client"

import { Share2, ArrowUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Avatar } from "@/components/ui/avatar"

export default function ZainKWPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000] via-[#b36ef5] to-red-500 flex flex-col items-center px-6 py-12 overflow-hidden">
      {/* Top icons */}
      <div className="w-full max-w-md flex justify-between mb-10">
        <div className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full p-2.5">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
          </svg>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full p-2.5">
          <Share2 className="text-white" size={20} />
        </div>
      </div>

    

      {/* Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-white text-4xl font-bold mb-3 tracking-wide"
      >
<img src="/ooredoologo.png"/>      </motion.h1>

      {/* Arabic subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-white text-xl mb-12 text-center font-medium"
        dir="rtl"
      >
ادفع فواتيرك، أعد شحن رصيدك، قم بإدارة باقتك وابقَ على اطلاع على أحدث العروض!
      </motion.p>

      {/* Link cards */}
      <div className="w-full max-w-md space-y-5">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-full p-4 flex items-center justify-between shadow-md cursor-pointer"
          onClick={() => window.open("https://oreed.netlify.app/", "_blank")}
          dir="rtl"
        >
          <div className="flex items-center">
          <Avatar  className="w-12 h-12 rounded-full bg-red-50 mx-2  flex items-center justify-center mr-4 shadow-sm">
              <img
                src="/ooredoologo.png"
                alt="Zain Logo"
                width={24}
                height={24}
              />
            </Avatar>
            <span className="text-gray-800 text-lg font-medium">ادفع فواتيرك </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              copyToClipboard("https://oreed.netlify.app/")
            }}
            className="relative"
          >
            {copied === "https://oreed.netlify.app/" ? (
              <span className="text-green-500 text-sm font-medium absolute -top-8 right-0 whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-sm">
                Copied!
              </span>
            ) : null}
            <Share2 className="text-gray-500 hover:text-purple-600 transition-colors" size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-full p-4 flex items-center justify-between shadow-md cursor-pointer"
          onClick={() => window.open("https://oreed.netlify.app/", "_blank")}
          dir="rtl"
        >
          <div className="flex items-center">
          <Avatar  className="w-12 h-12 rounded-full bg-red-50 mx-2  flex items-center justify-center mr-4 shadow-sm">
              <img
                src="/ooredoologo.png"
                alt="Zain Logo"
                width={24}
                height={24}
              />
            </Avatar>
            <span className="text-gray-800 text-lg font-medium">أعد شحن رصيدك </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              copyToClipboard("https://oreed.netlify.app/")
            }}
            className="relative"
          >
            {copied === "https://oreed.netlify.app/" ? (
              <span className="text-green-500 text-sm font-medium absolute -top-8 right-0 whitespace-nowrap bg-white px-2 py-1 rounded-md shadow-sm">
                Copied!
              </span>
            ) : null}
            <Share2 className="text-gray-500 hover:text-purple-600 transition-colors" size={20} />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-auto pt-16 text-white/70 text-sm"
      >
        https://oreed.netlify.app/      </motion.div>
    </div>
  )
}
