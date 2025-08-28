/**
 * Firmware组件表单生成逻辑
 */
export function getFirmwareFormHtml() {
    return `
    <div class="border-b border-gray-200 pb-6">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
            <i class="fa fa-microchip text-orange-500 mr-2"></i>
            Firmware Details
        </h3>
        
        <!-- Firmware Format -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Firmware Format</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label class="flex items-center">
                    <input type="checkbox" name="firmwareFormat" value="bin" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">BIN</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="firmwareFormat" value="hex" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">HEX</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="firmwareFormat" value="elf" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">ELF</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="firmwareFormat" value="srec" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">SREC</span>
                </label>
                <label class="flex items-center md:col-span-2">
                    <input type="checkbox" name="firmwareFormat" value="other" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Other: </span>
                    <input type="text" name="firmwareFormatOther" 
                        class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow">
                </label>
            </div>
        </div>
        
        <!-- Firmware Upgrade Support -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Firmware Upgrade Support</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-center">
                    <input type="radio" name="firmwareUpgradeSupport" value="yes" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="firmwareUpgradeSupport" value="no" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
            </div>
        </div>
        
        <!-- Upgrade Method -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Upgrade Method</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label class="flex items-center">
                    <input type="checkbox" name="upgradeMethod" value="usb" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">USB</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="upgradeMethod" value="ota" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">OTA (Over-the-Air)</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="upgradeMethod" value="sd-card" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">SD Card</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="upgradeMethod" value="serial-port" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Serial Port</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="upgradeMethod" value="jtag-swd" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">JTAG/SWD</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="upgradeMethod" value="web-interface" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Web Interface</span>
                </label>
                <label class="flex items-center md:col-span-3">
                    <input type="checkbox" name="upgradeMethod" value="other" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Other: </span>
                    <input type="text" name="upgradeMethodOther" 
                        class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow">
                </label>
            </div>
        </div>
        
        <!-- Firmware Encryption -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Firmware Encryption</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label class="flex items-center">
                    <input type="radio" name="firmwareEncryption" value="yes" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="firmwareEncryption" value="no" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="firmwareEncryption" value="configurable" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Optional / Configurable</span>
                </label>
            </div>
        </div>
        
        <!-- Firmware Signing / Authentication -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Firmware Signing / Authentication</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label class="flex items-center">
                    <input type="radio" name="firmwareSigning" value="yes" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="firmwareSigning" value="no" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="firmwareSigning" value="other" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Other: </span>
                    <input type="text" name="firmwareSigningOther" 
                        class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </label>
            </div>
        </div>
        
        <!-- Rollback Support -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Rollback Support</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-center">
                    <input type="radio" name="rollbackSupport" value="yes" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="rollbackSupport" value="no" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
            </div>
        </div>
        
        <!-- Bootloader Presence -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Bootloader Presence</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center">
                    <input type="radio" name="bootloader" value="yes" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="bootloader" value="no" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="bootloader" value="custom" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Custom</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="bootloader" value="third-party" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Third-party (e.g., U-Boot)</span>
                </label>
            </div>
        </div>
        
        <!-- Update Trigger Mechanism -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Update Trigger Mechanism</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center">
                    <input type="checkbox" name="updateTrigger" value="manual" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Manual</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="updateTrigger" value="automatic" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Automatic</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="updateTrigger" value="remote-command" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Remote Command</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="updateTrigger" value="other" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Other: </span>
                    <input type="text" name="updateTriggerOther" 
                        class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </label>
            </div>
        </div>
        
        <!-- Firmware Size Limitations -->
        <div class="p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Firmware Size Limitations</h4>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1" for="firmwareSizeLimit">
                    Maximum Size (e.g., in KB/MB)
                </label>
                <input type="text" id="firmwareSizeLimit" name="firmwareSizeLimit"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., 10MB or 4096KB">
            </div>
        </div>
    </div>`;
}
