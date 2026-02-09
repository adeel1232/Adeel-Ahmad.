import React from "react";
import "./qualification.css";

function Qualification() {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React.js</h3>
                <span className="qualification__subtitle">Frontend Development</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">JavaScript</h3>
                <span className="qualification__subtitle">Programming Language</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Redux</h3>
                <span className="qualification__subtitle">State Management</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Routing</h3>
                <span className="qualification__subtitle">React Router</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Axios</h3>
                <span className="qualification__subtitle">API Integration</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">HTML & CSS</h3>
                <span className="qualification__subtitle">Web Structure & Styling</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bootstrap</h3>
                <span className="qualification__subtitle">CSS Framework</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UI/UX</h3>
                <span className="qualification__subtitle">Design Fundamentals</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Authentication</h3>
                <span className="qualification__subtitle">Secure Login Systems</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">Next.js</h3>
                <span className="qualification__subtitle">Frontend & Backend Development</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2025
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
