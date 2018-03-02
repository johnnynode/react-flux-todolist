import React, {Component} from 'react';
import TodoInput from './TodoInput';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 设置状态机
    this.state = {
      isEditable: false
    }
  }

  static get defaultProps() {
    return {
      content: "重新定义公司",
      checked: true,
      id: 0,
      toggleItem: () => {},
      delItem:()=>{},
      editItem: ()=>{}
    }
  }

  changeEditableValue = () => {
    this.setState({
      isEditable: !this.state.isEditable
    });
  }

  // 只读模式
  readOnly = () => {
    const {
      content,
      checked,
      id,
      toggleItem,
      delItem
    } = this.props;
    return (
      <div>
        <input 
          type="checkbox" 
          checked={checked} 
          id={id} 
          onChange={()=>{
            toggleItem(id)
          }} 
        />
        <span onDoubleClick={()=>{
          this.changeEditableValue();
        }}>{content}</span>
        <button onClick={
          ()=>{
            delItem(id);
          }
        }>×</button>
      </div>
    )
  }

  // 编辑模式
  editMode = () => {
    const {
      content,
      checked,
      id,
      toggleItem,
      delItem,
      editItem
    } = this.props;
    return (
      <div>
        <input 
          type="checkbox" 
          checked={checked} 
          id={id} 
          onChange={()=>{
            toggleItem(id)
          }} 
        />
        <TodoInput 
          autoFocus={true}
          style={{width:100,height:30}}
          defaultValue={content}
          onBlur={
            (e)=>{
              editItem(id, e.target.value);
              this.changeEditableValue();
            }
          }
          onKeyDown={
            (e)=> {
              var val = e.target.value; // 此处没有进行trim处理
              if(e.keyCode === 13 &&  val!== "") {
                editItem(id, val);
                this.changeEditableValue();
              }
            }
          }
        />
        <button onClick={
          ()=>{
            delItem(id);
          }
        }>×</button>
      </div>
    )
  }

  render() {
    return this.state.isEditable ? this.editMode() : this.readOnly();
  }
}

export default TodoItem;