

export const columns = {
  ProductSku: {
    label: '产品SKU',
    form: {
      type: 'input', // input textarea radio select date dateRange
      label: '产品SKU', // 重写外部的label
      labelWidth: '80px', // 表单的宽度
      style: {
        width: '140px',
      },
      componentProps: {
        placeholder:'输入产品Sku'
      },
      options: [] // 针对radio select有效
    },
  },
  CreateDate: {
    label: '创建时间',
    form: {
      labelWidth: '80px', // 表单的宽度
      type: 'dateRange',
      // labelWidth: '200px', // 表单的宽度
      style: {
        backgroud: 'red'
      },
      componentProps: {
      },
      options: []
    },
  },
  selectKey: {
    label: '下拉列表',
    form: {
      type: 'select',
      labelWidth: '80px', // 表单的宽度
      style: {
        width:'120px'
      },
      componentProps: {
        placeholder:'选择',
        clearable:true,
      },
      options: [{
        label:'下拉选项1',
        value:'1'
      },{
        label:'下拉选项2',
        value:'2'
      }]
    },
  },
  myRadio:{
    label:'选择',
    form:{
      type:'radio',
      labelWidth: '50px', // 表单的宽度
      style: {
        width:'160px'
      },
      options: [{
        label:'afasf',
        value:1
      },{
        label:'sdhhf',
        value:2
      }]
    }
  }
  // ProductSku: {
  //   label: '产品SKU',
  //   form: {
  //     type: 'input', // input textarea radio select date dateRange
  //     label: '产品SKU', // 重写外部的label
  //     labelWidth: '200px', // 表单的宽度
  //     style: {
  //       backgroud: 'red'
  //     },
  //     componentProps: {
  //       disabled: true
  //     },
  //     options: []
  //   },
  // },
  // myName: {
  //   label: '我的名字',  // 列表头或表单显示的文字
  //   form: {
  //     type: 'input', // input textarea radio select date dateRange
  //     lable: 'fads', // 重写外部的label
  //     lableWidth: '100px', // 表单的宽度
  //     style: {},
  //     componentProps: {},
  //     options: []
  //   },
  //   table: {
  //     lable: 'fads', // 重写外部的label
  //     lableWidth: '100px',  // 表格的宽度
  //     componentProps: {},
  //     render: {
  //       type: 'image',
  //       width: '30px',
  //       height: '30px'
  //     },
  //     formatter: (data) => {
  //       return data
  //     }
  //   }
  // }
}

