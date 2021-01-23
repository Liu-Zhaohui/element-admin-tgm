<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="Title" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.importance" placeholder="Imp" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="listQuery.type" placeholder="Type" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key" />
      </el-select>
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleadd">
        添加
      </el-button>
      <!-- <el-button  :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button> -->
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        reviewer
      </el-checkbox>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="功能描述" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="tag" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-tag style="margin-left:50px">{{ row.type }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="更新时间" width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            查看
          </el-button>
          <el-button type="primary" size="mini" @click="handleEdit(row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <!-- <json-dialog :visiable="dialogFormVisible" /> -->

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" style="height: 2000px">
      <!-- <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item label="Type" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>
        <el-form-item label="Date" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        <el-form-item label="Title" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="Status">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="Imp">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;" />
        </el-form-item>
        <el-form-item label="Remark">
          <el-input v-model="temp.remark" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="Please input" />
        </el-form-item>
      </el-form> -->
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          Confirm
        </el-button>
      </div> -->
      <vue-json-editor
        v-model="resultInfo"
        :show-btns="false"
        :mode="'code'"
        lang="zh"
        @json-change="onJsonChange"
        @json-save="onJsonSave"
      />
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>
      </span>
    </el-dialog>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisibleedit">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="150px" style="width: 700px; margin-left:50px;">
        <el-form-item label="更新描述" prop="title">
          <el-input v-model="temp.title" 请输入要更新的描述... />
        </el-form-item>
        <el-form-item label="更新内容">
          <el-input v-model="temp.remark" :autosize="{ minRows: 6, maxRows: 200}" type="textarea" placeholder="请输入要更新的内容..." />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleedit = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():editData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisibleadd">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="150px" style="width: 700px; margin-left:50px;">
        <el-form-item label="添加描述" prop="addtitle">
          <el-input v-model="temp.title" placeholder="请添加描述..." />
        </el-form-item>
        <el-form-item label="添加内容">
          <el-input v-model="temp.addremark" :autosize="{ minRows: 6, maxRows: 200}" type="textarea" placeholder="请添加内容..." />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleadd = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createaddData():editData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { fetchPv, createArticle, updateArticle } from '@/api/article'
import { esList } from '@/api/es'
import { desId } from '@/api/es'
import { edit } from '@/api/es'
// import JsonDialog from './components/json-dialog'
// import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import vueJsonEditor from 'vue-json-editor'

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination, vueJsonEditor },
  // directives: {
  //   JsonDialog waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      result: [
        {
          id: 1,
          data: {
            userId: '1111111129ac7325-30da-4e6a-8a00-9699820fc04a',
            realName: '小雪18',
            gradeCode: '166',
            provinceCode: '110000',
            cityCode: {
              test1: 'test1',
              test2: 'test2'
            },
            schoolId: 21,
            schoolLevel: 1,
            schoolName: '北京第二实验小学朝阳学校'
          }

        },
        {
          id: 2,
          data: {
            userId: '1111111129ac7325-30da-4e6a-8a00-9699820fc04b',
            realName: '小雪19',
            gradeCode: '166',
            provinceCode: '110000',
            cityCode: {
              test1: 'test1',
              test2: 'test2'
            },
            schoolId: 21,
            schoolLevel: 1,
            schoolName: '北京第二实验小学朝阳学校'
          }
        }],
      resultInfo: undefined,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: undefined,
        limit: undefined,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      listIdQuery: undefined,
      editrow: undefined,
      editIdQuery: undefined,
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogFormVisibleedit: false,
      dialogFormVisibleadd: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleadd() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisibleadd = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    getList() {
      this.listLoading = false
      esList(this.listQuery).then(response => {
        this.list = response
        console.log(this.list)
      })
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //   console.log('list')
      //   console.log(this.list)

      //   // Just to simulate the time of the request
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, 1.5 * 1000)
      // })
    },
    onJsonChange() { console.log('123') },
    onJsonSave() { console.log('123') },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleEdit(editrow) {
      this.editrow = editrow
      console.log(this.editrow.id)
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisibleedit = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      // id = this.editrow.id
      // console.log(this.editrow.id)
      console.log('createdata')
      console.log(this.temp)
      this.editIdQuery = {
        'id': this.editrow.id,
        'title': this.temp.title,
        'content': this.temp.remark
      }

      edit(this.editIdQuery).then(response => {
        console.log(response)
        this.editresult = response
        console.log(this.editresult)
        this.$notify({
          title: 'Success',
          message: 'Update Successfully',
          type: 'success',
          duration: 2000 })
        this.dialogFormVisibleedit = false
        // 强刷当前页面
        location.reload()
      })
    },
    handleUpdate(row) {
      this.listIdQuery = {
        'id': row.id
      }
      console.log(this.listIdQuery)

      desId(this.listIdQuery).then(response => {
        console.log(response)
        this.resultInfo = response
        console.log(this.resultInfo)
        this.dialogFormVisible = true
      })

      // console.log(this.dialogFormVisible)
    },
    editData() {
      console.log('this')
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          console.log('zheli')
          const tempData = Object.assign({}, this.temp)
          console.log(tempData)
          // tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          // updateArticle(tempData).then(() => {
          //   const index = this.list.findIndex(v => v.id === this.temp.id)
          //   this.list.splice(index, 1, this.temp)
          //   this.dialogFormVisible = false
          this.$notify({
            title: 'Success',
            message: 'Update Successfully',
            type: 'success',
            duration: 2000
            // })
          })
        }
      })
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>
