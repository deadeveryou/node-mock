process.on("message", (msg) => {
  console.log("report msg:", msg);
})

process.send("finish work");