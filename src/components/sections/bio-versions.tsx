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
          Contemporary Dance Company and Alvin Ailey American Dance Theater, Femi is now 
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
            Femi Taylor's artistic journey began in Ibadan, Nigeria, before her family 
            relocated to the United Kingdom. Her training at the prestigious London 
            Contemporary Dance Company and the Alvin Ailey American Dance Theater in 
            New York laid the foundation for a career defined by grace and versatility.
          </p>
          <p className="mt-4">
            In 1981, Femi made theatre history as part of the original London cast of 
            Andrew Lloyd Webber's Cats, originating the role of Tantomile. Her performance 
            caught the eye of the Star Wars creative team, leading to her casting as Oola 
            in Return of the Jedi (1983). Her portrayal of the Twi'lek dancer became an 
            enduring part of the franchise's legacy, leading to her being the only original 
            cast member invited back to film new scenes for the Special Edition in 1997.
          </p>
          <p className="mt-4">
            Throughout her career, Femi has balanced her work on screen with a deep 
            commitment to live performance and global fan engagement. She is a regular 
            guest at major sci-fi and Star Wars conventions worldwide, where she continues 
            to inspire new generations of fans.
          </p>
          <p className="mt-4">
            Today, Femi has transitioned into a new chapter as an author. Her memoirs 
            explore the intersections of culture, fame, and personal growth, offering 
            a rare glimpse into the life of a performer who has navigated some of 
            the most significant moments in modern entertainment history.
          </p>
        </div>
      </section>
    </div>
  );
}
