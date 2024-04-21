

SELECT p.ProductKey
,pc.ProductCategoryKey
,psc.ProductSubcategoryKey
,p.EnglishProductName as 'productName'
, p.SafetyStockLevel, p.ReorderPoint, p.DaysToManufacture 
, pc.EnglishProductCategoryName as 'categoryName'
, psc.EnglishProductSubcategoryName as 'subCategoryName'
FROM DimProduct as p
LEFT JOIN DimProductCategory as pc on p.ProductKey = pc.ProductCategoryKey
LEFT JOIN DimProductSubcategory psc on pc.ProductCategoryKey = psc.ProductCategoryKey
;