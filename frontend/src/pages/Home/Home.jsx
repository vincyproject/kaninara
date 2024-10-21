import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Highlight from '../../components/Highlight/Highlight'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Flowers from '../../components/Flowers/Flowers'
import Floral from '../../components/Floral/Floral'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <Highlight/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <Flowers/>
      <Floral/>
    </>
  )
}

export default Home
