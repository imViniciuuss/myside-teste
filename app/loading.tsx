import ProductCardSkeleton from "@/components/ProductCardSkeleton/ProductCardSkeleton";

const SKELETON_COUNT = 6;

export default function HomeLoading() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 1536,
        margin: "0 auto",
        padding: "32px 32px",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            width: 200,
            height: 28,
            backgroundColor: "#f0f0f0",
            borderRadius: 4,
            marginBottom: 8,
          }}
        />
        <div
          style={{
            width: 320,
            height: 16,
            backgroundColor: "#f0f0f0",
            borderRadius: 4,
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
