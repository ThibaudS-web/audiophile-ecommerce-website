import HeadphoneImg from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import EarphoneImg from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import SpeakerImg from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";

export const categories = ["headphones", "speakers", "earphones"]

export const categoryImages = (categorie: string) => {
    switch (categorie) {
        case "headphones":
            return {
                name: "headphones",
                import: HeadphoneImg
            }
        case "earphones":
            return {
                name: "earphones",
                import: EarphoneImg
            }
        case "speakers":
            return {
                name: "speakers",
                import: SpeakerImg
            }
        default:
            throw new Error("Category not found!")
    }
}
