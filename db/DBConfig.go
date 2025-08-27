package db

import (
	"fmt"
	"web-go/config"
	"web-go/model"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	// 先加载配置
	if err := config.LoadConfig(); err != nil {
		panic(fmt.Sprintf("fail to load config: %v", err))
	}

	// 从配置构建 dsn
	dbConfig := config.AppConfig.Db
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		dbConfig.User, dbConfig.Pwd, dbConfig.Host, dbConfig.Port, dbConfig.Dbname)

	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(fmt.Sprintf("fail to connect database: %v", err))
	}

	// 自动迁移模型（会根据模型创建/更新表结构）
	err = DB.AutoMigrate(&model.Projects{})
	if err != nil {
		panic(fmt.Sprintf("fail to automigrate: %v", err))
	}

}
