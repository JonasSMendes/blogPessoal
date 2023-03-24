
  import './App.css'
  import { Sidebar } from './components/sidebar/sidebar'
  import { Main } from './components/container_main/maincontainer'

const App = () =>{
  return(
    <div className='flex '>
      <aside className='w-16'>
      <Sidebar/>
      </aside>
      <main className=''>
      <Main/>
      </main>
      
      
    </div>
  )
}

export default App
