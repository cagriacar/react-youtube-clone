import React from 'react'
import './style/SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './channelrow/ChannelRow'
import VideoRow from './videorow/VideoRow'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTRE</h2>

      </div>
      <hr/>

      <ChannelRow
      image="https://lh3.googleusercontent.com/a-/AOh14GhWHA62ZmORAd-aHOmHn72cZLzHuFb4kAuStGtxJA=s88-c-k-c0x00ffffff-no-rj-mo"
      channel="Cagri Acar"
      verified
      subs="50M"
      noOfVideos={1021}
      description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
   <hr/>

    <VideoRow 
    views="1.4M"
  subs="800K"
  description="useEffect in 6 minutes - let's look at how useEffect works in React! This is a React hook and it has multiple use cases and the use cases are fairly simple to understand—especially with these examples! useEffect can be used for capturing when renders happen, whether it be just the once, or 🌎 👇"
  timestamp="1 gün önce"
  channel="
  Karl Hadwen"
  title="useEffect In 6 minutes - React Tutorial - Learn React in 2020"
  image="https://i.ytimg.com/an_webp/yg9ZrK5IwZA/mqdefault_6s.webp?du=3000&sqp=CKDp3fwF&rs=AOn4CLAMnDfW6DtPR2L2Y7qiY_ihqhdiHQ"
    />

    
<VideoRow 
    views="1.4M"
  subs="800K"
  description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet 🌎 👇"
  timestamp="1 gün önce"
  channel="Clever Programmer"
  title="Let's build an app with REACT NATIVE! (Qazi & Sonny)"
  image="https://i.ytimg.com/an_webp/hggGvwA_tcc/mqdefault_6s.webp?du=3000&sqp=CMPh3fwF&rs=AOn4CLD0ddJzaZcsF93gwWlAGXUIXpUarQ"
    />


<VideoRow 
    views="1.4M"
  subs="800K"
  description="useEffect in 6 minutes - let's look at how useEffect works in React! This is a React hook and it has multiple use cases and the use cases are fairly simple to understand—especially with these examples! useEffect can be used for capturing when renders happen, whether it be just the once, or 🌎 👇"
  timestamp="1 gün önce"
  channel="
  Karl Hadwen"
  title="useEffect In 6 minutes - React Tutorial - Learn React in 2020"
  image="https://i.ytimg.com/an_webp/yg9ZrK5IwZA/mqdefault_6s.webp?du=3000&sqp=CKDp3fwF&rs=AOn4CLAMnDfW6DtPR2L2Y7qiY_ihqhdiHQ"
    />

    
<VideoRow 
    views="1.4M"
  subs="800K"
  description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet 🌎 👇"
  timestamp="1 gün önce"
  channel="Clever Programmer"
  title="Let's build an app with REACT NATIVE! (Qazi & Sonny)"
  image="https://i.ytimg.com/an_webp/hggGvwA_tcc/mqdefault_6s.webp?du=3000&sqp=CMPh3fwF&rs=AOn4CLD0ddJzaZcsF93gwWlAGXUIXpUarQ"
    />

<VideoRow 
    views="1.4M"
  subs="800K"
  description="useEffect in 6 minutes - let's look at how useEffect works in React! This is a React hook and it has multiple use cases and the use cases are fairly simple to understand—especially with these examples! useEffect can be used for capturing when renders happen, whether it be just the once, or 🌎 👇"
  timestamp="1 gün önce"
  channel="
  Karl Hadwen"
  title="useEffect In 6 minutes - React Tutorial - Learn React in 2020"
  image="https://i.ytimg.com/an_webp/yg9ZrK5IwZA/mqdefault_6s.webp?du=3000&sqp=CKDp3fwF&rs=AOn4CLAMnDfW6DtPR2L2Y7qiY_ihqhdiHQ"
    />

    
<VideoRow 
    views="1.4M"
  subs="800K"
  description="Do you want to become a six-figure JavaScript Developer? Check out the best JavaScript course on the planet 🌎 👇"
  timestamp="1 gün önce"
  channel="Clever Programmer"
  title="Let's build an app with REACT NATIVE! (Qazi & Sonny)"
  image="https://i.ytimg.com/an_webp/hggGvwA_tcc/mqdefault_6s.webp?du=3000&sqp=CMPh3fwF&rs=AOn4CLD0ddJzaZcsF93gwWlAGXUIXpUarQ"
    />




    </div>
  )
}

export default SearchPage
