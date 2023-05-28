import TopAppBar from "@/shared/ui/topAppBar/TopAppBar"
import SupplierMain from "./components/SupplierMain"

export default function Home() {
    return (
      <main className='min-h-screen bg-primary-black'>
        <div>
          {/* <TopAppBar/> */}
          <SupplierMain/>
        </div>
      </main>
    )
  }