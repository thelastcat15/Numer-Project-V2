import React from 'react'
import ScrollableList from '@components/ScrollSelect'

function Home({ Topics }) {
  return (
    <div className="w-[90%] max-w-6xl mx-auto mt-[5rem] mb-[3.5rem] flex flex-col space-y-[4rem] items-center">
      <div className="flex flex-col items-center justify-center text-center font-pattaya text-8xl font-normal text-myBlue">
        <p>
          Numerical<br />
          Methods
        </p>
      </div>
      <div className="container space-y-[6rem]">
        {
          Object.entries(Topics).map(([category, subtopics]) => (
            <div className="text-4xl font-protestStrike mx-auto w-[50rem] h-64 bg-[#1E1F26] flex items-center border-4 border-myBlueBorder rounded-[4rem]">
              <p className="text-myBlue ml-14 whitespace-nowrap">{category} :</p>
              <ScrollableList subtopics={subtopics}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home