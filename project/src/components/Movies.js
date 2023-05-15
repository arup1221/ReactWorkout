// props method
//const Movies = (props) => {
//   return (
//     <div className= "movie">
//     <img src={props.img} alt="" />
//     <p>{props.id}</p>
//     <p>{props.title}</p>
//     <p>{props.year}</p>
//     </div>
//   )
// }


// new method using direct object
const Movies = ({img, id , title, year}) => {
  return (
    <div className= "movie">
    <img src={img} alt="" />
    <p>{id}</p>
    <p>{title}</p>
    <p>{year}</p>
    </div>
  )
}

export default Movies
