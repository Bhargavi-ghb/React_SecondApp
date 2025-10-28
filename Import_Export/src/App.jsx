export default function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#00bfff",
          marginTop: "40px",
          textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        🌊 Waterfalls
      </h1>
    </>
  );
}

export function Content() {
  return (
    <>
      <div
        style={{
          margin: "60px auto",
          maxWidth: "900px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f0faff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p
          style={{
            textAlign: "center",
            lineHeight: "1.8",
            fontSize: "18px",
            color: "#333",
          }}
        >
          A <b>waterfall</b> is a breathtaking natural feature where a river or
          stream flows over a steep drop, creating a beautiful cascade of
          falling water. These wonders of nature form when softer rock beneath
          harder rock erodes more quickly, resulting in a vertical drop and a
          plunge pool below.
          <br />
          <br />
          Waterfalls can be formed through various geological processes such as
          erosion, glacial movement, or tectonic activity. Beyond their
          geological significance, waterfalls are admired for their stunning
          beauty and the calming sound of rushing water — symbols of strength,
          purity, and peace in the natural world. 🌿💦
        </p>
      </div>
    </>
  );
}
