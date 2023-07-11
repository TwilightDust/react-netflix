import React from 'react'
import Banner from '../../componets/Banner';
import Row from '../../componets/Row';
import requests from '../../api/requests';


export default function MainPage() {
  return (
    
    <div>
        <Banner/>

<Row 
title="NETFLIX ORIGINALS" 
id="NO" 
fetchUrl={requests.fechNetflixOriginals} 
isLargeRow/>

<Row 
title="Trending Now" 
id="TN" 
fetchUrl={requests.fetchTrending}/>
<Row 
title="Top Rated" 
id="TR" 
fetchUrl={requests.fetchTopRated}/>
<Row 
title="Action Movies" 
id="AM" 
fetchUrl={requests.fetchActionMovies}/>
<Row 
title="Comedy Movies" 
id="CM" 
fetchUrl={requests.fetchComedyMovies}/>
    </div>

  )
}
