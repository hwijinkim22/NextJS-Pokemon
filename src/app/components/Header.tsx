import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="bg-green-400 text-center p-4 font-black flex justify-center items-center">
        <Image src={"/포켓몬도감.jpg"} alt="포켓몬도감 사진" width={35} height={35}/>
        <h1>Pokemon</h1>
      </header> 
    </>
  )
}

export default Header