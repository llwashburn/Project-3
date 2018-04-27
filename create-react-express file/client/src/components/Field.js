// import React, { PropTypes } from "react";

// //Stateless component / Functional component
// const Field = (props) => (
//     <div>
//         <label>{props.label}</label>
//     <input 
//     onChange={props.onChange}
//     type={props.textarea ? "textarea" : "text"}
//     value = {props.value}
//     />
//     </div>
// );

// //Using PropTypes will ensure certain props will enable the 
// //component Field to funciton properly.

// Field.PropTypes = {
// label: PropTypes.string.isRequired,
// onChange: PropTypes.func.isRequired,
// value: PropTypes.string.isRequired,
// textarea: PropTypes.bool.isRequired,
// };


// Field.defaultProps = {
//     textarea: false,
// };

// export default Field;