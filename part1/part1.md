1. Line 11 will print i value without error since i is declared with var and var are either function-scoped or global scoped.
2. Line 12 will print discountedPrice value without error since discountedPrice is declared with var has no block scope.
3. Line 13 will print finalPrice value without error since finalPrice is declared with var and var are either function-scoped or global scoped.
4. The function will return [50,100,150]. For each iteration of the for loop, the price at index i will multiply with (1 - 0.5) = 0.5. Then it will multiply with 100 and divide by 100, which the value will remain the same. Finally, it will be appended to the discounted array.
5. Line 11 will raise an ReferenceError since i is declared within the for loop with let. Therefore, we can't access i outside of the for loop.
6. Line 12 will raise an ReferenceError since discountedPrice is declared within the for loop with let. Therefore, we can't access discountedPrice outside of the for loop.
7. Line 13 will print finalPrice value without error since finalPrice is declared with let outside of the for loop and within the function.
8. The function will return [50,100,150]. For each iteration of the for loop, the price at index i will multiply with (1 - 0.5) = 0.5. Then it will multiply with 100 and divide by 100, which the value will remain the same. Finally, it will be appended to the discounted array.
9. Line 11 will raise an ReferenceError since i is declared within the for loop with let. Therefore, we can't access i outside of the for loop.
10. Line 12 will raise an ReferenceError since discountedPrice is declared within the for loop with const. Therefore, we can't access discountedPrice outside of the for loop.
11. Line 13 will print cause error since finalPrice is declared with const and we can't reassign const variables. 
12. The function will return [50,100,150]. For each iteration of the for loop, the price at index i will multiply with (1 - 0.5) = 0.5. Then it will multiply with 100 and divide by 100, which the value will remain the same. Finally, it will be appended to the discounted array.
13. 

a.student.name

b.student["Grad Year"]

c.student.greeting

d.student["Favorite Teacher"].name

e.student.courseLoad[0]

14. 

a. '32', when binary + is applied to strings, it merges them

b. 1, other than binary +, the rest of the arithmetic operators work only with numbers and here it convert '3' to number 3

c. 3, null is treated as 0 here, therefore 3 + 0 = 3

d. '3null', when binary + is applied to strings, it merges them

e. 4, true is treated as 1 here, therefore 3 + 1 = 4

f. 0, false is treated as 0 here and null is treated as 0 as well. Therefore, 0 + 0 = 0

g. '3undefined', when binary + is applied to strings, it merges them

h. NaN, "3" is converted to 3 and undefined becomes NaN after the numeric conversion. Thus, 3 - NaN = NaN.

15. 

a. true, when comparing values of different types, it converts the values to numbers. Thus 2 > 1, which is true.

b. false, since string are compared letter-by-letter. The first letter 2 is not smaller than 1.

c. true,  when comparing values of different types, it converts the values to numbers. Thus 2 == 2, which is true.

d. false, the strict equality operator check the equality without type conversion. Since 2 is numeric and '2' is string, thus return false.

e. false, true is treated as 1 here, therefore 1 == 2 is false.

f. true, the strict equality operator check the equality without type conversion. Boolean(2) is boolean type and true is boolean type.

16. The equal sign == can be used to compare different types and the strict equality operator === check the equality without type conversion
17. 'How are you?'. First it will check the if statement. Since true is treated as 1 here, therefore 2 == 1 is false. Then it will go to else if. Since a single number 2 is evalute as true, then it will print 'How are you?'
18. see part1-question18.js
19. [6, 8, 10]. When the function modifyArray is called, [1,2,3] is passed in as array and doSomething is passed in as callback function. In the first iteration of the for loop, array[0] = 1 was passed in to doSomething as num and a newly defined function is passed in to doSomething as callback function. Then 1 +2 = 3 was passed in as x to the function and return back 3 * 2 = 6. The rest of the array repeat the above steps and we get [6, 8, 10] at the end.
20. see part1-question20.js
21. 1 4 3 2
