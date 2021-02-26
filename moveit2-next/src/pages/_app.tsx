
import { useState } from 'react'

import '../styles/global.css';

import { challengesContext } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  const [level, setLevel] = useState(1)

  function levelUp() {
    setLevel(level + 1);

  }



  return (
    <challengesContext.Provider value={{ level: 1, levelUp }}>


      <Component {...pageProps} />

    </challengesContext.Provider>


  )
}

export default MyApp