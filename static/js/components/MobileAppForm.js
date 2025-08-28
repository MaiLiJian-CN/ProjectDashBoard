/**
 * Mobile-app组件表单生成逻辑
 */
export function getMobileAppFormHtml() {
    return `
    <div class="border-b border-gray-200 pb-6">
        <h3 class="text-xl font-semibold mb-4 flex items-center">
            <i class="fa fa-mobile-alt text-green-500 mr-2 text-2xl"></i>
            Mobile Application Details
        </h3>
        
        <!-- Architecture Overview -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Architecture Overview</h4>
            <p class="text-gray-600 mb-3">What is the app architecture?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center">
                    <input type="radio" name="appArchitecture" value="standalone" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Local mobile application (standalone)</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="appArchitecture" value="client-server" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Client-server</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="appArchitecture" value="microservice" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Microservice-based</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="appArchitecture" value="serverless" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Serverless (e.g., AWS Lambda, Firebase Functions)</span>
                </label>
            </div>
        </div>
        
        <!-- Platform -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Platform</h4>
            <p class="text-gray-600 mb-3">Which platforms are supported?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label class="flex items-center">
                    <input type="radio" name="supportedPlatforms" value="android" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Android</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="supportedPlatforms" value="ios" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">iOS</span>
                </label>
                <label class="flex items-center">
                    <input type="radio" name="supportedPlatforms" value="both" 
                        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Both</span>
                </label>
            </div>
        </div>
        
        <!-- Third-Party SDKs -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Third-Party SDKs</h4>
            <p class="text-gray-600 mb-3">Are third-party SDKs used?</p>
            
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label class="flex items-center">
                        <input type="radio" name="thirdPartySdk" value="yes" 
                            class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-700">Yes</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="thirdPartySdk" value="no" 
                            class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-700">No</span>
                    </label>
                </div>
                
                <div id="sdkListContainer" class="mt-2">
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="sdkList">
                        Please list them (e.g., Firebase, Facebook SDK, payment gateways)
                    </label>
                    <textarea id="sdkList" name="sdkList" rows="3"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter SDKs separated by commas or new lines"></textarea>
                </div>
            </div>
        </div>
        
        <!-- API Consumption -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">API Consumption</h4>
            <p class="text-gray-600 mb-3">What types of APIs does the app consume?</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex items-center">
                    <input type="checkbox" name="apiTypes" value="rest" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">REST</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="apiTypes" value="graphql" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">GraphQL</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="apiTypes" value="grpc" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">gRPC</span>
                </label>
                <label class="flex items-center">
                    <input type="checkbox" name="apiTypes" value="other" 
                        class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">Other: </span>
                    <input type="text" name="apiTypesOther" 
                        class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                </label>
            </div>
        </div>
        
        <!-- Gateway or Proxy Layer -->
        <div class="p-4 bg-gray-50 rounded-lg">
            <h4 class="text-lg font-medium mb-3">Gateway or Proxy Layer</h4>
            <p class="text-gray-600 mb-3">Is there a gateway or proxy between the app and backend?</p>
            
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label class="flex items-center">
                        <input type="radio" name="usesGateway" value="yes" 
                            class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-700">Yes</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="usesGateway" value="no" 
                            class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                        <span class="ml-2 text-sm text-gray-700">No</span>
                    </label>
                </div>
                
                <div id="gatewayNameContainer" class="mt-2">
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="gatewayName">
                        Please name it (e.g., Kong, Apigee, AWS API Gateway)
                    </label>
                    <input type="text" id="gatewayName" name="gatewayName"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                </div>
            </div>
        </div>
    </div>`;
}
