import Button from "@/components/Button";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function Hero({
  title = "SMK Telkom Purwokerto",
  subtitle =
    "Membentuk generasi unggul di bidang teknologi informasi dan jaringan.",
  // TODO: ganti ke /sekolah.jpg bila aset asli tersedia
  image = "https://picsum.photos/seed/sekolah-hero/1920/600",
  primaryHref = "/about",
  primaryLabel = "Tentang Kami",
  secondaryHref = "/berita",
  secondaryLabel = "Lihat Berita",
}: HeroProps) {
  return (
    <section
      className="relative flex items-end justify-center bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[600px]"
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1F2937]/70"></div>

      {/* Konten */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">
          {title}
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 drop-shadow">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
