<template>
    <div>
        无跨域情求用户列表
        <table class="stu">
            <caption>学生成绩表</caption>
            <tr class="stu-th">
                <th v-for="(t,index) in title" :key="index">{{t}}</th>
            </tr>
            <tr v-for="(row,index) in userList.students" :key="index">
                 <td>{{row.name}}</td>
                <td>{{row.sex}}</td>
                <td>{{row.age}}</td>
                <td>{{row.Chinese}}</td>
                <td>{{row.Math}}</td>
                <td>{{row.English}}</td>
                <td>{{row.TotalPoint}}</td>       
             </tr>
        </table>
        <table class="che">
            <caption>教师执教班级</caption>
            <tr class="che-th">
               <th v-for="(c,index) in teacher" :key="index">{{c}}</th>
            </tr>
            <tr v-for="(rows,index) in userList.teacher" :key="index">
                <td>{{rows.name}}</td>
                <td>{{rows.class}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
                userList:[],
                title:['姓名','性别','年龄','语文','数学','英语','总分'],
                teacher:['教师姓名','班级']
        }
    },
    mounted(){
        this.$http.get('api/userList').then(res=>{
           this.userList = res.data.data;
        }).catch(err=>{
            console.log(err)
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
