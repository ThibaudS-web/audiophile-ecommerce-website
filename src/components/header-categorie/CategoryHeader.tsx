import React from 'react'
import {
    BackgroundCategoryHeader,
    CategoryLabel
} from './categoryHeaderStyle'

const CategoryHeader = ({ category }: { category: string }) => {
    return (
        <BackgroundCategoryHeader>
            <CategoryLabel>{category}</CategoryLabel>
        </BackgroundCategoryHeader>
    )
}

export default CategoryHeader