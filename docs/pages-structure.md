# Paybree OTC平台页面结构文档

## 1. 主要页面分类

本文档列出了Paybree OTC平台的所有页面，按功能进行分类。

## 2. 公共页面

### 2.1 首页和关于

| 页面路径 | 功能描述 |
|---------|---------|
| `/index.html` | 网站首页 |
| `/about/index.html` | 关于我们主页 |
| `/about/company.html` | 公司介绍页面 |
| `/about/contact.html` | 联系我们页面 |

### 2.2 帮助中心

| 页面路径 | 功能描述 |
|---------|---------|
| `/help/faq.html` | 常见问题解答页面 |
| `/help/legal/terms.html` | 服务条款页面 |
| `/help/legal/privacy.html` | 隐私政策页面 |
| `/help/legal/disclaimer.html` | 免责声明页面 |

### 2.3 支持与文档

| 页面路径 | 功能描述 |
|---------|---------|
| `/support/index.html` | 支持中心主页 |
| `/support/business.html` | 商务合作页面 |
| `/docs/index.html` | 文档中心 |

## 3. 用户认证

| 页面路径 | 功能描述 |
|---------|---------|
| `/auth/login.html` | 用户登录页面 |
| `/auth/verify.html` | 账户验证页面 |
| `/auth/kyc-select.html` | KYC身份验证选择页面 |
| `/auth/kyc-user.html` | 普通用户KYC验证页面 |
| `/auth/kyc-merchant.html` | 商家KYC验证页面 |
| `/auth/kyc-success.html` | KYC验证成功页面 |
| `/auth/kyc-failed.html` | KYC验证失败页面 |

## 4. 交易功能

### 4.1 交易大厅和商家详情

| 页面路径 | 功能描述 |
|---------|---------|
| `/trading/quotes.html` | 交易大厅报价页面 - 支持表格/卡片视图切换，网络筛选 |
| `/trading/merchant-detail.html` | 商家详情页面 - 展示商家信息和提供交易入口 |
| `/trading/guide.html` | 交易指南页面 |
| `/trading/fees.html` | 费用说明页面 |

### 4.2 购买流程 (用户视角)

| 页面路径 | 功能描述 |
|---------|---------|
| `/trading/process/buy/client/margin.html` | 交易保证金协商页面 |
| `/trading/process/buy/client/margin-deposit.html` | 交易保证金缴纳页面 |
| `/trading/process/buy/client/margin-waiting.html` | 等待保证金确认页面 |
| `/trading/process/buy/client/pay.html` | 付款页面 |
| `/trading/process/buy/client/waiting-usdt.html` | 等待USDT转账页面 |
| `/trading/process/buy/client/complete.html` | 交易完成页面 |

### 4.3 购买流程 (商家视角)

| 页面路径 | 功能描述 |
|---------|---------|
| `/trading/process/buy/merchant/margin.html` | 保证金协商页面 |
| `/trading/process/buy/merchant/margin-deposit.html` | 保证金缴纳页面 |
| `/trading/process/buy/merchant/margin-waiting-payment.html` | 等待用户付款页面 |
| `/trading/process/buy/merchant/margin-release.html` | 保证金释放页面 |
| `/trading/process/buy/merchant/margin-complete.html` | 交易完成页面 |
| `/trading/process/buy/merchant/margin-cancelled.html` | 交易取消页面 |

### 4.4 出售流程 (用户视角)

| 页面路径 | 功能描述 |
|---------|---------|
| `/trading/process/sell/client/create-order.html` | 创建出售订单页面 |
| `/trading/process/sell/client/margin.html` | 保证金协商页面 |
| `/trading/process/sell/client/margin-deposit.html` | 保证金缴纳页面 |
| `/trading/process/sell/client/margin-waiting.html` | 等待保证金确认页面 |
| `/trading/process/sell/client/waiting-payment.html` | 等待商家付款页面 |
| `/trading/process/sell/client/release.html` | 释放加密货币页面 |
| `/trading/process/sell/client/complete.html` | 交易完成页面 |

### 4.5 出售流程 (商家视角)

| 页面路径 | 功能描述 |
|---------|---------|
| `/trading/process/sell/merchant/margin.html` | 保证金协商页面 |
| `/trading/process/sell/merchant/pay.html` | 付款页面 |
| `/trading/process/sell/merchant/waiting-release.html` | 等待释放加密货币页面 |
| `/trading/process/sell/merchant/complete.html` | 交易完成页面 |
| `/trading/process/sell/merchant/cancelled.html` | 交易取消页面 |

### 4.6 纠纷处理

| 页面路径 | 功能描述 |
|---------|---------|
| `/trading/process/dispute/list.html` | 纠纷列表页面 |
| `/trading/process/dispute/create.html` | 创建纠纷页面 |
| `/trading/process/dispute/detail.html` | 纠纷详情页面 |
| `/trading/process/dispute/detail-completed.html` | 已完成纠纷详情页面 |
| `/trading/process/dispute/detail-cancelled.html` | 已取消纠纷详情页面 |
| `/trading/process/dispute/merchant/response.html` | 商家纠纷响应页面 |

## 5. 用户中心

### 5.1 普通用户

| 页面路径 | 功能描述 |
|---------|---------|
| `/user-center/client/index.html` | 用户中心首页 |
| `/user-center/client/account.html` | 账户信息页面 |
| `/user-center/client/edit-account.html` | 编辑账户信息页面 |
| `/user-center/client/edit-avatar.html` | 修改头像页面 |
| `/user-center/client/edit-nickname.html` | 修改昵称页面 |
| `/user-center/client/kyc-info.html` | KYC信息页面 |
| `/user-center/client/messages.html` | 消息中心页面 |

### 5.2 普通用户资产管理

| 页面路径 | 功能描述 |
|---------|---------|
| `/user-center/client/assets.html` | 资产概览页面 |
| `/user-center/client/assets-deposit.html` | 充值页面 |
| `/user-center/client/assets-withdraw.html` | 提现页面 |
| `/user-center/client/assets-transfer.html` | 转账页面 |
| `/user-center/client/assets-transactions.html` | 交易记录页面 |
| `/user-center/client/assets-transaction-details.html` | 交易详情页面 |
| `/user-center/client/assets-address-book.html` | 地址簿页面 |
| `/user-center/client/assets-css.html` | 资产样式页面 |

### 5.3 商家用户

| 页面路径 | 功能描述 |
|---------|---------|
| `/user-center/merchant/account.html` | 商家账户信息页面 |
| `/user-center/merchant/edit-avatar.html` | 修改头像页面 |
| `/user-center/merchant/edit-email.html` | 修改邮箱页面 |
| `/user-center/merchant/edit-password.html` | 修改密码页面 |
| `/user-center/merchant/kyc-info.html` | KYC信息页面 |
| `/user-center/merchant/messages.html` | 消息中心页面 |
| `/user-center/merchant/quote-management.html` | 报价管理页面 |

### 5.4 商家资产管理

| 页面路径 | 功能描述 |
|---------|---------|
| `/user-center/merchant/assets.html` | 资产概览页面 |
| `/user-center/merchant/assets-transfer.html` | 转账页面 |
| `/user-center/merchant/assets-transactions.html` | 交易记录页面 |
| `/user-center/merchant/assets-transaction-details.html` | 交易详情页面 |
| `/user-center/merchant/assets-address-book.html` | 地址簿页面 |

## 6. 商家订单管理

| 页面路径 | 功能描述 |
|---------|---------|
| `/merchant/orders.html` | 订单列表页面 |
| `/merchant/order-detail-pending.html` | 待处理订单详情页面 |
| `/merchant/order-detail-completed.html` | 已完成订单详情页面 |
| `/merchant/order-detail-cancelled.html` | 已取消订单详情页面 |

## 7. 组件

### 7.1 页面公共组件

| 页面路径 | 功能描述 |
|---------|---------|
| `/components/header/index.html` | 页头主组件 |
| `/components/header/guest.html` | 游客页头组件 |
| `/components/header/logged-in.html` | 已登录用户页头组件 |
| `/components/header/user.html` | 用户信息页头组件 |
| `/components/footer/index.html` | 页脚主组件 |
| `/components/footer/logged-in.html` | 已登录用户页脚组件 |

### 7.2 交易组件

| 页面路径 | 功能描述 |
|---------|---------|
| `/components/chat/index.html` | 聊天组件 - 包含消息区域和保证金协商功能 |
| `/components/margin-negotiation/index.html` | 保证金协商组件 - 自定义托管需求表单 |
| `/components/merchant-list/index.html` | 商家列表组件 |
| `/components/buy-progress.html` | 购买进度组件 |
| `/components/sell-progress.html` | 销售进度组件 |

## 8. 模板文件

| 页面路径 | 功能描述 |
|---------|---------|
| `/templates/merchant/account.html` | 商家账户模板 |
| `/templates/merchant/assets.html` | 商家资产模板 |

## 9. 最近优化的功能

### 9.1 交易大厅优化
- 添加了表格/卡片视图切换功能
- 移除了USDT和USDC切换功能，简化界面
- 保留网络筛选功能，支持ERC20、TRC20、BEP20和Polygon网络
- 优化移动端响应式设计
- 更丰富的商家卡片展示，提供多达5个商家示例

### 9.2 保证金协商功能
- 优化自定义托管需求弹窗，改为完整表单
- 添加预设比例按钮
- 添加自定义输入框
- 添加特殊需求说明文本框
- 添加联系方式确认功能

### 9.3 聊天功能
- 修复聊天窗口中英文切换问题
- 添加语言选择器和本地存储功能
- 将保证金协商界面整合到聊天消息区域中

### 9.4 多币种支持
- 添加USDT和USDC稳定币支持
- 添加ERC20、BEP20、TRC20和Polygon网络支持 