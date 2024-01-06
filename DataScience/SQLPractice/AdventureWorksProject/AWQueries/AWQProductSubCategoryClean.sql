SELECT [ProductSubcategoryKey]
      --,[ProductSubcategoryAlternateKey]
      ,[EnglishProductSubcategoryName] as 'ProductSubCategory'
      --,[SpanishProductSubcategoryName]
      --,[FrenchProductSubcategoryName]
      ,[ProductCategoryKey]
  FROM [AdventureWorksDW2019].[dbo].[DimProductSubcategory]