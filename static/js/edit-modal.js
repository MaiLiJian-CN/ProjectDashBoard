import { projectApi } from './api/projectApi.js';

/**
 * 项目编辑弹窗组件
 * 负责项目编辑的UI展示和交互逻辑
 */
export class EditModal {
    constructor() {
        this.modal = null;
        this.form = null;
        this.currentProjectId = null;

        // 初始化弹窗
        this.init();
    }

    /**
     * 初始化弹窗
     */
    async init() {
        // 加载弹窗HTML
        await this.loadTemplate();

        // 获取DOM元素
        this.modal = document.getElementById('editModal');
        this.modalContent = document.getElementById('modalContent');
        this.form = document.getElementById('editForm');
        this.closeBtn = document.getElementById('closeModal');
        this.cancelBtn = document.getElementById('cancelEdit');
        this.saveBtn = document.getElementById('saveEdit');

        // 绑定事件
        this.bindEvents();
    }

    /**
     * 加载弹窗HTML模板
     */
    async loadTemplate() {
        try {
            const response = await fetch('/static/html/edit-modal.html');
            const html = await response.text();
            document.body.insertAdjacentHTML('beforeend', html);
        } catch (error) {
            console.error('Failed to load edit modal template:', error);
            throw new Error('加载编辑弹窗失败');
        }
    }

    /**
     * 绑定事件处理函数
     */
    bindEvents() {
        // 关闭弹窗
        this.closeBtn.addEventListener('click', () => this.hide());
        this.cancelBtn.addEventListener('click', () => this.hide());

        // 点击外部关闭
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        });

        // 保存修改
        this.saveBtn.addEventListener('click', async () => {
            await this.handleSave();
        });

        // 阻止表单默认提交
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    /**
     * 显示弹窗并加载项目数据
     * @param {string} projectId 项目ID
     */
    // 显示模态框
    async show(projectId) {
        try {
            this.currentProjectId = projectId;
            const project = await projectApi.getProjectById(projectId);
            this.fillForm(project);

            // 步骤1：显示遮罩层
            this.modal.classList.remove('hidden');

            // 步骤2：强制浏览器重绘（确保动画生效）
            void this.modal.offsetWidth;

            // 步骤3：显示内容（移除透明和缩放）
            this.modalContent.classList.remove('scale-95', 'opacity-0');
            this.modalContent.classList.add('scale-100', 'opacity-100');

        } catch (error) {
            console.error('加载项目详情失败:', error);
            alert('加载项目详情失败: ' + error.message);
        }
    }

    // 隐藏模态框
    hide() {
        // 步骤1：隐藏内容（恢复透明和缩放）
        this.modalContent.classList.remove('scale-100', 'opacity-100');
        this.modalContent.classList.add('scale-95', 'opacity-0');

        // 步骤2：等待动画结束后再隐藏遮罩层（与CSS过渡时间一致）
        setTimeout(() => {
            this.modal.classList.add('hidden');
            this.form.reset();
            this.currentProjectId = null;
        }, 300); // 对应CSS的 duration-300
    }

    /**
     * 填充表单数据
     * @param {Object} project 项目数据
     */
    fillForm(project) {
        // console.log(project)
        document.getElementById('projectNo').value = project.No || '';
        document.getElementById('projectName').value = project.Project || '';
        document.getElementById('projectStart').value = project.Start || '';
        document.getElementById('projectFinish').value = project.Finish || '';
        document.getElementById('projectDivision').value = project.Division || '';
        document.getElementById('projectComponent').value = project.Component || '';
        document.getElementById('projectStatus').value = project.Status || '';
        document.getElementById('projectGate').value = project.Gate || '';
        document.getElementById('projectType').value = project.Type || '';
        document.getElementById('projectScope').value = project.Scope || '';
    }

    /**
     * 处理保存逻辑
     */
    async handleSave() {
        if (!this.currentProjectId) return;

        // 工具函数：将字符串安全转换为uint
        const toUint = (value) => {
            // 空值返回null或0（根据后端需求决定）
            if (!value || value.trim() === '') {
                return null; // 或 return 0;
            }

            // 解析为整数
            const num = parseInt(value, 10);

            // 检查是否为有效整数且大于等于0（uint不能为负数）
            if (isNaN(num) || num < 0) {
                throw new Error(`无效的数值: ${value}`);
            }

            return num; // 此时num为uint安全的整数
        };

        // 构建表单数据并转换类型
        const formData = {
            // 转换为uint
            No: toUint(document.getElementById('projectNo').value),
            Project: document.getElementById('projectName').value,
            Start: toUint(document.getElementById('projectStart').value),
            Finish: toUint(document.getElementById('projectFinish').value),
            Division: document.getElementById('projectDivision').value,
            Component: document.getElementById('projectComponent').value,
            Status: document.getElementById('projectStatus').value,
            Gate: toUint(document.getElementById('projectGate').value),
            Type: document.getElementById('projectType').value,
            Scope: document.getElementById('projectScope').value
        };

        try {
            // 调用API更新项目

            await projectApi.updateProject(this.currentProjectId, formData);
            // 隐藏弹窗
            this.hide();
            // 触发项目更新事件，通知其他组件刷新数据
            window.dispatchEvent(new CustomEvent('projectUpdated', {
                detail: { id: this.currentProjectId }
            }));
        } catch (error) {
            console.error('Failed to save project:', error);
            alert('保存项目失败: ' + error.message);
        }
    }
}
