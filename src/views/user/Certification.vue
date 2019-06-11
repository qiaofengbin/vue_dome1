<template>
    <div>
        跨域请求数据 用户审核
         <table class="stu">
            <tr class="stu-th">
                <th v-for="(t,index) in title" :key="index">{{t}}</th>
            </tr>
            <tr v-for="(row,index) in data" :key="index">
                 <td>{{row.name}}</td>
                <td>{{row.date}}</td>
                <td>{{row.address}}</td>      
             </tr>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            data:[],
            title:['姓名','时间','地址'],
        }
    },
    mounted(){
        axios.get('/api/getJson',{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res=>{
            if(res.status==200){
                this.data = res.data;
            }
        })
    }
}
</script>
<style lang="less" scoped>
.stu,.che{
    width: 700px;
    border: 2px solid black;
    .stu-th,.che-th{
        background: rgb(0,136,225);
    }
    tr{
        text-align: center;
    }
}
</style>