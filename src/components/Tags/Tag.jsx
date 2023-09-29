import './Tag.sass'
function Tag({tags}){
   return(
    <div className="tags">
             {tags && tags.map((tag) => (
                    <p className='tags--card'>{tag}</p>
            ))}
    </div>
   )   
}
export default Tag