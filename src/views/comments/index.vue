<template>
  <div>
    <header style="display: flex;">
      <div class="mb-2 flex items-center text-sm" style="display: flex;align-items: center">
        <el-radio-group v-model="radio1" class="ml-4">
          <el-radio label="1" size="large">未审核</el-radio>
          <el-radio label="2" size="large">已审核</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-left: 30px">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="起始时间"
          size="large"
        />
        <el-date-picker
          v-model="value2"
          type="date"
          placeholder="终止时间"
          size="large"
          style="margin-left: 10px"
        />
        <el-button type="primary" style="margin-left: 10px">筛选</el-button>
      </div>
    </header>
    <container>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="Id" width="40" />
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="user" label="User" width="90" />
        <el-table-column prop="comment" label="Comment"/>
        <el-table-column prop="user" label="User" width="120">
          <el-button type="success" circle>
            <el-icon>
              <Check />
            </el-icon>
          </el-button>
          <el-popconfirm title="确定禁止这条评论?">
            <template #reference>
              <el-button type="danger" circle>
                <el-icon>
                  <Close />
                </el-icon>
              </el-button>
            </template>
          </el-popconfirm>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="changePage.total"
        :page-size="10"
        @current-change="handleCurrentChange"
        v-model:currentPage="changePage.currentPage"
      />
    </container>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
  Check,
  Close
} from '@element-plus/icons-vue'

const radio1 = ref("1");
const value1 = ref("");
const value2 = ref("");

const tableData = [
  {
    id: '1',
    date: '2016-05-03',
    user: 'Tom',
    comment: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '2',
    date: '2016-05-02',
    user: 'Tom',
    comment: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '3',
    date: '2016-05-04',
    user: 'Tom',
    comment: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '4',
    date: '2016-05-01',
    user: 'Tom',
    comment: 'No. 189, Grove St, Los Angeles',
  },
]

const changePage = reactive({
  currentPage: 1, //默认当前页面为1
  total: Number(""), //总共有多少数据
});
//这里是获取当前页数
const handleCurrentChange = (val) => {
  changePage.currentPage = val;
  console.log(list[1]);
};
</script>

<style scoped>

</style>
