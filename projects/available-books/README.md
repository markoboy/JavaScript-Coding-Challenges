# Available Books Challenge

In this challenge I will create an inventory application for a book store.

- Create a book class with this information
  - Title
  - Author
  - ISBN
  - numCopies
- Be able to get each book's availability
  - getAvailability()
    - 'out of stock' if 0 available copies
    - 'low stock' if < 10 copies
    - 'in stock' otherwise
- Be able to sell a book
  - sell(numSold = 1)
    - number of books sold should default to 1
    - numSold should be subtracted from the total copies in stock
- Be able to restock a book
  - restock(numCopies = 5)
    - number of copies to restock should default to 5
    - numCopies should be added to the total of copies in stock
- Use JavaScript Classes
- Use JavaScript Accessors (Getters and Setters)
