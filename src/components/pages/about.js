import {Link} from 'react-router-dom';
function About(){
    return( 
        <>
            <h1>My About Page</h1>
            <p>Go to <Link to="/">home</Link></p>
        </>
      ); 
}
export default About;