import ParallaxSection from "@/components/ParallaxSection";
import RevealText from "@/components/RevealText";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#F5F5DC] text-black overflow-hidden pt-20 min-h-[10vh]">
      {/* HERO + SUMMARY */}
      <section className="min-h-screen z-10 flex items-center px-10">
        <div className="grid grid-cols-1 z-10 lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto">
          {/* LEFT: NAME + IMAGE */}
          <ParallaxSection speed={0.2}>
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold">Varun Pandey</h1>

              <p className="text-lg ">
                Full-Stack Developer · Next.js · Quant Research
              </p>

              <div className="w-124 h-124 relative rounded-2xl overflow-hidden">
                <Image
                  src="/My_photo.jpeg" // replace with your image
                  alt="Varun Pandey"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ParallaxSection>

          {/* RIGHT: SUMMARY */}
          <ParallaxSection speed={0.35}>
            <div className="max-w-xl space-y-4 pt-10">
              <RevealText>
                Skilled Full-Stack Developer with a strong focus on Next.js and
                modern web architecture.
              </RevealText>

              <RevealText delay={0.1}>
                I believe in writing clean, maintainable code that scales well
                across teams and products.
              </RevealText>

              <RevealText delay={0.2}>
                Currently working at the intersection of software engineering
                and quantitative research, building real-world, production-ready
                systems.
              </RevealText>
            </div>
          </ParallaxSection>
        </div>
      </section>
    </main>
  );
}
