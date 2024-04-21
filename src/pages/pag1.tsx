import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import { api } from '../services/api';
import './pag1.css'

interface Repo{
    name:string
    html_url:string;
    description:string;
  }

export function Pag1(){
    const[repos, setRepos] = useState<Repo[]>([]);
    const[search, setSearch] = useState('');
    const[filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
    let[usuario, setUsuario] = useState('M4rcos123');

    async function listReposGit() {
        const resp = await api.get(`${usuario}/repos`);
        setRepos(resp.data)
       }
      
       useEffect( ()=>{
        listReposGit()
        console.log(repos);
        
       },[()=>{onblur}]);
      
       useEffect(()=>{
          setFilteredRepos(repos.filter(repo =>repo.html_url.includes(search)));
       },[search]);
console.log(usuario);
console.log(search);

    return(
        <div className='pag1'>
        <h1>Pagina 1</h1>

        <p>Escolha o usuario</p>
        <input type="text" 
        name="User" 
        placeholder='Buscar' 
        onChange={e => setUsuario(e.target.value)} 
        />

        <p>Lista de repositorios Github</p>
     <input 
     type="text"
     name='search' 
     placeholder='Buscar...'
     onChange={e => setSearch(e.target.value)}
     />
     { search.length> 0 ?(
      <ul className='repo'>
      {filteredRepos.map(repo =>{
        return(
          <li key={repo.name}>
            <a href={repo.html_url}>
            {repo.name}
            </a>
          </li>
        )
      })}
     </ul>
     ):(
      <ul className='repo'>
      {repos.map(repo =>{
        
        return(
          <li key={repo.name}>
            <a href={repo.html_url}>
            {repo.name}
            </a>
          </li>
        )
      })}
     </ul>
     )
     
     }
     
        <Link to='/'>
        <button id='pag1b'>Voltar</button>
        </Link>

        <Link to='/pag2'>
        <button id="pag1b">Pagina 2</button>
        </Link>

        <Link to='/pag3'>
        <button id="pag1b">Pagina 3</button>
        </Link>
        </div>
        
    );
}