import Image from 'next/image'
import TopAppBar from '../shared/ui/topAppBar/TopAppBar'
import HomeLanding from './components/HomeLanding'

export default function Home() {
  return (
    <main className='min-h-screen bg-primary-dark'>
      <div>
        <TopAppBar/>
        <HomeLanding/>
      </div>
    </main>
  )
}