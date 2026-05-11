# 武技图标目录

本目录存放鸿图之下武技的图标文件。

## 图标命名规则

- 文件名格式: `skill_{编号}.png`
- 例如: `skill_209.png` 对应武技 "苦肉计"

## 图标来源

原始图标URL格式:
```
https://game.gtimg.cn/images/srpg/act/a20200914wxpx/skillicon/General_Skill_{编号}.png
```

## 下载方式

### 方式1: 使用下载脚本

运行项目根目录下的 `scripts/download_skill_icons.js`:

```bash
node scripts/download_skill_icons.js
```

### 方式2: 手动下载

从腾讯CDN手动下载对应编号的图标文件。

## 统计

- 总图标数: 261 个唯一图标
- 数据文件引用: 326 处

## 更新记录

- 2026-05-06: 创建目录，更新 skills_data.js 使用本地路径
