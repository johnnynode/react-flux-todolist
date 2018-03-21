import React, {Component} from 'react';
import Input from './input';

import Utils from '../Utils';

class ListItem extends Component {
  constructor(props) {
    super(props);
    // 设置状态机
    this.state = {
      isEditing: false
    }
  }

  static get defaultProps() {
    return {
      id:1,
      content:"default book name",
      checked:false,
      toggleItem:()=>{},
      editItem:()=>{},
      delItem:()=>{},
    }
  }

  changeEditState() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    const {
      id,
      content,
      checked,
      toggleItem,
      editItem,
      delItem
    }=this.props;

    let bookHtml,
      isEditing = this.state.isEditing;
    
    if(isEditing) {
      bookHtml = <Input 
        autoFocus={true}
        defaultValue={content}
        style={{width:200,height:30,outline:"none"}}
        onBlur={
          (e)=>{
            let val = Utils.trim(e.target.value);
            editItem(id,val);
            this.changeEditState();
          }
        }
      />
    }else{
      bookHtml = 
        <span
          onDoubleClick={
            ()=>{
              this.changeEditState();
            }
          }
        >{content}</span>
    }

    return (
      <div>
        <Input 
          id={id}
          type="checkbox"
          checked={checked}
          onChange={
            ()=> {
              toggleItem(id);
            }
          }
        />
        {bookHtml}
        <button onClick={
          ()=>{
            delItem(id);
          }
        }>x</button>
      </div>
    )
  }
}

export default ListItem;