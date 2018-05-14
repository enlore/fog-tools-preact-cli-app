import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { h, Component } from 'preact';
import connector from '../../connector'

import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

function StudentAmbassadorProgram ({ content }) {
  return (
    <div class="studentScreen">

      <section class="student__intro student--greyBg">
        <img class="student__floatingBook" src="/assets/open-book.png" />

        <div class="contentWrap">
          <h1 class="student__headline"> Student Ambassador Program </h1>

          <div class="student__introCopy">
            <p>
              Law students are the next generation of lawyers—and having grown up with
              technology, today’s law students are increasingly interested in breaking
              traditional molds and using technology to increase their professional
              development and career satisfaction, and to someday provide affordable legal
              services to individuals, small businesses, and big businesses. 
            </p>

            <p>
              The Law Student BookLawyer Ambassador Program provides law students with a
              unique opportunity to preview new product releases; provide feedback; learn
              about legal technology job opportunities; network with law students, law
              professors, practicing lawyers, and legal technology professionals; and
              share their knowledge of BookLawyer with their friends and colleagues. 
            </p>
          </div>
        </div>
      </section>

      <div class="student__dottedBox"></div>

      <section class="student__about">
        <div class="student__aboutFiligree">
          <img class="student__guyImage" src="/assets/student-ambassador-guy.png" />
          <div class="student__ghostBlueSquare"></div>
          <img class="student__floatingGavel" src="/assets/gavel-book.png" />
        </div>

        <div class="student__aboutCopy">
          <div class="contentWrap">
            <h1>
              BookLawyer is seeking current law students who are passionate about
              legal research, technology, and innovation.
            </h1>

            <p>
              BookLawyer is seeking current law students who are passionate about
              legal research, technology, and innovation. As a BookLawyer Ambassador, you
              will represent BookLawyer at your school—inspiring and educating your
              classmates, and the colleagues you work with in clerkships, internships, and
              externships—about the value of using BookLawyer during law school, and after
              graduation. Being a BookLawyer Ambassador will provide you with a unique
              opportunity to develop your leadership and presentation skills, while building
              relationships with students, professors, and potential employers—and gaining
              insight into the legal technology industry.
            </p>


            <p>
              The Law Student BookLawyer Ambassador Program will also provide you with a
              unique opportunity to preview new product releases; provide feedback; develop
              and demonstrate a broader skill set; network with law students, law professors,
              practicing lawyers, and legal technology professionals; and learn about legal
              technology job opportunities.
            </p>
          </div>
        </div>
      </section>

      <div class="student__dashedVertical"></div>

      <section class="signupCTAContainer signupCTAContainer--nohead">
        <div class="signupCTA">
          <div class="contentWrap">
            <h2 class="f-center"> Sign up for BookLawyer Today </h2>
            <p class="f-center">
              Something about helping lawyers find the law.  Be apart of the new
              platform for laywers to build their cases.
            </p>

            <div class="signupCTA__buttonContainer">
              <button class="signupCTA__cta signupCTA__cta--pop"> Sign Up </button>
              <button class="signupCTA__cta"> Log In </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default connector('content', StudentAmbassadorProgram)
