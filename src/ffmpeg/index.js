const {execSync} = require("child_process")
// 基本格式转换 avi， MP4， git
// execSync("ffmpeg -i test.mp4 test.gif",{stdio:"inherit"});
// 提取音频
// execSync("ffmpeg -i test.mp4 test.mp3",{stdio:"inherit"});
// 裁剪视频 
// execSync("ffmpeg -ss 1 -to 2  -i test.mp4 test.gif",{stdio:"inherit"});
// 加水印 -vf
execSync(`ffmpeg -i test.mp4 -vf drawtext=text="qycde":fontsize=30:x=10:y=10:fontcolor=red testdew.mp4`,{stdio:"inherit"});
// 删除水印
execSync("ffmpeg -i testdew.mp4 -vf delogo=w=120:h=30:x=10:y=10 testdewdel.mp4",{stdio:"inherit"});

