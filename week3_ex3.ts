/*
Exercise 3 – Video 4 – Interfaces
Create an Interface Hotel which contains the following method:
- checkAvailability(rooms: number, occupied: number): Boolean
Create a class Booking which implements the hotel interface. The booking class must implement the
method checkAvailability which returns true or false depending on if rooms are available – rooms >
occupied. Create an instance of the Booking class which invokes the checkAvailability method to
determine if rooms are available – pass in different values for the rooms and occupied parameters.
Print out the result returned from the method to the screen. For example if there are 50 rooms and
40 occupied, then an output similar to the following should be displayed:

*/

interface Hotel {
    checkAvailability(rooms: number, occupied: number): Boolean;
}

class Booking implements Hotel {
    checkAvailability(rooms: number, occupied: number): Boolean {
        let isOccupied: boolean = false;
        if (rooms > occupied) {
            isOccupied = true;
        }
        return isOccupied;
    }
}

let booking = new Booking();

if (booking.checkAvailability(50, 40)) {
    console.log("Rooms available");
} else {
    console.log("No rooms available");
}

if (booking.checkAvailability(50, 50)) {
    console.log("Rooms available");
} else {
    console.log("No rooms available");
}