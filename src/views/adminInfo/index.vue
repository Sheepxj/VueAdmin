<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="系统管理员" name="first">
      <div style="display: flex;justify-content: space-between;align-items: center;padding: 0 15em">
        <div style="display: flex;justify-content: center;align-items: center;">
          <el-tag class="ml-2" type="success" size="large" style="height: 3.5em;align-items: center;display: flex">
            搜索管理员
          </el-tag>
          <el-input
            v-model="input4"
            class="w-50 m-2"
            placeholder="输入姓名"
            clearable
            style="width: 30em"

          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <search />
              </el-icon>
            </template>
          </el-input>
        </div>
        <el-button type="primary">
          立即搜索
        </el-button>
      </div>
      <!--      TODO 新增 删除 查询按钮-->
      <ul style="list-style: none;padding: 0">
        <li v-for="item in this.$store.state.admin">
          <el-descriptions
            class="margin-top"
            :column="3"
            :size="size"
            border
          >
            <el-descriptions-item width="10em">
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <user />
                  </el-icon>
                  Username
                </div>
              </template>
              {{ item.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <iphone />
                  </el-icon>
                  Telephone
                </div>
              </template>
              {{ item.telephone }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <location />
                  </el-icon>
                  Place
                </div>
              </template>
              {{ item.place }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <tickets />
                  </el-icon>
                  Remarks
                </div>
              </template>
              <el-tag size="small">
                {{ item.remarks }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item width="20em">
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <office-building />
                  </el-icon>
                  Address
                </div>
              </template>
              {{ item.introduction }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">

                  <el-icon :style="iconStyle">
                    <Edit />
                  </el-icon>
                  操作
                </div>
              </template>
              <el-button type="warning" size="small">更改</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </el-descriptions-item>
          </el-descriptions>
        </li>
      </ul>
      <!--分页插件-->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="changePage.total"
        :page-size="4"
        hide-on-single-page
        @current-change="handleCurrentChange"
        v-model:currentPage="changePage.currentPage"
      />
    </el-tab-pane>

    <el-tab-pane label="课程管理员" name="second">
      <div style="display: flex;justify-content: space-between;align-items: center;padding: 0 15em">
        <div style="display: flex;justify-content: center;align-items: center;">
          <el-tag class="ml-2" type="success" size="large" style="height: 3.5em;align-items: center;display: flex">
            搜索管理员
          </el-tag>
          <el-input
            v-model="input4"
            class="w-50 m-2"
            placeholder="输入姓名"
            clearable
            style="width: 30em"
          >
            <template #prefix>
              <el-icon class="el-input__icon">
                <search />
              </el-icon>
            </template>
          </el-input>
          <el-button type="primary">
            立即搜索
          </el-button>
        </div>
        <el-button type="success" @click="dialogFormVisible = true">
          新建
        </el-button>
      </div>

      <ul style="list-style: none;padding: 0">
        <li v-for="item in this.$store.state.admin">
          <el-descriptions
            class="margin-top"
            :column="3"
            :size="size"
            border
          >
            <el-descriptions-item width="10em">
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <user />
                  </el-icon>
                  Username
                </div>
              </template>
              {{ item.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <iphone />
                  </el-icon>
                  Telephone
                </div>
              </template>
              {{ item.telephone }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <location />
                  </el-icon>
                  Place
                </div>
              </template>
              {{ item.place }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <tickets />
                  </el-icon>
                  Remarks
                </div>
              </template>
              <el-tag size="small">
                {{ item.remarks }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item width="20em">
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <office-building />
                  </el-icon>
                  Address
                </div>
              </template>
              {{ item.introduction }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">

                  <el-icon :style="iconStyle">
                    <Edit />
                  </el-icon>
                  操作
                </div>
              </template>
              <el-button type="warning" size="small">更改</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <div class="cell-item">
                  <el-icon :style="iconStyle">
                    <office-building />
                  </el-icon>
                  创建者
                </div>
              </template>
              小金
            </el-descriptions-item>
          </el-descriptions>
        </li>
      </ul>
<!--      TODO 连接需要修改分页插件-->
      <el-pagination
        background
        layout="prev, pager, next"
        :total="changePage.total"
        :page-size="4"
        hide-on-single-page
        @current-change="handleCurrentChange"
        v-model:currentPage="changePage.currentPage"
      />

      <el-dialog v-model="dialogFormVisible" title="新增课程管理员">
        <el-form :model="form">
          <el-form-item label="管理员姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="管理员性别" :label-width="formLabelWidth">
            <el-select v-model="form.gender" placeholder="请选择性别">
              <el-option label="男" value="male" />
              <el-option label="女" value="female" />
            </el-select>
          </el-form-item>
          <el-form-item label="管理员电话" :label-width="formLabelWidth">
            <el-input v-model="form.telephone" autocomplete="off" placeholder="请输入联系方式" />
          </el-form-item>
          <el-form-item label="管理员地址" :label-width="formLabelWidth">
            <el-input v-model="form.place" autocomplete="off" placeholder="请输入地址" />
          </el-form-item>
          <el-form-item label="管理员描述" :label-width="formLabelWidth">
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
    </el-tab-pane>
  </el-tabs>

</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
  Edit,
  Search,
} from "@element-plus/icons-vue";
import type { TabsPaneContext } from "element-plus";
import store from "/src/store";
import { reactive } from "vue";

const input4 = ref("");
let list = ref([]);

const dialogFormVisible = ref(false)
const formLabelWidth = '100px'
const form = reactive({
  name:"",
  gender:"",
  telephone:"",
  place:"",
  introduction:""
})

const size = ref("");
const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px",
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  };
});
const blockMargin = computed(() => {
  const marginMap = {
    large: "32px",
    default: "28px",
    small: "24px",
  };
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  };
});

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

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
.el-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
