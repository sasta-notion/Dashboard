/* eslint-disable */
/*global chrome*/
import { useState } from 'react'
import '../App.css'
function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/api/v1/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
		console.log(data)

		if (data.token) {
			localStorage.setItem('token', data.token)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}

	

	return (
		<div className="login-con">

			<form id="loginForm" onSubmit={loginUser}>
				<h1 className="login-head">Login-Form</h1><br /><br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br /><br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br /><br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}

export default App
