import "./style.css";
export default function Loading({ width, height, color }) {
    return (
        <>
            <span
                style={{
                    width: width,
                    height: height,
                    border: "5px solid " + color,
                    borderBottomColor: "transparent",
                    borderRadius: "50%",
                    display: "inline-block",
                    boxSizing: "border-box",
                    animation: " rotation 1s linear infinite",
                }}
            ></span>
        </>
    );
}
