export default function BookDetails() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-serif font-bold mb-6 border-b pb-4">Synopsis</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
          <p>
            Before becoming the iconic Oola in Star Wars: Return of the Jedi, Femi Taylor’s journey began in Ibadan, Nigeria, before carrying her from dance studios and theatre stages to one of cinema’s most legendary universes.
          </p>
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
