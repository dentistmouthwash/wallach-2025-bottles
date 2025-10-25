import { Link } from "react-router";

export default function BottlePage() {

    return (
        <div
            style={{
                padding: 0,
                margin: 0,
                fontFamily:
                    'Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
            }}
        >
            {/* Header with SVG and fancy title */}
            <header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2.4rem 1rem",
                    background: "linear-gradient(90deg, #E0F7FA, #E8F3FF)",
                    boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.04)",
                }}
            >
                <img
                    src="/favicon.svg"
                    alt="bottle logo"
                    width={64}
                    height={64}
                    style={{ marginRight: 16, marginBottom: 50 }}
                />
                <div style={{ textAlign: "left" }}>
                    <h1
                        style={{
                            margin: 0,
                            fontSize: 34,
                            lineHeight: 1,
                            background: "linear-gradient(90deg,#0077c2,#00bcd4)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        BottleCycle
                    </h1>
                    <p
                        style={{ margin: 0, marginTop: 6, color: "#0d47a1", opacity: 0.9 }}
                    >
                        Collect · Reuse · Recycle
                    </p>
                    <p style={{ justifyContent: "center", alignItems: "center", textAlign: "center", color: "#7faaeb", fontSize: 20 }}>
                        Bottle Adder
                    </p>
                </div>
            </header>
            <div style={{ padding: 0, margin: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "1vh 30vw" }}>
                    <span class="default-span">How many bottles are there?</span>
                    <input type="text" style={{ width: "10%", fontSize: 24 }}></input>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "1vh 30vw" }}>
                    <span class="default-span">How big are the bottles?</span>
                    <input type="text" style={{ width: "10%", fontSize: 24 }}></input>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "1vh 30vw" }}>
                    <span class="default-span">What type are they?</span>
                    <input type="text" style={{ width: "20%", fontSize: 24 }}></input>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", margin: "1vh 30vw" }}>
                    <span class="default-span">Are these used?</span>
                    <input type="checkbox" style={{ width: "1.2em", height: "1.2em", fontSize: 36 }}></input>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", margin: "1vh 30vw" }}>
                    <span class="default-span" style={{ maxWidth: "10vw", textAlign: "right" }}>50¢</span>
                    <span class="default-span">Add</span>
                </div>
            </div>
        </div>
    )
}
