/**
 * 动态表单主处理脚本
 * 负责初始化和管理各个组件表单
 */
// 导入handleFormSubmit并显式命名
import { handleFormSubmit } from './formSubmit.js';
document.addEventListener('DOMContentLoaded', () => {
    // 获取组件复选框和动态表单容器
    const componentCheckboxes = document.querySelectorAll('input[name="component"]');
    const dynamicFormsContainer = document.getElementById('dynamicForms');
    
    // 为每个复选框添加事件监听
    componentCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleComponentChange);
    });

    // 表单提交处理
    document.getElementById('projectForm').addEventListener('submit', handleFormSubmit);

    /**
     * 处理组件选择变化
     */
    async function handleComponentChange() {
        // 清空现有动态表单
        dynamicFormsContainer.innerHTML = '';
        
        // 获取所有选中的组件
        const selectedComponents = Array.from(componentCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        
        // 为每个选中的组件加载对应的子表单
        for (const component of selectedComponents) {
            const formHtml = await getComponentFormHtml(component);
            if (formHtml) {
                dynamicFormsContainer.innerHTML += formHtml;
            }
        }
    }

    /**
     * 根据组件类型获取对应的表单HTML
     */
    async function getComponentFormHtml(component) {
        try {
            switch(component) {
                case 'Cloud':
                    const cloudModule = await import('./components/CloudForm.js');
                    return cloudModule.getCloudFormHtml();
                case 'Web-Application':
                    const webAppModule = await import('./components/WebAppForm.js');
                    return webAppModule.getWebApplicationFormHtml();
                case 'IoT-Device':
                    const iotModule = await import('./components/IoTForm.js');
                    return iotModule.getIoTDeviceFormHtml();
                case 'HMI':
                    const hmiModule = await import('./components/HMIForm.js');
                    return hmiModule.getHMIFormHtml();
                case 'Firmware':
                    const firmwareModule = await import('./components/FirmwareForm.js');
                    return firmwareModule.getFirmwareFormHtml();
                case 'Mobile-app':
                    const mobileModule = await import('./components/MobileAppForm.js');
                    return mobileModule.getMobileAppFormHtml();
                default:
                    return `<div class="border-b border-gray-200 pb-6">
                                <h3 class="text-xl font-semibold mb-4">${component} Details</h3>
                                <p class="text-gray-500">Additional details for ${component} will be added here.</p>
                            </div>`;
            }
        } catch (error) {
            console.error(`Error loading form for ${component}:`, error);
            return null;
        }
    }
});
