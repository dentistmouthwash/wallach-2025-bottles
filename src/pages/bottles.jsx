import { Link } from "react-router";

export default function BottlePage() {

    return (
        <div style={{ padding: 0, margin: 0 }}>
            <div style={{ textAlign: "center", fontSize: 36, backgroundColor: "cyan" }}>
                Bottles
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "1vh 30vw" }}>
                <span class="default-span">How many bottles are there?</span>
                <input type="text"></input>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "1vh 30vw" }}>
                <span class="default-span">How big are the bottles?</span>
                <input type="text"></input>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "1vh 30vw" }}>
                <span class="default-span">What type are they?</span>
                <input type="text"></input>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "1vh 30vw" }}>
                <span class="default-span">Are these used?</span>
                <input type="checkbox" style={{ width: "1.2em", height: "1.2em" }}></input>
            </div>
        </div>
    )
}