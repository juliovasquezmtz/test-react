import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ({}) => {

  const [categories, setCategories] = useState(['One-Punch Man', 'Dragon Ball']);
  
  const onAddCategory = (newSerch: string) => {
    if( categories.includes(newSerch))
    setCategories([newSerch, ...categories])
  }
  // console.log(categories);  
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        
        {/* Input  */}
        <AddCategory newSerchCategory={ onAddCategory } />
        {/* Listado de Gif */}
        <ol>
          {
            categories.map( (category) =>
              <li key={category}>{category}</li>
            )
          }
        </ol>
          
          {/* Gif Item  */}
    </>
  )
}
