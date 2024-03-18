import Accordion from 'react-bootstrap/Accordion';

const NotionComponent = () => {
  return (
    <div className='bgColor'>

      <a href='https://boards.greenhouse.io/notion/jobs/4852966003' target='_blank'>
        <h1 className='headerFont'>NOTION</h1>
      </a>

      <div className='carousel' style={{ marginTop: '30px' }}>

        <img className='imgStyle' src="/notion_logo.png" alt="Team 3" />

      </div>

      <div>

        <Accordion className='accordionStyle'>

          <Accordion.Item eventKey="0">
            <Accordion.Header className='accordionHeader'>Why would I like to work here?</Accordion.Header>
            <Accordion.Body>
              Before CodeStack, I had no idea what Notion was. I was taking my notes on either notebook paper which messy handwriting or bootleg notes on my laptop! I really like their take at organized note taking and would love to be apart of their team to make it even better.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Job Requirements</Accordion.Header>
            <Accordion.Body>
              I would like to apply for their product designer position. Some skills I would need to have are well-rounded skills and experience to run projects independently end to end. 5+ years of working experience, seek to understand the needs of customers then explore and advocate for the strongest user experiences to solve their problems, create clear, intuitive, and visually appealing human interfaces and more.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Goals to Achieve</Accordion.Header>
            <Accordion.Body>
              I would like to refine my design skills in notetaking so that other students like me and the rest of CodeStack can have more readable notes that they are able to look back on.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Skillsets?</Accordion.Header>
            <Accordion.Body>
              Firstly, I would need at least 5 years of experience, something in which I dont have. I would probably like to start with their internship, if I could.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>


    </div>
  )
}

export default NotionComponent
