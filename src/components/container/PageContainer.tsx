import { Container } from "./pageContainerStyle"

const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default PageContainer