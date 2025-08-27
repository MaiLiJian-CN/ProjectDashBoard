import { projectApi } from './api/projectApi.js';

// 页面加载完成后初始化图表
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 显示加载状态
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading';
        loadingDiv.className = 'fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50';
        loadingDiv.innerHTML = '<div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>';
        document.body.appendChild(loadingDiv);

        // 检查ECharts是否加载
        if (typeof echarts === 'undefined') {
            throw new Error('ECharts library is not loaded');
        }

        // 获取项目数据
        const projects = await projectApi.getAllProjects();
        if (!projects || projects.length === 0) {
            throw new Error('No project data available for analysis');
        }

        // 初始化ECharts实例
        const typePieChart = echarts.init(document.getElementById('typePieChart'));
        const divisionBarChart = echarts.init(document.getElementById('divisionBarChart'));
        const timelineLineChart = echarts.init(document.getElementById('timelineLineChart'));

        // 处理数据
        const typeData = processTypeDistribution(projects);
        const divisionData = processDivisionProjects(projects);
        const timelineData = processProjectTimeline(projects);

        // 设置图表配置并渲染
        typePieChart.setOption(getPieOption(typeData));
        divisionBarChart.setOption(getVerticalBarOption(divisionData)); // 使用新的竖向柱状图配置
        timelineLineChart.setOption(getLineOption(timelineData));

        // 监听窗口大小变化
        window.addEventListener('resize', () => {
            typePieChart.resize();
            divisionBarChart.resize();
            timelineLineChart.resize();
        });

        // 隐藏加载状态
        document.body.removeChild(loadingDiv);

    } catch (error) {
        console.error('Analysis chart error:', error);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 mx-4';
        errorDiv.textContent = `Error: ${error.message}`;
        document.querySelector('main').prepend(errorDiv);
        document.getElementById('loading')?.remove();
    }
});

/**
 * 处理项目类型分布数据（饼图）
 */
function processTypeDistribution(projects) {
    const typeMap = {};
    const total = projects.length;
    
    projects.forEach(project => {
        const type = project.Type || 'Unknown';
        typeMap[type] = (typeMap[type] || 0) + 1;
    });
    
    return {
        names: Object.keys(typeMap),
        values: Object.values(typeMap),
        total: total
    };
}

/**
 * 处理部门项目数量数据（柱状图）
 */
function processDivisionProjects(projects) {
    const divisionMap = {};
    projects.forEach(project => {
        const division = project.Division || 'Unknown';
        divisionMap[division] = (divisionMap[division] || 0) + 1;
    });
    return {
        divisions: Object.keys(divisionMap),
        counts: Object.values(divisionMap)
    };
}

/**
 * 处理项目时间趋势数据（折线图）
 */
function processProjectTimeline(projects) {
    const yearData = {};
    projects.forEach(project => {
        const startYear = project.Start?.toString() || 'Unknown';
        const finishYear = project.Finish?.toString() || 'Unknown';

        if (!yearData[startYear]) yearData[startYear] = { start: 0, finish: 0 };
        if (!yearData[finishYear]) yearData[finishYear] = { start: 0, finish: 0 };

        yearData[startYear].start++;
        yearData[finishYear].finish++;
    });

    const sortedYears = Object.keys(yearData).sort((a, b) => a - b);
    return {
        years: sortedYears,
        startCounts: sortedYears.map(year => yearData[year].start),
        finishCounts: sortedYears.map(year => yearData[year].finish)
    };
}

/**
 * 饼图配置（项目类型分布）- 显示占比
 */
function getPieOption(data) {
    return {
        tooltip: { 
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: { top: '5%', left: 'center' },
        series: [{
            name: 'Project Type',
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: { 
                show: true,
                position: 'outside',
                formatter: '{b}: {d}%'
            },
            labelLine: { show: true },
            data: data.names.map((name, i) => ({ 
                name, 
                value: data.values[i] 
            }))
        }]
    };
}

/**
 * 竖向柱状图配置（部门项目数量）- 确保柱子是垂直方向
 */
function getVerticalBarOption(data) {
    return {
        tooltip: { 
            trigger: 'axis', 
            axisPointer: { type: 'shadow' } 
        },
        grid: { 
            left: '3%', 
            right: '4%', 
            bottom: '15%',  // 增加底部空间，防止标签被截断
            containLabel: true 
        },
        // 竖向柱状图配置：
        // X轴为类目轴（部门名称）
        xAxis: { 
            type: 'category', 
            data: data.divisions,
            axisLabel: {
                rotate: 45,    // 旋转标签，避免文字重叠
                interval: 0,   // 显示所有标签
                margin: 15     // 增加与轴线的距离
            },
            axisTick: {
                alignWithLabel: true  // 刻度与标签对齐
            }
        },
        // Y轴为数值轴（项目数量）
        yAxis: { 
            type: 'value',
            name: 'Number of Projects',  // 显示轴名称
            nameLocation: 'middle',
            nameGap: 30
        },
        series: [{
            name: 'Projects',
            type: 'bar',  // 明确指定为柱状图类型
            data: data.counts,
            itemStyle: { 
                color: '#3b82f6',
                borderRadius: [4, 4, 0, 0]  // 顶部圆角，底部直角
            },
            // 在柱子顶部显示数值
            label: {
                show: true,
                position: 'top',
                formatter: '{c}',
                textStyle: {
                    color: '#333'
                }
            },
            // 调整柱子宽度
            barWidth: '60%'
        }]
    };
}

/**
 * 折线图配置（项目时间趋势）
 */
function getLineOption(data) {
    return {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Started Projects', 'Finished Projects'], top: 0 },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'category', boundaryGap: false, data: data.years },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Started Projects',
                type: 'line',
                data: data.startCounts,
                lineStyle: { color: '#10b981' }
            },
            {
                name: 'Finished Projects',
                type: 'line',
                data: data.finishCounts,
                lineStyle: { color: '#ef4444' }
            }
        ]
    };
}
    