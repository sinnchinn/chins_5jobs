import Accordion from 'react-bootstrap/Accordion'

const PlayMediaComponent = () => {
  return (
    <div className='bgColor'>

      <a href='https://jobs.3playmedia.com/apply?js_source=https://www.google.com/' target='_blank'>
        <h1 className='headerFont'>3PLAY MEDIA</h1>
      </a>

      <div className='carousel' style={{ marginTop: '30px' }}>

        <img className='imgStyle' src="/3play.jpg" alt="Team 3" />

      </div>

      <div>

        <Accordion className='accordionStyle'>

          <Accordion.Item eventKey="0">
            <Accordion.Header className='accordionHeader'>Why would I like to work here?</Accordion.Header>
            <Accordion.Body>
              3Play Media offers premium closed captioning and transcritpion, live captioning, audio description, and ASL interpreting solutions. They believe that accessibility matterse and the impact of accessibility is universal. I 100% agree with this message. It is important to be inclusive of all people wih and without disabilities.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Job Requirements</Accordion.Header>
            <Accordion.Body>
              I would be interested in being an english transcriptionist. Some requirements that have is excellent written communication skills, excellent command of English grammar and pronunciation, proficiency with internet research and reference sources, and the ability to manage projects and work independantly. I don't think I will have to learn any new skills for this position. If anything, maybe touch up on my grammar.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Goals to Achieve</Accordion.Header>
            <Accordion.Body>
              Realistically, one of my goals for this position would be able to type faster and be able to transcribe well.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Skillsets?</Accordion.Header>
            <Accordion.Body>
              I believe I do have some of the skillsets for this job, like internet research proficiency. I also like to work independantly so it would be something I'm used to.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>


    </div>
  )
}

export default PlayMediaComponent
