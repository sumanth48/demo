import React from "react"
import {connect } from "react-redux"
import  Action2 from "./../Actions/Action2"
import {bindActionCreators} from "redux"

class About extends React.Component  {
    constructor(props){
        super(props)      
          this.state={}
     }

    componentDidMount(){
        this.props.Action2()
    }
    render(){
        return(<div>
            <h2>Action2</h2>
            {
                this.props.A2data.map((d,i)=>{
                    return(<>
                        // <ul>
                        //     <li>{d.id}</li>
                        // </ul>
                        //<p>hai your id no:<strong>{d.id}</strong> and your first name is <strong>{d.Firstname} </strong>and your last name is <strong>{d.Lastname}</strong></p>
                        <p>{d.email}</p>
                        <p>{d.username}</p>
                        <p>{d.password}</p>
                    </>)
                })
            }
        </div>)
    }
    
}
let mapStateToProps=(Store)=>{
    return({
        A2data: Store.Reducer2
    })
}
let mapDispatchToProps=(dispatch)=>{
     return bindActionCreators({Action2}, dispatch)   
}
export default connect(mapStateToProps, mapDispatchToProps)(About)