function alarmClock(day, vacation){
    if(vacation){
      if (day == 0 || day == 6)
        return "off";
      else 
        return "10:00";
    }
    else {
      if (day == 0 || day == 6)
        return "10:00";
      else 
        return "7:00";
    }
  }
  let result =  dateFashion(1,false);
  console.log(result);