package main

import (
	"web-go/config"
	"web-go/controller"
	"web-go/db"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/go-playground/validator/v10"
)

func main() {
	db.InitDB()
	r := gin.Default()

	// 对于 Gin v1.10.1 及更早版本，通过全局binding.Validator注册
	if v, ok := binding.Validator.Engine().(*validator.Validate); ok {
		// 注册自定义验证器
		config.RegisterValidators(v)
	}

	// 配置静态文件目录
	r.Static("/static", "./static")

	// 首页路由
	r.GET("/", func(c *gin.Context) {
		c.File("./static/html/index.html")
	})

	// 项目列表页面路由
	r.GET("/projects", func(c *gin.Context) {
		c.File("./static/html/projects.html")
	})
	// 新增：Analysis页面路由
	r.GET("/analysis", func(c *gin.Context) {
		c.File("./static/html/analysis.html")
	})

	// 添加在现有路由配置中
	r.GET("/new-project", func(c *gin.Context) {
		c.File("static/html/new-project.html")
	})

	// 处理表单提交的API
	r.POST("/api/newprojects", controller.NewProject)

	// 数据接口路由
	r.GET("/api/projects", controller.GetAllProjects)
	r.GET("/api/projects/:id", controller.GetProjectById)
	r.PUT("/api/projects/:id", controller.UpdateById)

	r.Run("0.0.0.0:8000")
}
