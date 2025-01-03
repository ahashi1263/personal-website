"use client"; // If using Next.js App Router
import Image from "next/image";

export default function BeyondResume() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 sm:p-16 bg-white dark:bg-gray-900">
      <div className="columns-1 md:columns-4 lg:columns-3 gap-4">
        <Image
            src="/godfather.webp"
            alt="some gif"
            width={470}
            height={250}
            className="mb-4 w-full"
        />
        <Image
            src="/one-piece-op.gif"
            alt="one piece opening"
            width={470}
            height={250}
            className="mb-4 w-full"
        />
        <Image
            src="/lesamourai.gif"
            alt="cold gif"
            width={470}
            height={200}
            className="mb-4 w-full"
        />
        <Image
            src="/lahaine.webp"
            alt="la haine"
            width={470}
            height={200}
            className="mb-4 w-full"
        />
        
        <Image
            src="/cold.gif"
            alt="cold gif"
            width={470}
            height={400}
            className="mb-4 w-full"
        />
        <Image
            src="/peyton.webp"
            alt="manning"
            width={470}
            height={400}
            className="mb-4 w-full"
        />
        <Image
            src="/camera.webp"
            alt="camera guy"
            width={470}
            height={300}
            className="mb-4 w-full"
        />
        <Image
            src="/champloo.gif"
            alt="champloo gif"
            width={480}
            height={260}
            className="mb-4 w-full"
        />
        <Image
            src="/bron.webp"
            alt="lebron gif"
            width={470}
            height={250}
            className="mb-4 w-full"
        />
        <Image
            src="/zoro.gif"
            alt="zoro"
            width={470}
            height={250}
            className="mb-4 w-full"
        />
        </div>
    </div>
  );
}