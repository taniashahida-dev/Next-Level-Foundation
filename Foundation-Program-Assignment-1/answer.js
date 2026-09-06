//-------------Value Detective ----------------//

function describeValue(value) {
    const valueType = typeof(value)
    if (value) {
        return(`${valueType} | truthy`)
    } else {
         return(`${valueType} | falsy`)
    }
  
}
// console.log(describeValue(0))


//----------------Bangladesh Weekend Machine----------------//

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

// console.log(getDayType("Monday"))

//----------------Username Gatekeeper-------------------//

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}

// console.log(validateUsername("admin34"))


//---------------------Dhaka CNG Fare Meter-----------------------------//


function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}
// console.log(getCngFare(23 , true , 34))


//-----------------------Run Chase Commentator--------------------//
const getChaseVerdict = (target, scored, ballsLeft)=>  {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
// console.log(getChaseVerdict(200, 200, 12))