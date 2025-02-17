// getISTconvertedDate(paramDate: any): string | null {
const paramDate = "2025-01-27T10:42:08.000+0000";
    debugger;
  
    if (!paramDate) {
      return null;
    }
  
    // Parse the date as a string and assume it's in UTC format
    const date = this.datePipe.transform(paramDate, 'EEE MMM dd yyyy HH:mm:ss \'GMT\'Z (zzzz)');
    console.log(date);
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.error("Invalid date provided:", paramDate);
      return null;
    }
  
    // Manually add 5 hours and 30 minutes
    date.setUTCHours(date.getUTCHours() + 5);
    date.setUTCMinutes(date.getUTCMinutes() + 30);

    console.log(date);
    
  
    // Format the adjusted date
    // return this.dateFormatter.format(date, "DD-MMMM-YYYY", null);
  