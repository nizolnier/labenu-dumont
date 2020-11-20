import React from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import { baseUrl } from '../../constants/urls'
import styled from 'styled-components'
import { TextField, Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Footer from '../../components/Footer'

const MainContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

const FormContainer = styled.form`
	padding: 1em;
	display: flex;
	flex-direction: column;
  justify-content: center;
	gap: 1em;
	width: 30vw;
  background-color: white;
`

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#67C7EB"
    }
  },
})

function LoginPage() {
  const history = useHistory()
  const { form, onChange, reset } = useForm({ email: "", password: "" });


  const login = (e) => {
    e.preventDefault()

    const body = {
      email: form.email,
      password: form.password
    };

    axios.post(`${baseUrl}/login`, body).then((res) => {
      reset()
      localStorage.setItem("token", res.data.token)
      history.push("/admin")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <NavBar />
      <MainContainer>
      <FormContainer onSubmit={login}>
        <TextField variant="outlined" label="Email" type={"email"} onChange={onChange} value={form.email} name="email" required />
        <TextField variant="outlined" label="Senha" type={"password"} value={form.password} onChange={onChange} name="password" required />
        <MuiThemeProvider theme={myTheme}>
        <Button type={'submit'} variant="contained" color="secondary">LOGAR</Button>
        </MuiThemeProvider>
      </FormContainer>
      </MainContainer>
      
      <Footer />

    </div>
  );
}

export default LoginPage;