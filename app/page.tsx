import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-10">
      {/* Avatar */}
      <div className="relative w-56 h-56 rounded-full overflow-hidden ring-4 ring-blue-200">
        <Image
            src="avatar.png"
            alt="Avatar"
            fill
            className="object-cover"
            priority
        />
        </div>

        <Image
            src="name_plate.png"
            alt="Name Plate"
            width={460}
            height={100}
            priority
        />

      {/* Short paragraph */}
      <p className="max-w-lg text-center text-gray-600 leading-relaxed font-[family-name:var(--font-geist-mono)]">
        Hey there! As you know, I am Ahmed. At the moment, I am a fourth-year student at The Johns Hopkins University studying Computer Science. After graduating, I will begin my career as a Software Development Engineer at AWS in the beautiful city of Seattle.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 items-center flex-col sm:flex-row">
                <a
                  className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                  href="/projects"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="dark:invert"
                    src="/globe.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />
                  My Projects
                </a>
                <a
                  className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                  href="/about"
                  rel="noopener noreferrer"
                >
                  More About Me
                </a>
              </div>
    </div>
  );
}