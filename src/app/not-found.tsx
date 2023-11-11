import Link from 'next/link'

export default function NotFound() {
    return (
        <div style={{ height: "39vh", marginTop: "10rem", width: "100%", display: "flex", flexDirection: "column", gap: '2rem', justifyContent: "center", alignItems: "center" }}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}