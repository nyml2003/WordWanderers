// 导入 axios
import axios from 'axios';

// 创建一个 axios 实例，用于发送请求
const apiClient = axios.create({
  // 设置后端 API 的基础 URL
  baseURL: "http://8.130.84.162:8180/api",
  // 设置请求头
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// 定义一个用于获取数据的函数
export default {
  Select_All_Blogs() {
    return apiClient.get('/SAB');
  },
  Select_Conditional_Blogs(title){
    return apiClient.post('/SCB',title);
  },
  isInputRight(name,password){
    return apiClient.post('/Login_Judge',{name,password});
  },
  SelectBlog(id){
    return apiClient.post('/SB',{id:id});
  },
  select_profile(id){
    return apiClient.post('/SP',{user_id:id});
  }
};
