## 使用Commitizen-规范你的commit message

### 先简单了解一下 commit message format(信息域)
> commit message一般分为三个部分Header，Body 和 Footer
```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
其中，Header 是必需的，Body 和 Footer 可以省略

Example:
PS D:\git\pythonPractice> git log
commit 58a7a966acb9aa2fffc0e02c9ce3be64b8949991 (HEAD -> master)
Author: Zhiwei Tian <hebeitianzhiwei@outlook.com>
Date:   Fri Aug 17 17:38:36 2018 +0800

    feat(serve): add grpc server

```

### 使用commitizen来执行规范

```
$ npm install -g commitizen  
$ commitizen init cz-conventional-changelog --save --save-exact
```
or 使用`npx`
```
$ npx commitizen init cz-conventional-changelog --save-dev --save-exact
```
 安装之后会自动在package.json中配置 `commitizen`  
`ps`: 记得要初始化 项目  
> npm init -y

安装成功后配置 `package.json -> scripts `

```JSON
"scripts": {
  ...其他
  "commit": "git-cz"
  ..其他
}
```

之后就可以在命令行中执行`npm run commit`

