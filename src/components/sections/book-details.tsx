export default function BookDetails() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-serif font-bold mb-6 border-b pb-4">Synopsis</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          <p>
            Before she was the iconic Twi'lek slave dancer Oola in Star Wars: Return of the Jedi,
            Femi Taylor was a young girl from Ibadan, Nigeria, with a dream that would take her
            across continents. "From Mud Huts to Star Wars and Beyond" is a raw, honest, and
            deeply moving account of her path through the heights of fame and the challenges
            of the entertainment industry.
          </p>
          <p className="mt-4">
            For the first time, Femi shares:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>What it was truly like on the set of the original Star Wars trilogy.</li>
            <li>The rigorous discipline of the London Contemporary Dance Company.</li>
            <li>The experience of being the only original performer called back for the 1997 Special Edition.</li>
            <li>Insights into the creation of 'Exotica' for the Cats film.</li>
            <li>Lessons in resilience, identity, and the power of artistic expression.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-serif font-bold mb-6 border-b pb-4">Product Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">Publisher</h4>
            <p className="font-medium">London Publishers (UK)</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">Publication Date</h4>
            <p className="font-medium">June 15, 2026</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">Pages</h4>
            <p className="font-medium">280 Pages</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">ISBN</h4>
            <p className="font-medium">978-1-234567-89-0</p>
          </div>
        </div>
      </section>
    </div>
  );
}
