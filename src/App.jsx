import { Post } from './componentes/Post';
import { Header } from './componentes/Header';
import styles from './App.module.css';

import './global.css';
import { Sidebar } from './componentes/SideBar';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Diego Fernandes'
            content='Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Possimus numquam eaque optio 
            nesciunt obcaecati sapiente eius veritatis facere
             iure, illo nihil dolores, aut illum excepturi, 
             doloribus voluptates exercitationem iusto libero.'
          />
          <Post
            author='Paula Reis'
            content='Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Possimus numquam eaque optio 
            nesciunt obcaecati sapiente eius veritatis facere
             iure, illo nihil dolores, aut illum excepturi, 
             doloribus voluptates exercitationem iusto libero.'
          />
        </main>
      </div>
    </>
  );
}

export default App;
