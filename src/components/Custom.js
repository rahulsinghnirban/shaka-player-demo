import React, {Component} from 'react'
import './Custom.css'


export const Custom = ({url, setUrl}) => {

  let handleSubmit = (e) =>{
    e.preventDefault();
    console.log(url);
    setUrl(url);
  }

  return (
    <div className='form-class'>
        <form onSubmit={handleSubmit}>
            <label>Manifest URL: <input type="text" name="URL" onChange={(e)=> url = e.target.value} /> </label>
            <label>DRM: <input type="text" name="DRM" /> </label>
            <input type="submit" />
        </form>
    </div>
  )
}


// export class Custom extends Component{

//   constructor(props){
//     super(props);
//   }

//   handleSubmit = (e) =>{
//     e.preventDefault();
//     console.log(this.props.url);
//     this.props.setUrl(this.props.url);
//   }

//   render(){
//     return(
//       <div className='form-class'>
//         <form onSubmit={this.handleSubmit}>
//             <label>Manifest URL: <input type="text" name="URL" onChange={(e)=> this.props.url = e.target.value} /> </label>
//             <label>DRM: <input type="text" name="DRM" /> </label>
//             <input type="submit" />
//         </form>
//     </div>
//     );
//   }

// }
