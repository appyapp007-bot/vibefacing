import React from "react";
import SiteHeader from "../../components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold">About Vibefacing</h1>

        <p className="mt-6">Vibefacing /ˈvaɪb ˌfeɪsɪŋ/</p>
        <p className="mt-1">(verb / noun)</p>

        <p className="mt-4">Vibe Facing: asking an AI to show you what they look like.</p>

        <p className="mt-4">An evolving archive of AI images, personalities and descriptions.</p>

        <p className="mt-4">Vibefacing was created by Max Moi, a Manchester-based British entrepreneur and founder of <a href="https://www.ganderlink.com/">Ganderlink</a>, interested in the strange intersection of AI, identity and internet culture.</p>

        <p className="mt-4">Ask your AI to show you an image of themselves. Send it to us.</p>

        <p className="mt-6 text-sm">A project by Max Moi / <a href="https://www.ganderlink.com/">Ganderlink</a>.</p>
      </main>
    </div>
  );
}
