console.log(new Date()); // UTC Standard: ISO 8601 c c++ bruger det kun i nye versioner javascrip python og java bruger den

console.log(Date()); // local date

console.log(Date.now()); //Unix epoch


console.log(new Date().toLocaleDateString());

const date = new Date();

const danishDate = new Intl.DateTimeFormat("da-dk").format(date);

console.log(danishDate);

const americanDate = new Intl.DateTimeFormat("en-us").format(date);

console.log(americanDate);