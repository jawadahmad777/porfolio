
 import Link from 'next/link';
 const Navabar= () => (
         <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
          <div className="container">
            <a className="navbar brand"><i>Jawad Ahmad<br/>Web Developer</i></a>
              <div className="collapse navbar-collapse">
               <ul className="navbar nav ml-auto">
                <li className="nav-item">
                 <Link href="/"><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                 <Link href="aboutme"><a className="nav-link">About me</a></Link>
                </li>
                <li className="nav-item">
                 <Link href="resume"><a className="nav-link">Resume</a></Link>
                </li>
                <li className="nav-item">
                 <Link href="contact"><a className="nav-link">Contact</a></Link>
                </li>
               </ul>
             </div>
             </div>
         </nav>
 
 );
 export default Navabar;