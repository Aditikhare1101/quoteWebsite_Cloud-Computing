import Header from './Header'
import './home.css'
import Postss from './Postss'
import Sidebar from './Sidebar'

export default function Home() {
  return (
    <>
        <Header/>
        <div className='home'>
            <Postss></Postss>
            <Sidebar></Sidebar>
        </div>
    </>
    
  )
}
