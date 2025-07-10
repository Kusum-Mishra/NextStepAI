"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const originalImages = [
  "/banner.jpeg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpeg",
];

const HeroSection = () => {
  const imageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Add a clone of the first image at the end
  const images = [...originalImages, originalImages[0]];

  // Scroll-based tilt effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageRef.current?.classList.add("scrolled");
      } else {
        imageRef.current?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Reset to real first image after clone
  useEffect(() => {
    if (currentImage === images.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImage(0);
      }, 1200); // matches transition duration

      // Re-enable transition after jump
      setTimeout(() => {
        setIsTransitioning(true);
      }, 1300);
    }
  }, [currentImage]);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        {/* Heading */}
        <div className="space-y-6 mx-auto">
          <h1 className="bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 font-extrabold tracking-tighter 
              text-transparent bg-clip-text pb-2 text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview preparations and <br />
            AI-powered tools for job success.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">Get Started</Button>
          </Link>
          <Link href="https://github.com/Kusum-Mishra/NextStepAI.git">
            <Button size="lg" className="px-8" variant="outline">View Code</Button>
          </Link>
        </div>

        {/* Image Carousel */}
        <div className="hero-image-wrapper mt-5 md:mt-0 relative w-full max-w-5xl mx-auto overflow-hidden">
          <div ref={imageRef} className="hero-image">
            <div
              className={`flex px-4 gap-8 ${isTransitioning ? "transition-transform duration-[1200ms] ease-in-out" : ""}`}
              style={{
                width: `${images.length * 100}%`,
                transform: `translateX(-${currentImage * (100 / images.length)}%)`,
              }}
            >
              {images.map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `calc(100% / ${images.length})` }}
                >
                  <Image
                    src={src}
                    width={1300}
                    height={720}
                    alt={`Banner ${index + 1}`}
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {originalImages.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentImage % originalImages.length === index
                    ? "bg-primary scale-125"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
