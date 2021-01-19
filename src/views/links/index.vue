<template>
  <div>
    <el-row :gutter="8" style="margin-left: 8px; margin-right: 8px">
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">ES</span>
            <span class="command">
              <!-- <el-link
                type="primary"
                href="https://wiki.amh-group.com/pages/viewpage.action?pageId=65916477"
                target="_blank"
                :underline="false"
              >使用查询<i class="el-icon-view el-icon--right" />
              </el-link> -->
              <router-link :to="'/command/command/view'">
                <div class="link-font">使用查询<i class="el-icon-view el-icon--right" />
                </div>
              </router-link>
            </span>
          </div>
          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">货源打标：</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="driver_es_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="driver_es_qa"
            >QA</el-button>
          </div>

          <div class="link-button">
            <!-- <div style="margin-left: 5px"> -->
            <span style="margin-right:90px">
              <el-tag type="info">司机行为：</el-tag></span>
            <!-- </div>                         -->
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="driver_es_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="driver_es_qa"
            >QA</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">牛顿</span>
            <span class="command">
              <el-link
                type="primary"
                :underline="false"
              >常用命令<i class="el-icon-view el-icon--right" />
              </el-link>
            </span>
          </div>
          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">kafka发送：</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="newton_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="newton_qa"
            >QA</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">中间件</span>
            <span class="command">
              <el-link
                type="primary"
                :underline="false"
              >常用命令<i class="el-icon-view el-icon--right" />
              </el-link>
            </span>
          </div>
          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">OWL:</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="owl_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="owl_qa"
            >QA</el-button>
            <el-button
              type="danger"
              plain
              placement="bottom"
              @click="owl_prd"
            >PRD</el-button>
          </div>

          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">网关:</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="gateway_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="gateway_qa"
            >QA</el-button>
            <el-button
              type="danger"
              plain
              placement="bottom"
              @click="gateway_prd"
            >PRD</el-button>

          </div>
          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">MQ:</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="mq_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="mq_qa"
            >QA</el-button>
            <el-button
              type="danger"
              plain
              placement="bottom"
              @click="mq_prd"
            >PRD</el-button>
          </div>

          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">JOB:</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="job_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="job_qa"
            >QA</el-button>
            <el-button
              type="danger"
              plain
              placement="bottom"
              @click="job_prd"
            >PRD</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col span="6">
        <el-card class="class-card" shadow="hover">
          <div class="title">
            <span class="name">常用</span>
            <span class="command">
              <el-link
                type="primary"
                :underline="false"
              >使用链接<i class="el-icon-view el-icon--right" />
              </el-link>
            </span>
          </div>
          <div class="link-button">
            <span style="margin-right:70px">
              <el-tag type="info">Hubble:</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="hubble_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="hubble_qa"
            >QA</el-button>
            <el-button
              type="danger"
              plain
              placement="bottom"
              @click="hubble_prd"
            >PRD</el-button>
          </div>

          <div class="link-button">
            <span style="margin-right:90px">
              <el-tag type="info">lion:</el-tag></span>
            <el-button
              type="success"
              plain
              placement="bottom"
              @click="lion_dev"
            >DEV</el-button>
            <el-button
              type="warning"
              plain
              placement="bottom"
              @click="lion_qa"
            >QA</el-button>
            <el-button
              type="danger"
              plain
              placement="bottom"
              @click="lion_prd"
            >PRD</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    mq_dev() {
      window.open('http://dev-rocketmq.amh-group.com/rocketmq-console/#/', '_blank')
    },
    mq_qa() {
      window.open('http://qa-rocketmq.amh-group.com/rocketmq-console/#/', '_blank')
    },
    mq_prd() {
      window.open('http://rocketmq.amh-group.com/rocketmq-console/#/', '_blank')
    },
    job_dev() {
      window.open('http://dev-ymmjob.amh-group.com/ymm-job/jobinfo', '_blank')
    },
    job_qa() {
      window.open('http://qa-ymmjob.amh-group.com/ymm-job/jobinfo', '_blank')
    },
    job_prd() {
      window.open('http://ymmjob.amh-group.com/ymm-job', '_blank')
    },
    gateway_dev() {
      window.open('http://dev-gateway.amh-group.com/#/developer/develope-tool', '_blank')
    },
    gateway_qa() {
      window.open('http://qa-gateway.amh-group.com/#/developer/develope-tool', '_blank')
    },
    gateway_prd() {
      window.open('http://gateway.amh-group.com/#/developer/develope-tool', '_blank')
    },
    owl_dev() {
      window.open('http://', '_blank')
    },
    owl_qa() {
      window.open('http://qa-owl.amh-group.com/sqlcheck/', '_blank')
    },
    owl_prd() {
      window.open('http://owl.amh-group.com/mysql_query/', '_blank')
    },
    lion_dev() {
      window.open('http://dev-lion.amh-group.com/lion/', '_blank')
    },
    lion_qa() {
      window.open('http://dev-lion.amh-group.com/lion/', '_blank')
    },
    lion_prd() {
      window.open('http://lion.amh-group.com/lion/', '_blank')
    },
    hubble_dev() {
      window.open('http://dev-hubble.amh-group.com/', '_blank')
    },
    hubble_qa() {
      window.open('http://qa-hubble.amh-group.com/', '_blank')
    },
    hubble_prd() {
      window.open('http://hubble.amh-group.com/', '_blank')
    },
    newton_dev() {
      window.open(
        'http://dev-boss.amh-group.com/panlong-meta-admin-vue/#/test/kafka/send',
        '_blank'
      )
    },
    newton_qa() {
      window.open(
        'http://qa-boss.amh-group.com/panlong-meta-admin-vue/#/test/kafka/send',
        '_blank'
      )
    },
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
      window.open(
        'https://wiki.amh-group.com/pages/viewpage.action?pageId=65916477',
        '_blank'
      )
    }
  }
}
</script>
>
<style lang="scss" scoped>
.class-row {
  margin-left: 16px;
  margin-right: 16px;
}
.class-card {
  height: 400px;
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
      .link-font {
        color: #1890ff;
        font-size: 14px;
      }
    }
  }

  .link-button {
    margin-top: 35px;
    float: right;
  }
}
</style>
