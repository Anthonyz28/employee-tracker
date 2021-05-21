---- Department SEEDS ----
INSERT INTO department (name)
VAlUES ("Sales"),
    ("Engineering"),
    ("Legal"),
    ("Finance");


---- Employee Role SEEDS ----
INSERT INTO role(title, salary, department_name, manager_id)
VALUES ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Accountant", 125000, 4),
    ("Legal Team Lead", 250000, 3),
    ("Lawyer", 190000, 3),
    ("Software Engineer", 120000, 2);



---- Employee SEEDS ----
INSERT INTO employee(first_name, last_name, title, manager_title)
VALUES ("JOHN", "Doe", "Sales Lead", "Lead Engineer"),
    ("Mike", "Chan", "Salesperson", "Sales Lead"),
    ("Ashley", "Rodriguez", "Lead Engineer", null),
    ("Kevin", "Tupik", "Software Engineer" , "Lead Engineer"),
    ("Malia", "Brown", "Accountant", null),
    ("Sarah", "Lourd", "Legal Team Lead", null),
    ("Tom", "Allen", "Lawyer", "Legal Team Lead"),
    ("Tanner", "Galal", "Software Engineer", "Accountant");