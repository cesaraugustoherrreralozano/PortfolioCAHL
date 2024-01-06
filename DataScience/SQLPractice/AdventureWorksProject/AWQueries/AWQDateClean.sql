SELECT [DateKey]
      ,[FullDateAlternateKey] as 'Date'
      ,[DayNumberOfWeek] as 'NumberDay'
      ,[EnglishDayNameOfWeek] as 'TextDay'
      ,LEFT([EnglishDayNameOfWeek],3) as 'WShort'
      --,[SpanishDayNameOfWeek]
      --,[FrenchDayNameOfWeek]
      --,[DayNumberOfMonth]
      --,[DayNumberOfYear] 
      ,[WeekNumberOfYear]
      ,[EnglishMonthName] as 'TextMonth'
      ,LEFT([EnglishMonthName],3) as 'MShort'
      --,[SpanishMonthName]
      --,[FrenchMonthName]
      ,[MonthNumberOfYear] as 'NumberMonth'
      ,[CalendarQuarter] as 'Quarter'
      ,[CalendarYear] as 'Year'
      --,[CalendarSemester]
      --,[FiscalQuarter]
      --,[FiscalYear]
      --,[FiscalSemester]
  FROM [AdventureWorksDW2019].[dbo].[DimDate] as date
  WHERE date.CalendarYear BETWEEN (2019) AND (2023)
  ORDER BY date.CalendarYear;