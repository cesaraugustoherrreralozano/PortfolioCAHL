SELECT [SalesTerritoryKey]
      ,[SalesTerritoryAlternateKey]
      ,[SalesTerritoryRegion] as 'region'
      ,[SalesTerritoryCountry] as 'Country'
      ,[SalesTerritoryGroup] as 'GroupTerritory'
      --,[SalesTerritoryImage]
  FROM [AdventureWorksDW2019].[dbo].[DimSalesTerritory]