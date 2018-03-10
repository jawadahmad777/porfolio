import Head from 'next/head';
 import Navabar from './navbar';
  import Footer from './footer'; 
  const Layout = (props)=>(
<div>

    <Head>
        <title>My Portfolio</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
    </Head>
    <Navabar/> {props.children}
    <Footer/>
</div>

); export default Layout;