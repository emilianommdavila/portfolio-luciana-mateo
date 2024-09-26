import { Component } from 'react'
import "./abilities.css";
import texts from '../../../public/text.json'
import AE from '../../assets/icons/After effects.png'
import AI from '../../assets/icons/illustrator.png'
import PS from '../../assets/icons/ps.png'
import BLENDER from '../../assets/icons/blender_icon_1024x1024.png'
import MAYA from '../../assets/icons/autodesk_maya-logo_brandlogos.net_x7aqy.png'
import PREMIERE from '../../assets/icons/Premiere.png'


const returnAbilities = (x:String) =>
{
  return x
}

export class Abilities extends Component {
  render() {
    return (
      <div id="skills" className="AbilitiesContainer">
        <h2 className="titleHabilities">{texts.abilities.title}</h2>
        <div className="listHabilities">
            {
                texts.abilities.listAbilities.map(x=>
                  <div className='abilitie'> { returnAbilities(x) } </div>)
            }
        </div>
        <div className="icons">
            <img className='iconAbilitie' src={AE} alt="" />
            <img className='iconAbilitie' src={AI} alt="" />
            <img className='iconAbilitie' src={PS} alt="" />
            <img className='iconAbilitie' src={BLENDER} alt="" />
            <img className='iconAbilitie' src={MAYA} alt="" />
            <img className='iconAbilitie' src={PREMIERE} alt="" />
        </div>

      </div>
    )
  }
}

export default Abilities