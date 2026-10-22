PAPER & STYLE — PORTFOLIO WEBSITE
===================================

ไฟล์ในชุดนี้
- index.html : เนื้อหาและโครงสร้างเว็บไซต์
- style.css  : สี ฟอนต์ การจัดวาง และ responsive design
- script.js  : ตัวกรองหมวดหมู่ การเปิดรายละเอียดผลงาน และเมนูมือถือ

วิธีดูเว็บไซต์บน iPad
1. ดาวน์โหลดไฟล์ ZIP และแตกไฟล์ออกก่อน
2. อัปโหลดไฟล์ทั้ง 3 ไฟล์ (index.html, style.css, script.js) ไปไว้ใน repository บน GitHub
3. เปิด repository > Settings > Pages
4. ในหัวข้อ Build and deployment เลือก Deploy from a branch
5. เลือก branch main และ folder /(root) แล้วกด Save
6. รอ GitHub สร้างเว็บไซต์ จากนั้นเปิด URL ที่แสดงในหน้า Pages

วิธีอัปโหลดจาก iPad
- เปิด github.com ใน Safari แล้วเข้า repository ที่ต้องการ
- ใช้ Add file > Upload files หากเมนูนี้แสดงในหน้าจอ
- เลือกไฟล์จากแอป Files ของ iPad แล้ว Commit changes
- หากหน้า GitHub บนมือถือไม่แสดงเมนูครบ ให้เลือก Request Desktop Website ในเมนู Safari

สำคัญ: อย่าอัปโหลดเฉพาะ ZIP ไปยัง root แล้วคาดหวังว่าเว็บจะทำงาน ต้องแตก ZIP แล้วอัปโหลด index.html, style.css และ script.js ให้อยู่ระดับ root ของ repository

ลิงก์ Fastwork
https://fastwork.com/th/user/pei

การฝัง Fastwork
เว็บไซต์มี iframe ทดลองแสดงโปรไฟล์ Fastwork แล้ว แต่บางเว็บไซต์ปิดกั้นการฝังผ่าน iframe ด้วยนโยบายความปลอดภัย (เช่น X-Frame-Options หรือ Content-Security-Policy) ซึ่งโค้ดเว็บไซต์นี้ไม่สามารถแก้ไขแทน Fastwork ได้ หาก iframe ไม่แสดง ให้ใช้ปุ่ม "เปิดโปรไฟล์ Fastwork" ซึ่งเปิดหน้าโปรไฟล์ในแท็บใหม่

ก่อนเผยแพร่จริง
- การ์ดทั้ง 6 รายการเป็นตัวอย่างสมมติ ไม่ใช่ผลงานจริง
- แก้ชื่อ คำอธิบาย หมวดหมู่ และรายละเอียดใน index.html
- ถ้าต้องการใช้ภาพผลงานจริง ให้อัปโหลดภาพลง repository (เช่น โฟลเดอร์ images) แล้วแก้ส่วน .project-art ใน index.html ให้เป็นแท็ก img ที่ชี้ไปยังไฟล์ภาพ
- ตรวจสอบการสะกดชื่อแบรนด์และรายละเอียดบริการก่อนเผยแพร่
- เว็บไซต์นี้เป็น static website ไม่ต้องติดตั้ง npm หรือ build tools
