--Subqueries practice 

--¿Cual es el producto con el precio mínimo más bajo?
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME) = 'products';

WITH MinPrice as (

    SELECT P.ProductID, P.ProductName, P.UnitPrice, ROW_NUMBER() OVER(ORDER BY MIN(P.UnitPrice) ASC) as Ranking FROM Products as P
    GROUP BY P.ProductID, P.ProductName, P.UnitPrice
)

SELECT MP.ProductID, MP.ProductName, MP.UnitPrice FROM MinPrice  as MP
WHERE MP.Ranking in (1) ;
   
--¿Cual es el producto cuyo precio sea al menos 10 veces el pedido mínimo (quantity) de los precios de los pedidos (OrderDetails)?
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME) = 'order details';

SELECT P.ProductID,P.ProductName, p.UnitPrice FROM Products as P
WHERE P.UnitPrice >= 
(SELECT MIN(O.Quantity) FROM [Order Details] as O) * 10
ORDER  BY P.UnitPrice ASC;

--¿Cuales son los registros de productos (Products) cuyo precio (Price) sea mayor que el máximo de los precios de los productos cuyo id sea 3,6,9 y 10?
SELECT P.ProductID, P.ProductName, P.UnitPrice FROM Products as P
WHERE P.UnitPrice > 
(SELECT MAX(P.UnitPrice) FROM Products as P 
WHERE P.ProductID IN (3,6,9,10));

--¿Cuales son los registros de productos (Products) cuyo precio (Price) sea mayor que el minímo de los precios de los productos cuyo id sea 15,22,30,77?
SELECT P.ProductID, P.ProductName,p.UnitPrice FROM Products as P
WHERE P.UnitPrice >
(SELECT MIN(P.UnitPrice) FROM Products as P
WHERE P.ProductID IN (15,30,22,77))
ORDER BY P.UnitPrice ASC;

