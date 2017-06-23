import React, {Component} from 'react'

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler(str){
        this.props.onNavClick(str);
    }

    render() {
        return (
            <div className="nav">
                <h1>{this.props.currentSelected}</h1>
                <button
                    onClick={()=>{
                        this.onClickHandler('add');
                    }}>Todo Add
                </button>
                <button
                    onClick={()=>{
                        this.onClickHandler('remove');
                    }}>Todo Remove
                </button>
            </div>
        )
    }
}

export default Navigation