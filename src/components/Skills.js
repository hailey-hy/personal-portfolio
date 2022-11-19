
import 'react-multi-carousel/lib/styles.css';
import {BiWinkSmile, BiSmile} from "react-icons/bi";
import colorSharp from "../assets/img/color-sharp.png"
import front from '../assets/img/frontend.png';
import react from '../assets/img/react-logo.png';
import redux from '../assets/img/redux-logo.png';
import jest from '../assets/img/jest-logo.png';
import heroku from '../assets/img/heroku-logo.png';
import git from '../assets/img/git-logo.png';
import bootstrap from '../assets/img/bootstrap-logo.png';

export const Skills = () => {

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <h5><BiWinkSmile/> 할 수 있습니다!</h5>
                          <div className='skill-grid'>
                            <div className='skill-detail-box'>
                              <img src={front}/>
                            </div>
                            <div className='skill-detail-box'>
                              <img src={react}/>
                            </div>
                            <div className='skill-detail-box'>
                              <img src={redux}/>
                            </div>
                          </div>
                          <div className='skill-grid'>
                            <div className='skill-detail-box'>
                              <img src={git}/>
                            </div>
                            <div className='skill-detail-box'>
                              <img src={bootstrap}/>
                            </div>
                          </div>
                          <br/>
                        <h5><BiSmile/> 공부 중입니다!</h5>
                        <div className='skill-grid'>
                            <div className='skill-detail-box'>
                              <img src={jest}/>
                            </div>
                            <div className='skill-detail-box'>
                              <img src={heroku}/>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
