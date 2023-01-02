<template>
  <div>
    <div style="padding-bottom: 10px">
      <el-input
        v-model="input"
        class="w-50 m-2"
        placeholder="输入课程名"
        clearable
        style="width: 30em"
      />
      <el-button type="primary">搜索</el-button>
    </div>
    <div :model="course">
      <el-button type="success">新建章节</el-button>
      <el-button type="info">全选</el-button>
      <ul style="list-style: none;padding: 0">
        <li v-for="item in course">
          <div style="padding: 10px;display: flex;justify-content: space-between" @click="">
            <div style="display: flex;align-items: center">
              <span style="margin-right: 5px">第{{ item.id }}章</span>
              <span>{{ item.title }}</span>
            </div>
            <div>
              <el-button @click="setId(item)">文件</el-button>
              <el-button style="background-color: red;color: white">删除</el-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
<!--    TODO dialog怎么渲染-->
    <el-dialog
      v-model="dialogVisible"
      title="章节资料如下"
      width="30%"
    >
      <span>{{ materials[courseId] }}</span>
      <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="dialogVisible = false">
                    Confirm
                  </el-button>
                </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onUpdated, reactive, ref } from "vue";

const dialogVisible = ref(false);

const materials = ref([
  [
    "资料1",
    "资料2",
    "资料3",
  ],
  [
    "资料4",
    "资料5",
    "资料6",
  ],
  [
    "资料7",
    "资料8",
    "资料9",
  ],
  [
    "资料10",
    "资料11",
    "资料12",
  ],
]);
let courseId = ref(null);
async function setId(item) {
  console.log(item);
  courseId =item.id;
  this.dialogVisible=true
  console.log(courseId)
  console.log("ok")
};

const input = ref("");
const course = reactive([
  {
    id: "1",
    title: "第一章",
  },
  {
    id: "2",
    title: "第二章",
  },
  {
    id: "3",
    title: "第三章",
  },
  {
    id: "4",
    title: "第四章",
  },
]);

</script>

<style scoped>

</style>
