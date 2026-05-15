"use client";

import Image from "next/image";

export default function AuthorNote() {
  return (
    <section className="mt-20 p-8 sm:p-12 bg-accent/10 rounded-3xl relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0 relative w-24 h-24 rounded-full overflow-hidden border-4 border-accent shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
            alt="Femi Taylor"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4">Why I Wrote This Book</h3>
          <div className="prose prose-lg italic text-muted-foreground leading-relaxed">
            <p>
              "For years, people have asked me about the makeup, the dancing, and the set of Star Wars. 
              But there was so much more to the story than just the character of Oola. I wrote this 
              book to share the human experience behind the icon—the girl who had to learn how to 
              navigate a world she never expected to be a part of. This is my truth, shared with 
              the hope that it inspires you to embrace your own unique journey, no matter how 
              many galaxies away it might seem."
            </p>
          </div>
          <p className="mt-6 font-serif text-xl font-bold text-foreground">— Femi Taylor</p>
        </div>
      </div>
    </section>
  );
}
