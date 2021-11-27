import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Items from './Items'
import './app.css'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import AllBook from './AllBook'
import Info from './Info'
import New from './New'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Items />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/info'>
          <Info />
        </Route>
        <Route path='/news'>
          <New />
        </Route>
        <Route path='/book/:id' children={<AllBook />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
