# name = input("What is your name?" )

# print("Hi, %s." %(fname, lname, num) )

b = ('a', 'b', 'c')
c = 10, 20, 30

shopping = ('apples', 'milk', 'bread')
alphaShopping = tuple(sorted(shopping))
print(alphaShopping)

shoppingStops = (
    ['bread', 'milk', 'eggs'],
    ['picture hooks', 'extensin cord'],)

print(shoppingStops[0])

def minmax(numbers):
    return min(numbers), max(numbers)

myNums = (1, 4, -2, 3.3, -8, 25, 9, 0)
print(minmax(myNums))

(lowest, highest) = minmax(myNums)
print(lowest)
print(highest)