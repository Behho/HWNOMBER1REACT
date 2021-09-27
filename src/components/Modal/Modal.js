import React from 'react'
import './ModalStyle.scss'

class Modal extends React.Component{
    constructor(){
        super()
        this.state = {}
    }
    render(){
        const {modal} = this.props
        return(
            <div className="modal-body">

                <div className="modal-header">
                    <h2 className="modal-header--headline">{modal.header}</h2>
                </div>
            </div>
        )
    }
}

export default Modal