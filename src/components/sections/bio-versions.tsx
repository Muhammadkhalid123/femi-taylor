export default function BioVersions() {
  return (
    <div className="space-y-16">
      <section>
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-3xl font-serif font-bold">Short Biography</h2>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">150 Words</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Femi Taylor is a Nigerian-born British dancer and actress best known for her iconic 
          role as Oola in the 1983 Star Wars film, Return of the Jedi. She is uniquely 
          recognized as the only original performer to reprise her role for the 1997 Special 
          Edition. Beyond the galaxy, Femi originated the role of Tantomile in the 1981 
          original London production of Cats and later appeared in the 1998 film version 
          as 'Exotica', a character created specifically for her. A graduate of the London 
          School of Contemporary Dance and The Alvin Ailey School, Femi is now 
          an accomplished author, sharing her remarkable journey of art and resilience.
        </p>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-3xl font-serif font-bold">Standard Biography</h2>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">350 Words</span>
        </div>
        <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-none">
          <p>
            Nigerian-born performer and writer Femi Taylor is best known to Star Wars fans worldwide as Oola in Return of the Jedi, a role she uniquely reprised 14 years later for the 1997 Special Edition. George Lucas famously insisted that if Femi could no longer fit into her original costume, the character would need to be recreated digitally.
          </p>
          <p className="mt-4">
            Femi began her professional career at just 17 in the West End production of Bubbling Brown Sugar before becoming an original London cast member of Cats. Her extensive theatre credits also include Little Shop of Horrors, The Wiz, Buddy, and Jesus Christ Superstar. On screen, she has appeared in films including Playing Away, Flirting, Top Secret!, and the independent feature A Kink in the Picasso.
          </p>
          <p className="mt-4">
            Having lived and worked across the UK and Australia, Femi now brings her lifelong passion for performance and storytelling to the page through deeply personal writing exploring artistry, identity, resilience, and the journey of returning to oneself.
          </p>
        </div>
      </section>
    </div>
  );
}
