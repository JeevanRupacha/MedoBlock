import TopAppBar from "@/shared/ui/topAppBar/TopAppBar"
import RetailerMain from "./components/RetailerMain"

export default function Home() {
    return (
      <main className='min-h-screen bg-primary-black'>
        <div>
          <TopAppBar/>
          <RetailerMain/>
        </div>
      </main>
    )
  }