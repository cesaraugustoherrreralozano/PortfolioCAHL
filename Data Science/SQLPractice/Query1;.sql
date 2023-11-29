USE Northwind;

--Seleccionar los nombres de las columnas de cada tabla

SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Customers';

SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Employees';

SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Orders';

--Contar el número de clientes en la tabla

SELECT COUNT(C.CustomerID) as 'Number of Customers' FROM Customers as C;

--Contar el número de ordenes en la tabla

SELECT COUNT(O.OrderID)  as 'Number of Orders' FROM Orders as O;

--Número de clientes filtrado por ciudad de londres y que comiencen por la letra A

SELECT * FROM Customers as C
WHERE C.City = 'London' AND C.ContactName LIKE 'A%';

--Número de clientes por la ciudad de londres

SELECT COUNT(C.City) as 'Count London Customers'FROM Customers as C
WHERE LOWER (C.City)  = 'london';

--Contar el número de clientes agrupado por ciudades

SELECT C.City, COUNT(*)  as 'Count by City' FROM Customers as C
GROUP BY C.City;

--Identificar el tipo de dato en la columna seleccionada
SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME) = 'employees' AND LOWER(COLUMN_NAME) = 'birthdate';

--Contar el número de empleados nacidos después de la fecha específicada
SELECT COUNT(*) as 'Count Employees' FROM Employees  as E
WHERE CONVERT(DATE, E.BirthDate) > '1965-06-01';

SELECT COUNT(*) as 'Count Employees' FROM Employees  as E
WHERE E.BirthDate > '1965-06-01';

--Concatenar nombre y apellido y mostrar junto con la fecha de nacimiento
SELECT CONCAT(E.FirstName,' ', E.LastName) as Nombre, E.BirthDate FROM Employees as E;

--Concatenar nombr ey apellido junto con Fecha de nacimiento para los empleados 3,7,8 y el 10, pero 10 no existe
SELECT CONCAT(E.FirstName,' ', E.LastName) as Nombre, E.BirthDate FROM Employees as E
WHERE E.EmployeeID IN (3,7,8,10);

--Agrupar por el número de paises que tiene mayor a 5 clientes
SELECT C.Country, COUNT(C.CustomerID) as NúmeroClientes FROM Customers as C
GROUP BY C.Country
HAVING COUNT(C.CustomerID) > 5
ORDER BY NúmeroClientes DESC;

--UNIONES DE TABLAS
--Nombre del cliente del pedido 10360
SELECT C.ContactName , O.OrderID FROM Customers as C
RIGHT JOIN Orders as O ON C.CustomerID = O.CustomerID
WHERE O.OrderID in ('10360');

--Nombre de los clientes de los pedidos 10360,10253 y 10440
SELECT C.ContactName, O.OrderID FROM Customers as C
RIGHT JOIN Orders as O ON C.CustomerID = O.CustomerID
WHERE O.OrderID IN ('10360','10253','10440');

--Países, ciudades y su número de pedidos
SELECT C.Country ,C.City, COUNT(O.OrderID) as NúmeroPedidos FROM Orders as O
RIGHT JOIN Customers as C ON O.CustomerID = C.CustomerID
GROUP BY C.Country, C.City
ORDER BY NúmeroPedidos DESC;

--Ciudades con más de 7 pedidos
SELECT C.Country, C.City, Count(O.CustomerID) as CantidadPedidos FROM Orders as O
LEFT JOIN Customers as C ON C.CustomerID =  O.CustomerID
GROUP BY C.Country, C.City
HAVING COUNT(O.CustomerID)>7
ORDER BY CantidadPedidos DESC;

--3Países con más pedidos
WITH PedidosRanking as (
	SELECT C.Country, COUNT(O.OrderID) as CantidadPedidos , ROW_NUMBER() OVER(ORDER BY COUNT(O.CustomerID) DESC) as Ranking FROM Orders as O
	LEFT JOIN Customers as C ON C.CustomerID = O.CustomerID
	GROUP BY C.Country)

SELECT p.Country,p.Ranking FROM PedidosRanking as p
WHERE p.Ranking <= 3;

--3Países cpm ,ás pedidos y su cantidad de pedidos
WITH RankOrders as (
	SELECT C.Country, COUNT(O.OrderID) as CountOrders, ROW_NUMBER() OVER(ORDER BY COUNT(O.OrderID) DESC) as RankOrders FROM Orders as O
	LEFT JOIN Customers as C ON C.CustomerID = O.CustomerID
	GROUP BY C.Country
)

SELECT R.Country, R.CountOrders, R.RankOrders FROM RankOrders as R
WHERE R.RankOrders <=3;

--Nombre completo de empleados y número de pedidos registrados
SELECT E. EmployeeID, CONCAT(E.FirstName, ' ', E.LastName) as Nombre, COUNT(O.OrderID) as CountOrders FROM Employees as E
LEFT JOIN Orders as O ON E.EmployeeID = O.EmployeeID
GROUP BY E.EmployeeID, E.FirstName, E.LastName;

SELECT E.EmployeeID, MAX(CONCAT(E.FirstName,' ',E.LastName)) as Nombre, COUNT(O.OrderID) as CountOrders FROM Employees as E
LEFT JOIN Orders as O ON E.EmployeeID  = O.EmployeeID
GROUP BY E.EmployeeID
ORDER BY CountOrders DESC;

--EMpleados que solo comiencen por M con número de pedidos registrados
WITH OrdersByEmployees as (
	SELECT E.EmployeeID, MAX(CONCAT(E.FirstName, ' ', E.LastName)) as Nombre, COUNT(O.OrderID) as CountOrders FROM Employees as E
	LEFT JOIN Orders as O ON E.EmployeeID = O.EmployeeID
	GROUP BY E.EmployeeID
)

SELECT OE.EmployeeID, OE.Nombre, OE.CountOrders FROM OrdersByEmployees as OE
WHERE LOWER(OE.Nombre) LIKE ('m%');

--Número de pedido, nombre empleado, y cliente
SELECT O.OrderID as NumberOrder, E.FirstName as EmployeesName, C.ContactName as ClientName  FROM Orders as O
LEFT JOIN Employees as E ON O.EmployeeID = E.EmployeeID
LEFT JOIN Customers as C ON O.CustomerID = C.CustomerID
ORDER BY NumberOrder ASC;

--¿Hay algún cliente que haya hecho más de un pedido registrado por el mismo empleado?

WITH EmployeesOrders as(

	SELECT E.FirstName as EmployeesName , C.ContactName  as ClientName, COUNT(O.OrderID) as NumOrders FROM Orders as O
	LEFT JOIN Employees  as E ON O.EmployeeID = E.EmployeeID
	LEFT JOIN Customers as C ON O.CustomerID = C.CustomerID
	GROUP BY E.FirstName, C.ContactName
)

	SELECT EOR.EmployeesName, EOR.ClientName, EOR.NumOrders FROM EmployeesOrders as EOR
	WHERE EOR.NumOrders > 1
	ORDER BY EOR.EmployeesName ASC, EOR.NumOrders DESC
	;

-- Clientes que hayan hecho más de un pedido a Margaret
WITH MargaretClientes as  (
	SELECT E.FirstName as EmployeesName, C.ContactName as ClientName , COUNT(O.OrderID) as ClientOrders FROM Employees as E
	LEFT JOIN Orders as O ON E.EmployeeID = O.EmployeeID
	LEFT JOIN Customers as C ON O.CustomerID = C.CustomerID
	GROUP BY E.FirstName, C.ContactName
)

SELECT MC.EmployeesName, MC.ClientName, MC.ClientOrders FROM MargaretClientes as MC
WHERE LOWER(MC.EmployeesName) IN ('margaret') AND MC.ClientOrders > 1
ORDER BY MC.ClientOrders DESC;
