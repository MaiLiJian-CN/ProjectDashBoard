package server

import (
	"errors"
	"web-go/dao"
	"web-go/model"
)

func NewProject(proReq *model.CreateProjectRequest) (int, error) {
	proJectName := proReq.ProjectName
	proDivision := proReq.Division
	components := proReq.Components
	proType := proReq.Type
	_, pId, err := dao.NewProject(proJectName, string(proType), string(proDivision), components)
	if err != nil {
		return 0, errors.New("create project error")
	}

// 定义组件处理函数映射表：组件名称 -> 对应的处理函数
	componentHandlers := map[string]func(uint, interface{}) error{
		"Cloud":          handleCloud,
		"WebApplication": handleWebApplication,
		"IotDevice":      handleIotDevice,
		"Hmi":            handleHmi,
		"Firmware":       handleFirmware,
		"Device":         handleDevice,
		"MobileApp":      handleMobileApp,
		"PcTool":         handlePcTool,
		"Container":      handleContainer,
	}

	// 遍历组件列表，调用对应的处理函数
	for _, component := range proReq.Components {
		handler, exists := componentHandlers[component]
		if !exists {
			return 0, errors.New("未知组件类型: " + component)
		}

		// 根据组件类型获取对应详情
		var detail interface{}
		switch component {
		case "Cloud":
			detail = proReq.Details.Cloud
		case "WebApplication":
			detail = proReq.Details.WebApplication
		case "IotDevice":
			detail = proReq.Details.IotDevice
		case "Hmi":
			detail = proReq.Details.Hmi
		case "Firmware":
			detail = proReq.Details.Firmware
		case "Device":
			detail = proReq.Details.Device
		case "MobileApp":
			detail = proReq.Details.MobileApp
		case "PcTool":
			detail = proReq.Details.PcTool
		case "Container":
			detail = proReq.Details.Container
		}

		// 调用处理函数
		if err := handler(pId, detail); err != nil {
			return 0, errors.New("处理组件 " + component + " 失败: " + err.Error())
		}
	}

	return int(pId), nil
}

// 各组件的具体处理函数
func handleCloud(projectID uint, detail interface{}) error {
	cloudDetail, ok := detail.(*model.CloudDetails)
	if !ok || cloudDetail == nil {
		return errors.New("无效的Cloud组件数据")
	}

	var cloud model.Cloud
	cloud.ProjectID = projectID
	cloud.Provider = cloudDetail.Provider
	cloud.ProviderOther = cloudDetail.ProviderOther
	return dao.CreateCloud(&cloud)
}

func handleWebApplication(projectID uint, detail interface{}) error {
	webDetail, ok := detail.(*model.WebApplicationDetails)
	if !ok || webDetail == nil {
		return errors.New("无效的WebApplication组件数据")
	}

	var webApp model.WebApplication
	webApp.ProjectID = projectID
	webApp.FrontendFrameworks = webDetail.FrontendFrameworks
	webApp.FrontendFrameworkOther = webDetail.FrontendFrameworkOther
	webApp.BackendFrameworks = webDetail.BackendFrameworks
	webApp.BackendFrameworkOther = webDetail.BackendFrameworkOther
	webApp.DatabaseType = webDetail.DatabaseType
	webApp.DatabaseTypeOther = webDetail.DatabaseTypeOther
	return dao.CreateWebApplication(&webApp)
}

func handleIotDevice(projectID uint, detail interface{}) error {
	iotDetail, ok := detail.(*model.IotDeviceDetails)
	if !ok || iotDetail == nil {
		return errors.New("无效的IotDevice组件数据")
	}

	// 先创建硬件详情
	var hardware model.Hardware
	hardware.Processor = iotDetail.Hardware.Processor
	hardware.Memory = iotDetail.Hardware.Memory
	hardware.Storage = iotDetail.Hardware.Storage
	hardware.PowerSupply = iotDetail.Hardware.PowerSupply
	hardware.OtherPower = iotDetail.Hardware.OtherPower
	if err := dao.CreateHardware(&hardware); err != nil {
		return errors.New("创建硬件详情失败: " + err.Error())
	}

	// 再创建IoT设备记录
	var iotDevice model.IotDevice
	iotDevice.ProjectID = projectID
	iotDevice.Connectivity = iotDetail.Connectivity
	iotDevice.Ports = iotDetail.Ports
	iotDevice.CustomPort = iotDetail.CustomPort
	iotDevice.OtherProtocol = iotDetail.OtherProtocol
	iotDevice.Os = iotDetail.Os
	iotDevice.OsVersion = iotDetail.OsVersion
	iotDevice.Interfaces = iotDetail.Interfaces
	iotDevice.OtherInterface = iotDetail.OtherInterface
	iotDevice.HardwareID = hardware.ID // 关联硬件记录
	return dao.CreateIotDevice(&iotDevice)
}

func handleHmi(projectID uint, detail interface{}) error {
	hmiDetail, ok := detail.(*model.HMIDetails)
	if !ok || hmiDetail == nil {
		return errors.New("无效的Hmi组件数据")
	}

	var hmi model.Hmi
	hmi.ProjectID = projectID
	hmi.DevelopmentSource = hmiDetail.DevelopmentSource
	hmi.VendorName = hmiDetail.VendorName
	hmi.Os = hmiDetail.Os
	hmi.OsOther = hmiDetail.OsOther
	hmi.OsVersion = hmiDetail.OsVersion
	hmi.Connectivity = hmiDetail.Connectivity
	hmi.ConnectivityOther = hmiDetail.ConnectivityOther
	hmi.InputMethods = hmiDetail.InputMethods
	hmi.InputMethodsOther = hmiDetail.InputMethodsOther
	hmi.FirmwareUpgrade = hmiDetail.FirmwareUpgrade
	hmi.UpgradeMethod = hmiDetail.UpgradeMethod
	hmi.UpgradeMethodOther = hmiDetail.UpgradeMethodOther
	hmi.DisplayType = hmiDetail.DisplayType
	hmi.DisplayTypeOther = hmiDetail.DisplayTypeOther
	hmi.TouchSupport = hmiDetail.TouchSupport
	hmi.Protocols = hmiDetail.Protocols
	hmi.ProtocolsOther = hmiDetail.ProtocolsOther
	hmi.PowerSupply = hmiDetail.PowerSupply
	hmi.PowerSupplyOther = hmiDetail.PowerSupplyOther
	return dao.CreateHmi(&hmi)
}

func handleFirmware(projectID uint, detail interface{}) error {
	firmwareDetail, ok := detail.(*model.FirmwareDetails)
	if !ok || firmwareDetail == nil {
		return errors.New("无效的Firmware组件数据")
	}

	var firmware model.Firmware
	firmware.ProjectID = projectID
	firmware.Format = firmwareDetail.Format
	firmware.FormatOther = firmwareDetail.FormatOther
	firmware.UpgradeSupport = firmwareDetail.UpgradeSupport
	firmware.UpgradeMethods = firmwareDetail.UpgradeMethods
	firmware.UpgradeMethodOther = firmwareDetail.UpgradeMethodOther
	firmware.Encryption = firmwareDetail.Encryption
	firmware.Signing = firmwareDetail.Signing
	firmware.SigningOther = firmwareDetail.SigningOther
	firmware.RollbackSupport = firmwareDetail.RollbackSupport
	firmware.Bootloader = firmwareDetail.Bootloader
	firmware.UpdateTriggers = firmwareDetail.UpdateTriggers
	firmware.UpdateTriggerOther = firmwareDetail.UpdateTriggerOther
	firmware.SizeLimit = firmwareDetail.SizeLimit
	return dao.CreateFirmware(&firmware)
}

func handleDevice(projectID uint, detail interface{}) error {
	deviceDetail, ok := detail.(*model.DeviceDetails)
	if !ok || deviceDetail == nil {
		return errors.New("无效的Device组件数据")
	}

	var device model.Device
	device.ProjectID = projectID
	device.Type = deviceDetail.Type
	device.Manufacturer = deviceDetail.Manufacturer
	device.Model = deviceDetail.Model
	device.SerialNumber = deviceDetail.SerialNumber
	device.FirmwareVersion = deviceDetail.FirmwareVersion
	return dao.CreateDevice(&device)
}

func handleMobileApp(projectID uint, detail interface{}) error {
	mobileDetail, ok := detail.(*model.MobileAppDetails)
	if !ok || mobileDetail == nil {
		return errors.New("无效的MobileApp组件数据")
	}

	var mobileApp model.MobileApp
	mobileApp.ProjectID = projectID
	mobileApp.Architecture = mobileDetail.Architecture
	mobileApp.Platforms = mobileDetail.Platforms
	mobileApp.ThirdPartySdk = mobileDetail.ThirdPartySdk
	mobileApp.SdkList = mobileDetail.SdkList
	mobileApp.ApiTypes = mobileDetail.ApiTypes
	mobileApp.ApiTypesOther = mobileDetail.ApiTypesOther
	mobileApp.UsesGateway = mobileDetail.UsesGateway
	mobileApp.GatewayName = mobileDetail.GatewayName
	return dao.CreateMobileApp(&mobileApp)
}

func handlePcTool(projectID uint, detail interface{}) error {
	pcToolDetail, ok := detail.(*model.PCToolDetails)
	if !ok || pcToolDetail == nil {
		return errors.New("无效的PcTool组件数据")
	}

	var pcTool model.PCTool
	pcTool.ProjectID = projectID
	pcTool.OsSupport = pcToolDetail.OsSupport
	pcTool.Architecture = pcToolDetail.Architecture
	pcTool.InstallationType = pcToolDetail.InstallationType
	pcTool.Dependencies = pcToolDetail.Dependencies
	pcTool.VersionControl = pcToolDetail.VersionControl
	return dao.CreatePcTool(&pcTool)
}

func handleContainer(projectID uint, detail interface{}) error {
	containerDetail, ok := detail.(*model.ContainerDetails)
	if !ok || containerDetail == nil {
		return errors.New("无效的Container组件数据")
	}

	var container model.Container
	container.ProjectID = projectID
	container.Orchestration = containerDetail.Orchestration
	container.Registry = containerDetail.Registry
	container.ImageCount = containerDetail.ImageCount
	container.ResourceLimits = containerDetail.ResourceLimits
	container.NetworkMode = containerDetail.NetworkMode
	return dao.CreateContainer(&container)
}
