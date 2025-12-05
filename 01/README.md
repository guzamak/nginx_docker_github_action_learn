### สรุป
https://www.youtube.com/watch?v=PQBRiPkA63w
ไว้ให้ลิงกับมาดู
### wsl
    wsl --install
      - โหลด wsl เพื่อลองใช้ linux ใน window
    wsl --install Ubuntu
      - โหลด ubuntu หรืออื่นๆ
    wsl --list
      - list ระบบที่โหลดมา
    wsl
      - ใช้งาน linux
### linux command
    sudo -i
      - เข้าสู่ root
    ls
      - เรียกดูไฟล์
      -l
        -สิทธิของ Folder
      -a
        -ไฟล์ที่ซ่อน
    mkdir
      - สร้างโฟลเดอร์
    cat
      - อ่านไฟล์
    cd
      - เข้า Folder
    apt get
      - โหลด package
    pwd
      - get ที่อยู่ปัจจุบัน
    sh
     - ใช้ shell (ลิงไม่ใช้ โหมดลิงงง)
    bash
     - ใช้ bash (โหมด ปกติ)
    history
     - list คำสั่งก่อนหน้า
    nano
      - เเก้ไข้ข้อมูล
    touch	
     สร้างไฟล์ใหม่
    exit 
      - ออกจาก user หรือ root
    chmod
      -chmod (+,-)(r,x,....) user/
      - เปลี่ยน permissions ไฟล์
    chown
      - เปลี่ยน เจ้าของ ไฟล์
    whoami
      - เเสดง user ปัจจุบัน
    adduser 
      - สร้าง user ใหม่
    usermod
      - เเก้ไข user
    มีอีกเยอะ ขก ...ห
    task mangae
    df
      show ขนาดไฟล์เเละโฟลเดอร์
    ps

  Privilege
    คำสั่งที่ต้องมี1บางคำสั่งต้องใช้ root ในการใช้งานต้องใช้ sudo นำหน้า หรือ sudo i เพื่อใช้คำสั่ง root ได้ทั้งหมด 
### Server Network
  - On premise รันเอง
  - On cloud remote
  - IP Address
    ระบุ device
  - Hostname 
    ชื่อระบุ Device
  - Subnet Mask
    - ... กูลืม
### NGINX
  Installtion 
    - sudo apt install nginx -y
    - localhost
  เช็ค status
    - sudo systemctl status nginx
  กำหนดค่าต่างๆ
    - cd /etc/nginx/nignx.conf
    หรือสร้าง config ใหม่เพื่อให้ไม่กระทบที่
    etc/nginx/conf.d/.conf
    หรือ กำหนดค่าใน 
      1. กำหนดค่าใน etc/nginx/sites-available
      2. symlink ไปยัง etc/nginx/sites-enabled
      3. โดย sudo ln -s etc/nginx/sites-available/example.com etc/nginx/sites-enabled
      tip. จำ folder
          - sites-available ใช้งานได้
          -  sites-available ใช้งงานอยู่
  sudo nginx -t สำหรับเช็คความถูกต้อง config
  sudo nginx -s reload รีโหลดการตั่งค่าใหม่อีกครั้ง
  ## NGINX.conf

  ## sites-available
    - defualt
    - somesite (not defualt)
      ex somesite
  https://nginxconfig.io/ เว็บไซต์ Generate Nginx Config พร้อม https (add headers)
  ## sites-enable
    - somesite ( symlink )
  ## Load Balance รันระบบด้วยหลาย cpu เเต่ network เดียวกัน
    upstream backend_servers {
    server 192.168.1.10; (ip1)
    server 192.168.1.11:3000; (ip2)
    server 192.168.1.12:3000/api; (ip3) ผิด
    }
    server {
    listen 80;
    server_name example.com; <------ domain name

    location / {
        proxy_pass http://backend_servers; <------ กระจายไปเเต่ละ computer สลับไปมา
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
      }
    }
  ## Caching การเก็บข้อมูลที่โหลดไว้ใช้ซ้ำ
    location /public/ {
        root /var/www/example.com/public/;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }

    location /api/live-data {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;
        try_files $uri $uri/ /index.html;
    }
  ## Basic auth for serect web 

  ## Rate Limiting

  ## SSL ทำให้เว็บเป็น https://
    certbot ลิงไม่ใช้ ใช้ cloudflare ssl ก็ได้ถ้าเอา cloudflare คุม Domain เลือกใช้สักอย่าง
    - https://www.youtube.com/watch?v=X1KeP29g9ps
### home server ทำให้เน็ตเราเป็น public ip เน็ตกูระเบิดไปละ vps เลย

### ssh บางโปรเเกรม ใช้ key ในการยืนยันตัวตน เเทน password
  -cd .ssh/authiruzed_keys

  Putty = openssh ui version

  systemctl ssh
### DOCKER ไม่ต้องกำหนดค่า var เองใน nginx
  - docker desktop ( ui version )
  เเก้ปัญหาการตั่งค่าไม่เหมือนกันในเเต่ละ computer
  - Docker Image คือสิ่งรวบรวม os code dep
  - Docker Container คือ ตัวใช้รัน Image
  File
    - Dockerfile ไฟล์รวบรวมคำสั่งสร้าง Image
    - docker run -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres (ใช้ ymal ดีกว่า)
      docker run --help
        -e กำหนด .env
        -d ปิดเทอร์มินัลได้โดยที่คอนเทนเนอร์ยังทำงานต่อไป (detached mode)
        -p เลือก port
      -p 5432:5432 
          -local port ส่งไปข้างนอก -image port ที่ image run
    - docker-compose.yml รวบรวมคำสั่งที่จะรันบน Docker CLI มารันเป็นชุด

    ## commands
      - docker images แสดงรายการ Image ที่เราสามารถใช้งานได้
      - docker pull <image>[:tag] ดาวน์โหลด Image จาก Docker Hub เช่น sql radis :tag=version
      - docker run [ag]
    ## Volume ( สำคัญ ตัวเก็บข้อมูล )
      - docker volume ls
      - docker 
    ## การสร้าง Image
      - build ตาม Dockerfile
    ## docker compose
  
    ## network

### CI/CD automation server ( ยากสุดจากทุกอัน )
  use with pm2
  - https://dev.to/goodidea/setting-up-pm2-ci-deployments-with-github-actions-1494
  
  use with docker
  - https://srangseethammakul.medium.com/%E0%B8%97%E0%B8%B3-ci-cd-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-github-actions-docker-digital-ocean-75c9a3cd0a49
  มีหลายอัน github action ง่ายสุด (ลิงงง ชห.)

  location 
  - .github
    - workflows
      build.yml
    -scripts
      shell (.sh) จ้า