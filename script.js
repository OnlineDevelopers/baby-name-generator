const names = {
    "male": {
        "all": [
            "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Ishaan", "Ayaan", "Reyansh", "Krishna",
            "Kabir", "Om", "Shivansh", "Raghav", "Rohit", "Abhinav", "Aryan", "Nikhil", "Manav", "Rishabh",
            "Krish", "Aryan", "Yash", "Shaurya", "Ansh", "Raj", "Siddharth", "Pranav", "Vansh", "Samar",
            "Harsh", "Lakshya", "Rudra", "Kartik", "Tejas", "Abhay", "Kunal", "Hassan", "Ali", "Zain",
            "Ayaan", "Tariq", "Omar", "Bilal", "Sulaiman", "Hussein", "Zayd", "Mustafa", "Khalid", "Imran",
            "Zion", "Liam", "Ethan", "Joshua", "Matthew", "Luke", "Gabriel", "Noah", "Jacob", "Evan",
            "Aaron", "Daniel", "James", "Isaiah", "Michael", "Samuel", "Caleb", "Calvin", "Nathaniel", "David",
            "Joshua", "Alexander", "Oliver", "Samuel", "Benjamin", "Elijah", "Adam", "Charles", "Jackson",
            "Henry", "William", "Max", "Theo", "Dylan", "Jack", "Oscar", "Finn", "Owen", "Lucas", "Thomas",
            "Tyler", "Luke", "David", "Nashit", "Hassan", "Aadam", "Raza", "Arham", "Yusuf", "Azan", "Danyal"
        ],
        "hindu": [
            "Aarav", "Vivaan", "Ishaan", "Ayaan", "Krishna", "Kabir", "Om", "Shivansh", "Raghav", "Krish",
            "Rohit", "Abhinav", "Aryan", "Manav", "Rishabh", "Ansh", "Raj", "Siddharth", "Vansh", "Samar"
        ],
        "christian": [
            "Zion", "Gabriel", "Caleb", "Ethan", "Joshua", "Luke", "Isaiah", "Samuel", "Matthew", "Daniel",
            "Michael", "John", "David", "Eli", "Simon", "Joseph", "Noah", "James", "Charles", "Thomas"
        ],
        "muslim": [
            "Ayaan", "Ali", "Omar", "Bilal", "Hassan", "Tariq", "Imran", "Mustafa", "Zain", "Sulaiman",
            "Hussein", "Zayd", "Khalid", "Rizwan", "Farhan", "Sami", "Owais", "Rehan", "Abrar", "Yasir"
        ]
    },
    "female": {
        "all": [
            "Aadhya", "Saanvi", "Ananya", "Isha", "Riya", "Aarohi", "Pooja", "Kavya", "Shruti", "Diya",
            "Madhavi", "Neha", "Sanya", "Aishwarya", "Kiran", "Simran", "Ritika", "Meera", "Prisha", "Tanya",
            "Sanya", "Maya", "Nisha", "Anika", "Rupal", "Swati", "Tanu", "Yashika", "Kiran", "Amiya",
            "Priya", "Deepika", "Niharika", "Aditi", "Lakshmi", "Chandini", "Kripa", "Shivani", "Surbhi",
            "Khushboo", "Shalini", "Simran", "Laxmi", "Sanika", "Vidya", "Divya", "Komal", "Rashmi",
            "Grace", "Emily", "Sarah", "Hannah", "Sophia", "Rebecca", "Abigail", "Maya", "Naomi", "Anna",
            "Lily", "Mary", "Eliza", "Emma", "Olivia", "Eve", "Victoria", "Rachel", "Julia", "Bethany",
            "Ayesha", "Fatima", "Zainab", "Hira", "Nadia", "Sana", "Layla", "Amira", "Mariam", "Noor",
            "Samira", "Safa", "Sara", "Nawal", "Amani", "Rana", "Lubna", "Rasha", "Yasmin", "Alya"
        ],
        "hindu": [
            "Aadhya", "Saanvi", "Ananya", "Isha", "Riya", "Aarohi", "Pooja", "Kavya", "Shruti", "Diya",
            "Madhavi", "Neha", "Sanya", "Aishwarya", "Kiran", "Simran", "Ritika", "Meera", "Prisha", "Tanya"
        ],
        "christian": [
            "Grace", "Emily", "Sarah", "Hannah", "Sophia", "Rebecca", "Abigail", "Maya", "Naomi", "Anna",
            "Lily", "Mary", "Eliza", "Emma", "Olivia", "Eve", "Victoria", "Rachel", "Julia", "Bethany"
        ],
        "muslim": [
            "Ayesha", "Fatima", "Zainab", "Hira", "Nadia", "Sana", "Layla", "Amira", "Mariam", "Noor",
            "Samira", "Safa", "Sara", "Nawal", "Amani", "Rana", "Lubna", "Rasha", "Yasmin", "Alya"
        ]
    }
};

function generateName() {
    const gender = document.getElementById('gender').value;
    const religion = document.getElementById('religion').value;
    
    let filteredNames = names[gender][religion];
    
    // If 'all' is selected, return a random name from all names
    if (religion === "all") {
        const allNames = [...names[gender]["hindu"], ...names[gender]["christian"], ...names[gender]["muslim"]];
        filteredNames = allNames;
    }
    
    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    const randomName = filteredNames[randomIndex];
    
    document.getElementById('name').textContent = randomName;
}
