<template>
  <div>
    <el-row :gutter="8" style="margin-left: 8px; margin-right: 8px">
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">ES</span>
            <span class="command">
              <el-link type="primary" href="https://wiki.amh-group.com/pages/viewpage.action?pageId=65916477" target="_blank" :underline="false">使用查询<i class="el-icon-view el-icon--right" /> </el-link>
            </span>
          </div>
          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">货源打标：</el-tag></span>
            <el-button type="success" plain placement="bottom" @click="driver_es_dev">DEV环境</el-button>
            <el-button type="danger" plain placement="bottom" @click="driver_es_qa">QA环境</el-button>
          </div>

          <div class="link-button">
            <!-- <div style="margin-left: 5px"> -->
            <span style="margin-right:90px">
              <el-tag type="info">司机行为：</el-tag></span>
            <!-- </div>                         -->
            <el-button type="success" plain placement="bottom" @click="driver_es_dev">DEV环境</el-button>
            <el-button type="danger" plain placement="bottom" @click="driver_es_qa">QA环境</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">牛顿</span>
            <span class="command">
              <el-link type="primary" :underline="false">常用命令<i class="el-icon-view el-icon--right" /> </el-link>
            </span>
          </div>
          <div class="link-button">
            <el-button type="success" plain placement="bottom">测试环境</el-button>
            <el-button type="danger" plain placement="bottom">生产环境</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">DB</span>
            <span class="command">
              <el-link type="primary" :underline="false">常用命令<i class="el-icon-view el-icon--right" /> </el-link>
            </span>
          </div>
          <div class="link-button">
            <el-button type="success" plain placement="bottom">测试环境</el-button>
            <el-button type="danger" plain placement="bottom">生产环境</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">redis</span>
            <span class="command">
              <el-link type="primary" :underline="false">使用链接<i class="el-icon-view el-icon--right" /> </el-link>
            </span>
          </div>
          <div class="link-button">
            <el-button type="success" plain placement="bottom">测试环境</el-button>
            <el-button type="danger" plain placement="bottom">生产环境</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    driver_es_dev() {
      window.open('http://10.13.65.167:5601/app/kibana#/home?_g=()', '_blank')
    },
    driver_es_qa() {
      window.open(
        'http://10.100.2.223:5601/login?next=%2Fapp%2Fkibana#/dev_tools/console?_g=()',
        '_blank'
      )
    },
    driver_es_wiki() {
      window.open('https://wiki.amh-group.com/pages/viewpage.action?pageId=65916477', '_blank')
    }
  }
}
</script>>
<style lang="scss" scoped>
    .class-row {
        margin-left: 16px;
        margin-right: 16px;
    }
    .class-card {
        height: 250px;
        margin-top: 16px;
        .title {
            margin-top: 20px;
            .name {
                font-size: 24px;
                font-family: floor($number: 0);
                color: gray;
            }

            .command {
                float: right;
                margin-right: 0px;
            }
        }

        .link-button {
            margin-top: 35px;
            float:right;
        }
    }
</style>
