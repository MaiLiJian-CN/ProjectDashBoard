package config

import (
	"os"

	"gopkg.in/yaml.v3"
)

// DBConfig 数据库配置结构体
type DBConfig struct {
	User   string `yaml:"user"`
	Pwd    string `yaml:"pwd"`
	Dbname string `yaml:"dbname"`
	Host   string `yaml:"host"` // 补充 host 配置
	Port   string `yaml:"port"` // 补充 port 配置
}

// Config 全局配置
type Config struct {
	Db DBConfig `yaml:"db"`
}

var AppConfig Config

// 加载配置文件
func LoadConfig() error {
	data, err := os.ReadFile("config.yml")
	if err != nil {
		return err
	}
	return yaml.Unmarshal(data, &AppConfig)
}
