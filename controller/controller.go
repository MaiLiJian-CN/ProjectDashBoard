package controller

import (
	"net/http"
	"strconv"
	"web-go/model"
	"web-go/server"

	"github.com/gin-gonic/gin"
)

func GetAllProjects(ctx *gin.Context) {
	projects, err := server.GetAllProjects()
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"code": 500,
			"msg":  "select error:" + err.Error(),
		})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{
		"code":  200,
		"data":  projects,
		"count": len(projects),
	})
}

func GetProjectById(ctx *gin.Context) {
	id := ctx.Param("id")
	userId, err := strconv.Atoi(id)
	if err != nil {
		panic("the Id into int type error")
	}
	project, err := server.GetProjectById(userId)
	if err != nil {
		panic("controller get msg by id err")
	}
	ctx.JSON(http.StatusOK, gin.H{
		"code": 200,
		"data": project,
	})
}

func UpdateById(ctx *gin.Context) {

	var p model.Projects

	if err := ctx.ShouldBind(&p); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"code": "400",
			"msg":  "struct format error",
		})
	}
	rs := server.UpdateByIdServer(p)
	if rs == 0 {
		ctx.JSON(http.StatusOK, gin.H{
			"code": 200,
			"msg":  "successful",
		})
	} else {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"code": 500,
			"msg":  "intern Error",
		})
	}
}


