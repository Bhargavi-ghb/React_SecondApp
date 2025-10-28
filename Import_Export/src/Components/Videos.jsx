import video1 from "../assets/video1.mp4"

export default function Videos() {
    return (
        <>
             <h3 style={{textAlign:"center",marginTop:"30px"}}>The videoes are displaying by using Video tag</h3>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center",marginTop:"30px"}}>

                <video controls width="400px">
                    <source src={video1}  />
                </video>

                <video controls width="400px">
                    <source src="Video2.mp4"  />
                </video>

            </div>
        </>
    )
}