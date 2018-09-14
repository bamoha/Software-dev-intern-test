#### Answers


1. `The query in the file says that there are two tables, runners and races. We are supposed to get back the result of names in ascending order of elements in runners that do not have the same ID with the winner ID of the elements present in the races table.`

2. `The answer is 5*10 = 50;`
`For each record in the dept table, it creates a mapping to each record in the employee table, so since there are 10 elements in the emp table, they all get printed in no_of_items in dept times. i.e 10 *5;`

3. `Since Temp placeholders are not allowed, the following query should work inplace`

`update SALARIES set sex = (case when sex='m' then 'f' when sex='f' then 'm' else sex end)`

4. `It will select from the customer table, records that were not ReferredBy is not 2`

`<> This symbol means not equal to, based on design principles, queries or code should be easily understandable by other developers viewing your code or queries, the query should have been written as:`

`SELECT Name from Customers where not ReferredBy=2`