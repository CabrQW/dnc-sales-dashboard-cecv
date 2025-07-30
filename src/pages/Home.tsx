//COMPONENTS
import { CardComponent, Header } from "@/components"

//MUI
import { Container } from "@mui/system"

const Home = () => {
  return (
    <>
    <Header/>
    <Container maxWidth='lg'>
      <CardComponent>Card</CardComponent>
    </Container>
    </>
  )
}
export default Home
