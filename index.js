    let ascendingOrder = true;

// Function to change the toggle icon
    function expandIcon() {
    let universe = document.getElementById("expandIcon");
    if (
        universe.src ===
        "http://127.0.0.1:5500/Images/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg"
    ) {
        universe.src =
        "http://127.0.0.1:5500/Images/icons/menu_FILL0_wght400_GRAD0_opsz48.svg";
        ascendingOrder = true;
    } else if (
        universe.src ===
        "http://127.0.0.1:5500/Images/icons/menu_FILL0_wght400_GRAD0_opsz48.svg"
    ) {
        universe.src =
        "http://127.0.0.1:5500/Images/icons/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
        ascendingOrder = false;
    }
    }

// Data inside the table using JSON
    let JSONFile = [
    {
        No: 1,
        Name: "Selena Gomez",
        Age: 30,
        ID_Name: "@selenagomez",
        genre: "American singer",
        Followers_Count: 456 + "M",
    },
    {
        No: 2,
        Name: "Taylor Swift",
        Age: 33,
        ID_Name: "@taylorswift",
        genre: "American singer",
        Followers_Count: 276 + "M",
    },
    {
        No: 3,
        Name: "Dwayne Johnson",
        Age: 51,
        ID_Name: "@therock",
        genre: "American Actor",
        Followers_Count: 380 + "M",
    },
    {
        No: 4,
        Name: "Zach King",
        Age: 33,
        ID_Name: "@zachking",
        genre: "Youtuber",
        Followers_Count: 26 + "M",
    },
    {
        No: 5,
        Name: "Cameron Dallas",
        Age: 28,
        ID_Name: "@camerondallas",
        genre: "Actor",
        Followers_Count: 27 + "M",
    },
    {
        No: 6,
        Name: "Cristiano Ronaldo",
        Age: 38,
        ID_Name: "@cristiano",
        genre: "Portuguese football player",
        Followers_Count: 643 + "M",
    },
    {
        No: 7,
        Name: "Leo Messi",
        Age: 35,
        ID_Name: "@leomessi",
        genre: "Argentine football player",
        Followers_Count: 512 + "M",
    },
    {
        No: 8,
        Name: "BILLIE EILISH",
        Age: 21,
        ID_Name: "@billieeilish",
        genre: "American singer-songwriter",
        Followers_Count: 115 + "M",
    },
    {
        No: 9,
        Name: "Neymarjr",
        Age: 31,
        ID_Name: "@neymarjr",
        genre: "Brazilian football player",
        Followers_Count: 217 + "M",
    },
    {
        No: 10,
        Name: "Zendaya",
        Age: 26,
        ID_Name: "@zendaya",
        genre: "American actress",
        Followers_Count: 193 + "M",
    },
    ];

// Append every data inside JSON to tr and td elements
    let table = document.getElementById("container");
    for (let i = 0; i < JSONFile.length; i++) {
    let tr = document.createElement("tr");
    let vals = Object.values(JSONFile[i]);
    for (let j = 0; j < vals.length; j++) {
        let td = document.createElement("td");
        td.innerHTML = vals[j];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    }

// Function to sort by Name
function sort() {
    ascendingOrder = !ascendingOrder; // Toggle the sorting order

    JSONFile = JSONFile.sort(function (a, b) {
        let nameA = a.Name.toUpperCase();
        let nameB = b.Name.toUpperCase();
        if (nameA < nameB) {
            return ascendingOrder ? -1 : 1;
        }
        if (nameA > nameB) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
    });

    let table = document.getElementById("container");
    let headerRow = table.rows[0];

    // Clear the existing table content
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Re-append the table header row
    table.appendChild(headerRow);

    // Append the sorted rows
    for (let i = 0; i < JSONFile.length; i++) {
        let tr = document.createElement("tr");
        let vals = Object.values(JSONFile[i]);
        for (let j = 0; j < vals.length; j++) {
            let td = document.createElement("td");
            td.innerHTML = vals[j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


// Function to sort S.NO
    function sortNo() {
        ascendingOrder = !ascendingOrder;

        JSONFile = JSONFile.sort(function (a, b) {
        let noA = a.No;
        let noB = b.No;
        if (noA < noB) {
            return ascendingOrder ? -1 : 1;
        }
        if (noA > noB) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
        });
    
        let table = document.getElementById("container");
    
        // Store the table header row
        let headerRow = table.rows[0];
    
        // Clear the existing table content
        while (table.rows.length > 1) {
        table.deleteRow(1);
        }
    
        // Re-append the table header row
        table.appendChild(headerRow);
    
        for (let i = 0; i < JSONFile.length; i++) {
        let tr = document.createElement("tr");
        let vals = Object.values(JSONFile[i]);
        for (let j = 0; j < vals.length; j++) {
            let td = document.createElement("td");
            td.innerHTML = vals[j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        }
    }

// Function to sort by Age
    function sortAge() {
        ascendingOrder = !ascendingOrder;
        JSONFile = JSONFile.sort(function (a, b) {
        let noA = a.Age;
        let noB = b.Age;
        if (noA < noB) {
            return ascendingOrder ? -1 : 1;
        }
        if (noA > noB) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
        });
    
        let table = document.getElementById("container");
    
        // Store the table header row
        let headerRow = table.rows[0];
    
        // Clear the existing table content
        while (table.rows.length > 1) {
        table.deleteRow(1);
        }
    
        // Re-append the table header row
        table.appendChild(headerRow);
    
        for (let i = 0; i < JSONFile.length; i++) {
        let tr = document.createElement("tr");
        let vals = Object.values(JSONFile[i]);
        for (let j = 0; j < vals.length; j++) {
            let td = document.createElement("td");
            td.innerHTML = vals[j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        }
    }
// Function to sort by Genre
    function sortGenre() {
        ascendingOrder = !ascendingOrder;
        JSONFile = JSONFile.sort(function (a, b) {
        let noA = a.genre;
        let noB = b.genre;
        if (noA < noB) {
            return ascendingOrder ? -1 : 1;
        }
        if (noA > noB) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
        });
    
        let table = document.getElementById("container");
    
        // Store the table header row
        let headerRow = table.rows[0];
    
        // Clear the existing table content
        while (table.rows.length > 1) {
        table.deleteRow(1);
        }
    
        // Re-append the table header row
        table.appendChild(headerRow);
    
        for (let i = 0; i < JSONFile.length; i++) {
        let tr = document.createElement("tr");
        let vals = Object.values(JSONFile[i]);
        for (let j = 0; j < vals.length; j++) {
            let td = document.createElement("td");
            td.innerHTML = vals[j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
        }
    }

// Function to sort by Followers_Count
function sortFollowers() {
    ascendingOrder = !ascendingOrder;
    
    JSONFile = JSONFile.sort(function (a, b) {
      let followersA = parseInt(a.Followers_Count);
      let followersB = parseInt(b.Followers_Count);
      if (followersA < followersB) {
        return ascendingOrder ? -1 : 1;
      }
      if (followersA > followersB) {
        return ascendingOrder ? 1 : -1;
      }
      return 0;
    });
  
    let table = document.getElementById("container");
  
    // Store the table header row
    let headerRow = table.rows[0];
  
    // Clear the existing table content
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  
    // Re-append the table header row
    table.appendChild(headerRow);
  
    for (let i = 0; i < JSONFile.length; i++) {
      let tr = document.createElement("tr");
      let vals = Object.values(JSONFile[i]);
      for (let j = 0; j < vals.length; j++) {
        let td = document.createElement("td");
        td.innerHTML = vals[j];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
  }
// Function to search 
function search() {
    let searchInput = document.getElementById("searchInput").value.toUpperCase();
    
    let filteredData = JSONFile.filter(function (item) {
        let name = item.Name.toUpperCase();
        let idName = item.ID_Name.toUpperCase();
        let Genre = item.genre.toUpperCase();
        
        return name.includes(searchInput) || idName.includes(searchInput) || Genre.includes(searchInput);
    });
    
    let table = document.getElementById("container");
    let headerRow = table.rows[0];

    // Clear the existing table content
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Re-append the table header row
    table.appendChild(headerRow);

    // Append the filtered rows
    for (let i = 0; i < filteredData.length; i++) {
        let tr = document.createElement("tr");
        let vals = Object.values(filteredData[i]);
        for (let j = 0; j < vals.length; j++) {
            let td = document.createElement("td");
            td.innerHTML = vals[j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

// Attach event listener to the search input field
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", search);
