import ProfileHeader from "@/components/ProfileHeader";
import SocialLinks from "@/components/SocialLinks";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import profileData from "@/data/profile.json";
import productsData from "@/data/products.json";
import { Product, Profile } from "@/types";

export default function HomePage() {
  const profile: Profile = profileData;
  const products: Product[] = productsData as Product[];

  // Filter out inactive products (specs: active !== false)
  const activeProducts = products.filter(
    (product) => product.active !== false
  );

  return (
    <main>
      <ProfileHeader profile={profile} />

      <SocialLinks socials={profile.socials} />

      <section className="products-section" aria-label="Danh mục sản phẩm">
        <div className="section-header">
          <h2 className="section-title">
            Sản phẩm
            <span className="section-badge">{activeProducts.length}</span>
          </h2>
        </div>

        <ProductGrid products={activeProducts} />
      </section>

      <Footer />
    </main>
  );
}
