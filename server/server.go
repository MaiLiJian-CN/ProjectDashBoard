package server

import (
	"time"
	"web-go/dao"
	"web-go/model"
)

func GetAllProjects() ([]model.Projects, error) {
	return dao.GetAllProjects()
}

// 2. 服务层：处理业务逻辑（如果需要）
func GetProjectById(userId int) (model.Projects, error) {
	// 调用 DAO 层方法，注意变量名不能用 type（改用 code 等）
	project, err := dao.GetProjectByIdDAO(userId)
	if err != nil {
		return model.Projects{}, err // 返回空结构体和错误
	}
	// 指针解引用（此时 project 非 nil，因为上面已判断 err）
	return *project, nil
}

func UpdateByIdServer(project model.Projects) uint {
	if project.Finish > uint(time.Now().Year()) {
		return 4 //time error
	}

	rs := dao.UpdateByIdDAO(project)
	if rs == 0 || rs == 3 {
		return 0
	}
	return rs
}
