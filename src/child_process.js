// child_process 是Nodejs核心API, 一般写 前端工程化工具
const { exec, execFile, spawn, execSync, execFileSync, fork } = require("child_process");
// Node 创建子进程 有7个api，Sync是同步API

// 底层实现顺序 exec-> execFile -> spawn

// 1、spawn 执行命令 没有字节上限，返回是个流，实时返回。
// option 参数
// cwd <string> 子进程的当前工作目录。
// env <Object> 环境变量键值对。
// encoding <string> 默认为 'utf8'。
// shell <string> 用于执行命令的 shell。 在 UNIX 上默认为 '/bin/sh'，在 Windows 上默认为 process.env.ComSpec。 详见 Shell Requirements 与 Default Windows Shell。
// timeout <number> 默认为 0。
// maxBuffer <number> stdout 或 stderr 允许的最大字节数。 默认为 200*1024。 如果超过限制，则子进程会被终止。 查看警告： maxBuffer and Unicode。
// killSignal <string> | <integer> 默认为 'SIGTERM'。
// uid <number> 设置该进程的用户标识。（详见 setuid(2)）
// gid <number> 设置该进程的组标识。（详见 setgid(2)）

// const { stdout } = spawn("netstat",["-a"],{});
// stdout.on("data", (msg) => {
//   console.log(msg.toString());
// })
// stdout.on("close", (msg) => {
//   console.log("end");
// })

// 2、exec 执行命令 异步方法，回调函数， 返回buffer； 可以用来执行shell命令，和软件交互
// exec("node -v", (err, stdout, stderr) => {
//   if (err) {
//     console.log(err, stderr.toString())
//     return err;
//   };
//   console.log(stdout.toString())
// })

// 3、execFile 执行可执行文件
// 运行bat，sh等脚本文件
// const path = require("node:path");
// execFile(path.resolve(__dirname, "./test.sh"), null, (err, stdout) => {
//   if(err) console.log(err);
//   console.log(stdout.toString());
// })

// 4、fock 创建node 子进程 只能接受js模块; 父子之间可以通信。  耗时代码放到子进程
 const parentProcess = fork("./fock/kidProcess.js");
 parentProcess.send("I am parent");

 parentProcess.on("message", (msg) => {
  console.log("report msg:", msg);
})
// 5、execSync 执行命令 同步执行 执行较小的shell命令，立即拿到结果的； exec 字节上限 200kb
// execSync("open http://www.baidu.com")

// 6、spawnSync 执行命令 同步执行
// 7、execFileSync 执行可执行文件 同步执行 