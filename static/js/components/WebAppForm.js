/**
 * 生成Web-Application组件的表单HTML
 */
export function getWebApplicationFormHtml() {
    return `
        <div class="border-b border-gray-200 pb-6">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
                <i class="fa fa-globe text-green-500 mr-2"></i>
                Web Application Details
            </h3>
            
            <!-- 技术栈 -->
            <div class="mb-6">
                <h4 class="text-lg font-medium mb-3">Technology Stack</h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- 前端框架 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Frontend Framework</label>
                        <div class="space-y-2 mt-1">
                            <label class="flex items-center">
                                <input type="checkbox" name="frontendFramework" value="React" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">React</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="frontendFramework" value="Angular" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Angular</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="frontendFramework" value="Vue.js" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Vue.js</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="frontendFramework" value="Svelte" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Svelte</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="frontendFramework" value="Other" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Other: </span>
                                <input type="text" name="frontendFrameworkOther" 
                                    class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </label>
                        </div>
                    </div>
                    
                    <!-- 后端框架 -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Backend Framework</label>
                        <div class="space-y-2 mt-1">
                            <label class="flex items-center">
                                <input type="checkbox" name="backendFramework" value="Node.js" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Node.js</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="backendFramework" value="Django" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Django</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="backendFramework" value="Flask" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Flask</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="backendFramework" value="Spring Boot" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Spring Boot</span>
                            </label>
                            <label class="flex items-center">
                                <input type="checkbox" name="backendFramework" value="Other" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Other: </span>
                                <input type="text" name="backendFrameworkOther" 
                                    class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 数据库和存储 -->
            <div>
                <h4 class="text-lg font-medium mb-3">Database & Storage</h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Database Type</label>
                        <div class="space-y-2 mt-1">
                            <label class="flex items-center">
                                <input type="radio" name="databaseType" value="SQL" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">SQL (e.g., MySQL, PostgreSQL)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="databaseType" value="NoSQL" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">NoSQL (e.g., MongoDB, Redis)</span>
                            </label>
                            <label class="flex items-center">
                                <input type="radio" name="databaseType" value="Other" 
                                    class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                                <span class="ml-2 text-sm text-gray-700">Other: </span>
                                <input type="text" name="databaseTypeOther" 
                                    class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}