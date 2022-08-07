create database RTO;
use RTO;

/* Challan Table */
create table Challan(challanno bigint auto_increment primary key,
challanamount bigint,
date timestamp,
duedate timestamp,
voilationid bigint,
proofurl text,
location text,
dispute text,
policeid bigint,
vehicleno varchar(10),
isdisputed bool default false,
isPaid bool default false,
foreign key(policeid) references Police(policeid),
foreign key(vehicleno) references Vehicleowner(vehicleno),
foreign key(voilationid) references Voilation(voilationid));

desc Challan;


insert into Challan(challanamount,date,duedate,voilationid,proofurl,location,dispute,policeid,vehicleno) values (500,"2022-09-23 12:09:34","2022-11-01 12:00:00",3,"https://s.enavabharat.com/wp-content/uploads/2022/06/Mumbai-trafice-police.jpg","500025",null,1253,"UP78EA7650");
insert into Challan(challanamount,date,duedate,voilationid,proofurl,location,dispute,policeid,vehicleno) values (2000,"2022-08-20 02:34:45","2022-09-01 12:00:00",4,"https://assets.thehansindia.com/hansindia-bucket/1278_rash.jpg","500015",null,1253,"AP45HG5433"),
(3000,"2022-05-12 10:30:00","2022-07-01 12:00:00",9,"https://nearbynews.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fnbn-engine%2Fuploads%2Ff9668330dacce061d2d855b5338060f5a9f7252e.jpg&w=1920&q=100","500025",null,1255,"AP45HG5433"),
(1500,"2022-05-10 9:08:34","2022-07-01 12:00:00",8,"https://www.drivespark.com/img/2018/05/talking-while-driving-2-1526551254.jpg","500025",null,1255,"GU34GH3464"),
(2500,"2022-04-14 08:06:34","2022-06-01 12:00:00",7,"https://www.drivespark.com/img/2018/09/jail7-1536995733.jpg","500025",null,1254,"UP78EA7650"),
(1500,"2022-05-12 08:06:34","2022-07-12 12:00:00",8,"https://data1.ibtimes.co.in/en/full/656633/bike-commuter-using-mobile-phone-while-riding.jpg?h=450&l=46&t=52","500025",null,1255,"UP01AA1111"),
(3000,"2022-07-16 09:06:34","2022-09-12 12:00:00",6,"https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-6cimrcdagh9pi3b2u72udac4s0-20160313065802.Medi.jpeg","500025",null,1255,"UP01AA1111"),
(2000,"2021-08-18 03:06:34","2022-10-18 12:00:00",4,"https://static.toiimg.com/thumb/msid-58673900,imgsize-879655,width-400,resizemode-4/58673900.jpg","500025",null,1256,"UP01AA1111"),
(2000,"2021-12-25 05:06:34","2021-10-01 12:00:00",5,"https://www.cars24.com/blog/wp-content/uploads/2020/02/red-light-breaking.jpg","209217",null,1256,"UP01AA1111"),
(1500,"2022-07-22 08:06:34","2022-09-01 12:00:00",8,"https://www.aplustopper.com/wp-content/uploads/2020/07/Cell-Phone-use-While-Driving-Essay.png","209217",null,1256,"UP78EA7650"),
(500,"2022-01-01 02:06:34","2022-03-01 12:00:00",3,"https://c.ndtvimg.com/2019-09/eboh5r4o_delhi-traffic-police_625x300_04_September_19.jpg","208017",null,1257,"UP01AA1111"),
(1000,"2022-07-21 01:06:34","2022-09-21 12:00:00",2,"https://assets.thehansindia.com/h-upload/2021/04/11/1069695-traffic-violation.webp","208017",null,1257,"UP78EA7640"),
(500,"2022-04-22 08:06:34","2022-06-22 12:00:00",1,"https://www.cars24.com/blog/wp-content/uploads/2021/05/no-helmet.jpg","208017",null,1258,"MP97EB1234");

delete from Challan;
select * from Challan;

/*Voilation Table*/
create table voilation(voilationid bigint primary key,
rule text,
compensationamount bigint);

desc voilation;

insert into voilation values (1,"No Helmet",500);
insert into voilation values (2,"Triple riding",1000), 
(3,"No proper documents",500), 
(4,"Rash driving",2000), 
(5,"Signal jump",2000), 
(6,"Drunk and drive",3000), 
(7,"Driving in one way",2500), 
(8,"Using phone while driving",1500), 
(9, "Miscellaneous","1000"); 

select * from voilation;

/*Police Table*/
create table Police(policeid bigint primary key,
name text,
email text,
pswd varchar(16));

desc Police;

insert into Police values (1253,"Jayanth","jay@gmail.com","jayanth");
insert into Police values(1254,"Yashwanth","yash@gmail.com","yashwanth"),
(1255,"Karthik","karhtik@gmail.com","karhtik"),
(1256,"Sudhanshu","sudhanshu@gmail.com","sudhanshu"),
(1257,"Krishna","krishna@gmail.com","krishna"),
(1258,"Aruvi","aruvi@gmail.com","aruvi"),
(1259,"Sreeja","sreeja@gmail.com","sreeja"),
(1260,"Shivangi","shivangi@gmail.com","shivangi");

select * from Police;
 
/*Vehicle Owner Table*/
create table Vehicleowner(vehicleno varchar(10) primary key,
name text,
email text,
password varchar(16),
mobileno bigint);

desc Vehicleowner;

insert into Vehicleowner values ("UP78EA7650","Ram","ram@gmail.com","ram",9824538543);
insert into Vehicleowner values ("AP45HG5433","Krish","krish@gmail.com","krish",7834329843), 
("GU34GH3464","Aniket","aniket@gmail.com","aniket",6424544342),
("PB07EA8876","Nishiket","nishiket@gmail.com","nishiket",6324544342),
("TN23KL3452","Amritansh","amritansh@gmail.com","amritansh",6443244342),
("UP78EA7640","Ankit","ankit@gmail.com","ankit",8299072042),
("MP97EB1234","Jaya","jaya@gmail.com","jaya",8174918185),
("UP01AA1111","Ankur","ankur@gmail.com","ankur",7408979889);

select * from Vehicleowner;

alter table Challan auto_increment=1000;
drop  table Challan;
drop table Vehicleowner;
drop table voilation;
drop table Police;
show tables;