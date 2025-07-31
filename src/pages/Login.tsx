import { type ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'


//COMPONENTS
import { BannerImage, FormComponent,Logo, StyledH1, StyledP  } from '@/components'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// HOOKS
import { useFormValidation, usePost } from '@/hooks'

//UTILS
import { pxToRem, jwtExpirationDateConverter } from '@/utils'

//TYPES
import type { DecodedJWT, MessageProps, LoginData, LoginPostData } from '@/types'

function Login(){
  const navigate = useNavigate()
  const inputs = [
    { type:'email', placeholder: 'Email'},
    { type:'password', placeholder: 'Senha'}
  ]
  const {data, loading, error, postData } = usePost<LoginData, LoginPostData>('login')
  const {formValues, formValid, handleChange} = useFormValidation(inputs)

  const handlenMessage = ():MessageProps => {
    if(!error) return {msg: '', type: 'success'}
    switch(error) {
      case 401:
        return {
          msg:"Email e/ou senha inválidos",
          type: "error",
        }
        default:
          return{
            msg: "Não foi possivel realizar a operacão. Entre em contato com nosso suporte.",
            type: "error",
          }
    }
  }


  const handlenSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await postData({
      email: String(formValues[0]),
      password: String(formValues[1])
    })
  }

  useEffect(() => {
    if (data?.jwt_token) {
      const decoded: DecodedJWT = jwtDecode(data?.jwt_token)
      Cookies.set('Authorization', data?.jwt_token, {
        expires: jwtExpirationDateConverter(decoded.exp),
        secure:true,
      })
      if (Cookies.get('Authorization')) navigate('/home')
    }
    if (Cookies.get('Authorization')) navigate('/home')
  }, [data, navigate])

  return (
    <>
      <Box>
        <Grid container>
          <Grid
            size={{ xs: 12, sm: 6 }}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-Vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    className: 'primary',
                    disabled: !formValid || loading,
                    type: 'submit',
                    onClick: handlenSubmit,
                    children: 'Login',
                  },
                ]}
                message={handlenMessage()}
              />
            </Container>
          </Grid>
          <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default Login
