<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>Jeeper —— Java 项目代码管理平台</h1>
      </el-header>
      <el-container>
      <el-aside>
        <el-menu default-active="0">
          <router-link v-for="(item,index) in menus" :key="index" :to="{name:item.name}" tag="div">
              <el-menu-item index="0">{{item.display}}</el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view>

        </router-view>
      </el-main>
      </el-container>
      
    </el-container>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'app',
  data: function(){
    return{
      menus: [
        {
          name: "globalConfig",
          display: "全局配置"
        },
        {
          name: "packageConfig",
          display: "子包设置"
        }
      ]
    }
  },
  router
  
}
</script>

<style scoped>
.el-header {
  height: auto!important;
  background-color: #000;
  padding: 0 20px;
  color: #FFF;
}

.el-header h1 {
  margin: 0;
  line-height: 80px;
}

.el-menu {
  background-color: #0e6892;
}

.el-menu-item {
  color: #FFF;
  text-align: center;
  font-weight: bolder;
  font-size: 1.2em;
}

.el-menu-item:hover {
  background-color: #376aad;
}

.el-menu-item:focus {
background-color: #376aad;
}

</style>
