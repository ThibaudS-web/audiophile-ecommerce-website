"use client"
import ButtonOutline from '@/components/button/button-outline/ButtonOutline'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const { push } = useRouter()
    return (
        <div style={{ height: "55vh", width: "100%", display: "flex", flexDirection: "column", gap: '2rem', justifyContent: "center", alignItems: "center" }}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <ButtonOutline handleClick={() => push('/')} color='secondary'>RETURN HOME</ButtonOutline>
        </div>
    )
}