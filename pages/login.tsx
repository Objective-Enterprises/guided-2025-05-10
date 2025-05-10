import { ChangeEvent, FormEvent, useState } from "react"
import { useRouter } from "next/router"

export default function LoginPage () {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function handleUsernameChange (event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }
  function handlePasswordChange (event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }
  function handleSubmit (event: FormEvent) {
    event.preventDefault()
    if (username !== 'admin') {
      return
    }
    if (password !== 'foodie123') {
      return
    }
    localStorage.setItem('fake', 'dummy-jwt-token')
    router.push('/menu')
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}