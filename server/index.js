const compression = require('compression')
const express = require('express')
const app = express()
const port = 3002
const dummyData = require('./dummyData.js')
const cors = require('cors')
const axios = require('axios')
const path = require('path')

app.use(compression())
app.use('/rooms/:id', express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'))
})

app.get('/morePlaces/propId/:id', async (req, res) => {
  const id = req.params.id
  try {
    throw 'bypassing other service requests.'

    // get propIds via current propId, using region metric
    let regionIdsResponse = await axios(`http://54.215.197.139:4454/region/${id}`)
    let top12RegionIds = []
    for (let i = 0; i < 12; i++) {
      top12RegionIds.push(regionIdsResponse.data[i].id)
    }
    // create array of data objs and assign propIds
    let data = []
    for (let i = 0; i < top12RegionIds.length; i++) {
      let houseData = {}
      houseData.propId = top12RegionIds[i]
      data.push(houseData)
    }
    console.log('GOT propId data!')

    // get overall rating & review count
    let houseReviewsResponse = await Promise.all(top12RegionIds.map(propId => axios(`http://3.20.69.232:1984/reviews/morePlaces/${propId}`)))
    for (let i = 0; i < houseReviewsResponse.length; i++) {
      data[i].overallRating = houseReviewsResponse[i].data.overallRating
      data[i].totalReviews = houseReviewsResponse[i].data.reviewsTotal
    }
    console.log('GOT reviews data!')

    // get main photo, superhost, & title
    let photoDataResponse = await Promise.all(top12RegionIds.map(propId => axios(`http://54.211.95.226:5001/api/headerService/more-places/${propId}`)))
    for (let i = 0; i < photoDataResponse.length; i++) {
      data[i].houseUrl = photoDataResponse[i].data.photo
      data[i].houseTitle = photoDataResponse[i].data.title
      data[i].superhost = photoDataResponse[i].data.isSuperhost
    }
    console.log('GOT photos data!')

    // get house type & bedrooms
    let houseTypeResponse = await Promise.all(top12RegionIds.map(propId => axios(`http://13.56.218.102:5545/propertyDetails/${propId}`)))
    for (let i = 0; i < houseTypeResponse.length; i++) {
      data[i].houseType = `${houseTypeResponse[i].data[0].property_type} ${houseTypeResponse[i].data[0].property_narrow_type}`
      data[i].bedrooms = houseTypeResponse[i].data[0].beds
    }
    console.log('GOT house type data!')

    // hardcoded: price
    for (let i = 0; i < data.length; i++) {
      data[i].totalPrice = 234
    }

    console.log('SUCCESS!')
    res.status(200).send(data)
  } catch(e) {
    console.log('FALLBACK!', e)
    let data = dummyData.makeArray()
    res.send(data)
  }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})