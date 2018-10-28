import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
// import Plane from '../../images/paper_plane_red.svg'
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';



@inject(allStores => ({
    addTargerPos: allStores.store.addTargerPos
})) 
@observer
class TargetTransperent extends Component {

    constructor() {
        super()
    }

    @observable divPos = { x: "", y: "" };


    @action async componentDidMount() {
        
        let rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect()
        console.log(rect.x, rect.y)
        this.divPos.x = rect.x + 25 //finding the div's center
        this.divPos.y = rect.y + 25 //finding the div's center
        console.log(this.divPos.x, this.divPos.y)
        this.props.addTargerPos(this.divPos.x, this.divPos.y)
    }



       /*put req. to the server, updating the client
            axios.put('http://localhost:8100/clients', {
                id: newObject.id,
                name: name,
                country: country
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
          */

    render() {
        return (
            <div className="targetTransperent">
            </div>
        );
    }
}
export default TargetTransperent;