"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// Modal Component
const VideoModal = ({ src, onClose }: { src: string; onClose: () => void }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl font-bold"
          aria-label="Close video"
        >
          &times;
        </button>
        <video
          className="w-full h-full"
          src={src}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

const VideoCta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://live.cdn-fxgt.com/2025/07/lol-2.mp4";

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-[1200px] px-8 py-12 md:py-16">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a793a9f1-4117-4bf5-9dbe-f67342e2c6d5-fxgt-com/assets/images/Registration-Banner_png-22.webp"
              alt="Abstract 3D cylindrical pipe graphics"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)]"></div>
            <div className="relative z-10 p-8 md:p-16">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-[70%] w-full text-center lg:text-left">
                  <h2 className="font-display font-extrabold text-white text-[32px] lg:text-[40px] leading-tight tracking-[-0.02em] mb-4">
                    Get started with Fusion FX
                  </h2>
                  <p className="font-body text-[#b3b3b3] text-lg mb-8">
                    Apply and start trading in minutes
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#0f766e] hover:bg-[#0d6b63] text-white font-body font-semibold py-3.5 px-10 rounded-lg transition-colors text-base"
                  >
                    Register
                  </a>
                </div>
                <div className="lg:w-[30%] w-full flex justify-center items-center">
                  <button
                    onClick={openModal}
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 group"
                    aria-label="Play video"
                  >
                    <Play
                      fill="white"
                      color="white"
                      size={32}
                      className="ml-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <VideoModal src={videoUrl} onClose={closeModal} />}
    </>
  );
};

export default VideoCta;