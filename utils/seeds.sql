---- Department SEEDS ----
INSERT INTO department (name)
VAlUES ("Sales"),
    ("Engineering"),
    ("Legal"),
    ("Finance");


---- Employee Role SEEDS ----
INSERT INTO role(title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Accountant", 125000, 4),
    ("Legal Team Lead", 250000, 3),
    ("Lawyer", 190000, 3),
    ("Software Engineer", 120000, 2);



---- Employee SEEDS ----
INSERT INTO employee(first_name, last_name, role_id, manger_id)
VALUES ("JOHN", "Doe", 1, 3),
    ("Mike", "Chan", 1 , 1),
    ("Ashley", "Rodriguez", 2, null),
    ("Kevin", "Tupik", 2 , 3),
    ("Malia", "Brown", 4, null),
    ("Sarah", "Lourd", 3, null),
    ("Tom", "Allen", 3, 7),
    ("Tanner", "Galal", 2, 4);