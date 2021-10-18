import React from 'react'
import Modal from './Components/Modal/Modal'
import Buttons from './Components/Buttons/Buttons'

class App extends React.Component{
  constructor(){
    super()
    this.state = 
    {buttons:[
      {id:1,text:"Open first modal",backgroundColor:'rgb(216, 87, 64)' ,activeType:'OkCance'},
      {id:2,text:"Open second modal",backgroundColor:'rgb(84, 64, 216)',activeType:'alert'},
    ],
    modals:[
      {id:1,closeButton:true, 
      header:'Do you want to delete this file?', 
      text:`Once you delete this file, it won't be possible to ando this action.
      Are you sure you want to delete it`, 
      isUse:false ,type:'OkCance',
      modalBackground:'rgb(216, 87, 64)'},
      {id:2,closeButton:false,
       header:'You press on second button!!',
       text:'',
       isUse:false, type:'alert',
      modalBackground:'rgb(84, 64, 216)',}
    ]  
  }
  this.ModalVisible = this.ModalVisible.bind(this)
  }

  ModalVisible(activeType){
    const active = this.state.modals.map((modal) => {
      if(activeType === modal.type){
        return{
          ...modal,isUse:!modal.isUse
        }
      }
      return modal
    })
    this.setState({modals:active})
  }

  render(){
    const clickModalVisibleHeandler = activeType => () => this.ModalVisible(activeType)
    return(
      <>
      <Buttons onClick={clickModalVisibleHeandler} buttons={this.state.buttons}/>
      <Modal onClick={clickModalVisibleHeandler} modals={this.state.modals}></Modal>
      </>
    )
  }
}

export default App;
