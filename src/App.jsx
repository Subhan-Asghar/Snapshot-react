import './App.css'
import { useState } from 'react'

function App() {
  const [text,setText]=useState('')
  const [pic,setPic]=useState([])
  async function api(search){
    const apiKey="636e1481b4f3c446d26b8eb6ebfe7127"
    const response=await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    const data= await response.json();
    setPic(data.photos.photo);
    

  }

  return (
    <>
    <div className='bg-gray-900 text-white flex justify-center'>
     <input type="text"
     onChange={(e)=>{setText(e.target.value)}}
     className='my-4 w-96 rounded-lg h-9 px-4 text-gray-900 font-bold'
     placeholder='Search' />
     <button
     onClick={()=>{api(text)}} 
     className='mx-5 my-4 hover:text-white hover:bg-gray-600 bg-white h-9 w-16  text-gray-900 font-bold  rounded '>Search</button>
     </div>
     <h1
      className='my-4 font-bold text-2xl flex justify-center'>Snapshot</h1>
      <div className='flex flex-wrap justify-center' >
      {
        pic.map(pics=>(
          <div className=' m-5 w-90 flex flex-row flex-wrap '>
          <Photcard key={pics.id} photo={pics}/>
          </div>
         
        ))
      }</div>
    </>
  )
}
// Component
const Photcard=({photo})=>{
  const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  return(
  <div>
  <img className='h-48 w-64 rounded-md' src={imageUrl} alt={photo.title} />
  {/* <h3>{photo.title}</h3> */}
  </div>
  )
}

export default App
