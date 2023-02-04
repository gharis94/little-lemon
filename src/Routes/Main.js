import React,{useRef} from 'react'
import About from '../Components/About/About';
import Banner from '../Components/Banner/Banner';
import NavBar from '../Components/NavBar/NavBar';
import Testinomial from '../Components/Testinomial/Testinomial';
import Menu from '../Components/Menu/Menu';
import logo from '../asset/logo.png'

const Main = () => {
  const homeRef = useRef(null)
  const menuRef = useRef(null)
  const testinomialRef = useRef(null)
  const aboutRef = useRef(null)
 

  const executeScroll=(ref)=>window.scrollTo({behavior:'smooth',top:ref.current?.offsetTop})
  return (
    <>
      <header className='py-2 px-6 flex w-screen justify-between items-center fixed z-10 bg-white bg-opacity-50  bg-blur-sm drop-shadow-lg'>
        <img src={logo} className='h-10 '/>
        <NavBar  scroll={executeScroll} home={homeRef} menu={menuRef} testinomial={testinomialRef} about={aboutRef}/>
      </header>
      <main>
          <section section ref = {homeRef}
          style = {{height: '100vh',backgroundColor: '#495E57'}}>
            <Banner/>
          </section>
          <section  ref = {menuRef} style = {{height: '100vh'}}>
            <Menu/>
          </section>
          <section ref = {testinomialRef} style = {{height: '100vh',backgroundColor: '#495E57'}}>
            <Testinomial/>
          </section>
          <section ref={aboutRef} style={{height:'90vh', backgroundColor:'azure'}}>
            <About/>
          </section>
      </main>
      <footer className='h-20 flex justify-center items-center bg-black text-white'>
        <p>Footer</p>
      </footer>     
    </>
  );
}

export default Main