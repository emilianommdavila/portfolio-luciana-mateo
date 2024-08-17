
import texts from '../../../public/text.json'
import './about.css'
import PHOTO from '../../assets/icons/photo.png'
import ICONLOCATION from '../../assets/icons/location.png'

function About() {
  return (
    <div id='about' className="about">
      <div className="photo">
        <img src={PHOTO} alt="" className="aboutPhoto" />
      </div>
      <div className="textAbout">
        <h2>Sobre mi</h2>
        <div className='location'>
          <img className='locationIcon' src={ICONLOCATION} alt="" />
          <div className="locationText">{texts.about.location}</div>
        </div>
        <div className="description">
          <div className="descriptionText">{texts.about.aboutMe}</div>
        </div>
        <div className="invitation">{texts.about.invitation}</div>
      </div>
    </div>
  )
}

export default About