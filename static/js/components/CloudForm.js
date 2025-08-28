/**
    * 生成Cloud组件的表单HTML
    */
export function getCloudFormHtml() {
    return `
        <div class="border-b border-gray-200 pb-6">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
                <i class="fa fa-cloud text-blue-500 mr-2"></i>
                Cloud Details
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Cloud Provider</label>
                    <div class="space-y-2 mt-1">
                        <label class="flex items-center">
                            <input type="radio" name="cloudProvider" value="AWS" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">AWS (Amazon Web Services)</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="cloudProvider" value="Azure" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Microsoft Azure</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="cloudProvider" value="GCP" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Google Cloud Platform (GCP)</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="cloudProvider" value="Alibaba" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Alibaba Cloud</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="cloudProvider" value="Other" 
                                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500">
                            <span class="ml-2 text-sm text-gray-700">Other: </span>
                            <input type="text" name="cloudProviderOther" 
                                class="ml-2 px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        </label>
                    </div>
                </div>
            </div>
        </div>`;
}