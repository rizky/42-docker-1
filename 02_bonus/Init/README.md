Create Docker-Machine

export MACHINE_STORAGE_PATH=/tmp  
docker-machine create default  
eval $(docker-machine env default)  
docker run -it --privileged --name debian rizkyario/42-init:latest  

Network  
08 traceroute slash16.org  
09 nslookup 42.fr  
10 traceroute slash16.org  
11 traceroute slash16.org | grep nat-1  
12 traceroute 10.51.1.253  
14 host 10.51.1.81  


System  
03 https://www.cyberciti.biz/faq/debian-change-hostname-permanently/  

Scripting  
<span>
.---------------- minute (0 - 59)  
|  .------------- hour (0 - 23)  
|  |  .---------- day of month (1 - 31)  
|  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...  
|  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat  
|  |  |  |  |  
*  *  *  *  * user-name  command to be executed  
</span>