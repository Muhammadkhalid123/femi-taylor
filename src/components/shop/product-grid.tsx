import ProductCard from "./product-card";

const products = [
  {
    id: "1",
    name: "My Journey (Hardcover)",
    price: "$24.99",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    badge: "Bestseller"
  },
  {
    id: "2",
    name: "My Journey (Paperback)",
    price: "$14.99",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    name: "Signed Collector's Edition",
    price: "$49.99",
    category: "Special Editions",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    badge: "Limited"
  },
  {
    id: "4",
    name: "Exclusive Photo Bundle",
    price: "$34.99",
    category: "Bundles",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80",
    badge: "New"
  },
  {
    id: "5",
    name: "Oola Commemorative Print",
    price: "$19.99",
    category: "Memorabilia",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80"
  },
  {
    id: "6",
    name: "My Journey (E-Book)",
    price: "$9.99",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80"
  }
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
