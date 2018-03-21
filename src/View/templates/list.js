import React, {Component} from 'react';
import ListItem from './list-item';

class List extends Component {
  static get defaultProps() {
    return {
      bookList:[],
      toggleItemList:()=>{},
      editItemList:()=>{},
      delItemList:()=>{}
    }
  }

  render() {
    const {
      bookList,
      toggleItemList,
      editItemList,
      delItemList
    } = this.props;

    return (
      <ul>
        {
          bookList.map((item)=>{
            return(
              <li key={item.id}>
                <ListItem
                  id={item.id}
                  content={item.content}
                  checked={item.checked}
                  toggleItem={
                    (id)=>{
                      toggleItemList(id);
                    }
                  }
                  editItem={
                    (id, val)=>{
                      editItemList(id, val);
                    }
                  }
                  delItem={
                    (id)=>{
                      delItemList(id);
                    }
                  }
                />
              </li>
            );
          })
        }
      </ul>
    )
  }
}

export default List;