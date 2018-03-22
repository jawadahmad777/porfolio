import Layout from '../components/layout';
const Aboutme = () => (
  
    <Layout>
      <div className='aboutme'>
      <img src="../static/photo/about.png" width='600px' height='350px' /><br />
        <div className="first">
          <p>I'm a UI Designer and Front End Developer from Berlin.
                 I enjoy turning complex problems into simple, beautiful and intuitive interface designs.</p>
          <p>I was born in Dir and I lived in Ouch, Pakistan until I was 24. I then lived in London, UK,
                 and travelled to Paris, and Brussel before settling in Berlin a few years later.</p>
          <p>I have passion for Programming from my childhood, that was the reason I choose to study Information
                 Technology in the University.</p>
          <p>When I'm not coding or pushing pixels, you'll find me in the gym or on the court shooting hoops.
           My other passions include playing Cricket, watching TV, reading books, cinema and cooking.
                </p>
        </div>
        <div className='first'>
          You can approach me if you need a developer who can provide: Responsive Websites Using the following Technologies<br />
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript
                   <ul>
                <li>React.js</li>
                <li>jQuery</li>
              </ul>
            </li>
            <li>Bootstrap4</li>
          </ul>
          <p>I create responsive websites that allow the user to experience your website in the best
and most appropriate way suited to the device they are using. By working using progressive enhancement, your website is delivered with a responsive layout that can best make use of
the space available on the smallest to largest devices. Cross browser compatibility is ensured by using feature detection so older browsers still in use today provide a solid experience,
whilst modern browsers can go the next step and enhance a user’s time spent on your site.</p>
          <p>Writing semantic markup that is documented and easy to read means it can be maintained and scaled in the future,
 and allows co-workers to quickly work with it.</p>
          <p>Rather than create websites on a page-by-page basis, I instead consider each element of your screen-based designs
          as separate components that can exist elsewhere on a website; outside of the context of your design compositions.
          With these components I produce a style guide that acts as a document for a reusable and maintainable code base.
          All involved in a project can rely on a style guide to understand a project’s language and produce a more consistent
user experience.</p>
          <p>My front-end build process involves the use of tools such as Sass and NPM to speed up development.</p>
          <p>I can quickly and efficiently join your team using continuous-integration with methods and tools such as Git and test/behaviour driven development.</p></div>
      </div>
      </Layout>
);
export default Aboutme;