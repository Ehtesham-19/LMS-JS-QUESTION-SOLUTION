function Season(month) {
    switch (month) {
        case "december":
            case "january":
                case "february":
            Season = "winter";
            break;
           
        case "march":
            case "april":
                case "may":
            Season = "spring";
            break;
            
        case "june":
            Season = "summer";
            break;
        case "july":
            Season = "summer";
            break;
        case "august":
            Season = "summer";
            break;
        case "september":
            Season = "autumn";
            break;
        case "october":
            Season = "autumn";
            break;
        case "november":
            Season = "autumn";
            break;
        default:
            Season ="enetr valid month"
    }
    return Season;
}
console.log(Season("march"))