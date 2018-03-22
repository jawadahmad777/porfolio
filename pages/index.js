import Layout from '../components/layout'; import Link from 'next/link'; 
const index = () => (

  <Layout>
  <div className="header"><h1>Welcome </h1><h1 className="port">To My Portfolio</h1></div>
   
      <div className="index">
        <div>
        <Link href='/'>
          <a>
            <img src="../static/photo/Capture.PNG" height='350px' width='400px'/>
          </a>
          </Link>
        </div>

        <div>
          <Link href='aboutme'>
          <a>
            <img src="../static/photo/Capture3.PNG" height='350px' width='400px' />
          </a>
          </Link>
        </div>

        <div>
          <Link href='resume'>
          <a>
            <img src="../static/photo/Capture1.PNG" height='350px' width='400px' />
          </a>
          </Link>
        </div>

        <div>
          <Link href='contact'>
          <a>
            <img src="../static/photo/Capture2.PNG" height='320px' width='400px' />
          </a>
          </Link>
        </div>
        
        </div>
  </Layout>
); 
export default index;