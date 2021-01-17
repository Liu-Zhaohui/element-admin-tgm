<template>
    <div>
        <el-row :gutter="8" style="margin-left: 8px; margin-right: 8px">
            <el-col span="6">
                <el-card class="class-card" shadow="hover">
                    <div class="title">
                        <span class="name">ES</span>
                        <span class="command">
                            <el-link type="primary" :underline="false">常用命令<i class="el-icon-view el-icon--right"></i> </el-link>
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
                        <span class="name">牛顿</span>
                        <span class="command">
                            <el-link type="primary" :underline="false">常用命令<i class="el-icon-view el-icon--right"></i> </el-link>
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
                            <el-link type="primary" :underline="false">常用命令<i class="el-icon-view el-icon--right"></i> </el-link>
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
                            <el-link type="primary" :underline="false">常用命令<i class="el-icon-view el-icon--right"></i> </el-link>
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
    
}
</script>>
<style lang="scss" scoped>
    .class-row {
        margin-left: 16px;
        margin-right: 16px;
    }
    .class-card {
        height: 200px;
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
            margin-top: 70px;
            float:right;
        }
    }
</style>
