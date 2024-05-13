//  操作当前进程和控制当前进程的API，并且是挂载到globalThis下面的全局API

// 1、获取cpu架构 arch
console.log("arch", process.arch)
// 2、platform 获取操作系统平台, mac => darwin
console.log("platform", process.platform);
// 3、获取进程后面的参数 "argv",return arr
console.log("argv", process.argv)
// 4、cwd() 获取工作目录(绝对路径) __dirname （esm 模式下用不了）
console.log("cwd", process.cwd())
// 5、memoryUsage 内存信息
// {
//   rss: 33554432,  // 常驻集大小，物理内存的存量
//   heapTotal: 6422528,  // v8给我们分配的堆内存的总大小，包括未使用的内存
//   heapUsed: 5468608,  // 已使用的内存
//   external: 426258,  // 常驻内存  从c++使用的
//   arrayBuffers: 17678  // 二进制总量
// }
console.log(process.memoryUsage());
// 5、exit 退出进程
// 6、 kill 杀死进程 需要pid 进程id
// 7、pid 获取进程的id
// 8 env 环境变量，操作系统所有环境变量; 可以修改，修改只在当前进程修改，不会影响系统的环境变量;
// 用来区分开发环境。测试环境
// 可以用cross-env；
console.log("env", process.env)
process.env.TERM_PROGRAM = "vscode123"
console.log("env", process.env)
console.log("环境", process.env.NODE_ENV == "dev" ? "开发环境" : "生产环境")
process.exit()

