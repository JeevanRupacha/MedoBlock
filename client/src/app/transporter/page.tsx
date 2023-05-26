import TopAppBar from "@/shared/ui/topAppBar/TopAppBar"
import TransporterMain from "./components/TransporterMain"

export default function Home() {
    return (
      <main className='min-h-screen bg-primary-black'>
        <div>
          <TopAppBar/>
          <TransporterMain/>
        </div>
      </main>
    )
  }