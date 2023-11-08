"use client"
import getProducts from "@/services/useProducts"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import Image from "next/image"
import { notFound } from "next/navigation"

const page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    // const pathname = usePathname()

    const { getProductBySlug } = getProducts()

    const { data: product } = useQuery({
        queryKey: ['productBySlug', slug],
        queryFn: () => getProductBySlug(slug)
    })
    
    return (
        <>
            <div>Welcome to the {product?.name} product ! </div>
        </>
    )
}

export default page