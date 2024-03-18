import Accordion from 'react-bootstrap/Accordion';

const DiscordComponent = () => {
  return (
    <div className='bgColor'>

      <a href='https://discord.com/jobs/7246684002' target='_blank'>
        <h1 className='headerFont'>DISCORD</h1>
      </a>

      <div className='carousel' style={{ marginTop: '30px' }}>

        <img className='imgStyle' src="/discord.png" alt="Team 3" />

      </div>

      <div>

        <Accordion className='accordionStyle'>

          <Accordion.Item eventKey="0">
            <Accordion.Header className='accordionHeader'>Why would I like to work here?</Accordion.Header>
            <Accordion.Body>
              Discord works toward an inclusive world where no one feels like an outsider, where they say genuine human connection is a click, text chat or a voice call away. I grew up using Discord for gaming with friends in real life and also friends online.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Job Requirements</Accordion.Header>
            <Accordion.Body>
              I would like the be apart of their design team which is made up of an experienced group of multidisciplinary creatives building work with the marketing team. Somme requirements will be to work closely with the Creative Director, graphic designers, and art directors to produce final print, digital, and web-ready files that meet all technical requirements, establish and communicate consistent visuals and standards across our entire brand, build a design system and asset library that incorporates evolved brand imagery for use across campaigns and with external partners and a few more. I feel like I would have a lot to learn when it comes to this position, especially because it's such a big company.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Goals to Achieve</Accordion.Header>
            <Accordion.Body>
              I would honestly appreciate the experience I would have if I were to work here. I would like to start off with their internship if I could!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Skillsets?</Accordion.Header>
            <Accordion.Body>
              I definetely have to refine my designing skills.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>


    </div>
  )
}

export default DiscordComponent
