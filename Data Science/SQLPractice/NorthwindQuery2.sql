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

WITH PedidoMInX10 as (
    SELECT P.ProductID, P.ProductName, P.UnitPrice, MIN(OD.Quantity) as PedidoMin, ROW_NUMBER() OVER(ORDER BY (MIN(OD.Quantity))) as Ranking FROM Products as P
    LEFT JOIN [Order Details] as OD ON P.ProductID = OD.ProductID
    GROUP BY P.ProductID, P.ProductName, P.UnitPrice
)

SELECT PMP.ProductName, CAST(PMP.PedidoMin as FLOAT) as PedidoMin, PMP.UnitPrice, PMP.Ranking FROM PedidoMInX10 as PMP
HAVING PMP.UnitPrice >= 10 * MIN(PMP.Ranking);

