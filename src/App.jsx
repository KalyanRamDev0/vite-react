

import CustomButton from "./components/button.jsx";
import CustomImage from "./components/image.jsx";
import CustomList from "./components/list.jsx";
import MainHeading from "./components/heading.jsx";
//import { SecondaryMainHeading } from "./components/heading.jsx";
import { recipeData } from "./components/recipe.js";




const App=()=>{
  const imageListing=[
    {
    name:"bag1",
    src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ,
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
