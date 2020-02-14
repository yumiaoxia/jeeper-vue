<!--  -->
<template>
<div class="global">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{name:'globalConfig'}">全局配置</el-breadcrumb-item>
      <el-breadcrumb-item >其他配置</el-breadcrumb-item>
    </el-breadcrumb>
    <hr/>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="基本包">
            <el-input v-model="form.package"></el-input>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
data() {
return {
form:{
    package: ""

}
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
.el-form {
    width: 60%;
    margin: 20px auto;
}

</style>