import { Post } from './Post'
import { Header } from './componentes/Header'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <h1>Hello World!</h1>
      <Post
        autor="Jorge William"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas ea ipsa repellat, eos cum delectus, nostrum facilis quibusdam odio officiis illum labore doloribus ducimus at molestiae minus iste doloremque."
      />
      <Post
        autor="Gabriel"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quas ea ipsa repellat, eos cum delectus, nostrum facilis quibusdam odio officiis illum labore doloribus ducimus at molestiae minus iste doloremque."
      />

    </>
  )
}

export default App