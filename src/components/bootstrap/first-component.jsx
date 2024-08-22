import Customcard from "./custom-card";

const FirstComponent=()=>{
    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <Customcard title={"john"} text={"software"}/>
      </div>
      <div className="col-sm-4">
        <Customcard     title={"ramana"} text={"software dev"}/>
      </div>
      <div className="col-sm-4">
      <Customcard     title={"kalyan"} text={"software dev"}/>
      </div>
    </div>
  </div>
</>

    )
}
export default FirstComponent;