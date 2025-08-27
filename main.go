package main

import (
	"web-go/controller"
	"web-go/db"

	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	r := gin.Default()

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

	// 数据接口路由
	r.GET("/api/projects", controller.GetAllProjects)
	r.GET("/api/projects/:id", controller.GetProjectById)
	r.PUT("/api/projects/:id", controller.UpdateById)

	r.Run("0.0.0.0:8000")
}
