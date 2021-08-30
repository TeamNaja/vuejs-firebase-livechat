# vuejs-firebase-livechat
ตัว livechat อย่าง vuejs + firebase 

ไปลง visual code มาก่อนนะ 

1. ไปสมัคร firebase ก่อน 
firebase คือหยัง 
https://www.youtube.com/watch?v=Pmxcp6zEXO8
หยอก
firebase คือ services ที่เราใช้ได้หลายอย่าง ไม่ว่าจะเป็น 
- realtime database เหมาะสำหรับพวก push notification บนมือถือยิ่งนัก
- hosting สำหรับคนขี้เกียจ hostweb ง่ายๆ 
- authenticator สำหรับ login service ง่ายๆ 
- และอื่นๆ 
เริ่มก่อนเลย ไปนี้ https://console.firebase.google.com/
ใครไม่มี email google ก็ไปสมัคร  ใครสมัคร google ไม่เป็นก็ .. จ้างผมได้ถูกๆ สัก 200$ ต่อ account นะ 


2. กด Add project ตามภาพ  (เซ็นเซอร์ก่อน project เยอะ)
![image](https://user-images.githubusercontent.com/71694878/131344248-bddb3c4d-18c2-480a-b38f-4fe8e0deb3d7.png)


3. ใส่ชื่อ project อีหยังกะได้ 
![image](https://user-images.githubusercontent.com/71694878/131344388-cb0187f2-d423-4d9a-b485-94d0c982ee0c.png)


4. ไม่ต้อง enable google analytic  ก็ได้ แค่ทดสอบ ละกะกด Create Project โล้ด
![image](https://user-images.githubusercontent.com/71694878/131344425-60cc6c71-ff88-46e0-96f7-7d35da97785e.png)


5. ไปเปิด Services Authentication เพื่อให้เรา login ได้ 
![image](https://user-images.githubusercontent.com/71694878/131344633-e523b4d8-8638-457a-a88b-bcc8ed28b402.png)
กดเลย Get Startad!  ted ๆ 
![image](https://user-images.githubusercontent.com/71694878/131344673-fb3859fe-87c6-492f-8a92-779764ef0f63.png)
กด enable email password ละกะ save
![image](https://user-images.githubusercontent.com/71694878/131344785-019fcb19-efd1-4010-8f51-8e266a90767e.png)
![image](https://user-images.githubusercontent.com/71694878/131344813-308030e4-7edb-4a08-8fc9-2dea2924574f.png)


6. กลับมาหน้า Project Overview แล้วกด ที่  </> ตามรูป
![image](https://user-images.githubusercontent.com/71694878/131344967-c6dd55d3-4c5e-4c9c-b061-907c6067f2d5.png)
ตามนี้เลย 
![image](https://user-images.githubusercontent.com/71694878/131345044-004a63e1-3b80-441c-97d1-86ffd7a0c8b7.png)
แล้วก็ก๊อบปี้อันนี้ 
![image](https://user-images.githubusercontent.com/71694878/131345120-64088438-d6a3-46c8-8091-a663e844c75f.png)
เอามาวางที่นี้ 
![image](https://user-images.githubusercontent.com/71694878/131345310-7334413f-aaaa-4b3a-b756-96243eaa83f8.png)


7. เสร็จแล้วก็ ลง NPM https://nodejs.org/en/download/
![image](https://user-images.githubusercontent.com/71694878/131345571-f0245894-f124-4040-9faf-0e0a05bf45fb.png)
![image](https://user-images.githubusercontent.com/71694878/131345633-d09a1e27-aba6-43f6-b54a-6897f81a9e6a.png)


8. เปิด Visual code เปิด Terminal แล้ว npm i
![image](https://user-images.githubusercontent.com/71694878/131345880-b003fbda-ccf6-4feb-9cf2-e2a4c05940ad.png)
npm i
![image](https://user-images.githubusercontent.com/71694878/131346611-5e08aa9f-a483-4365-88fe-db3df279f8f2.png)


9. จากนั้นก็ Run เลย 
npm run serve
![image](https://user-images.githubusercontent.com/71694878/131346248-30284cd6-ee85-4117-bffa-5d532a2d280c.png)
![image](https://user-images.githubusercontent.com/71694878/131346458-bbb7c79a-ac37-4714-b9ac-5092d62d90d6.png)


ก็ Signup เอาใส่ email อะไรก็ได้ password หยังกะได้ 
แล้วลองเล่นดูโล้ด 



