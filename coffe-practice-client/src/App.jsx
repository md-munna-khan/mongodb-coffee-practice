
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import CoffeeCards from './components/CoffeeCards'

function App() {
 
const coffeeData= useLoaderData()

  return (
    <>
     <Navbar></Navbar>
      <h1 className='text-4xl'>coffee data:{coffeeData.length}</h1>
 <div className='grid md:grid-cols-2 ' >
 {
    coffeeData.map(coffee=> <CoffeeCards key={coffee._id} coffee={coffee}></CoffeeCards>)
  }
 </div>
    </>
  )
}

export default App
