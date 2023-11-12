"use client"
import AudiophileSummary from "@/components/audiophile-summary/AudiophileSummary"
import Categories from "@/components/categories/Categories"
import CategoryHeader from "@/components/header-categorie/CategoryHeader"
import Products from "@/components/wrapper-products/WrapperProducts"
import getProducts from "@/services/useProducts"
import { useQuery } from "@tanstack/react-query"
import { notFound, usePathname } from "next/navigation"
import PageContainer from "@/components/containers/page/PageContainer"
import { Wrapper } from "@/components/wrapper-products/wrapperProductStyle"

const Page = ({ params }: { params: { category: string } }) => {
    const { category } = params
    const pathname = usePathname()

    const { getProductsByCategory } = getProducts()

    const categoriespath = ["/earphones", "/headphones", "/speakers"]

    if (!categoriespath.includes(pathname)) {
        notFound()
    }

    const { data: products } = useQuery({
        queryKey: ['productsByCategory', category],
        queryFn: () => getProductsByCategory(category),
        staleTime: 120000
    })

    return (
        <>
            <CategoryHeader category={category} />
            <PageContainer>
                <Products products={products} />
                <Wrapper>
                    <Categories />
                    <AudiophileSummary />
                </Wrapper>
            </PageContainer>
        </>
    )
}

export default Page 