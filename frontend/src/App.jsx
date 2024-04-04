import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Bag from './screens/Bag'
import Home from './screens/Home';
import FetchItems from './components/FetchItems';
import { useSelector } from 'react-redux';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {

  const fetchStatus = useSelector((state) => state.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/bag' element={<Bag />} />
      </Routes>}
      <Footer />
    </>
  )
}

export default App