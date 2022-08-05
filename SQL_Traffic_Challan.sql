create database RTO;
use RTO;
create table Challan(challanno bigint auto_increment primary key,
challanamount bigint,
date date,
time time,
duedate date,
duetime time,
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
alter table Challan rename column violation to voilation;
insert into Challan(challanamount,date,time,duedate,duetime,voilationid,proofurl,location,dispute,policeid,vehicleno) values (500,"2022-09-23","12:09:34","2022-11-01","12:00:00",3,"https://s.enavabharat.com/wp-content/uploads/2022/06/Mumbai-trafice-police.jpg","Sec",null,1253,"UP78EA7650");
select * from Challan;
create table voilation(voilationid bigint primary key,
rule text,
compensationamount bigint);
insert into voilation values (1,"No Helmet",500);
insert into voilation values (2,"Triple riding",1000), (3,"No proper documents",500), (4,"Rash driving",2000), (5,"Signal jump",2000), (6,"Drunk and drive",3000), (7,"Driving in one way",2500), (8,"Using phone while driving",1500), (9, "Miscellaneous","1000"); 
drop table Police;
drop table Vehicleowner;
drop table Challan;
drop table voilation;
select * from voilation;
create table Police(policeid bigint primary key,
name text,
email text,
pswd varchar(16));
desc Police;
insert into Police values (1253,"jayanth","jay@gmail.com","jayanth");
select * from Police; 
create table Vehicleowner(vehicleno varchar(10) primary key,
name text,
email text,
password varchar(16),
mobileno bigint);
desc Vehicleowner;
insert into Vehicleowner values ("UP78EA7650","ram","ram@gmail.com","ram",9824538543);
select * from Vehicleowner;
alter table Challan auto_increment=1000;