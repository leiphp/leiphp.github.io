### 1. 创建挂载目录
在Linux中，mkdir命令并没有-r选项来递归创建目录。要递归地创建目录，你可以使用-p选项。下面是正确的命令：

```mysql
mkdir -p /mydata/jenkins_home
```
这个命令会递归地创建 /mydata/jenkins_home这个目录，即使 /mydata 和 /mydata/jenkins_home目录不存在也会一并创建。

### 2. 新增配置文件
切换到目录：cd /mydata/jenkins_home
执行命令：vim docker-compose.yml
```yml
version: "3"
services:
  jenkinsServer:
    container_name: jenkins
    image: jenkins/jenkins:lts
    volumes:
      - /mydata/jenkins_home/:/var/jenkins_home
      - /etc/localtime:/etc/localtime:ro
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker
      - /usr/lib64/libltdl.so.7:/usr/lib/x86_64-linux-gnu/libltdl.so.7
    ports:
      - 8881:8080
      - 50000:50000
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure
      placement:
        constraints: [node.role == manager]
    networks:
      - default
networks:
  default:
    external:
      name: unreal-network
```

### 3. Linux执行命令

docker-compose启动命令
```docker
# 启动所有服务
docker-compose up

# 在后台启动所有服务
docker-compose up -d

# 在后台所有启动服务，指定编排文件
docker-compose -f docker-compose.yml up -d
```

