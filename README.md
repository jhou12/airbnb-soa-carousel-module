# Airbnb SOA Carousel Module
Service-Oriented Architecture app that makes several API requests to other services, and populates images and data in a repeating Airbnb-styled carousel of 12 products, with fallback data for request errors. The first (active) carousel is styled after the Airbnb "More places to stay" service, and the second (inactive) carousel is based on the "Things do to nearby" service. Made with React, React Styled Components, Express, and Node. Instructions available below for both local and EC2 setup.

<p align="center">
<img src="screenshot.png" width="600"/>
</p>

## Setup on Local:

1. `git clone`
1. install dependencies with `npm install`
1. start server with `npm run start`
1. build bundle with `npm run build`
1. verify app up and running at `localhost:3000/rooms/:id`(for id values 0-99)
1. for development, start webpack with `npm run react-dev`

## Setup on EC2:
Complete local setup & [add ec2 readme]

## Setup with Proxy:

For setup with proxy, complete steps above and follow steps for [proxy](link to proxy repo).

## Related Projects

  - [add link to proxy repo]
  - [add link to reviews repo]
