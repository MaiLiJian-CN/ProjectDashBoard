/**
 * 表单提交处理逻辑
 */
export async function handleFormSubmit(e) {
    e.preventDefault();
    
    // 收集基本信息
    const formData = {
        projectName: document.getElementById('projectName').value,
        division: document.getElementById('projectDivision').value,
        type: document.getElementById('projectType').value,
        components: Array.from(document.querySelectorAll('input[name="component"]:checked'))
            .map(checkbox => checkbox.value),
        details: {}
    };
    
    // 收集选中组件的详细信息
    if (formData.components.includes('Cloud')) {
        formData.details.cloud = {
            provider: document.querySelector('input[name="cloudProvider"]:checked')?.value,
            providerOther: document.querySelector('input[name="cloudProviderOther"]').value
        };
    }
    
    if (formData.components.includes('Web-Application')) {
        formData.details.webApplication = {
            frontendFrameworks: Array.from(document.querySelectorAll('input[name="frontendFramework"]:checked'))
                .map(cb => cb.value),
            frontendFrameworkOther: document.querySelector('input[name="frontendFrameworkOther"]').value,
            backendFrameworks: Array.from(document.querySelectorAll('input[name="backendFramework"]:checked'))
                .map(cb => cb.value),
            backendFrameworkOther: document.querySelector('input[name="backendFrameworkOther"]').value,
            databaseType: document.querySelector('input[name="databaseType"]:checked')?.value,
            databaseTypeOther: document.querySelector('input[name="databaseTypeOther"]').value
        };
    }
    
    // 收集IoT设备信息
    if (formData.components.includes('IoT-Device')) {
        formData.details.iotDevice = {
            connectivity: Array.from(document.querySelectorAll('input[name="iotConnectivity"]:checked'))
                .map(cb => cb.value),
            ports: Array.from(document.querySelectorAll('input[name="iotPorts"]:checked'))
                .map(cb => cb.value),
            customPort: document.getElementById('customPort').value,
            otherProtocol: document.getElementById('otherProtocol').value,
            os: document.querySelector('input[name="iotOs"]:checked')?.value,
            osVersion: document.getElementById('osVersion').value,
            interfaces: Array.from(document.querySelectorAll('input[name="iotInterfaces"]:checked'))
                .map(cb => cb.value),
            otherInterface: document.getElementById('otherInterface').value,
            hardware: {
                processor: document.getElementById('processor').value,
                memory: document.getElementById('memory').value,
                storage: document.getElementById('storage').value,
                powerSupply: Array.from(document.querySelectorAll('input[name="powerSupply"]:checked'))
                    .map(cb => cb.value),
                otherPower: document.getElementById('otherPower').value
            }
        };
    }
    
    // 收集HMI信息
    if (formData.components.includes('HMI')) {
        formData.details.hmi = {
            developmentSource: document.querySelector('input[name="hmiDevelopment"]:checked')?.value,
            vendorName: document.getElementById('vendorName').value,
            os: document.querySelector('input[name="hmiOs"]:checked')?.value,
            osOther: document.querySelector('input[name="hmiOsOther"]').value,
            osVersion: document.getElementById('hmiOsVersion').value,
            connectivity: Array.from(document.querySelectorAll('input[name="hmiConnectivity"]:checked'))
                .map(cb => cb.value),
            connectivityOther: document.querySelector('input[name="hmiConnectivityOther"]').value,
            inputMethods: Array.from(document.querySelectorAll('input[name="hmiInputMethods"]:checked'))
                .map(cb => cb.value),
            inputMethodsOther: document.querySelector('input[name="hmiInputMethodsOther"]').value,
            firmwareUpgrade: document.querySelector('input[name="firmwareUpgrade"]:checked')?.value,
            upgradeMethod: Array.from(document.querySelectorAll('input[name="upgradeMethod"]:checked'))
                .map(cb => cb.value),
            upgradeMethodOther: document.querySelector('input[name="upgradeMethodOther"]').value,
            displayType: document.querySelector('input[name="displayType"]:checked')?.value,
            displayTypeOther: document.querySelector('input[name="displayTypeOther"]').value,
            touchSupport: document.querySelector('input[name="touchSupport"]:checked')?.value,
            protocols: Array.from(document.querySelectorAll('input[name="hmiProtocols"]:checked'))
                .map(cb => cb.value),
            protocolsOther: document.querySelector('input[name="hmiProtocolsOther"]').value,
            powerSupply: Array.from(document.querySelectorAll('input[name="hmiPowerSupply"]:checked'))
                .map(cb => cb.value),
            powerSupplyOther: document.querySelector('input[name="hmiPowerSupplyOther"]').value
        };
    }
    
    // 收集Firmware信息
    if (formData.components.includes('Firmware')) {
        formData.details.firmware = {
            format: Array.from(document.querySelectorAll('input[name="firmwareFormat"]:checked'))
                .map(cb => cb.value),
            formatOther: document.querySelector('input[name="firmwareFormatOther"]').value,
            upgradeSupport: document.querySelector('input[name="firmwareUpgradeSupport"]:checked')?.value,
            upgradeMethods: Array.from(document.querySelectorAll('input[name="upgradeMethod"]:checked'))
                .map(cb => cb.value),
            upgradeMethodOther: document.querySelector('input[name="upgradeMethodOther"]').value,
            encryption: document.querySelector('input[name="firmwareEncryption"]:checked')?.value,
            signing: document.querySelector('input[name="firmwareSigning"]:checked')?.value,
            signingOther: document.querySelector('input[name="firmwareSigningOther"]').value,
            rollbackSupport: document.querySelector('input[name="rollbackSupport"]:checked')?.value,
            bootloader: document.querySelector('input[name="bootloader"]:checked')?.value,
            updateTriggers: Array.from(document.querySelectorAll('input[name="updateTrigger"]:checked'))
                .map(cb => cb.value),
            updateTriggerOther: document.querySelector('input[name="updateTriggerOther"]').value,
            sizeLimit: document.getElementById('firmwareSizeLimit').value
        };
    }
    
    // 收集Mobile-app信息
    if (formData.components.includes('Mobile-app')) {
        formData.details.mobileApp = {
            architecture: document.querySelector('input[name="appArchitecture"]:checked')?.value,
            platforms: document.querySelector('input[name="supportedPlatforms"]:checked')?.value,
            usesThirdPartySdk: document.querySelector('input[name="thirdPartySdk"]:checked')?.value,
            sdkList: document.getElementById('sdkList').value,
            apiTypes: Array.from(document.querySelectorAll('input[name="apiTypes"]:checked'))
                .map(cb => cb.value),
            apiTypesOther: document.querySelector('input[name="apiTypesOther"]').value,
            usesGateway: document.querySelector('input[name="usesGateway"]:checked')?.value,
            gatewayName: document.getElementById('gatewayName').value
        };
    }
    
    try {
        // 这里应该调用API保存项目数据
        console.log('Submitting project data:', formData);  
        const resp=await fetch("/api/newprojects",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData)
        });
        if(!resp.ok){
            throw new Error("form submit error")
        }
  
    } catch (error) {
        console.error('Error saving project:', error);
        alert('Failed to create project: ' + error.message);
    }
}
