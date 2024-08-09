import './style.css'
import Trash from '../../assets/16qg.svg';

function Home() {


  const users = [{
    id: '123sdadasd',
    nome: 'João',
    idade: 25,
    email: 'jo@gmail.com'
  }, {
    id: '123sdadasddsa',
    nome: 'Maria',
    idade: 30,
    email: 'mar@aisjd.com'
  },
  {
    id: '123sdadasddsadas',
    nome: 'Pedro',
    idade: 40,
    email: 'pe@email.com'
  }]


  return (
    <div className='container'>

      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' type='text' name='nome' />
        <input placeholder='Idade' type='number' name='idade' />
        <input placeholder='Email' type='email' name='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:  <span> {user.nome} </span>  </p>
            <p>Idade: <span> {user.idade}  </span>  </p>
            <p>Emails: <span> {user.email} </span>  </p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>

      ))}

    </div>

  )
}

export default Home
