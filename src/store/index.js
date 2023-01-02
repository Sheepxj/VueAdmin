import { createStore } from "vuex";
import getters from "./getters";
import skin from "./modules/skin";
import user from "./modules/user";

export default createStore({
  state: {
    admin: [
      {
        name:"小李",
        telephone:"11200000000",
        place:"昆明",
        remarks:"最高管理员",
        introduction:"小李是个男孩子",
      },
      {
        name:"小金",
        telephone:"11241866814",
        place:"昆明",
        remarks:"最高管理员",
        introduction:"小金也是个管理员啊",
      },
      // {
      //   name:"小胡",
      //   telephone:"11274125896",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小胡是个很帅气的女孩子",
      // },
      // {
      //   name:"小蔡",
      //   telephone:"11266996699",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小蔡是个妹子吧看起来",
      // },
      // {
      //   name:"小林",
      //   telephone:"11299445562",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小林简直是个大帅哥好吧",
      // },
      // {
      //   name:"小陈",
      //   telephone:"11211223344",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小陈拿了很多奖状",
      // },
      // {
      //   name:"小杜",
      //   telephone:"11288881111",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小杜看起来不太聪明的样子",
      // },
      // {
      //   name:"小敏",
      //   telephone:"11222227777",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小敏长得很漂亮",
      // },
      // {
      //   name:"小明",
      //   telephone:"11244445555",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小明是个大帅哥",
      // },
      // {
      //   name:"小张",
      //   telephone:"11299998888",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小张不太聪明的样子",
      // },
      // {
      //   name:"小谢",
      //   telephone:"11266665555",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小谢是个大美女",
      // },
      // {
      //   name:"小王",
      //   telephone:"11211111111",
      //   place:"昆明",
      //   remarks:"系统管理员",
      //   introduction:"小王是个小帅哥",
      // }
    ]
  },
  modules: {
    skin,
    user,
  },
  getters,
});
