import Head from 'next/head';
import Link from 'next/link';
  const Footer= () =>(
<div>
    <head>
        <link href='../static/sass/style.css' rel='stylesheet' />
    </head>
    <div className='footer'>
        <div className='container'>
            <ul>
                <li>
                    <Link href='index'>
                    <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='aboutme'>
                    <a>About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href='resume'>
                    <a>Resume</a>
                    </Link>
                </li>
                <li>
                    <Link href='projects'>
                    <a>Projects</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="social">
        <ul className= "ul">
            <li id='li'>Follow Me</li>
            </ul>
         <ul className= "items">
        <li>
                <Link href='https://github.com/jawadahmad777'>
                    <a><img src='../static/photo/git.png' width='35px' height='35px'/></a>
                    </Link>
        </li>
        <li>
                <Link href='https://m.facebook.com/jawad.ahmad.528316'>
                    <a><img src='../static/photo/facebook.png' width='35px' height='35px'/></a>
                    </Link>
        </li>
        <li>
                <Link href='https://www.linkedin.com/in/jawad-ahmadkhan'>
                    <a><img src='../static/photo/linked.png' width='35px' height='35px'/></a>
                    </Link>
        </li>
        </ul>
        </div>
    </div>
</div>
); export default Footer