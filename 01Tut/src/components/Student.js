// const student = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//     </div>
//   )
// }

import Comp from "./Comp"
import propTypes from 'prop-types'


const Student = ({name,age}) => {
  return (
    <div>
      <h1>{name}</h1>
    <h1>{age}</h1>
    <Comp frame = "senior"/>
    </div>
  )
}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

Student.defaultProps = {
    name: "unknown",
    age: 0
}
export default Student
