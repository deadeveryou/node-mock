// Node.js 核心api 采用异步事件驱动，通过有效的方法来监听事件状态的变化
//  发布订阅设计

// 用法 和vue2 event bus; 第三方库 mitt 类似
// off 删除 on  订阅 emit 发布 once 触发 
// 最多订阅10个事件，可以通过设置 setMaxListeners, getMaxListeners 获取


// 是一个类
const eventEmitter = require("events");
const bus = new eventEmitter();
bus.setMaxListeners(20);
console.log(
  bus.getMaxListeners()

)

const fn = (name, number) => {
  console.log(name, number)
}
// 订阅事件, once 只触发一次
bus.on("test", fn);
bus.once("testonce", fn);

// 发布
bus.emit("test", "nihao", "123");
bus.emit("test", "nihao", "123");
bus.emit("test", "nihao", "123");
bus.emit("testonce", "testonce", "123");
bus.emit("testonce", "testonce", "123");
bus.emit("testonce", "testonce", "123");


// off 回收,判断fn和str一致
bus.off("test", fn)