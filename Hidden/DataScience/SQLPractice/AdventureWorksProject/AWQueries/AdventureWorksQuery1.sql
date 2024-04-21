--Queries relacionadas con la base de datos AdventuresWorksDW2019 la cual fue actualizada. 
/*

Utilizando chatGPT como un Sales Manager, obtenemos las solicitudes apra analizar la base de datos 
y posteriormente hacer un dashboard.ABORT

Respuesta de ChatGPT:

¡Por supuesto! Aquí te presento 10 solicitudes que podrías hacer como Sales Manager para obtener información valiosa de la base de datos y crear un informe en el dashboard:

Rendimiento de Ventas Mensuales:
Consulta: Obtén las ventas mensuales totales para el último año, desglosadas por productos y regiones.

Clientes Más Valiosos:
Consulta: Identifica a los clientes que han realizado las compras más cuantiosas en los últimos seis meses, incluyendo detalles sobre sus transacciones.

Seguimiento de Oportunidades:
Consulta: Muestra el estado actual de todas las oportunidades de venta abiertas, organizadas por prioridad y probabilidad de cierre.

Análisis de Productos Más Vendidos:
Consulta: Proporciona una lista de los productos más vendidos en el último trimestre, junto con sus márgenes de beneficio.

Comparación de Rendimiento Regional:
Consulta: Compara el rendimiento de ventas entre diferentes regiones geográficas durante el último año.

Tendencias de Compra por Segmento de Cliente:
Consulta: Analiza las tendencias de compra entre diferentes segmentos de clientes para identificar oportunidades de crecimiento.

Estudio de Competencia:
Consulta: Investiga las actividades de la competencia en el mercado, incluyendo nuevos productos y estrategias de precios.

Rentabilidad del Canal de Ventas:
Consulta: Evalúa la rentabilidad de cada canal de ventas (online, offline, distribuidores) y sugiere mejoras.

Análisis de Ciclo de Vida del Cliente:
Consulta: Examina el ciclo de vida del cliente, desde la adquisición hasta la retención, para optimizar estrategias de marketing.

Eficiencia del Equipo de Ventas:
Consulta: Revisa la eficiencia del equipo de ventas al analizar el tiempo dedicado a cada cliente y las tasas de conversión.

Estas solicitudes pueden proporcionar información valiosa para crear un informe completo en el dashboard y tomar decisiones estratégicas basadas en datos. ¡Avísame si necesitas más detalles sobre alguna de estas solicitudes o si tienes alguna otra en mente!

*/

--Primero Ejecutamos la base de datos para poder ser usada.
use AdventureWorksDW2019;

--Ahora vamos a definir las tablas de la base de datos que nos van a servir para dar respuesta a las solicitudes, vamos a conocer a profundidad las tablas. 

--Columnas de la tabla DimCustomer
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimcustomer';

--Columnas de la tabla DimDate
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimdate';

--Columnas de DimDepartmentGroup
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimdepartmentgroup';

--Columnas de DimEmployee
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimemployee';

--Columnas de DimGeography
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimgeography';

--Columnas de DimOrganization
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimorganization';

--Columnas de DimProduct
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimproduct';

--Columnas de DimProductCategory
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimproductcategory';

--Columnas de DimProductSubcategory
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimproductsubcategory';

--Columnas de DimPromotion
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimpromotion';

--Columnas de DimReseller
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimreseller';

--Columnas de DimSalesReason
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimsalesreason';

--Columnas de DimSalesTerritory
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimsalesterritory';

--Columnas de DimScenario
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='dimscenario';

--Columnas de FactAdditionalInternationalProductdescription
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactAdditionalInternationalProductdescription';

--Columnas de FactCallCenter
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactCallCenter';

--Columnas de FactCurrencyRate
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='factcurrencyrate';

--Columnas de FactFinance
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactFinance';

--Columnas de FactInternetSales
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactInternetSales';

--Columnas de FactProductInventory
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactProductInventory';

--Columnas de FactResellerSales
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactResellerSales';

--Columnas de FactSalesQuota
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactSalesQuota';

--Columnas de FactSurveyResponse
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='FactSurveyResponse';

--Columnas de NewFactCurrencyrate
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='NewFactCurrencyrate';

--Columnas de ProspectiveBuyer
SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE LOWER(TABLE_NAME)='ProspectiveBuyer';
