import Experience from "./components/home/experience";
import Gallery from "./components/home/gallery";
import Homemainbanner from "./components/home/homemainbanner";
import Services from "./components/home/services";
import Tours from "./components/home/tours";








const App=()=>{

 return(
  <div >
    <Homemainbanner/>
    <Services/>
    <div className="container">
                <button className='btn btn-warning rounded-5 mb-2 px-4 py-0' id='btn-font'>Explore</button>
                <h1>Our featured tours</h1>
            </div>
    <Tours/>
    <Experience/>
    {/* <Gallery/> */}
  </div>
 ) 
}
export default App;