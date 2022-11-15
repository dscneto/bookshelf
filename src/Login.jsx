import './Login.css'

export default function Login() {
  return (
    <main>
      <div className='card'>
        <div className='logo'>
          <p>Bookshelf</p>
        </div>

        <div className='logon'>
          <form action="getform.php" method="get">
            <input type="email" name="nome" value="E - mail" /><br />
            <input type="password" name="email_usuario" value="Senha" /><br />
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </main>
  )
}
