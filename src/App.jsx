

<<<<<<< HEAD
import CustomImage from "./components/image.jsx";
=======
import CustomButton from "./components/button.jsx";
import CustomImage from "./components/image.jsx";
import CustomList from "./components/list.jsx";
import MainHeading from "./components/heading.jsx";
//import { SecondaryMainHeading } from "./components/heading.jsx";
import { recipeData } from "./components/recipe.js";
>>>>>>> fb41e283501ff636e959b3473913b61a6a1693f5




const App=()=>{
  const imageListing=[
    {
    name:"bag1",
    src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
<<<<<<< HEAD
    height:30"
    width:

 } ]

 return(
  <>
    
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="30" width="100" alternatetext="bag pack" />
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="50" width="100" alternatetext="bag pack" />
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="80" width="100" alternatetext="bag pack" />
    <CustomImage source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height="100" width="100" alternatetext="bag pack" />
    </>
 ) 
=======
    height:"30",
    width:"100"
 },
{
  name:"bag2",
    src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
    height:"50",
    width:"300"
},
{name:"bag3",
  src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
  height:"80",
  width:"200"} ]

 return(
  <>
{
    recipeData.map(eachRecipe=>{
      return(
        <div key={eachRecipe.id} >
          <MainHeading heading={eachRecipe.name}   />
          <CustomImage source={eachRecipe.image} width={200}  height={200}/>
          <SecondaryHeading heading={"ingredients required"}  />
          <CustomList list={eachRecipe.ingredients}  />
          <SecondaryHeading heading={"instructions required"}  />
          <CustomList list={eachRecipe.instructions}  />
          <CustomButton  text={"Start preparation"}   />
        </div>
      )
    })

  }

    </>
  )
>>>>>>> fb41e283501ff636e959b3473913b61a6a1693f5
}
export default App; 








    {/* {
     imageListing.map(eachimage=>{
      return <CustomImage source={eachimage.src} height={eachimage.height} width={eachimage.width} alternatetext={eachimage.name}/>
    })
    }



    <CustomButton text="login" onPress={()=>{}} bgcolour="red" />
    <CustomButton text="signup" onPress={()=>{}} bgcolour="green" />
    <CustomButton text="order" onPress={()=>{}} bgcolour="yellow" />
    <CustomButton/>
<MainHeading heading="list of fruits"/>
    <CustomList List={["watermelon","mango","banana","abcddd"]}/>
    <MainHeading heading="list of crickters"/>
    <CustomList List={["sachin","dhoni","virat"]}/>
    <MainHeading heading="list of gadgets"/>
    <CustomList List={["cpmputer","laptop","phone"]}/> */}
   // </>
 //) 
//}
