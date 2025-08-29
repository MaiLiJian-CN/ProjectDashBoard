package model

import (
	"time"

)

// 部门枚举类型
type Division string

const (
	DivisionDPQ  Division = "DPQ"
	DivisionCPC  Division = "CPC"
	DivisionCPS  Division = "CPS"
	DivisionELX  Division = "ELX"
	DivisionGEIS Division = "GEIS"
)

// 项目类型枚举
type ProjectType string

const (
	TypeNPI        ProjectType = "NPI"
	TypeMOL        ProjectType = "MOL"
	TypeBrandLabel ProjectType = "Brand-Label"
)

// 顶层请求结构体 - 用于接收前端提交的数据
type CreateProjectRequest struct {
	ProjectName string          `json:"projectName" binding:"required,min=1,max=100"` // 项目名称（必填，限制长度）
	Division    Division        `json:"division" binding:"required,division"`        // 部门（使用枚举，必填）
	Type        ProjectType     `json:"type" binding:"required,project_type"`        // 项目类型（使用枚举，必填）
	Components  []string        `json:"components" binding:"required,min=1"`         // 选中的组件列表（至少选一个）
	Details     ProjectDetails  `json:"details"`                                     // 组件详情（嵌套对象）
}



// 所有组件的详情总结构体（用于请求接收）
type ProjectDetails struct {
	Cloud          *CloudDetails          `json:"cloud"`           // Cloud组件详情（指针：可选）
	WebApplication *WebApplicationDetails `json:"webApplication"`  // Web-Application组件详情（指针：可选）
	IotDevice      *IotDeviceDetails      `json:"iotDevice"`       // IoT-Device组件详情（指针：可选）
	Hmi            *HMIDetails            `json:"hmi"`             // HMI组件详情（指针：可选）
	Firmware       *FirmwareDetails       `json:"firmware"`        // Firmware组件详情（指针：可选）
	Device         *DeviceDetails         `json:"device"`          // 新增Device组件
	MobileApp      *MobileAppDetails      `json:"mobileApp"`       // 新增Mobile-APP组件
	PcTool         *PCToolDetails         `json:"pcTool"`          // 新增PC-tool组件
	Container      *ContainerDetails      `json:"container"`       // 新增Container组件
}

// Cloud组件详情（请求接收用）
type CloudDetails struct {
	Provider      string `json:"provider" binding:"omitempty,oneof=AWS Azure Google Other"` // 限制可选值
	ProviderOther string `json:"providerOther" binding:"omitempty,max=100"`
}

// Cloud组件数据库模型
type Cloud struct {
	ID             uint   `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID      uint   `gorm:"not null;index" json:"projectId"` // 外键，关联Project.ID
	Provider       string `gorm:"size:50" json:"provider"`
	ProviderOther  string `gorm:"size:100" json:"providerOther"`
	CreatedAt      time.Time `json:"createdAt"`
	UpdatedAt      time.Time `json:"updatedAt"`
}

// Web-Application组件详情（请求接收用）
type WebApplicationDetails struct {
	FrontendFrameworks     []string `json:"frontendFrameworks" binding:"omitempty,dive,oneof=React Angular Vue.js Svelte Other"`
	FrontendFrameworkOther string   `json:"frontendFrameworkOther" binding:"omitempty,max=100"`
	BackendFrameworks      []string `json:"backendFrameworks" binding:"omitempty,dive,oneof=Node.js Django Flask Spring Boot Other"`
	BackendFrameworkOther  string   `json:"backendFrameworkOther" binding:"omitempty,max=100"`
	DatabaseType           string   `json:"databaseType" binding:"omitempty,oneof=SQL NoSQL Other"`
	DatabaseTypeOther      string   `json:"databaseTypeOther" binding:"omitempty,max=100"`
}

// Web-Application组件数据库模型
type WebApplication struct {
	ID                     uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID              uint      `gorm:"not null;index" json:"projectId"`
	FrontendFrameworks     []string  `gorm:"type:text" json:"frontendFrameworks"`
	FrontendFrameworkOther string    `gorm:"size:100" json:"frontendFrameworkOther"`
	BackendFrameworks      []string  `gorm:"type:text" json:"backendFrameworks"`
	BackendFrameworkOther  string    `gorm:"size:100" json:"backendFrameworkOther"`
	DatabaseType           string    `gorm:"size:20" json:"databaseType"`
	DatabaseTypeOther      string    `gorm:"size:100" json:"databaseTypeOther"`
	CreatedAt              time.Time `json:"createdAt"`
	UpdatedAt              time.Time `json:"updatedAt"`
}

// IoT-Device组件详情（请求接收用）
type IotDeviceDetails struct {
	Connectivity   []string       `json:"connectivity" binding:"omitempty,dive,oneof=rj45 wifi bluetooth zigbee cellular Other"`
	Ports          []string       `json:"ports" binding:"omitempty,dive,max=50"`
	CustomPort     string         `json:"customPort" binding:"omitempty,max=20"`
	OtherProtocol  string         `json:"otherProtocol" binding:"omitempty,max=100"`
	Os             string         `json:"os" binding:"omitempty,oneof=linux windows embedded other rtos"`
	OsVersion      string         `json:"osVersion" binding:"omitempty,max=50"`
	Interfaces     []string       `json:"interfaces" binding:"omitempty,dive,oneof=usb uart can spi i2c gpio Other"`
	OtherInterface string         `json:"otherInterface" binding:"omitempty,max=100"`
	Hardware       HardwareDetails `json:"hardware"`
}


// IoT-Device组件数据库模型
type IotDevice struct {
	ID             uint           `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID      uint           `gorm:"not null;index" json:"projectId"`
	Connectivity   []string       `gorm:"type:text" json:"connectivity"`
	Ports          []string       `gorm:"type:text" json:"ports"`
	CustomPort     string         `gorm:"size:20" json:"customPort"`
	OtherProtocol  string         `gorm:"size:100" json:"otherProtocol"`
	Os             string         `gorm:"size:50" json:"os"`
	OsVersion      string         `gorm:"size:50" json:"osVersion"`
	Interfaces     []string       `gorm:"type:text" json:"interfaces"`
	OtherInterface string         `gorm:"size:100" json:"otherInterface"`
	HardwareID     uint           `json:"hardwareId"` // 关联硬件详情表
	CreatedAt      time.Time      `json:"createdAt"`
	UpdatedAt      time.Time      `json:"updatedAt"`
}

// IoT-Device的硬件详情
type HardwareDetails struct {
	Processor    string   `json:"processor" binding:"omitempty,max=100"`
	Memory       string   `json:"memory" binding:"omitempty,max=50"`
	Storage      string   `json:"storage" binding:"omitempty,max=50"`
	PowerSupply  []string `json:"powerSupply" binding:"omitempty,dive,oneof=battery dc-adapter poe Other"`
	OtherPower   string   `json:"otherPower" binding:"omitempty,max=100"`
}

// 硬件详情数据库模型
type Hardware struct {
	ID          uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	IotDeviceID uint      `gorm:"not null;index" json:"iotDeviceId"` // 关联IoT设备
	Processor   string    `gorm:"size:100" json:"processor"`
	Memory      string    `gorm:"size:50" json:"memory"`
	Storage     string    `gorm:"size:50" json:"storage"`
	PowerSupply []string  `gorm:"type:text" json:"powerSupply"`
	OtherPower  string    `gorm:"size:100" json:"otherPower"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

// HMI组件详情（请求接收用）
type HMIDetails struct {
	DevelopmentSource  string   `json:"developmentSource" binding:"omitempty,oneof=self-developed third-party"`
	VendorName         string   `json:"vendorName" binding:"omitempty,max=100"`
	Os                 string   `json:"os" binding:"omitempty,oneof=windows-embedded linux android other"`
	OsOther            string   `json:"osOther" binding:"omitempty,max=100"`
	OsVersion          string   `json:"osVersion" binding:"omitempty,max=50"`
	Connectivity       []string `json:"connectivity" binding:"omitempty,dive,max=50"`
	ConnectivityOther  string   `json:"connectivityOther" binding:"omitempty,max=100"`
	InputMethods       []string `json:"inputMethods" binding:"omitempty,dive,max=50"`
	InputMethodsOther  string   `json:"inputMethodsOther" binding:"omitempty,max=100"`
	FirmwareUpgrade    string   `json:"firmwareUpgrade" binding:"omitempty,oneof=yes no"`
	UpgradeMethod      []string `json:"upgradeMethod" binding:"omitempty,dive,max=50"`
	UpgradeMethodOther string   `json:"upgradeMethodOther" binding:"omitempty,max=100"`
	DisplayType        string   `json:"displayType" binding:"omitempty,oneof=lcd oled led other"`
	DisplayTypeOther   string   `json:"displayTypeOther" binding:"omitempty,max=100"`
	TouchSupport       string   `json:"touchSupport" binding:"omitempty,oneof=yes no"`
	Protocols          []string `json:"protocols" binding:"omitempty,dive,max=50"`
	ProtocolsOther     string   `json:"protocolsOther" binding:"omitempty,max=100"`
	PowerSupply        []string `json:"powerSupply" binding:"omitempty,dive,max=50"`
	PowerSupplyOther   string   `json:"powerSupplyOther" binding:"omitempty,max=100"`
}

// HMI组件数据库模型
type Hmi struct {
	ID                 uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID          uint      `gorm:"not null;index" json:"projectId"`
	DevelopmentSource  string    `gorm:"size:50" json:"developmentSource"`
	VendorName         string    `gorm:"size:100" json:"vendorName"`
	Os                 string    `gorm:"size:50" json:"os"`
	OsOther            string    `gorm:"size:100" json:"osOther"`
	OsVersion          string    `gorm:"size:50" json:"osVersion"`
	Connectivity       []string  `gorm:"type:text" json:"connectivity"`
	ConnectivityOther  string    `gorm:"size:100" json:"connectivityOther"`
	InputMethods       []string  `gorm:"type:text" json:"inputMethods"`
	InputMethodsOther  string    `gorm:"size:100" json:"inputMethodsOther"`
	FirmwareUpgrade    string    `gorm:"size:10" json:"firmwareUpgrade"`
	UpgradeMethod      []string  `gorm:"type:text" json:"upgradeMethod"`
	UpgradeMethodOther string    `gorm:"size:100" json:"upgradeMethodOther"`
	DisplayType        string    `gorm:"size:50" json:"displayType"`
	DisplayTypeOther   string    `gorm:"size:100" json:"displayTypeOther"`
	TouchSupport       string    `gorm:"size:10" json:"touchSupport"`
	Protocols          []string  `gorm:"type:text" json:"protocols"`
	ProtocolsOther     string    `gorm:"size:100" json:"protocolsOther"`
	PowerSupply        []string  `gorm:"type:text" json:"powerSupply"`
	PowerSupplyOther   string    `gorm:"size:100" json:"powerSupplyOther"`
	CreatedAt          time.Time `json:"createdAt"`
	UpdatedAt          time.Time `json:"updatedAt"`
}

// Firmware组件详情（请求接收用）
type FirmwareDetails struct {
	Format             []string `json:"format" binding:"omitempty,dive,oneof=bin hex elf srec Other"`
	FormatOther        string   `json:"formatOther" binding:"omitempty,max=100"`
	UpgradeSupport     string   `json:"upgradeSupport" binding:"omitempty,oneof=yes no"`
	UpgradeMethods     []string `json:"upgradeMethods" binding:"omitempty,dive,max=50"`
	UpgradeMethodOther string   `json:"upgradeMethodOther" binding:"omitempty,max=100"`
	Encryption         string   `json:"encryption" binding:"omitempty,oneof=yes no optional"`
	Signing            string   `json:"signing" binding:"omitempty,oneof=yes no other"`
	SigningOther       string   `json:"signingOther" binding:"omitempty,max=100"`
	RollbackSupport    string   `json:"rollbackSupport" binding:"omitempty,oneof=yes no"`
	Bootloader         string   `json:"bootloader" binding:"omitempty,oneof=yes no custom third-party"`
	UpdateTriggers     []string `json:"updateTriggers" binding:"omitempty,dive,oneof=manual automatic remote-command other"`
	UpdateTriggerOther string   `json:"updateTriggerOther" binding:"omitempty,max=100"`
	SizeLimit          string   `json:"sizeLimit" binding:"omitempty,max=50"`
}

// Firmware组件数据库模型
type Firmware struct {
	ID                  uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID           uint      `gorm:"not null;index" json:"projectId"`
	Format              []string  `gorm:"type:text" json:"format"`
	FormatOther         string    `gorm:"size:100" json:"formatOther"`
	UpgradeSupport      string    `gorm:"size:10" json:"upgradeSupport"`
	UpgradeMethods      []string  `gorm:"type:text" json:"upgradeMethods"`
	UpgradeMethodOther  string    `gorm:"size:100" json:"upgradeMethodOther"`
	Encryption          string    `gorm:"size:20" json:"encryption"`
	Signing             string    `gorm:"size:20" json:"signing"`
	SigningOther        string    `gorm:"size:100" json:"signingOther"`
	RollbackSupport     string    `gorm:"size:10" json:"rollbackSupport"`
	Bootloader          string    `gorm:"size:50" json:"bootloader"`
	UpdateTriggers      []string  `gorm:"type:text" json:"updateTriggers"`
	UpdateTriggerOther  string    `gorm:"size:100" json:"updateTriggerOther"`
	SizeLimit           string    `gorm:"size:50" json:"sizeLimit"`
	CreatedAt           time.Time `json:"createdAt"`
	UpdatedAt           time.Time `json:"updatedAt"`
}

// 新增Device组件详情
type DeviceDetails struct {
	Type           string   `json:"type" binding:"omitempty,max=50"`
	Manufacturer   string   `json:"manufacturer" binding:"omitempty,max=100"`
	Model          string   `json:"model" binding:"omitempty,max=100"`
	SerialNumber   string   `json:"serialNumber" binding:"omitempty,max=50"`
	FirmwareVersion string   `json:"firmwareVersion" binding:"omitempty,max=50"`
}

// Device组件数据库模型
type Device struct {
	ID              uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID       uint      `gorm:"not null;index" json:"projectId"`
	Type            string    `gorm:"size:50" json:"type"`
	Manufacturer    string    `gorm:"size:100" json:"manufacturer"`
	Model           string    `gorm:"size:100" json:"model"`
	SerialNumber    string    `gorm:"size:50" json:"serialNumber"`
	FirmwareVersion string    `gorm:"size:50" json:"firmwareVersion"`
	CreatedAt       time.Time `json:"createdAt"`
	UpdatedAt       time.Time `json:"updatedAt"`
}

// 新增Mobile-APP组件详情
type MobileAppDetails struct {
	Architecture     string   `json:"architecture" binding:"omitempty,oneof=standalone client-server microservice-based serverless"`
	Platforms        string   `json:"platforms" binding:"omitempty,oneof=android ios both"`
	ThirdPartySdk    string   `json:"thirdPartySdk" binding:"omitempty,oneof=yes no"`
	SdkList          string   `json:"sdkList" binding:"omitempty,max=500"`
	ApiTypes         []string `json:"apiTypes" binding:"omitempty,dive,oneof=REST GraphQL gRPC Other"`
	ApiTypesOther    string   `json:"apiTypesOther" binding:"omitempty,max=100"`
	UsesGateway      string   `json:"usesGateway" binding:"omitempty,oneof=yes no"`
	GatewayName      string   `json:"gatewayName" binding:"omitempty,max=100"`
}

// Mobile-APP组件数据库模型
type MobileApp struct {
	ID               uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID        uint      `gorm:"not null;index" json:"projectId"`
	Architecture     string    `gorm:"size:50" json:"architecture"`
	Platforms        string    `gorm:"size:20" json:"platforms"`
	ThirdPartySdk    string    `gorm:"size:10" json:"thirdPartySdk"`
	SdkList          string    `gorm:"type:text" json:"sdkList"`
	ApiTypes         []string  `gorm:"type:text" json:"apiTypes"`
	ApiTypesOther    string    `gorm:"size:100" json:"apiTypesOther"`
	UsesGateway      string    `gorm:"size:10" json:"usesGateway"`
	GatewayName      string    `gorm:"size:100" json:"gatewayName"`
	CreatedAt        time.Time `json:"createdAt"`
	UpdatedAt        time.Time `json:"updatedAt"`
}

// 新增PC-tool组件详情
type PCToolDetails struct {
	OsSupport       []string `json:"osSupport" binding:"omitempty,dive,oneof=windows macos linux"`
	Architecture    string   `json:"architecture" binding:"omitempty,oneof=32bit 64bit both"`
	InstallationType string   `json:"installationType" binding:"omitempty,oneof=installer portable"`
	Dependencies    string   `json:"dependencies" binding:"omitempty,max=500"`
	VersionControl  string   `json:"versionControl" binding:"omitempty,oneof=yes no"`
}

// PC-tool组件数据库模型
type PCTool struct {
	ID               uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID        uint      `gorm:"not null;index" json:"projectId"`
	OsSupport        []string  `gorm:"type:text" json:"osSupport"`
	Architecture     string    `gorm:"size:20" json:"architecture"`
	InstallationType string    `gorm:"size:20" json:"installationType"`
	Dependencies     string    `gorm:"type:text" json:"dependencies"`
	VersionControl   string    `gorm:"size:10" json:"versionControl"`
	CreatedAt        time.Time `json:"createdAt"`
	UpdatedAt        time.Time `json:"updatedAt"`
}

// 新增Container组件详情
type ContainerDetails struct {
	Orchestration    string   `json:"orchestration" binding:"omitempty,oneof=kubernetes docker-swarm none"`
	Registry         string   `json:"registry" binding:"omitempty,max=100"`
	ImageCount       string   `json:"imageCount" binding:"omitempty,max=10"`
	ResourceLimits   string   `json:"resourceLimits" binding:"omitempty,max=200"`
	NetworkMode      string   `json:"networkMode" binding:"omitempty,max=50"`
}

// Container组件数据库模型
type Container struct {
	ID               uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	ProjectID        uint      `gorm:"not null;index" json:"projectId"`
	Orchestration    string    `gorm:"size:50" json:"orchestration"`
	Registry         string    `gorm:"size:100" json:"registry"`
	ImageCount       string    `gorm:"size:10" json:"imageCount"`
	ResourceLimits   string    `gorm:"size:200" json:"resourceLimits"`
	NetworkMode      string    `gorm:"size:50" json:"networkMode"`
	CreatedAt        time.Time `json:"createdAt"`
	UpdatedAt        time.Time `json:"updatedAt"`
}
