import Bird1 from "../assets/Bird1.jpg"

export default function Images() {
    return (
        <>

            <h3 style={{textAlign:"center",marginTop:"30px"}}>The videoes are displaying by using image tag</h3>

            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                <img src={Bird1} alt="bird" width="300px" />

                <img src="bird3.jpg" alt="" width="300px"/>
            </div>
        </>
    );
}