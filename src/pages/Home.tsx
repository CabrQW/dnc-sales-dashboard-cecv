//COMPONENTS
import { AvatarsList, CardComponent, Header } from "@/components"

//MUI
import { Container } from "@mui/system"

//UTILS
import { currencyConverter } from "@/utils"

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(12345.5),
    },

    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(12345.5),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(12345.5),
    },
  ] 

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData}/>
        </CardComponent>
      </Container>
    </>
  )
}
export default Home
