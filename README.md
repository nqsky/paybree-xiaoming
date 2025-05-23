## Paybree 交易平台

### 项目概述
Paybree 是一个安全、可靠的加密货币交易平台，致力于为用户提供最优质的服务。

### 最新更新
1. 优化了保证金协商页面的交互体验：
   - 调整了保证金选项的布局，使所有选项（20%、50%、70%、100%和自定义）在同一行显示
   - 优化了"自定义"选项的交互逻辑，点击后在下方显示输入框
   - 统一了所有选项的样式和大小
   - 改进了选项的响应式布局

2. 页面组件优化：
   - 优化了页面头部导航栏的样式
   - 改进了进度条组件的显示效果
   - 优化了风险提示区域的样式
   - 统一了按钮和输入框的样式

3. 交互逻辑优化：
   - 完善了保证金比例的选择和输入逻辑
   - 优化了金额计算和显示功能
   - 增强了表单验证功能
   - 改进了按钮的状态管理

### 项目结构
```
Paybree/
├── components/         # 公共组件
│   ├── header/        # 头部导航组件
│   ├── buy-progress/  # 进度条组件
│   └── footer/        # 底部导航组件
├── css/               # 样式文件
│   └── common.css     # 公共样式
└── trading/          # 交易相关页面
    └── process/
        └── buy/
            └── margin.html  # 保证金协商页面
```

### 开发指南
1. 克隆项目到本地
2. 确保已安装所需依赖
3. 使用现代浏览器打开页面（推荐 Chrome、Firefox、Safari 最新版本）

### 技术栈
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome 图标库

### 浏览器支持
- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

### 保证金协商流程

1. 发起协商
   - 选择保证金类型（按比例/固定金额）
   - 设置具体金额或比例
   - 点击"下一步"提交协商请求

2. 等待商家确认
   - 显示等待确认状态
   - 显示预估响应时间提示
   - 提供取消协商的选项

3. 商家响应
   - 接受：直接进入创建订单步骤
   - 拒绝：显示拒绝原因，用户可重新发起
   - 修改：显示商家的建议金额/比例，用户可选择接受或重新协商

4. 协商结果
   - 协商成功：进入创建订单页面
   - 协商失败：返回商家详情页面

### 待办事项
- [ ] 完善移动端适配
- [ ] 添加更多交易类型支持
- [ ] 优化表单验证逻辑
- [ ] 添加多语言支持

### 贡献指南
欢迎提交 Issue 和 Pull Request 来帮助改进项目。

### 许可证
© 2025 Paybree. All rights reserved. 