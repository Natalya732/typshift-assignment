import Image from "next/image";
import Link from "next/link";
import { Header } from "@/shared/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Header />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-white">
              TypeShift Main Page
            </h1>
            <p className="text-xl text-muted-foreground dark:text-gray-300 mb-8">
              Professional web development and design services
            </p>
          </div>

          <div className="flex gap-4 items-center justify-center w-full flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-primary-foreground gap-2 hover:bg-primary/90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="/services"
            >
              View Our Services
            </Link>
            <span
              className="rounded-full border border-solid border-border dark:border-gray-700 transition-colors flex items-center justify-center hover:bg-accent hover:text-accent-foreground font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto text-foreground dark:text-white"
            >
              Get in Touch
            </span>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Link
            className="flex items-center gap-2 text-foreground dark:text-white"
            href="/services"
          >
            Services
          </Link>
          <span className="flex items-center gap-2 text-foreground dark:text-white">
            About
          </span>
          <span className="flex items-center gap-2 text-foreground dark:text-white">
            Contact
          </span>
        </footer>
      </div>
    </div>
  );
}
