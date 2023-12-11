USE Northwind;

--Seleccionar los clientes que viven en el país de USA
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME) = 'customers';

SELECT C.Country, C.CustomerID FROM Customers as C
WHERE C.Country LIKE('USA%');

--Selecciona los empleados con ID 3,5,8
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME) = 'employees';

SELECT E.EmployeeID, CONCAT(E.FirstName, ' ', E.LastName) as EmployeeName FROM Employees as E
WHERE E.EmployeeID in (3,5,8);

--Seleccionar los productos con precio mayor o igual a20 y menor o igual a 90
SELECT P.ProductID, P.ProductName, P.UnitPrice FROM Products as P
WHERE P.UnitPrice >=20 AND P.UnitPrice <= 90
ORDER BY P.UnitPrice ASC;

--Mostrar las ordenes de compra entre las fechas 01/06/1997 y 30/06/1997
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='orders';

SELECT O.OrderID,O.OrderDate FROM Orders as O
WHERE O.OrderDate BETWEEN ('1997/06/01') AND ('1997/06/30');

--Mostrar las ordenes de compra hechas entre las fechas 1997/07/01 y 1997/07/31 para los empleados con ID 1,3 y 8
SELECT E.EmployeeID, CONCAT(E.FirstName, ' ', E.LastName) as EmployeeName, O.OrderID FROM Orders as O
LEFT JOIN Employees as E ON O.EmployeeID = E.EmployeeID
WHERE (O.OrderDate BETWEEN ('1997/07/01') AND ('1997/07/31')) AND (E.EmployeeID in (1,3,8))
ORDER BY E.EmployeeID;

--Mostrar la cantidad de ordenes hechas en el año 1997
SELECT COUNT(O.OrderDate) as OrdersCount FROM Orders as O
WHERE YEAR(O.OrderDate) = '1997';

--Mostrar la cantidad de ordenes hechas en el año 1996  para el mes de octubre
SELECT COUNT(O.OrderDate) as OrdersCount FROM Orders as O
WHERE (YEAR(O.OrderDate) = '1997') AND (MONTH(O.OrderDate)= '4');

--Mostrar el total pagado por ID de producto en el mes de noviembre de 1997
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME) = 'Order details';

SELECT OD.ProductID, P.ProductName, SUM(OD.Quantity * OD.UnitPrice) as Total, O.OrderDate
FROM [Order Details] as OD
LEFT JOIN Products as P ON OD.ProductID = P.ProductID
LEFT JOIN Orders as O ON OD.OrderID = O.OrderID
WHERE (YEAR(O.OrderDate)='1997') AND (MONTH(O.OrderDate) ='11')
GROUP BY OD.ProductID, P.ProductName, O.OrderDate
ORDER BY OD.ProductID;