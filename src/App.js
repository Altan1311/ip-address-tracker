import React from 'react'
const { useState, useEffect } = React;


function App() {
  const [ip, setIp] = useState("")

  const [data, setData] = useState({
    ip: null,
    location: null,
    timezone: null,
    isp: null
  })

    const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_tpveFv76S3iuEq603uibIlomiKSf5&ipAddress="

  const getData = async () => {
    try{
      const res = await fetch(url + ip)
      const resdata = await res.json()
      setData({
        ip: resdata.ip,
        location: `${resdata.location.city}, ${resdata.location.region} ${resdata.location.country}`,
        timezone: resdata.location.timezone,
        isp: resdata.isp
      })
    }catch(err){
      console.log(err)
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    getData()
  }

  return (
    <>
      <h1 className="title">IP Address Tracker</h1>

      <section className="search">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              id="input-search"
              className="input-search"
              onChange={(e) => setIp(e.target.value)}
            />
            <button
              className="search-button"
            >
              {">"}
            </button>
          </form>
        </div>
      </section>

      <section className="content">
        <ul className="result-list">
          <li className="result-list-item">
            <h2 className="item-title">IP Address</h2>
            <p className="item-content">{data.ip}</p>
          </li>
          <li className="result-list-item">
            <h2 className="item-title">Location</h2>
            <p className="item-content">{data.location}</p>
          </li>
          <li className="result-list-item">
            <h2 className="item-title">Timezone</h2>
            <p className="item-content">{data.timezone}</p>
          </li>
          <li className="result-list-item">
            <h2 className="item-title">ISP</h2>
            <p className="item-content">{data.isp}</p>
          </li>
        </ul>
      </section>
      
    </>
  );
}

export default App;
