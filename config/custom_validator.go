package config

import (
	"web-go/model"

	"github.com/go-playground/validator/v10"
)

// 注册所有自定义验证器
func RegisterValidators(v *validator.Validate) {
	// 注册部门枚举验证器
	v.RegisterValidation("division", ValidateDivision)
	// 注册项目类型枚举验证器
	v.RegisterValidation("project_type", ValidateProjectType)
}

// ValidateDivision 验证部门枚举值是否合法
func ValidateDivision(fl validator.FieldLevel) bool {
	division := model.Division(fl.Field().String())
	switch division {
	case model.DivisionDPQ, model.DivisionCPC, model.DivisionCPS, model.DivisionELX, model.DivisionGEIS:
		return true
	default:
		return false
	}
}

// ValidateProjectType 验证项目类型枚举值是否合法
func ValidateProjectType(fl validator.FieldLevel) bool {
	projectType := model.ProjectType(fl.Field().String())
	switch projectType {
	case model.TypeNPI, model.TypeMOL, model.TypeBrandLabel:
		return true
	default:
		return false
	}
}
