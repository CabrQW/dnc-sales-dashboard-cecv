//COMPONENTS
import { AvatarsList, CustomTable, CardComponent, Header } from "@/components" 

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
  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [<span>Nome1</span>, <span>nome1@email.com</span>, <span>Action</span>],
      [<span>Nome2</span>, <span>nome1@email.com</span>, <span>Action</span>],
      [<span>Nome3</span>, <span>nome1@email.com</span>, <span>Action</span>],
    ],
  }
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData}/>
        </CardComponent>
        <CardComponent>
          <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
        </CardComponent>
      </Container>
    </>
  )
}
export default Home
