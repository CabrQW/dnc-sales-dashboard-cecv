import { useContext } from 'react'

//COMPONENTS
import { Header, CardComponent, StyledButton } from '@/components'

//CONTEXTS
import { AppThemeContext } from '@/contexts/AppThemeContext'

function Profiles() {
  const themeConstext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className='primary' onClick={themeConstext?.toggleTheme}>
          troca de tema {themeConstext?.appTheme === 'light' ? 'escuro' : 'claro'}
        </StyledButton>
      </CardComponent>
    </>
  )
}
export default Profiles
