import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card"
      aria-label={`${product.code} - ${product.name}`}
    >
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, 240px"
          className="product-image"
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <span className="product-code">{product.code}</span>
        <span className="product-name">{product.name}</span>
      </div>
    </a>
  );
}
