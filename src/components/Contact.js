import React from "react"
import {connect} from "react-redux"
import Action3 from "./../Actions/Action3"
import {bindActionCreators} from "redux"
class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        this.props.Action3()
    }
    render(){
        return(<>
            <h3>Action3 Data</h3>
            {
                this.props.Data.map((res,i)=>{
                    return(<>
                        <table className="table mx-5 table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Appname</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{res.id}</td>
                                    <td>{res.App}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>)
                })
            }

        </>)
    }


}
let mapStateToProps=(Store)=>{
    return({
        Data:Store.Reducer3
    })
}
let mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({Action3}, dispatch)
}
export default connect(  mapStateToProps, mapDispatchToProps)(Contact)