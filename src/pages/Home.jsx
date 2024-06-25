import React, { useContext } from 'react'
import people from "../images/peaple-man.png"
import "./scss/home.scss"
import MyList from '../MyList'
import ProductList from '../ProductList'
import ThemeContext from '../context/ThemeContext'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <main className={`${theme === "dark" ? "dark-theme" : ""}`}>
      <section className='secOne py-9 md:py-0'>

        <div className="container w-4/5 m-auto">

          <div className="boxes w-100 md:flex items-center m-auto pt-20">

            <div className="box w-4/5 md:w-3/6 m-auto">
              <img src={people} alt="people" />
            </div>

            <div className="box w-4/5 md:w-3/6 m-auto">
              <MyList name="Murad Qəhrəmanov " />
            </div>
          </div>

        </div>
        <ProductList />

      </section>
    </main>
  )
}

export default Home