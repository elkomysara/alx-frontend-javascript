
import Building from './5-building.js';

// Create a subclass of Building to test the abstract class functionality
class TestBuilding extends Building {
  evacuationWarningMessage() {
    return 'This is a test evacuation message.';
  }
}

const b = new TestBuilding(100);  // Now creating an instance of TestBuilding instead of Building
console.log(b.sqft);  // Should log 100
console.log(b.evacuationWarningMessage());  // Should log the custom evacuation message

try {
    new Building(200);  // This should throw the error
} catch (err) {
    console.log(err);
}
