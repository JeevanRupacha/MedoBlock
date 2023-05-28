import TopAppBar from "@/shared/ui/topAppBar/TopAppBar";
import FdaAdminMain from "./components/FdaAdminMain";

const FDAHome = () => {
    return (
      <main className='min-h-screen bg-primary-black'>
        <div>
          {/* <TopAppBar/> */}
          <FdaAdminMain/>
        </div>
      </main>
    )
}

export default FDAHome;