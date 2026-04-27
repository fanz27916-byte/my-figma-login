# My Figma Login - Vue 3 + TypeScript + Tailwind CSS

这是一个基于Figma设计转换的现代化登录页面项目，使用Vue 3、TypeScript和Tailwind CSS构建。

## 功能特性

- 🎨 现代化UI设计，基于Figma设计稿
- 📱 响应式布局，适配各种屏幕尺寸
- 🔐 完整的登录表单验证
- 👁️ 密码显示/隐藏切换功能
- 🔗 社交登录选项（Google、GitHub）
- ⚡ 使用Vite构建，开发体验流畅
- 🎯 TypeScript支持，类型安全

## 技术栈

- Vue 3 (Composition API)
- TypeScript
- Tailwind CSS
- Vue Router
- Vite

## 项目结构

```
my-figma-login/
├── src/
│   ├── components/     # 可复用组件
│   ├── views/         # 页面组件
│   │   └── LoginView.vue  # 登录页面
│   ├── router/        # 路由配置
│   ├── assets/        # 静态资源
│   ├── App.vue        # 根组件
│   ├── main.ts        # 应用入口
│   └── style.css      # 全局样式
├── public/            # 公共资源
├── index.html         # HTML模板
├── vite.config.ts     # Vite配置
├── tailwind.config.js # Tailwind配置
├── package.json       # 依赖管理
└── README.md          # 项目说明
```

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev
```
访问 http://localhost:5173

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 设计特点

### 登录表单
- 邮箱输入框（带图标）
- 密码输入框（带显示/隐藏切换）
- 记住我选项
- 忘记密码链接
- 登录按钮（带加载状态）

### 社交登录
- Google登录按钮
- GitHub登录按钮

### 响应式设计
- 移动端友好
- 桌面端优化
- 渐变背景
- 卡片阴影效果

## 配置说明

### 环境变量
项目使用Vite的环境变量系统，可以在 `.env` 文件中配置：

```env
VITE_API_URL=http://localhost:3000
```

### Tailwind配置
可以在 `tailwind.config.js` 中自定义主题颜色、间距、字体等。

## 开发指南

### 添加新页面
1. 在 `src/views/` 中创建新的Vue组件
2. 在 `src/router/index.ts` 中添加路由配置
3. 在导航组件中添加链接

### 添加新组件
1. 在 `src/components/` 中创建可复用组件
2. 使用TypeScript和Composition API
3. 遵循Props/Emits类型定义

### 样式规范
- 使用Tailwind CSS工具类
- 遵循BEM命名约定（可选）
- 保持响应式设计原则

## 部署

### GitHub Pages
```bash
npm run build
# 将dist目录推送到gh-pages分支
```

### Vercel / Netlify
连接GitHub仓库，自动部署。

## 许可证

MIT License