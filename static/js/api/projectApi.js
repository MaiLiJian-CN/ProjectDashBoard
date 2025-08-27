/**
 * 项目相关API请求模块
 * 集中管理所有与项目相关的接口调用
 */
export const projectApi = {
    /**
     * 获取所有项目列表
     * @returns {Promise<Array>} 项目数组
     */
    getAllProjects: async function() {
        try {
            const response = await fetch('/api/projects');
            
            if (!response.ok) {
                throw new Error(`获取项目列表失败: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.code !== 200 || !Array.isArray(data.data)) {
                throw new Error('项目数据格式不正确');
            }
            
            return data.data;
        } catch (error) {
            console.error('getAllProjects error:', error);
            throw error;
        }
    },
    
    /**
     * 根据ID获取单个项目详情
     * @param {string} id 项目ID
     * @returns {Promise<Object>} 项目详情对象
     */
    getProjectById: async function(id) {
        try {
            // 新增：发起根据ID查询的请求
            const response = await fetch(`/api/projects/${id}`);
            
            if (!response.ok) {
                throw new Error(`获取项目详情失败: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.code !== 200 || typeof data.data !== 'object') {
                throw new Error('项目详情数据格式不正确');
            }
            
            return data.data;
        } catch (error) {
            console.error(`getProjectById(${id}) error:`, error);
            throw error;
        }
    },
    
    /**
     * 更新项目信息
     * @param {string} id 项目ID
     * @param {Object} projectData 要更新的项目数据
     * @returns {Promise<Object>} 更新结果
     */
    updateProject: async function(id, projectData) {
        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectData),
            });
            console.log(response)
            if (!response.ok) {
                throw new Error(`更新项目失败: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.code !== 200) {
                throw new Error(data.message || '更新项目失败');
            }
            
            return data.data;
        } catch (error) {
            console.error(`updateProject(${id}) error:`, error);
            throw error;
        }
    },
    
    /**
     * 删除项目
     * @param {string} id 项目ID
     * @returns {Promise<Object>} 删除结果
     */
    deleteProject: async function(id) {
        try {
            const response = await fetch(`/api/projects/${id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error(`删除项目失败: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.code !== 200) {
                throw new Error(data.message || '删除项目失败');
            }
            
            return data.data;
        } catch (error) {
            console.error(`deleteProject(${id}) error:`, error);
            throw error;
        }
    }
};
