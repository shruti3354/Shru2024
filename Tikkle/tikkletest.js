function allocateSeats(numSeats, seatAvailabilityMap) {
    for (let block of seatAvailabilityMap) {
        let availableSeats = [];
        
        for (let seat of block) {
            // Check if the seat is available
            if (seat[Object.keys(seat)[0]]) {
                availableSeats.push(Object.keys(seat)[0]);
            } else {
                availableSeats = []; // Reset if we hit an allocated seat
            }

            // Check if we have enough contiguous available seats
            if (availableSeats.length === numSeats) {
                // Allocate the seats
                for (let i = 0; i < numSeats; i++) {
                    seat[availableSeats[i]] = false; // Mark as allocated
                }
                return availableSeats; // Return the allocated seats
            }
        }
    }
    
    // Return empty array if no seats could be allocated
    return [];
}

// Example usage
const seatAvailabilityMap = [
    [{'a1': true}, {'a2': true}, {'a3': false}, {'a4': true}, {'a5': true}, {'a6': true}, {'a7': true}],
    [{'a8': true}, {'a9': true}, {'a10': true}],
    [{'b1': true}, {'b2': true}, {'b3': true}, {'b4': true}, {'b5': false}, {'b6': true}],
    [{'b7': true}, {'b8': true}, {'b9': true}, {'b10': true}]
];

console.log(allocateSeats(3, seatAvailabilityMap)); // Example output: ['a8', 'a9', 'a10']