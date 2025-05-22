import { Navbar, Footer, Home, About, Project, Contact, Skill } from './Components'

function App() {


  return (
    <>
      <div className='w-full h-full bg-linear-to-b from-[#90e4f3] via-[#ebebeb] to-[#90e4f3] relative'>
        <header>
          <Navbar />
        </header>
        <main>
          <section id='home'><Home /></section>
          <section id='about'><About /></section>
          <section id='skills'><Skill /></section>
          <section id='projects'><Project /></section>
          <section id='contact'><Contact /></section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
