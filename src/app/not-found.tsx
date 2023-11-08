import Link from 'next/link'

export default function NotFound() {
    return (
        <div style={{ height: "calc(100vh - 440px)", width: "100%", display: "flex", flexDirection: "column", gap: '2rem', justifyContent: "center" }}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}