import Categories from "@/components/categories/Categories";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function Home() {

  return (
    <>
      <div>Home!</div>
        <Categories />
    </>
  )
}
