import menuList from "@/menu/menu.json"

const permission = {
  namespaced: true,
  state: {
    permission: []
  },
  getters: {
    getPermissionTree(state){
      return menuList;
    }
  }
}

export default permission;
