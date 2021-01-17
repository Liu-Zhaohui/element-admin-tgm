<template>
  <div class="components-container">
    <aside>Json-Editor is base on <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a>. Lint
      base on <a
        href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js"
        target="_blank"
      >json-lint</a>.</aside>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value" />
    </div>
    <aside>Json-Editor is base on <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a>. Lint
      base on <a
        href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js"
        target="_blank"
      >json-lint</a>.</aside>
    <div class="editor-container1">
      <json-editor ref="JsonEditor" v-model="value1" />
    </div>
  </div>

</template>

<script>
import JsonEditor from '@/components/JsonEditor'

const jsonData = '{"shipperid":98562411115,"data":{"driverid":985452122}}'
const jsonData1 = '[{"abc":123}]'
export default {
  name: 'JsonEditorDemo',
  name1: 'JsonEditorDemo1',
  components: { JsonEditor },
  data() {
    return {
      value: JSON.parse(jsonData),
      value1: JSON.parse(jsonData1)
    }
  }
}
</script>

<style scoped>
.editor-container{
  position: relative;
  height: 100%;
}
.editor-container1{
  background-color: aliceblue;
  position: relative;
  height: 100%;
}
</style>

