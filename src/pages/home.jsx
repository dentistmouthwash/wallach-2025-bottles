import { Link } from "react-router";

export default function HomePage() {

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div style={{ textAlign: "center", fontSize: 36, backgroundColor: "cyan" }}>
        Home
      </div>
      <div>
        <Link to="/list">click here for the list</Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "40vh 40vw" }}>
        <span style={{ backgroundColor: "white", fontSize: 36 }}><Link to="/bottles" style={{ textDecoration: "none", color: "black" }}>Add some bottles?</Link></span>
      </div>
    </div>
  )
}
