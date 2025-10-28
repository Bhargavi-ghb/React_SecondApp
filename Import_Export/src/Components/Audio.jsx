import audio1 from "../assets/audio1.mp3";
import audio2 from "../assets/audio2.mp3";
import audio3 from "../assets/audio3.mp3";

export default function Audio() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px", color: "#00796b" }}>
        Relaxing Waterfall Audios 🎵
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
        Listen to the soothing sounds of nature — each waterfall audio brings
        the peace and calmness of flowing water right to your ears. 
        Close your eyes, breathe deeply, and let the sound of cascading water
        refresh your mind and soul. 🌿💧
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
          <h4>Mountain Stream</h4>
          <audio controls>
            <source src={audio1} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4>Forest Waterfall</h4>
          <audio controls>
            <source src={audio2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div style={{ textAlign: "center" }}>
          <h4>River Flow</h4>
          <audio controls>
            <source src={audio3} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </>
  );
}
