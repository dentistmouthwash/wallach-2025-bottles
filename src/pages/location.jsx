import { Link } from "react-router";

export default function MapPage() {

    return (
        <div style={{ padding: 0, margin: 0 }}>
            <div style={{ textAlign: "center", fontSize: 36, backgroundColor: "cyan" }}>
                Bottles
            </div>
            <div>
                <Link to="/list">click here for the list</Link>
            </div>
        </div>
    )
}