package dao

import (
	"errors"
	"web-go/db"
	"web-go/model"
)

//new Project_Basic

func NewProject(name,proType, division string, componment []string) (int,uint, error) {
	project := model.Projects{}
	project.Project = name
	project.Division = division
	project.Type=proType
	// fmt.Println("comm:",componment)
	msg := ""
	for _, v := range componment {
		msg += v
		msg += ";"
	}
	project.Component=msg
	// fmt.Println("msg:",msg)
	tx := db.DB.Create(&project)
	if tx.RowsAffected == 0 {
		return 0,0, errors.New("create error")
	}
	p_id:=project.No
	return 1,p_id,nil
}

// CreateCloud 保存Cloud组件数据
func CreateCloud(cloud *model.Cloud) error {
	tx := db.DB.Create(cloud)
	if tx.RowsAffected == 0 {
		return errors.New("创建Cloud组件失败")
	}
	return tx.Error
}

// CreateWebApplication 保存WebApplication组件数据
func CreateWebApplication(webApp *model.WebApplication) error {
	tx := db.DB.Create(webApp)
	if tx.RowsAffected == 0 {
		return errors.New("创建WebApplication组件失败")
	}
	return tx.Error
}

// CreateHardware 保存硬件详情（供IoT设备关联）
func CreateHardware(hardware *model.Hardware) error {
	tx := db.DB.Create(hardware)
	if tx.RowsAffected == 0 {
		return errors.New("创建Hardware失败")
	}
	return tx.Error
}

// CreateIotDevice 保存IoT设备数据
func CreateIotDevice(iotDevice *model.IotDevice) error {
	tx := db.DB.Create(iotDevice)
	if tx.RowsAffected == 0 {
		return errors.New("创建IotDevice组件失败")
	}
	return tx.Error
}

// CreateHmi 保存HMI组件数据
func CreateHmi(hmi *model.Hmi) error {
	tx := db.DB.Create(hmi)
	if tx.RowsAffected == 0 {
		return errors.New("创建Hmi组件失败")
	}
	return tx.Error
}

// CreateFirmware 保存Firmware组件数据
func CreateFirmware(firmware *model.Firmware) error {
	tx := db.DB.Create(firmware)
	if tx.RowsAffected == 0 {
		return errors.New("创建Firmware组件失败")
	}
	return tx.Error
}

// CreateDevice 保存Device组件数据
func CreateDevice(device *model.Device) error {
	tx := db.DB.Create(device)
	if tx.RowsAffected == 0 {
		return errors.New("创建Device组件失败")
	}
	return tx.Error
}

// CreateMobileApp 保存MobileApp组件数据
func CreateMobileApp(mobileApp *model.MobileApp) error {
	tx := db.DB.Create(mobileApp)
	if tx.RowsAffected == 0 {
		return errors.New("创建MobileApp组件失败")
	}
	return tx.Error
}

// CreatePcTool 保存PcTool组件数据
func CreatePcTool(pcTool *model.PCTool) error {
	tx := db.DB.Create(pcTool)
	if tx.RowsAffected == 0 {
		return errors.New("创建PcTool组件失败")
	}
	return tx.Error
}

// CreateContainer 保存Container组件数据
func CreateContainer(container *model.Container) error {
	tx := db.DB.Create(container)
	if tx.RowsAffected == 0 {
		return errors.New("创建Container组件失败")
	}
	return tx.Error
}
