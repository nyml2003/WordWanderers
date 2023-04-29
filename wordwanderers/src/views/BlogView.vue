<template>
    <h1>"你好"</h1>
    <div>
        <div class="block">
            <el-timeline>
                <el-timeline-item timestamp="2022-12-31" placement="top" v-for="(blog, index) in [{id: 1, title: 'Test Blog 1', description: 'This is a test blog post.'}, {id: 2, title: 'Test Blog 2', description: 'Another test blog post.'}]" :key="index">
                    <el-card>
                      <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
                        <h4>{{blog.title}}</h4>
                    </router-link>
                    <p>{{blog.description}}</p>
                </el-card>
                </el-timeline-item>
            </el-timeline>

            <!-- <el-timeline>
                <el-timeline-item :timestamp="blog.created" placement="top" v-for="blog in blogs" :key="blog.id">
                    <el-card>
                        <router-link :to="{name:'BlogDetail',params:{blogId:blog.id}}">
                            <h4>{{blog.title}}</h4>
                        </router-link>
                        <p>{{blog.description}}</p>
                    </el-card>
                </el-timeline-item> 
            </el-timeline> -->
            
        </div>
    </div>
</template>
 
<script>
 
    //导入公共的Header
    export default {
        name: "BlogView",
        //将Header注册进去
        //返回的数据
        data() {
            return {
                currentPage: 1,  //当前页
                total: 2,    //总共多少页
                pageSize: 5  //每一页的数据个数
            }
        },
        mounted() {
        },
        methods: {
            //请求指定页的方法
            page(currentPage) {
                const _this = this;
                _this.$axios.get("/blogs?currentPage=" + currentPage,{
                    headers: {
                        "authorization": localStorage.getItem("token")
                    }
                }).then(res => {
                    console.log(res)
                    //从获取到的数据中进行赋值
                    _this.blogs = res.data.data.records
                    _this.currentPage = res.data.data.current
                    _this.total = res.data.data.total
                    _this.pageSize = res.data.data.size
                })
            }
        },
        created() {
            this.page(1)
        }
    }
</script>
 
<style scoped>
    .mpage {
        margin: 0 auto;
        text-align: center;
    }
</style>