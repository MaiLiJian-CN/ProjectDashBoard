package model

// 修正结构体名与文件名一致，添加 GORM tag 定义主键和自增
type Projects struct {
	No        uint   `gorm:"column:No;primaryKey;autoIncrement"` // 对应 SQL 中的 no 字段
	Project   string `gorm:"column:Project"`
	Start     uint   `gorm:"column:Start"`
	Finish    uint   `gorm:"column:Finish"`
	Division  string `gorm:"column:Division"`
	Component string `gorm:"column:Component"`
	Gate      uint   `gorm:"column:Gate"`
	Status    string `gorm:"column:Status"`
	Type      string `gorm:"column:Type"`
	Scope     string `gorm:"column:Scope"`
}

// 指定表名（如果与结构体名不一致时需要）
func (Projects) TableName() string {
	return "projects"
}
