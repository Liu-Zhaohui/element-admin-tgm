<template>
  <div>
    <el-dialog :title="测试" :visible.sync="visable">
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'JsonDialog',
  props: {
      visiable: {
          type: Boolean,
          required: false
      }
  },
  created() {
    console.log('yeah')
    console.log(this.visiable)
  }
}
</script>
