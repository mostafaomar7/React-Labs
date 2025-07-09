import React from 'react';
import '../styles/skill.css';

function Skills() {
  return (
    <div className="skills container mt-5" id="skills">

      <div className="section-title">
        <h2 className="text-center mt-5">Skills</h2>
      </div>

      <div className="row skills-content">
        <div className="col-lg-6">
          <div className="progress">
            <span className="skill">OOP(maharah tech)<span className="val">90%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">DB Fundmental SQL<span className="val">100%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Network Basic <span className="val">85%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Opreating System <span className="val">85%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Problem solving <span className="val">85%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up">
          <div className="progress">
            <span className="skill">HTML <span className="val">95%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <span className="val">95%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '95%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JavaScript <span className="val">90%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '90%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Type Script <span className="val">85%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Angular <span className="val">85%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">UI Bootstrap, Responsive Design <span className="val">90%</span></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Skills;
