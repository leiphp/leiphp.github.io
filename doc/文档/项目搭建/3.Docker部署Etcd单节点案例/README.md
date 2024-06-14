### 1. 创建挂载目录
在Linux中，mkdir命令并没有-r选项来递归创建目录。要递归地创建目录，你可以使用-p选项。下面是正确的命令：

```docker
mkdir -p /mydata/etcd
```
这个命令会递归地创建 /mydata/etcd这个目录，即使 /mydata 和 /mydata/etcd目录不存在也会一并创建。

### 2. 创建网络
确定网络名称：smart
```docker
docker network create -d bridge smart
```
如果先创建了容器，再配置网络
```docker
docker network connect smart etcd-v3
```

### 3. Linux执行命令

etcd镜像： bitnami/etcd:3.5.10              

```docker
docker run --name etcd-v3 -d -p 2379:2379 -p 2380:2380 -v /mydata/etcd:/etcd-data --net smart -e ALLOW_NONE_AUTHENTICATION=yes bitnami/etcd:3.5.10
```
* docker run: 启动一个新的容器。
* --name etcd-v3: 给容器指定一个名称 etcd-v3。
* -d: 在后台运行容器（分离模式）。
* -p 2379:2379 -p 2380:2380: 将主机的端口 2379 和 2380 映射到容器的端口 2379 和 2380。
* -v /mydata/etcd:/etcd-data：挂载目录
* --net smart: 将容器连接到名为 smart 的网络。
* -e ALLOW_NONE_AUTHENTICATION=yes: 设置环境变量 ALLOW_NONE_AUTHENTICATION 的值为 yes。
* bitnami/etcd:3.5.10: 使用 bitnami/etcd 镜像的 3.5.10 版本。
最后的 etcd 是容器启动时运行的命令。在这个例子中，etcd 命令会启动 etcd 服务器。
