
function riskRating(req) {
    console.log(req);
    if (typeof req === 'string') {
        let Risk = 0;
        array = req.split(' ');
        for (let element of arr) {
            if (element.toLowerCase().includes("collide") || element.toLowerCase().includes("crash") || element.toLowerCase().includes("scratch")) {
                Risk++;
            }
        }

        if (Risk === 0) {
            Risk++
        }
        if (Risk > 5) {
            Risk = 5;
        }
        return (Risk);
    }
    else {
        return ("there is an error")
    }
}