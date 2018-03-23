import Layout from '../components/layout';
 import Head from 'next/head';
 import {Component} from 'react';
 class Projects extends Component{
  constructor(){
      super()
      this.state={
          isON: false,
          isON1: false,
      }}
     
click = ()=>{
  this.setState({
      isON: ! this.state.isON,
  })
}
     
click1 = ()=>{
this.setState({
    isON1: ! this.state.isON1,
})
}

render(){
  return(
    <Layout>
    <div className='resume'>
      <h1>Curriculum Vitae</h1>
      <br/>
      <h2 className="block">PERSONAL INFORMATION</h2>
      <br/>
      <br/>
      <img className='cvimag' src="../static/photo/CV Photo.jpg" width='364' height='330' />
      <div className='float'>
        <h3>Name:</h3>
        <h4 className="h4"> Jawad Ahmad</h4>
        <h3>Address:</h3>
        <h4 className="h4"> Ostpreußendamm 108,12207 Berlin (Germany)</h4>
        <h3>E-Mail:</h3>
        <h4 className="h4"> jawaduom7@gmail.com</h4>
        <h3>Mobile:</h3>
        <h4 className="h4"> 015213769649</h4>
        <br/>
      </div>
      <br/>
      <br/>
      <div>
        <h2 className='job'>JOB APPLIED FOR Frontend Web Developer</h2>
      </div>
      <br/>
      <div className="skill">
        <h2>WORK EXPERIENCE</h2>
        <br/>
        <div className='myskill'>
          <h3>20/10/2012-13/05/2015:</h3>
          <h4> Self-Employed,
            <br/>A1 Super Market,
            <br/> London (United Kingdom) </h4>
          <br/>
          <h3>01/08/2009–31/07/2010:</h3>
          <h4>Computer Instructor,
            <br/>TBA Institute of Technology,
            <br/> Dir (Pakistan) </h4>
          <br/>
        </div>
      </div>
      <div className="skill">
        <h2>EDUCATION AND TRAINING</h2>
        <br/>
        <div className='myskill'>
          <h3>06/08/2006–03/10/2010:</h3>
          <h4> BS (4-Years) in Information Technology
            <br/>UNIVERSITY OF MALAKAND,
            <br/> Dir (Pakistan)</h4>
          <br/>
          <div className='clic'>
          <button onClick={this.click}> {this.state.isON ? 'Hide Docs':'Show Docs'}</button>
          {this.state.isON ? <a href='../static/photo/showdoc.png'><img src='../static/photo/showdoc.png' width='350px' height='450px'/></a>: ''}
          </div>
          <h3>01/08/2004–31/05/2006:</h3>
          <h4>Intermediate Pre-Engineering
            <br/>GOVT DEGREE COLLEGE GULABAD,
            <br/> Dir (Pakistan) </h4>
          <br/>
          <h3>19/10/2017–17/11/2017:</h3>
          <h4>Erprobungscenter Digitale Berufe
            <br/> DIGITAL CAREER INSTITUE,
            <br/> Berlin (Germany) </h4>
          <br/>
          <h3>08/02/2018–Present:</h3>
          <h4>Advanced Frontend Development
            <br/>ReDI School of Digital Integration,
            <br/> Berlin (Germany) </h4>
          <br/>
        </div>
      </div>
      <div className='skill'>
        <h2>PERSONAL SKILLS</h2>
        <br/>
        <div className='myskill'>
          <h3>Mother tongue:</h3>
          <h4>Pashto</h4>
          <br/>
          <h3>English:</h3>
          <h4>Fluent</h4>
          <br/>
          <h3>Urdu and Hindi:</h3>
          <h4>Fluent</h4>
          <br/>
          <h3>Deutsch:</h3>
          <h4>Average</h4>
          <br/>
        </div>
      </div>
    </div>
  </Layout>
  )
}}
 export default Projects
  


