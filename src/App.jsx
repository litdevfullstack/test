import './App.css'
import { Article, NavBar, CTA, Feature, Brand } from './components';
import { Blog, Features, Footer, Possibility, WhatGPT3, Header, } from './containers';;

function App() {


  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <NavBar />
          <Header/>
        </div>
        <Brand />
      </div>
    </>
  )
}

export default App
