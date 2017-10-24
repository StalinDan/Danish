## 快速搭建本地HTTP服务器
###http://www.cnblogs.com/zhangxiaos/p/6290222.html
###一、安装Python简易HTTP服务器

　　大多数Linux/Unix/mac OS操作系统都已默认安装，直接运行以下命令即可，其中“8008”为指定的端口号；如果没有安装python，可到 https://www.python.org/getit/ 进行下载。

　　> python –m SimpleHTTPServer 8008

python -v  查询版本号

然后在浏览器地址栏输入 http://localhost:8008/ 将展示下图效果：

二、安装Node.js HTTP服务器

　　运行如下命令前需确定全局安装了node，可在终端运行命令 node -v 查看是否已安装，

　　> npm install http-server –g
　　> http-server .
　　
　　
　　该命令可以启动一个Node.js驱动的HTTP服务器，默认端口号是8080，也可以用 -p 参数指定一个端口号，如 http-server . -p 8888，此时端口号指定为“8888”。

　　如果是在Linux/UNIX/Mac的操作系统中运行该命令，需要用sudo模式或者root权限来运行，即sudo npm i http-server -g，然后输入密码进行安装即可。

　　浏览器输入http://10.10.11.80:8081或http://127.0.0.1:8081，即可有如下效果：



通俗易懂的说：
1. cd 到你工程文件夹的目录
2. python -m http.server 启动服务
3. crtl + C  停止服务
