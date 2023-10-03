import {Link} from 'react-router-dom';

function Home(){
   return( 
       <div>
         <h1>My Home Page</h1>
         <p>Go to <Link to="/about">about</Link></p>
       </div>
     ); 
}
export default Home;