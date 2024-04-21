import {Link} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div className='menu'>
      <h1>Menu</h1>
      <Link to='/Pag1'>
          <button id='menub'>Pagina 1</button>
      
      </Link>

      <Link to='/pag2'>
      <button id='menub'>pagina 2</button>
      </Link>

      <Link to='/pag3'>
      <button id='menub'>pagina 3</button>
      </Link>
      </div>
  )
}

export default App
