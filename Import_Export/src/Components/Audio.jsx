import audio2 from "../assets/audio2.mp3"

export default function Audio() {

    return (
        <>

            <h3 style={{ textAlign: "center", marginTop: "30px" }}>The videoes are displaying by using audio tag</h3>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <audio controls>
                    <source src={audio2} />
                </audio>

                <audio controls>
                    <source src="audio1.mp3" />
                </audio>
            </div>
        </>
    )
}