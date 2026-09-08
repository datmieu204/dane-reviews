import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isShopee = product.url.includes("shopee");
  const isTikTok = product.url.includes("tiktok");

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

        {/* Shine overlay effect */}
        <div className="card-shine-effect" />

        {/* Top Badges */}
        <div className="card-top-badges">
          <span className="code-pill">
            <svg className="pill-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            {product.code}
          </span>

          {isShopee && (
            <span className="platform-tag shopee-tag" title="Shopee Affiliate">
              Shopee
            </span>
          )}
          {isTikTok && (
            <span className="platform-tag tiktok-tag" title="TikTok Shop">
              TikTok
            </span>
          )}
        </div>

        {/* Floating Action Button / Arrow */}
        <div className="card-floating-action">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-action-row">
          <span className="deal-hint">Xem chi tiết</span>
          <span className="deal-arrow">&rarr;</span>
        </div>
      </div>
    </a>
  );
}
