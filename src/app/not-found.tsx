import Link from "next/link";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="flex-1 flex items-center justify-center px-6 py-24 sm:py-32"
      >
        <div className="max-w-lg text-center">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-purple-text">
            404 // Page Not Found
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            This route hasn&apos;t been built yet.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Return to the ChullLabs homepage to explore our studio and
            active projects.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-navy/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
