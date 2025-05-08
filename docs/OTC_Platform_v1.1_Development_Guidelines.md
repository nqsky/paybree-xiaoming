# OTC 平台 1.1 版本开发规范

## 1. 文件与目录规范

### 1.1 文件命名与结构
- **严格保持文件名一致性**：卖出流程页面的文件名必须与买入流程对应页面保持一致
  - 例如：`buy/client/margin.html` → `sell/client/margin.html`
  - 例如：`buy/merchant/margin-waiting.html` → `sell/merchant/margin-waiting.html`
- **遵循现有目录结构**：
  ```
  trading/
    └── process/
        ├── buy/
        │   ├── client/    (用户视角)
        │   └── merchant/  (商家视角)
        └── sell/
            ├── client/    (用户视角)
            └── merchant/  (商家视角)
  ```
- **组件复用**：通用组件应放置在 `components/` 目录下，以便于多处引用

### 1.2 引用关系
- 保持相对路径引用的一致性
- CSS 样式表应统一引用 `../../../css/common.css`
- 图标库使用 Font Awesome：`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css`

## 2. 页面结构规范

### 2.1 基础结构
- 所有页面必须保持相同的基础 HTML 结构
- 文档类型声明统一使用：`<!DOCTYPE html>`
- 默认语言设置为英文：`<html lang="en-US">`
- 所有页面必须包含多语言支持的标题:
  ```html
  <title>
      <span class="zh">页面标题中文</span>
      <span class="en">Page Title English</span>
  </title>
  ```

### 2.2 页面布局
- **严格保持与对应页面相同的布局结构**
- 所有页面应采用标准的两栏布局结构（操作区 + 信息区）
- 保持页面各元素的相对位置不变
- 所有页面必须包含的组件：
  1. 头部导航栏
  2. 面包屑导航
  3. 进度条
  4. 主要内容区（通常为两栏结构）
  5. 底部操作按钮

### 2.3 进度条
- 进度条必须使用统一的设计和结构
- 每页都需要显示完整的流程步骤
- 当前步骤必须高亮显示
- 步骤名称必须支持中英文切换

## 3. 样式规范

### 3.1 颜色系统
- 严格使用已定义的色彩变量：
  ```css
  :root {
      --color-primary: #16C784;
      --color-primary-hover: #20E19F;
      --color-white: #FFFFFF;
      --color-gray-50: #F5F5F5;
      --color-gray-600: #666666;
      --color-gray-900: #333333;
      --color-border: #E5E5E5;
      --color-error: #FF4D4F;
  }
  ```
- 禁止使用自定义的颜色值，必须通过 CSS 变量引用

### 3.2 字体与文本
- 字体系统统一使用：
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  ```
- 标题字号与权重：
  - 主标题：24px, 600
  - 副标题：14px, 400
  - 信息标签：14px, 400
  - 信息值：20px, 600

### 3.3 空间与大小
- 统一使用现有的间距和大小
- 内边距（padding）:
  - 页面容器：24px
  - 内容区块：32px
  - 表单元素：12px-16px
- 外边距（margin）:
  - 块间距：24px-32px
  - 元素内部间距：8px-16px

### 3.4 组件样式
- 按钮使用统一样式:
  ```css
  .margin-btn {
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
  }
  ```
- 表单元素使用统一样式
- 卡片使用统一样式:
  ```css
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  ```

## 4. 交互规范

### 4.1 表单交互
- 所有表单元素必须有相应的视觉反馈（悬停、聚焦状态）
- 选项选择后的状态必须明确（使用 `.active` 类）
- 表单验证必须有清晰的错误提示
- 长表单应当分步骤显示，减轻用户认知负担

### 4.2 按钮交互
- 主按钮使用实色背景（`margin-btn-primary`）
- 次要按钮使用边框（`margin-btn-default`）
- 所有按钮必须有悬停状态的样式变化
- 危险操作按钮必须使用警示色

### 4.3 链接与导航
- 所有链接必须有悬停状态
- 导航链接使用统一的活跃状态标识
- 面包屑导航必须完整，体现用户当前位置

## 5. 多语言支持

### 5.1 语言切换
- 所有文本必须支持中英文双语显示
- 使用 CSS 类来控制语言显示切换:
  ```css
  .zh, .en {
      display: none;
  }
  html[lang="zh-CN"] .zh {
      display: inline;
  }
  html[lang="en-US"] .en {
      display: inline;
  }
  ```

### 5.2 语言变量
- 所有文本必须使用以下结构:
  ```html
  <span class="zh">中文内容</span>
  <span class="en">English content</span>
  ```
- 动态生成的文本也需应用相同的多语言逻辑

### 5.3 字段占位符
- 表单占位文本必须支持多语言:
  ```html
  <input data-placeholder-zh="请输入" data-placeholder-en="Please enter">
  ```
- 通过 JavaScript 动态设置占位符:
  ```js
  input.placeholder = input.dataset[`placeholder${lang === 'zh-CN' ? 'Zh' : 'En'}`];
  ```

## 6. JavaScript 规范

### 6.1 基本规范
- 严格使用现代 JavaScript 语法
- 避免使用全局变量
- 为所有函数添加合适的注释
- 使用事件委托处理重复元素的事件

### 6.2 命名规范
- 变量和函数使用驼峰命名法 (camelCase)
- 常量使用全大写 (UPPER_CASE)
- 类使用首字母大写 (PascalCase)
- DOM 元素变量通常使用 `el` 前缀或后缀

### 6.3 交互处理
- 页面加载后立即初始化事件监听
- 使用 DOM 操作修改样式类，而不是直接修改内联样式
- 所有交互状态变化必须有对应的视觉反馈
- 表单提交前必须进行数据验证

### 6.4 语言切换
- 语言设置必须保存到 localStorage
- 切换语言时必须同时更新所有动态内容
- 语言切换函数必须在初始化时调用
- 语言切换必须考虑所有动态元素

## 7. 自检要求

### 7.1 每次开发完成后必须进行自检
- **布局对比**：与参考页面进行布局对比，确保一致
- **功能测试**：测试所有交互功能是否正常运行
- **多语言测试**：测试中英文切换功能是否正常
- **跨浏览器测试**：至少测试在 Chrome、Firefox、Safari 三种浏览器中的表现
- **响应式测试**：测试在不同设备尺寸下的显示效果

### 7.2 自检清单
1. 文件命名是否与参考页面一致
2. 布局结构是否与参考页面一致
3. 进度条样式和文字是否与参考页面一致
4. 页面是否包含聊天入口或备注
5. 所有文本是否支持中英文切换
6. 所有交互功能是否正常
7. 表单验证是否有效
8. 按钮和链接是否正常工作
9. 是否存在明显的样式错误
10. 中文和英文内容是否正确对应

## 8. 开发流程

### 8.1 开发顺序
1. 先复制参考页面框架结构
2. 修改内容为目标页面的业务逻辑
3. 调整样式以符合新页面需求
4. 添加交互逻辑
5. 进行自检
6. 提交代码

### 8.2 代码提交
- 提交前必须进行代码格式化
- 提交信息必须清晰描述修改内容
- 相关页面应当一起提交，确保功能完整

## 9. 常见问题解决

### 9.1 布局不一致问题
- 使用浏览器开发工具对比参考页面与当前页面的 CSS 差异
- 确保容器大小、间距和对齐方式一致
- 检查 CSS 类名是否正确应用

### 9.2 多语言显示问题
- 检查 HTML 结构是否正确包含语言切换元素
- 验证语言切换脚本是否正确执行
- 确保所有文本内容都有对应的多语言版本

### 9.3 交互功能问题
- 检查 JavaScript 错误控制台
- 验证事件绑定是否正确
- 确保 DOM 选择器正确匹配目标元素

## 10. 文档和资源

### 10.1 参考文档
- HTML/CSS 代码规范：`docs/code-standards.md`
- 多语言术语表：`docs/i18n-glossary.md`
- UI 设计规范：`docs/ui-guidelines.md`

### 10.2 有用资源
- Font Awesome 图标库: https://fontawesome.com/icons
- CSS 命名规范: https://www.w3schools.com/css/css_naming.asp
- JavaScript 最佳实践: https://github.com/ryanmcdermott/clean-code-javascript 