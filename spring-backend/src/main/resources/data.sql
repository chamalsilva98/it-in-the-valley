insert into roles
values 
(1,"ROLE_JOURNALIST"),
(2,"ROLE_PHOTOGRAPHER"),
(3,"ROLE_ACCOUNTANT"),
(4,"ROLE_ADVERTISER"),
(5,"ROLE_EDITOR");

insert into users
values
(1,'journalist@gmail.com','$2a$10$g7DFk2M34fEHG.UCfTAyDOsrp7AnV8BiEFOWPBhcXNrSvrjcHupfK','journalist'),
(2,'photographer@gmail.com','$2a$10$g7DFk2M34fEHG.UCfTAyDOsrp7AnV8BiEFOWPBhcXNrSvrjcHupfK','photographer'),
(3,'accountant@gmail.com','$2a$10$g7DFk2M34fEHG.UCfTAyDOsrp7AnV8BiEFOWPBhcXNrSvrjcHupfK','accountant'),
(4,'advertiser@gmail.com','$2a$10$g7DFk2M34fEHG.UCfTAyDOsrp7AnV8BiEFOWPBhcXNrSvrjcHupfK','advertiser'),
(5,'editor@gmail.com','$2a$10$g7DFk2M34fEHG.UCfTAyDOsrp7AnV8BiEFOWPBhcXNrSvrjcHupfK','editor');

insert into user_roles
values
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);

INSERT INTO testdb.advert (description,title,user_id) VALUES
	 ('Test desc 1','Test 1',4),
	 ('Test desc 2','Test 2',4),
	 ('Test desc 3','Test 3',4);

INSERT INTO testdb.story (payment,story,advert_id,user_id) VALUES
	 (200,'Test story 1',1,1),
	 (NULL,'Test story 2',1,1),
	 (NULL,'Test story 1',2,1),
	 (400,'Test story 2',2,1);

INSERT INTO testdb.photograph (payment,photograph,advert_id,user_id) VALUES
	 (300,'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png',1,2),
	 (NULL,'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/330px-TEIDE.JPG',1,2),
	 (500,'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg/330px-Pencil_drawing_of_a_girl_in_ecstasy.jpg',2,2);

INSERT INTO testdb.magazine (document,advert_id) VALUES
	 ('<p>Test story 1</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"></p><p><br></p><p>Test story 2</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TEIDE.JPG/330px-TEIDE.JPG"></p>',1),
	 ('<p>Test story 1</p><p>Test story 2</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pencil_drawing_of_a_girl_in_ecstasy.jpg/330px-Pencil_drawing_of_a_girl_in_ecstasy.jpg"></p>',2);
