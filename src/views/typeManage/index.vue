<template>
  <div>
    <div>
      <el-input
        v-model="input"
        class="w-50 m-2"
        placeholder="输入课程类型"
        clearable
        style="width: 30em"
      />
      <el-button type="primary">搜索</el-button>
      <el-button type="success" @click="dialogFormVisible=true">新建</el-button>
    </div>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" width="300">
        <el-button type="warning">更新</el-button>
        <el-button type="danger">删除</el-button>
        <el-button type="info">查看</el-button>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" title="新增课程管理员" @close="clean">
      <el-form :model="form" ref="addForm">
        <el-form-item label="管理员姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="管理员性别" :label-width="formLabelWidth" prop="gender">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" value="male" />
            <el-option label="女" value="female" />
          </el-select>
        </el-form-item>
        <el-form-item label="管理员电话" :label-width="formLabelWidth" prop="telephone">
          <el-input v-model="form.telephone" autocomplete="off" placeholder="请输入联系方式" />
        </el-form-item>
        <el-form-item label="管理员地址" :label-width="formLabelWidth" prop="place">
          <el-input v-model="form.place" autocomplete="off" placeholder="请输入地址" />
        </el-form-item>
        <el-form-item label="管理员描述" :label-width="formLabelWidth" prop="introduction">
          <el-input v-model="form.introduction" autocomplete="off" placeholder="请输入管理员介绍" />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </span>
      </template>
    </el-dialog>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="changePage.total"
      :page-size="10"
      @current-change="handleCurrentChange"
      v-model:currentPage="changePage.currentPage"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { reactive } from "vue";

const input = ref("")
const dialogFormVisible = ref(false)
const form = reactive({
  name:"",
  gender:"",
  telephone:"",
  place:"",
  introduction:""
})
const formLabelWidth = '100px'

//清空表格
const addForm = ref()
const clean=()=>{
  addForm.value.resetFields()
}

const changePage = reactive({
  currentPage: 1, //默认当前页面为1
  total: Number(""), //总共有多少数据
});
//这里是获取当前页数
const handleCurrentChange = (val) => {
  changePage.currentPage = val;
  console.log(list[1]);
};


const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "弄",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

</script>

<style scoped>

</style>
