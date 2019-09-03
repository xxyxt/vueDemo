<template>
  <div>

    <label>学号:</label>
    <input type="text" placeholder="请输入要查询的学号" v-model="queryid">
    <label>姓名:</label>
    <input type="text" placeholder="请输入要查询的姓名" v-model="queryname">
    <input class="btn btn-primary radius" type="button" value="查询" @click="query()">
    <br/>
    <label>学号:</label>
    <input type="number" placeholder="请输入要增加的学号" v-model="addid">
    <label>姓名:</label>
    <input type="text" placeholder="请输入要增加的姓名" v-model="addname">
    <input class="btn btn-primary radius" type="button" value="增加" @click="insert()">
    <table class="table table-border table-bg table-bordered">
      <thead>
        <tr >
          <th width="100%" colspan="3">学生名单</th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th width="20%">学号</th>
          <th width="20%">姓名</th>
          <th width="60%">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr class="active" v-for="item in slist" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td><a href="javascript:;" @click="showOverlay(item.id)">修改</a> | <a href="javascript:;" @click="del(item)">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { Button, Table } from 'iview';
export default {
  data(){
    return {
      queryid: '',
      queryname: '',
      addid: '',
      addname: '',
      slist:[],
    }
  },
  methods:{
    showOverlay() {

    },
    init(){
      this.$axios({
      method: 'post',
      url: '/student/query',
      }).then(response=>{  
        this.slist = JSON.parse(JSON.stringify(response.data));
        console.log(this.slist);
      }).catch(function(err){
          console.log(err);
      })
    },
    query(){
      if(this.queryid !== '' && this.queryname !== ''){
        this.$axios.post('/student/query3',{
          id: this.queryid,
          name: this.queryname
        }).then(response=>{
            this.slist = JSON.parse(JSON.stringify(response.data));
            console.log(this.slist);
          }).catch(function(err){
              console.log(err);
          })
      }else if(this.queryname!==''){
        this.$axios.post('/student/query2',{
          id: this.queryid,
          name: this.queryname
        }).then(response=>{
            this.slist = JSON.parse(JSON.stringify(response.data));
            console.log(this.slist);
          }).catch(function(err){
              console.log(err);
          })
      }else if(this.queryid !== '' ){
        this.$axios.post('/student/query1',{
          id: this.queryid,
          name: this.queryname
        }).then(response=>{
            this.slist = JSON.parse(JSON.stringify(response.data));
            console.log(this.slist);
          }).catch(function(err){
              console.log(err);
          })
      }else {
        this.init();
      }
    },
    insert(){
      if(this.addid !== '' && this.addname !== ''){
        this.$axios.post('/student/insert',{
          id: this.addid,
          name:this.addname
        }).then(response=>{
          this.init();
          console.log(response);
          }).catch(function(err){
              console.log(err);
          })
      }
    },
    del(item){
      this.slist.forEach((element,index) => {
        if(element.id === item.id){
          
          this.slist.splice(index,1);
          this.$axios.post('/student/delete',{
            id: element.id,
            name: element.name
          })
        }
      });
    },
  },
  mounted(){
    this.init();
  },
    
}
</script>
<style>
/*按钮*/
.btn{display:inline-block;
cursor:pointer;
text-align:center; 
font-weight:400;
white-space:nowrap;
vertical-align: middle;
*zoom:1;
}
.btn-primary{color:#fff;background-color:#5a98de; border-color:#5a98de}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active{color:#fff;background-color:#6aa2e0;border-color:#6aa2e0}
/*默认table*/
table{width:100%;empty-cells:show;background-color:transparent;border-collapse:collapse;border-spacing:0;align-self:center;}
table th{text-align:center; font-weight:400}
/*带水平线*/
.table th{font-weight:bold}
.table th,.table td{padding:8px;line-height:20px}
.table td{text-align:center}
.table tbody tr.success > td{background-color:#dff0d8}
.table tbody tr.error > td{background-color:#f2dede}
.table tbody tr.warning > td{background-color:#fcf8e3}
.table tbody tr.info > td{background-color:#d9edf7}
.table tbody + tbody{border-top:2px solid #ddd}
.table .table{background-color:#fff}
 
/*带横向分割线*/
.table-border{border-top:1px solid #ddd}
.table-border th,.table-border td{border-bottom:1px solid #ddd}
 
/*th带背景*/
.table-bg thead th{background-color:#F5FAFE}
/*带外边框*/
.table-bordered{border:1px solid #ddd;border-collapse:separate;*border-collapse:collapse;border-left:0}
.table-bordered th,.table-bordered td{border-left:1px solid #ddd}
.table-border.table-bordered{border-bottom:0}
 
/*奇数行背景设为浅灰色*/
.table-striped tbody > tr:nth-child(odd) > td,.table-striped tbody > tr:nth-child(odd) > th{background-color:#f9f9f9}
/*竖直方向padding缩减一半*/
.table-condensed th,.table-condensed td{padding:4px 5px}
/*鼠标悬停样式*/
.table-hover tbody tr:hover td,.table-hover tbody tr:hover th{background-color: #f5f5f5}
/*定义颜色*/
/*悬停在行*/
.table tbody tr.active,.table tbody tr.active>td,.table tbody tr.active>th,.table tbody tr .active{background-color:#F5F5F5!important}
/*成功或积极*/
.table tbody tr.success,.table tbody tr.success>td,.table tbody tr.success>th,.table tbody tr .success{background-color:#DFF0D8!important}
 
/*警告或出错*/
.table tbody tr.warning,.table tbody tr.warning>td,.table tbody tr.warning>th,.table tbody tr .warning{background-color:#FCF8E3!important}
/*危险*/
.table tbody tr.danger,.table tbody tr.danger>td,.table tbody tr.danger>th,.table tbody tr .danger{background-color:#F2DEDE!important}
 
/*表格文字对齐方式，默认是居左对齐*/
.table .text-c th,.table .text-c td{text-align:center}/*整行居中*/
.table .text-r th,.table .text-r td{text-align:right}/*整行居右*/
.table th.text-l,.table td.text-l{text-align:left!important}/*单独列居左*/
.table th.text-c,.table td.text-c{text-align:center!important}/*单独列居中*/
.table th.text-r,.table td.text-r{text-align:right!important}/*单独列居右*/
 

</style>
