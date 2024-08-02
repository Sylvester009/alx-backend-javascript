export default function groceriesList() {
  // New Map to store the groceries
  const groceriesMap = new Map();

  // Add groceries to the map with their quantities
  groceriesMap.set('Apple', 10);
  groceriesMap.set('Tomatoes', 10);
  groceriesMap.set('Pasta', 1);
  groceriesMap.set('Rice', 1);
  groceriesMap.set('Banana', 5);

  // Return the groceries map
  return groceriesMap;
}
