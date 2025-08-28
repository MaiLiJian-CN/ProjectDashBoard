/**
         * 生成IoT Device组件的表单HTML
        */
export function getIoTDeviceFormHtml() {
    return `
            <div class="border-b border-gray-200 pb-6">
                <h3 class="text-xl font-semibold mb-4 flex items-center">
                    <i class="fa fa-microchip text-purple-500 mr-2"></i>
                    IoT Device Details
                </h3>
                
                <!-- Connectivity -->
                <div class="mb-6">
                    <h4 class="text-lg font-medium mb-3">Connectivity (Check all that apply)</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label class="flex items-center">
                            <input type="checkbox" name="iotConnectivity" value="rj45" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">RJ-45 (Ethernet)</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotConnectivity" value="wifi" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Wi-Fi</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotConnectivity" value="bluetooth" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Bluetooth</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotConnectivity" value="zigbee" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Zigbee</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotConnectivity" value="cellular" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Cellular (e.g., 4G/5G)</span>
                        </label>
                    </div>
                </div>
                
                <!-- Used Ports -->
                <div class="mb-6">
                    <h4 class="text-lg font-medium mb-3">Used Ports (Check all that apply)</h4>
                    
                    <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Secure Access & Management</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="ssh" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">SSH</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="snmp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">SNMP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="snmpv1" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Snmp v1</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="snmpv2" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Snmp v2</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="snmpv3" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Snmp v3</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="ftp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">FTP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="sftp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">SFTP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="ftps" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">FTPS</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Web & File Transfer</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="http" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">HTTP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="https" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">HTTPs</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="websocket" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">WebSocket</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Streaming & Media</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="rtsp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">RTSP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="rtp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">RTP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="hls" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">HLS</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="mpeg-dash" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">MPEG-DASH</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">IoT & Messaging</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="mqtt" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">MQTT</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="coap" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">CoAP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="amqp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">AMQP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="xmpp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">XMPP</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Network Services</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="dns" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">DNS</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="dhcp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">DHCP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="ntp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">NTP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="icmp" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">ICMP</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="telnet" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Telnet</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Device & System Monitoring</h5>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="syslog" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Syslog</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="modbus" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Modbus</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="bacnet" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">BACnet</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="iotPorts" value="custom-other" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Custom/Other</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="customPort">
                                Custom Port (please specify)
                            </label>
                            <input type="text" id="customPort" name="customPort"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="otherProtocol">
                                Other Protocol (please specify)
                            </label>
                            <input type="text" id="otherProtocol" name="otherProtocol"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        </div>
                    </div>
                </div>
                
                <!-- Operating System -->
                <div class="mb-6">
                    <h4 class="text-lg font-medium mb-3">Operating System (single choice)</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <label class="flex items-center">
                            <input type="radio" name="iotOs" value="linux" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Linux</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="iotOs" value="embedded-linux" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Embedded Linux</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="iotOs" value="rtos" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">RTOS</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="iotOs" value="arm-mbed" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">ARM Mbed OS</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="iotOs" value="zephyr" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Zephyr</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="iotOs" value="freertos" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">FreeRTOS</span>
                        </label>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1" for="osVersion">
                            OS Version
                        </label>
                        <input type="text" id="osVersion" name="osVersion"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    </div>
                </div>
                
                <!-- Device Interfaces -->
                <div class="mb-6">
                    <h4 class="text-lg font-medium mb-3">Device Interfaces</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                        <label class="flex items-center">
                            <input type="checkbox" name="iotInterfaces" value="usb" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">USB</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotInterfaces" value="uart" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">UART</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotInterfaces" value="can" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">CAN</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotInterfaces" value="spi" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">SPI</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotInterfaces" value="i2c" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">I2C</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" name="iotInterfaces" value="gpio" 
                                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">GPIO</span>
                        </label>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1" for="otherInterface">
                            Other
                        </label>
                        <input type="text" id="otherInterface" name="otherInterface"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    </div>
                </div>
                
                <!-- Hardware -->
                <div class="mb-6">
                    <h4 class="text-lg font-medium mb-3">Hardware</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="processor">
                                Processor/Chipset
                            </label>
                            <input type="text" id="processor" name="processor"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="memory">
                                Memory (RAM)
                            </label>
                            <input type="text" id="memory" name="memory"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="storage">
                                Storage (Flash/eMMC)
                            </label>
                            <input type="text" id="storage" name="storage"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        </div>
                    </div>
                    
                    <div>
                        <h5 class="font-medium text-gray-700 mb-2">Power Supply Type</h5>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            <label class="flex items-center">
                                <input type="checkbox" name="powerSupply" value="battery" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Battery</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="powerSupply" value="poe" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">PoE (Power over Ethernet)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="powerSupply" value="dc-adapter" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">DC Adapter</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="powerSupply" value="usb" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">USB</span>
                            </label>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1" for="otherPower">
                                Other
                            </label>
                            <input type="text" id="otherPower" name="otherPower"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                        </div>
                    </div>
                </div>
            </div>`;
}