import Layout from '../components/layout'; import Link from 'next/link'; 
const index = () => (

<div>
  <Layout>
    <div className="container">
      <div className='jawad'>
        <div>
          <Link href='/'>
          <a>
            <img src="../static/photo/Capture3.PNG" height='350px' width='450px' />
          </a>
          </Link>
        </div>
        <div>
          <Link href='aboutme'>
          <a>
            <img src="../static/photo/Capture.PNG" height='350px' width='400px' />
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
    </div>
  </Layout>
</div>
); export default index;