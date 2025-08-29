package controller

import (
	"fmt"
	"net/http"
	"time"
	"web-go/model"
	"web-go/server"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.uber.org/zap"
)

// NewProject 创建新项目
func NewProject(ctx *gin.Context) {
	// 1. 声明接收数据的变量，使用你的CreateProjectRequest模型
	var req model.CreateProjectRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		fmt.Println(err)
		// 记录错误日志
		zap.L().Error("请求数据绑定失败",
			zap.Error(err),
			zap.String("projectName", req.ProjectName), // 可能为空，但尝试记录
		)

		// 区分错误类型并返回详细信息
		switch e := err.(type) {
		case validator.ValidationErrors:
			// 打印详细的验证错误（包含字段名和错误类型）
			errMsg := ""
			for _, fieldErr := range e {
				errMsg += fmt.Sprintf("字段 %s 验证失败（规则：%s）；",
					fieldErr.Field(), // 出错的字段名
					fieldErr.Tag())   // 违反的验证规则
			}
			fmt.Println("err",errMsg)
			// 记录详细日志
			zap.L().Error("参数验证失败", zap.String("详细错误", errMsg))
			// 返回给前端
			ctx.JSON(http.StatusBadRequest, gin.H{
				"code": 400,
				"msg":  "参数验证失败: " + errMsg,
				"data": nil,
			})
		default:
			// JSON格式错误等其他错误
			
			ctx.JSON(http.StatusBadRequest, gin.H{
				"code": 400,
				"msg":  "数据格式错误: " + e.Error(),
				"data": nil,
			})
		}
		return
	}

	// 3. 绑定成功后，可以直接访问结构体中的数据
	zap.L().Info("成功接收项目数据",
		zap.String("projectName", req.ProjectName),
		zap.String("division", string(req.Division)),
		zap.String("type", string(req.Type)),
		zap.Strings("components", req.Components),
	)

	// 示例：访问Cloud组件的具体数据
	if req.Details.Cloud != nil {
		zap.L().Info("Cloud组件信息",
			zap.String("provider", req.Details.Cloud.Provider),
			zap.String("providerOther", req.Details.Cloud.ProviderOther),
		)
	}

	// 4. 调用服务层处理业务逻辑（保存到数据库等）
	projectID, err := server.NewProject(&req)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"code": 500,
			"msg":  "创建项目失败: " + err.Error(),
			"data": nil,
		})
		return
	}

	// 5. 返回成功响应
	ctx.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "项目创建成功",
		"data": gin.H{
			"projectID": projectID,
			"name":      req.ProjectName,
			"createdAt": time.Now().Format(time.RFC3339),
		},
	})
}
