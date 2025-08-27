package dao

import (
	"web-go/db"
	"web-go/model"
)

// 查询所有项目记录
func GetAllProjects() ([]model.Projects, error) {
	var projects []model.Projects
	// 查询所有记录（SELECT * FROM projects）
	result := db.DB.Find(&projects)
	if result.Error != nil {
		return nil, result.Error
	}

	return projects, nil
}

// 1. 数据访问层（dao）：负责数据库查询
func GetProjectByIdDAO(userId int) (*model.Projects, error) {
	var project *model.Projects
	// 注意 GORM 条件写法：使用 ? 占位符，避免 SQL 注入风险
	result := db.DB.First(&project, "No = ?", userId)

	// 通过 result.Error 判断是否有错误（包括记录不存在）
	if result.Error != nil {
		return nil, result.Error // 返回错误，而非 panic
	}
	return project, nil
}

// UpdateByIdDAO 根据项目编号更新项目信息
// 返回值：0表示成功，非0表示错误码
func UpdateByIdDAO(project model.Projects) uint {
	// 检查项目编号是否为空（根据实际业务判断）
	if project.No <= 0 {
		return 1 // 项目编号为空错误
	}

	// 调用GORM的Update方法，注意正确的参数传递
	// 第一个参数是查询条件，第二个参数是要更新的数据
	result := db.DB.Model(&model.Projects{}).
		Where("No = ?", project.No).
		Updates(project) // 使用Updates而非Update，支持批量更新字段

	// 处理更新错误
	if result.Error != nil {
		// 可以根据实际错误类型返回不同的错误码
		return 2 // 数据库操作错误
	}

	// 处理更新行数为0的情况（未找到对应记录）
	if result.RowsAffected == 0 {
		return 3 // 未找到对应项目
	}

	// 成功
	return 0
}
