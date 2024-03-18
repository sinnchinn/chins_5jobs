import Accordion from 'react-bootstrap/Accordion';

const PubmarkComponent = () => {

  return (
    <div className='bgColor'>

      <a href='https://www.bookbub.com/careers/open-positions/5548801' target='_blank'>

        <h1 className='headerFont'>PUBMARK/BOOKBUB</h1>

      </a>

      <div className='carousel' style={{ marginTop: '30px' }}>

        <img className='imgStyle' src="/bookbub.webp" alt="Team 3" />

      </div>

      <div>

        <Accordion className='accordionStyle'>

          <Accordion.Item eventKey="0">
            <Accordion.Header className='accordionHeader'>Why would I like to work here?</Accordion.Header>
            <Accordion.Body>
              Growing up, I was always told that reading books would make me smarter. Until this day, I still agree with that statement. Reading is very important, especially for young children and growing adults. Bookbub is perfect for readers to find eBooks an audiobooks through their unbeatable deals. I really like their approach to diversity and inclusivity. For over 50 years, they have worked to ensure that their workplace has employees with a diverse range of identities, perspectives, and experiences. I grew up in Stockton, one of the most diverse cities in the US, so I would hope to see that in companies that I'm interested in applying for.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Job Requirements</Accordion.Header>
            <Accordion.Body>
              If I were to apply here, I would like to apply for the Engineering position or the Design position. The engineering position is responsible for creating all of the software that powers Bookbub. They work in small cross-functional teams with people from the design, product and analytics team. They rotate new products one or twice per year. The design team collaborates with teams across the company to design every aspect of what their customers interact with.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Goals to Achieve</Accordion.Header>
            <Accordion.Body>
              Some goals of mine for these positions is to improve and add onto the skills I already have.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Skillsets?</Accordion.Header>
            <Accordion.Body>
              I feel like I would have to work more on my engineering skillsets to obtain a position here. The hardest part of coding is the logic and I need to get better at understanding what I'm actually coding out.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>


    </div>
  )
}

export default PubmarkComponent
