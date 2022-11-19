import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import devGarden from '../assets/img/dev-garden.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Project</h2>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <div className="project-container">
          <h3 className="title">개발 정원</h3>
          <p>2022.06 | 2인 팀 프로젝트</p>
          <div>
            <img src={devGarden}></img>
            <div>
              <div className="project-detail">
                <h5><b>유명 백엔드/프론트엔드 개발자 로드맵을 참고한 개발 공부 로드맵 다이어리입니다. </b>
                  로드맵을 완료하면 정원이 채워지고, 친구들의 정원을 방문하여 메시지를 남길 수 있습니다. 
                  개발 공부를 더 즐겁게 하고자 직접 아이디어를 내어 개발하였습니다. </h5>
                <h5>
                  <span className="project-blue">백엔드 개발자와 문서로 소통하며 협업</span>하였습니다. 
                  노션을 사용해서 진행 상황을 공유했고, 어려운 에러를 함께 해결하여 효율적으로 진행할 수 있었습니다.
                </h5>
                <h5>React로 개발하며 <span className="project-blue">비동기</span>로 이루어지는 <span className="project-blue">React의 동작 과정을 학습</span>하였습니다. 
                  상태관리의 필요성을 느껴 개발 중 <span className="project-blue">Redux</span>를 도입하였습니다. 
                  또한, <span className="project-blue">REST api</span>를 사용하면서 <span className="project-blue">CORS 관련 이슈를 해결</span>하는 경험을 할 수 있었습니다.
                </h5>
                <h5>
                  프론트를 경험하고, 프론트엔드 개발자가 되고자 마음먹은 계기가 된 프로젝트입니다.
                </h5>
              </div>
              <div className="project-detail">
                <div className="project-border"></div>
                  <div className="project-caption">
                  <h4>주요 기능</h4>
                  <h5>학습 성취도 기록, 성취도에 따른 정원 오브젝트 표시, 친구 추가 및 친구의 정원 방문, 친구에게 방명록 남기기 및 내가 받은 방명록 확인</h5>
                </div>
                <div className="project-caption">
                  <h4>Github</h4>
                  <h5><a href="https://github.com/hailey-hy/devroadmap-front">바로가기</a></h5>
                </div>
                <div className="project-caption">
                  <h4>Frontend</h4>
                  <h5>React, Redux, Bootstrap</h5>
                </div>
                <div className="project-caption">
                  <h4>Backend</h4>
                  <h5>Spring Boot</h5>
                </div>
                <div className="project-caption">
                  <h4>Deployment</h4>
                  <h5>Heroku</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
