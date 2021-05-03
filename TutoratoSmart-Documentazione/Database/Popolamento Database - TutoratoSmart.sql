Use TutoratoSmart;

-- Users:
INSERT INTO TS_USER (Email,Pwd,UserRole,FirstName,LastName,TelephoneNumber,Sex) VALUES ('d.molinaro@commissione.unicampania.it',SHA2('D12345678', 256),1,'Danila','Molinari','3374488832','F');

INSERT INTO TS_USER (Email,Pwd,UserRole,FirstName,LastName,TelephoneNumber,Sex,RegistrationNumber) VALUES ('m.pisciotta@studenti.unicampania.it',SHA2('M12345678', 256),2,'Manuel','Pisciotta','3343355632','M','A512102493');
INSERT INTO TS_USER (Email,Pwd,UserRole,FirstName,LastName,TelephoneNumber,Sex,RegistrationNumber) VALUES ('m.lombardo@studenti.unicampania.it',SHA2('M12345678', 256),2,'Marta','Lombardo','3343355634','F','A212102495');

INSERT INTO TS_USER (Email,Pwd,UserRole,FirstName,LastName,TelephoneNumber,Sex,RegistrationNumber) VALUES ('g.luongo@studenti.unicampania.it',SHA2('M12345678', 256),3,'Gianluca','Luongo','3343355636','M','B512102496');
INSERT INTO TS_USER (Email,Pwd,UserRole,FirstName,LastName,TelephoneNumber,Sex,RegistrationNumber) VALUES ('e.merola@studenti.unicampania.it',SHA2('M12345678', 256),3,'Eduardo','Merola','3343355637','M','A512102497');
INSERT INTO TS_USER (Email,Pwd,UserRole,FirstName,LastName,TelephoneNumber,Sex,RegistrationNumber) VALUES ('a.tommasino@studenti.unicampania.it',SHA2('M12345678', 256),3,'Antonio','Tommasino','3343355638','M','B512102498');


-- Students:
INSERT INTO STUDENT(Email,AcademicYear) VALUES ('g.luongo@studenti.unicampania.it','1');
INSERT INTO STUDENT(Email,AcademicYear) VALUES ('e.merola@studenti.unicampania.it','2');
INSERT INTO STUDENT(Email,AcademicYear) VALUES ('a.tommasino@studenti.unicampania.it','3');


-- Registers:
INSERT INTO REGISTER(IdRegister,State,ValidatedHours,TotalHours,PercentageComplete) VALUES (1, 'Approvato', 10, 10, 100);
INSERT INTO REGISTER(IdRegister,State,ValidatedHours,TotalHours,PercentageComplete) VALUES (2, 'Non approvato', 0, 30, 0);


-- Tutors:
INSERT INTO TUTOR(Email,StartDate,FinishDate,CommissionMember,RegisterId) VALUES ('m.pisciotta@studenti.unicampania.it','2019-10-23','2019-12-26','d.molinaro@commissione.unicampania.it', 1);
INSERT INTO TUTOR(Email,StartDate,FinishDate,CommissionMember,RegisterId) VALUES ('m.lombardo@studenti.unicampania.it','2019-09-21','2019-12-28','d.molinaro@commissione.unicampania.it', 2);


-- Activity
INSERT INTO ACTIVITY_TUTOR(IdActivity,Category,ActivityDate,StartTime,FinishTime,Hours,State,Details,Tutor,RegisterId) VALUES (1,'Sportello Tutorato', '2020-01-15', 570, 810, 4, 'Convalidata', 'Sportello di tutorato, turno 9:30-13:30', 'm.pisciotta@studenti.unicampania.it', 1);
INSERT INTO ACTIVITY_TUTOR(IdActivity,Category,ActivityDate,StartTime,FinishTime,Hours,State,Details,Tutor,RegisterId) VALUES (2,'Seminario', '2020-01-13', 900, 1080, 3, 'Convalidata', 'Ho partecipato ad un seminario', 'm.pisciotta@studenti.unicampania.it', 1);
INSERT INTO ACTIVITY_TUTOR(IdActivity,Category,ActivityDate,StartTime,FinishTime,Hours,State,Details,Tutor,RegisterId) VALUES (3,'Assistenza Esame', '2020-01-17', 540, 720, 3, 'Convalidata', 'Supervisione esame di psicologia del lavoro', 'm.pisciotta@studenti.unicampania.it', 1);

INSERT INTO ACTIVITY_TUTOR(IdActivity,Category,ActivityDate,StartTime,FinishTime,Hours,State,Details,Tutor,RegisterId) VALUES (4, 'Organizzazione Seminario', '2020-01-18', 540, 780, 4, 'In valutazione', 'Organizzazione di un seminario di psicologia sociale', 'm.lombardo@studenti.unicampania.it', 2);
INSERT INTO ACTIVITY_TUTOR(IdActivity,Category,ActivityDate,StartTime,FinishTime,Hours,State,Details,Tutor,RegisterId) VALUES (5, 'Organizzazione Evento', '2020-01-10', 540, 780, 4, 'In valutazione', 'Organizzazione di un evento per l'' orientamento in entrata', 'm.lombardo@studenti.unicampania.it', 2);


-- Request
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (1, 'Appuntamento effettuato', 'Supporto Immatricolazione', '2020-01-15', 570, 30, 'g.luongo@studenti.unicampania.it');
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (2, 'Appuntamento effettuato', 'Aiuto preparazione esame', '2020-01-15', 620, 40, 'e.merola@studenti.unicampania.it');
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (3, 'Appuntamento effettuato', 'Non riesco a prenotarmi per la prova intercorso', '2020-01-15', 900, 10, 'a.tommasino@studenti.unicampania.it');
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (4, 'Studente assente', 'Supporto iscrizione universita''', '2020-01-16', 600, 45, 'g.luongo@studenti.unicampania.it');
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (5, 'Accettata', 'Supporto prenotazione esame', '2020-01-22', 600, 20, 'e.merola@studenti.unicampania.it');
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (6, 'In valutazione', 'Problema studio', '2020-01-23', 900, 30, 'g.luongo@studenti.unicampania.it');
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (7, 'Accettata', 'Supporto prenotazione esame', '2020-02-05', 570, 40, 'e.merola@studenti.unicampania.it');
INSERT INTO REQUEST(IdRequest,State,StudentComment,RequestDate,RequestTime,Duration,Student) VALUES (8, 'In valutazione', 'Problema studio', '2020-02-06', 960, 25, 'g.luongo@studenti.unicampania.it');


-- Appointment
INSERT INTO APPOINTMENT(IdAppointment,Details,RequestId,Tutor) VALUES (1,'Supporto immatricolazione studente', '1', 'm.pisciotta@studenti.unicampania.it');
INSERT INTO APPOINTMENT(IdAppointment,Details,RequestId,Tutor) VALUES (2,'Aiuto per la preparazione dell''esame di psicologia del lavoro', '2', 'm.pisciotta@studenti.unicampania.it');
INSERT INTO APPOINTMENT(IdAppointment,Details,RequestId,Tutor) VALUES (3,'Lo studente non riusciva a prenotarsi per una prova intercorso', '3', 'm.pisciotta@studenti.unicampania.it');


-- Contained_in
INSERT INTO CONTAINED_IN(AppointmentId,ActivityId) VALUES (1, 1);
INSERT INTO CONTAINED_IN(AppointmentId,ActivityId) VALUES (2, 1);
INSERT INTO CONTAINED_IN(AppointmentId,ActivityId) VALUES (3, 1);


-- Manages
INSERT INTO MANAGES(Tutor,RequestId) VALUES ('m.pisciotta@studenti.unicampania.it', 1);
INSERT INTO MANAGES(Tutor,RequestId) VALUES ('m.pisciotta@studenti.unicampania.it', 2);
INSERT INTO MANAGES(Tutor,RequestId) VALUES ('m.pisciotta@studenti.unicampania.it', 3);
INSERT INTO MANAGES(Tutor,RequestId) VALUES ('m.lombardo@studenti.unicampania.it', 4);
INSERT INTO MANAGES(Tutor,RequestId) VALUES ('m.lombardo@studenti.unicampania.it', 5);
INSERT INTO MANAGES(Tutor,RequestId) VALUES ('m.lombardo@studenti.unicampania.it', 7);

-- Validates
INSERT INTO VALIDATES(CommissionMember,ActivityId) VALUES('d.molinaro@commissione.unicampania.it', 1);
INSERT INTO VALIDATES(CommissionMember,ActivityId) VALUES('d.molinaro@commissione.unicampania.it', 2);
INSERT INTO VALIDATES(CommissionMember,ActivityId) VALUES('d.molinaro@commissione.unicampania.it', 3);