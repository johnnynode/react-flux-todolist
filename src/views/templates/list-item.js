import React, {Component} from 'react';
import Utils from '../../utils';
import Input from './input';

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
            // 空值还原
            if(!val) {
              return this.changeEditState();
            }
            editItem(id,val);
            this.changeEditState();
          }
        }
        onKeyUp={
          (e) => {
            let val = Utils.trim(e.target.value);
            if(val && e.keyCode === 13) {
              editItem(id,val);
              this.changeEditState();
            }
            if(!val && e.keyCode === 13) {
              this.changeEditState();
            }
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
          style={{width:15,height:15}}
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