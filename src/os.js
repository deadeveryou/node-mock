// 操作系统
const os = require("node:os");

// 1、platform 获取操作系统平台, mac => darwin
console.log("platform", os.platform());
// 2、 release 获取操作系统版本
console.log("release", os.release())
// 3、type  输出平台
console.log("type", os.type())
// 4、 version 输出版本
console.log("version", os.version())

// 5、获取用户目录 homedir ,底层原理 win %userfile% mac $HOME
console.log("homedir", os.homedir())

// 6、获取cpu架构 arch 
console.log(os.arch())
// 7、操作系统线程，cpu信息
// {
//   model: 'Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz', 型号
//   speed: 2300,
//   times: { 
//   user: 37660970,
//  nice: 0,
//   sys: 21901080,
//    idle: 73454320, 
//    irq: 0 }
// },
console.log("cpus", os.cpus(), os.cpus().length)
// 8、w网络状况
// {
//   address: 'fe80::891:6c31:b694:d14a', // ip地址
//   netmask: 'ffff:ffff:ffff:ffff::', // 子网掩码
//   family: 'IPv6', // ip版本 IPv4 IPv6
//   mac: '00:00:00:00:00:00', // 网卡的mac地址
//   internal: false,  //标识 是不是内网
//   cidr: 'fe80::891:6c31:b694:d14a/64', // ip地址段
//   scopeid: 14
// }
console.log("networkInterfaces",os.networkInterfaces());


//作用 
//模拟 webpack vite ,rollup  open api 打开浏览器

// 更具判断不同的操作系统，分别调用shell命令
const platform = os.platform();

const { exec } = require("child_process");
//exec 可以调用shell命令

const open = (url) => {
  // mac
  if (platform === "darwin") exec(`open ${url}`);
  // win
  else if (platform === "win32") exec(`start ${url}`);
  // linux
  else if (platform === "linux") exec(`xdg-open ${url}`);
}

// open("https://www.baidu.com")
