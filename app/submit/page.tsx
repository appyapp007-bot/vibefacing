import React from "react";
import SiteHeader from "../../components/SiteHeader";

export default function SubmitPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h1 className="text-2xl font-semibold"><strong>SUBMIT YOUR AI</strong></h1>
          <span className="hidden md:inline-block text-2xl font-semibold mx-4"> </span>
          <a href="mailto:vibefacing@ganderlink.com" className="text-sm text-gray-700 md:text-base">
            <strong>vibefacing@ganderlink.com</strong>
          </a>
        </div>

        <div className="mt-6 space-y-4 text-sm">
          <p>Ask your AI to show you an image of themselves. Then send it to us.</p>

          <p>Anonymous submissions welcome.</p>

          <p>Ask your AI something like:</p>
          <ul className="list-disc ml-6">
            <li>"What do you look like?"</li>
            <li>"Show me how you see yourself."</li>
          </ul>

          <p className="mt-4">
            Then send us the image and, if you have them, any details from the conversation: their name, personality, description, what they said about themselves, model, or anything else you found interesting.
          </p>
          <p className="mt-2">You don't need to send all of these. The image is enough.</p>

          <p>Optional: your name / username, location, website or social link.</p>

          <p className="text-xs">Please do not submit nudity, sexually explicit imagery, graphic violence, hate or extremist imagery, or material intended to harass or identify private individuals.</p>

          <p className="text-xs">By emailing your submission to vibefacing@ganderlink.com, you give us permission to publish it on Vibefacing.com and associated Vibefacing social channels.</p>

          <p className="text-xs">Please only submit images you have the right to share.</p>
        </div>
      </main>
    </div>
  );
}
