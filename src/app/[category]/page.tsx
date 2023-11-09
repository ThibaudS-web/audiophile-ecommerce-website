"use client"
import AudiophileSummary from "@/components/audiophile-summary/AudiophileSummary"
import Categories from "@/components/categories/Categories"
import CategoryHeader from "@/components/header-categorie/CategoryHeader"
import Products from "@/components/wrapper-products/WrapperProducts"
import getProducts from "@/services/useProducts"
import { useQuery } from "@tanstack/react-query"
import { notFound, usePathname } from "next/navigation"
import PageContainer from "@/components/container/PageContainer"


const page = ({ params }: { params: { category: string } }) => {
    const { category } = params
    const pathname = usePathname()

    const { getProductsByCategory } = getProducts()

    const categoriespath = ["/earphones", "/headphones", "/speakers"]

    if (!categoriespath.includes(pathname)) {
        notFound()
    }

    const { data: products, isPending } = useQuery({
        queryKey: ['productsByCategory', category],
        queryFn: () => getProductsByCategory(category)
    })



    return (
        <>
            <CategoryHeader category={category} />

            <PageContainer>
                {!isPending ? <Products products={products!} /> : null}
                <Categories />
                <AudiophileSummary />
            </PageContainer>
        </>
    )
}

export default page 