import React from 'react'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'

class App extends React.Component{
  constructor(){
    super()
    this.state = 
    {buttons:[
      {id:1,text:"Open first modal",backgroundColor:'' ,activeType:'OkCance'},
      {id:2,text:"Open second modal",backgroundColor:'',activeType:'alert'},
    ],
    modals:[
      {id:1,closeButton:true, header:'first',isUse:false ,type:'OkCance'},
      {id:2,closeButton:false, header:'second',isUse:false, type:'alert'}
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
    const buttons = this.state.buttons.map(button => <Button onClick={clickModalVisibleHeandler(button.activeType)} key={button.id}>{button.text}</Button>)
    const modals = this.state.modals.filter(({isUse}) => isUse)
    return(
      <>
      {buttons}
      {modals.map(modal => <Modal key={modal.id} modal={modal}></Modal>)}
      </>
    )
  }
}

export default App;
