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
      <header className='fixed z-50 '>
        
        <NavBar   scroll={executeScroll} home={homeRef} menu={menuRef} testinomial={testinomialRef} about={aboutRef}/>
        
      </header>
      <main className='-z-10'>
          <section section ref = {homeRef}
          style = {{height: '100vh',backgroundColor: '#495E57'}}>
            <Banner/>
          </section>
          <section  ref = {menuRef} className=' sm:h-screen'>
            <Menu/>
          </section>
          <section ref = {testinomialRef} style = {{height: '100vh',backgroundColor: '#495E57'}}>
            <Testinomial/>
          </section>
          <section ref={aboutRef}  className=' sm:h-[90vh] bg-azure'>
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