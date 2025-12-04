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
        
        
### ssh บางโปรเเกรม ใช้ key ในการยืนยันตัวตน เเทน password
  -cd .ssh/authiruzed_keys
  Putty = openssh ui version
  systemctl ssh
### DOCKER
