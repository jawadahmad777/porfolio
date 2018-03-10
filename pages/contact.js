import Layout from '../components/layout'; import Link from 'next/link'; const Contact = () => (
<div>
  <Layout>
    <div className="container">
      <div className='jawad'>
        <div>
          <img src="../static/photo/facebook.png" height='350px' width='350px' />
          <p>
            <Link href='https://m.facebook.com/jawad.ahmad.528316'>
            <a>Follow me on Facebook
              <br/>https://m.facebook.com
              <br/>/jawad.ahmad.528316</a>
            </Link>
          </p>
        </div>
        <div>
          <img src="../static/photo/gmail.png" height='350px' width='350px' />
          <p>
            <Link href='https://google.com'>
            <a> Write Me
              <br/>jawaduom7
              <br/>@gamil.com</a>
            </Link>
          </p>
        </div>
        <div>
          <img src="../static/photo/git.png" height='350px' width='350px' />
          <p>
            <Link href='https://github.com/jawadahmad777'>
            <a> Follow me on Github
              <br/>https://github.com/
              <br/>jawadahmad777</a>
            </Link>
          </p>
        </div>
        <div>
          <img src="../static/photo/linked.png" height='320px' width='320px' />
          <p>
            <Link href='https://www.linkedin.com/in/jawad-ahmadkhan'>
            <a>Follow me here https://www.linkedin.com
              <br/>/in/jawad-ahmadkhan</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
</div>
); export default Contact;