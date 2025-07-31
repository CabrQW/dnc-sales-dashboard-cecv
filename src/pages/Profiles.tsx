import { useContext } from 'react'

//COMPONENTS
import { Header, CardComponent, StyledButton, StyledH2, } from '@/components'

//CONTEXTS
import { AppThemeContext } from '@/contexts/AppThemeContext'

//MUI
import { Container, Grid } from '@mui/system'

//SERVICES
import { logout } from '@/services'

function Profiles() {
  const themeConstext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CardComponent>Seus dados...</CardComponent>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CardComponent>
              <StyledH2 className='mb-1'>Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeConstext?.toggleTheme}
              >
                troca de tema{' '}
                {themeConstext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout} >Logout</StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
export default Profiles
