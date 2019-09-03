<template>
    <!-- <img src="./assets/logo.png"> -->
    <div id='app' class="layout" >
      <div v-if="$route.meta.keepAlive">
        <Layout>
          <Header>
              <Menu mode="horizontal" theme="dark" active-name="1">
                  <div class="layout-logo"></div>
                  <div class="layout-nav" on-select="handleSelect()">
                      <MenuItem name="1" @select="handleSelect">
                          <Icon type="ios-navigate"></Icon>
                          Item 1
                      </MenuItem>
                      <MenuItem name="2">
                          <Icon type="ios-keypad"></Icon>
                          Item 2
                      </MenuItem>
                      <MenuItem name="3">
                          <Icon type="ios-analytics"></Icon>
                          Item 3
                      </MenuItem>
                      <MenuItem name="4">
                          <Icon type="ios-paper"></Icon>
                          Item 4
                      </MenuItem>
                  </div>
              </Menu>
          </Header>
          <Layout>
              <Sider hide-trigger :style="{background: '#fff'}">
                  <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="handleSelect">
                      <Submenu name="1">
                          <template slot="title">
                              <Icon type="ios-navigate"></Icon>
                              Item 1
                          </template>
                          <MenuItem name="1-1">学生管理系统Demo</MenuItem>
                          <MenuItem name="1-2">聊天室Demo</MenuItem>
                          <MenuItem name="1-3">Option 3</MenuItem>
                      </Submenu>
                      <Submenu name="2">
                          <template slot="title">
                              <Icon type="ios-keypad"></Icon>
                              Item 2
                          </template>
                          <MenuItem name="2-1">Option 1</MenuItem>
                          <MenuItem name="2-2">Option 2</MenuItem>
                      </Submenu>
                      <Submenu name="3">
                          <template slot="title">
                              <Icon type="ios-analytics"></Icon>
                              Item 3
                          </template>
                          <MenuItem name="3-1">Option 1</MenuItem>
                          <MenuItem name="3-2">Option 2</MenuItem>
                      </Submenu>
                  </Menu>
              </Sider>
              <Layout :style="{padding: '0 24px 24px'}">
                  <Breadcrumb :style="{margin: '24px 0'}">
                      <BreadcrumbItem>Home</BreadcrumbItem>
                      <BreadcrumbItem>Components</BreadcrumbItem>
                      <BreadcrumbItem>Layout</BreadcrumbItem>
                  </Breadcrumb>
                  <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                      <router-view></router-view>
                  </Content>
              </Layout>
          </Layout>
        </Layout>
      </div>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Router from 'vue-router'
import login from '@/components/login'
export default {
  name: 'App',
  data(){
    return {
      theme1: 'light',
    }
  },
  methods: {
    func(){
      console.log("tete");
    },
     handleSelect(name){
        switch(name){
          case '1-1':
            this.$router.push('/test')
            // this.breadcrumbItems  = ['导航一']
            break;
          case '1-2':
            this.$router.push('/pageRoom')
            this.breadcrumbItems  = ['导航二']
            break;
          case '3':
            this.$router.push('/Page3')
            this.breadcrumbItems  = ['导航三']
            break;
        }
      },
  }
}

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
