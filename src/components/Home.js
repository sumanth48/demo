import React from 'react'

//step-1
import { connect } from 'react-redux';

//step-3: calling Redux Action Files
import Action1 from './../Actions/Action1'

//Step-4: Redux Object - is to "map" multiple actions together as a single prop
import { bindActionCreators } from 'redux'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    componentDidMount() {
        this.props.Action1()//step-7
    }

    render() {
        return (
            <div className="p-5 text-center">
                <h2>REDUX-REACT CONNECTON</h2>

                {/* step-11*/}
                {
                    this.props.EmpData.map((res, i) => {
                        return (<table className="table border">
                            <tr>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                            </tr>
                        </table>)
                    })
                }

                <p>paragraph</p>
            </div>
        )
    }
}



//Step-8: Get the Store data 
let mapStateToProps = (Store) => {
    //step-9
    //console.log(Store)

    //step-10
    return ({
        EmpData: Store.Reducer1
    })
}

//Step-5: Dispatch the actions To send the request to Reducers then submit to store
let mapDispatchToProps = (dispatch) => {
    //step-6
    return bindActionCreators({ Action1 }, dispatch)
}

//step-2
export default connect(mapStateToProps, mapDispatchToProps)(Home)