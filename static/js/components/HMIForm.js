/**
         * 生成HMI组件的表单HTML
         */

export function getHMIFormHtml() {
    return `
            <div class="border-b border-gray-200 pb-6">
                <h3 class="text-xl font-semibold mb-4 flex items-center">
                    <i class="fa fa-desktop text-green-500 mr-2"></i>
                    HMI Details
                </h3>
                
                <!-- 1. Development Source -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">1. Development Source</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label class="flex items-center">
                            <input type="radio" name="hmiDevelopment" value="self-developed" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Self-developed</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="hmiDevelopment" value="vendor" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">From vendor</span>
                        </label>
                    </div>
                    
                    <div class="mt-4">
                        <label class="block text-sm font-medium text-gray-700 mb-1" for="vendorName">
                            Vendor Name
                        </label>
                        <input type="text" id="vendorName" name="vendorName"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    </div>
                </div>
                
                <!-- 2. Operating System -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">2. Operating System</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <label class="flex items-center">
                            <input type="radio" name="hmiOs" value="linux" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Linux</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="hmiOs" value="embedded-linux" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Embedded Linux</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="hmiOs" value="rtos" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">RTOS</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="hmiOs" value="android" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Android</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="hmiOs" value="windows-embedded" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Windows Embedded</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="hmiOs" value="other" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Other: </span>
                            <input type="text" name="hmiOsOther" 
                                class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </label>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1" for="hmiOsVersion">
                            OS Version
                        </label>
                        <input type="text" id="hmiOsVersion" name="hmiOsVersion"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    </div>
                </div>
                
                <!-- 3. Connectivity Options -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">3. Connectivity Options (Check all that apply)</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="rj45" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">RJ-45 (Ethernet)</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="wifi" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Wi-Fi</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="bluetooth" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Bluetooth</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="zigbee" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Zigbee</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="cellular" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Cellular (e.g., 4G/5G)</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="usb" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">USB</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="rs" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">RS-232 / RS-485</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="can-bus" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">CAN Bus</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiConnectivity" value="other" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Other: </span>
                            <input type="text" name="hmiConnectivityOther" 
                                class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </label>
                    </div>
                </div>
                
                <!-- 4. Input Methods Supported -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">4. Input Methods Supported (Check all that apply)</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="full-keyboard" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Full Keyboard</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="numeric-keypad" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Numeric Keypad</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="physical-buttons" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Physical Buttons</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="touchscreen" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Touchscreen</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="capacitive-touch" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Capacitive Touch</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="resistive-touch" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Resistive Touch</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="voice-input" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Voice Input</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiInputMethods" value="other" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Other: </span>
                            <input type="text" name="hmiInputMethodsOther" 
                                class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </label>
                    </div>
                </div>
                
                <!-- 5. Firmware Upgrade Support -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">5. Firmware Upgrade Support</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <label class="flex items-center">
                            <input type="radio" name="firmwareUpgrade" value="yes" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="firmwareUpgrade" value="no" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">No</span>
                        </label>
                    </div>
                    
                    <div>
                        <h5 class="font-medium text-gray-700 mb-2">Upgrade Method</h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
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
                                <input type="checkbox" name="upgradeMethod" value="other" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Other: </span>
                                <input type="text" name="upgradeMethodOther" 
                                    class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </label>
                        </div>
                    </div>
                </div>
                
                <!-- 6. Display Specifications -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">6. Display Specifications</h4>
                    
                    <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Display Type</h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <label class="flex items-center">
                                <input type="radio" name="displayType" value="lcd" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">LCD</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="displayType" value="tft" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">TFT</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="displayType" value="oled" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">OLED</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="displayType" value="other" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Other: </span>
                                <input type="text" name="displayTypeOther" 
                                    class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </label>
                        </div>
                    </div>
                    
                    <div>
                        <h5 class="font-medium text-gray-700 mb-2">Touch Support</h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label class="flex items-center">
                                <input type="radio" name="touchSupport" value="yes" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Yes</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="touchSupport" value="no" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">No</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <!-- 7. Supported Protocols/Interfaces -->
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">7. Supported Protocols/Interfaces</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiProtocols" value="modbus" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Modbus</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiProtocols" value="opc-ua" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">OPC UA</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiProtocols" value="canopen" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">CANopen</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiProtocols" value="mqtt" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">MQTT</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiProtocols" value="http-https" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">HTTP/HTTPS</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiProtocols" value="websocket" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">WebSocket</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiProtocols" value="other" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Other: </span>
                            <input type="text" name="hmiProtocolsOther" 
                                class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </label>
                    </div>
                </div>
                
                <!-- 8. Power Supply -->
                <div class="p-4 bg-gray-50 rounded-lg">
                    <h4 class="text-lg font-medium mb-3">8. Power Supply</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiPowerSupply" value="dc-input" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">DC Input</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiPowerSupply" value="usb-powered" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">USB Powered</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiPowerSupply" value="battery" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Battery</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiPowerSupply" value="poe" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">PoE (Power over Ethernet)</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="hmiPowerSupply" value="other" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Other: </span>
                            <input type="text" name="hmiPowerSupplyOther" 
                                class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </label>
                    </div>
                </div>
            </div>`;
}