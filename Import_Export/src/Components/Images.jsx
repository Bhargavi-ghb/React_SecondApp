import waterfall from "../assets/waterfalls.jpeg";
import waterfall1 from "../assets/waterfalls.jpeg";
import waterfall2 from "../assets/waterfalls.jpeg";

export default function Images() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "#00796b" }}>
        Waterfall Images 🌊
      </h2>

      <p
        style={{
          textAlign: "center",
          margin: "20px auto",
          maxWidth: "800px",
          lineHeight: "1.8",
          fontSize: "18px",
          color: "#333",
        }}
      >
        Waterfalls are nature’s most mesmerizing creations — where flowing water
        meets gravity to create a breathtaking spectacle of power and beauty.
        The soothing sound of falling water calms the mind, while the sight of
        sparkling cascades refreshes the soul. Each image below captures the
        charm and energy of these majestic natural wonders. 🌿💧
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <img
          src={waterfall}
          alt="Waterfall"
          width="300px"
          height="200px"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            objectFit: "cover",
          }}
        />
        <img
          src={waterfall1}
          alt="Waterfall"
          width="300px"
          height="200px"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            objectFit: "cover",
          }}
        />
        <img
          src={waterfall2}
          alt="Waterfall"
          width="300px"
          height="200px"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            objectFit: "cover",
          }}
        />
        <img
          src="/waterfall4.webp"
          alt="Waterfall"
          width="300px"
          height="200px"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
