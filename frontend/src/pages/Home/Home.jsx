import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Highlight from '../../components/Highlight/Highlight'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Flowers from '../../components/Flowers/Flowers'
import Floral from '../../components/Floral/Floral'
import AppDownload from '../../components/AppDownload/AppDownload'
import ReviewBouquet from '../../components/ReviewBouquet/ReviewBouquet'
import FeatureFlower from '../../components/FeatureFlower/FeatureFlower'
import CsFeature from '../../components/CsReview/CsFeature'
import GetDeals from '../../components/GetDeals/GetDeals'
// Import icon WhatsApp dari react-icons
import { FaWhatsapp } from 'react-icons/fa'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <>
      <Header/>
      <Highlight/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <Flowers/>
      <Floral/>
      <ReviewBouquet/>
      <FeatureFlower/>
      <CsFeature/>
      <GetDeals/>

      {/* Ikon WhatsApp di pojok kanan bawah */}
      <a
      href="https://wa.me/6285175300119?text=Halo%20Kaninara%20Florist!%20saya%20mau%20pesan%20dari%20katalog:%20[url%20katalog]%20Apakah%20tersedia?"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        width: '50px',       // Pastikan width dan height sama
        height: '50px',      // untuk membentuk lingkaran
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontSize: '24px',
        zIndex: 1000,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)'
      }}
      >
        <FaWhatsapp />
      </a>

    </>
  )
}

export default Home
