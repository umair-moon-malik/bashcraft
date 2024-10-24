import './Background.css'
import { useEffect , useState } from 'react'


const Background = () => {

  const [scrolled , setScrolled] = useState(false)
  useEffect(() => {
      window.addEventListener('scroll' , () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
      })
  },[])

  return (
    <div className={`background-image ${scrolled? 'background-image-scrolled' : ''}`}>
        <div className='content'>
            
        </div>
    </div>
  )
}

export default Background
