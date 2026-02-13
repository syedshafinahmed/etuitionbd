import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-background text-text py-20">
      <h1 className="text-4xl font-bold text-primary">
        Learn Smarter, Learn Better
      </h1>

      <p className="mt-4 max-w-xl">
        Personalized tuition for real academic growth.
      </p>

      <button className="mt-6 bg-accent text-text px-6 py-3 rounded-lg font-semibold transition">
        Enroll Now
      </button>
    </section>
  );
}
