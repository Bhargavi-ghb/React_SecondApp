import video1 from "../assets/waterfall1.mp4";
import video2 from "../assets/waterfall2.mp4";

export default function Videos() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px", color: "#00796b" }}>
        Waterfall Videos 🌊
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
        In this section, you can watch <b>tranquil waterfall videos</b> that bring
        nature’s beauty and calmness to life. Feel the rhythm of falling water,
        the gentle mist, and the refreshing flow of nature’s music. 
        Let your senses relax and experience the harmony of water and earth. 🌿💧
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h4>Majestic Falls</h4>
          <video controls width="400px" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4>Serene Stream</h4>
          <video controls width="400px" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4>Hidden Cascade</h4>
          <video controls width="400px" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
