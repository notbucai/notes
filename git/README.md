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

> 之后就可以在命令行中执行`npm run commit` 替代 `git commit`

### Example
```
$ git add .
$ npm run commit 

// 选择你要更改的类型
Select the type of change that you're committing: (Use arrow keys)
❯ feat:        A new feature 
  fix:         A bug fix 
  improvement: An improvement to a current feature 
  docs:        Documentation only changes 
  style:       Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) 
  refactor:    A code change that neither fixes a bug nor adds a feature 
  perf:        A code change that improves performance 

// 更该的范围
What is the scope of this change (e.g. component or file name): (press enter to skip) 

// 简短的介绍
Write a short, imperative tense description of the change (max 94 chars)

// 细节
Provide a longer description of the change: (press enter to skip)

// 是否重大变化
Are there any breaking changes? (y/N) 

// 是否影响没有结局的问题
Does this change affect any open issues? (y/N)

// 完成
```