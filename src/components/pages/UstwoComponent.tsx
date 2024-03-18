import Accordion from 'react-bootstrap/Accordion'

const EnigmaComponent = () => {
  return (
    <div className='bgColor'>

    <a href='https://www.ustwogames.co.uk/join/internships' target='_blank'>
      <h1 className='headerFont'>USTWO</h1>
    </a>

    <div className='carousel' style={{ marginTop: '30px' }}>

      <img className='imgStyle' src="/ustwo.webp" alt="Team 3" />

    </div>

    <div>

    <Accordion className='accordionStyle'>

    <Accordion.Item eventKey="0">
      <Accordion.Header  className='accordionHeader'>Why would I like to work here?</Accordion.Header>
      <Accordion.Body>
        I grew up with mostly uncles that were gamers, of course I like games! UsTwo makes games that leave a lasting impression so they can lean into real life experiences and interests outside of games to create experiences that feel personal and relatable. I love cozy games and games that actually make you think. UsTwo empowers personal development and close collaboration, they also play weird and wonderful games together during normal lunch-time which sounds super fun! 
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header>Job Requirements</Accordion.Header>
      <Accordion.Body>
        I would like to be a regular employee there. While there are no positions open, I can't tell you what the requirements are. However, it really seems like they care for their employees and offers many, many benefits. I would want to start off with their paid internship.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>Goals to Achieve</Accordion.Header>
      <Accordion.Body>
        I want to break into the gaming industry, this company really seems like it would be perfect. The team seems really close-knit.
      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="3">
      <Accordion.Header>Skillsets?</Accordion.Header>
      <Accordion.Body>
        I would have to achieve many many new skillsets, especially because I have no idea what it takes to be a game developer. 
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>

    </div>


  </div>
  )
}

export default EnigmaComponent
