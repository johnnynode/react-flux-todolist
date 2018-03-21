class Utils {
  // trim 函数
  trim(str) {
    return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
  }

  // toggle 特定一项
  toggleItemList(data, id) {
    let newData = [...data]; // copy data
    let target = newData.find((item) => {
      return item.id === id;
    });
    target.checked = !target.checked;
    return newData;
  }

  // 删除特定一项
  delItemList(data, id) {
    let newData = [...data];
    let index = newData.findIndex((item) => {
      return item.id === id;
    });

    // 按照索引进行删除
    (index !== -1) && newData.splice(index, 1);
    return newData;
  }

  // 新增代办事项
  createItem (data, val) {
    let newData = [...data];
    let index = newData.length ? newData[newData.length -1].id - 0 + 1 : 1;
    let json = {
      id:index,
      content:val,
      checked:false
    };
    newData.push(json);
    return newData;
  }

  // 编辑列表
  editItemList (data, id, content) {
    let newData = [...data];
    let target = newData.find((item)=> {
      return item.id === id;
    });
    target.content = content;
    return newData;
  }
}

export default new Utils();