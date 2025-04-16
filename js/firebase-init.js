// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBlueL5pXIARVMbSVlKzglBda_65ap6W8k",
    authDomain: "rizal-eats.firebaseapp.com",
    projectId: "rizal-eats",
    storageBucket: "rizal-eats.firebasestorage.app",
    messagingSenderId: "408631282807",
    appId: "1:408631282807:web:ccb009c71fc1796abdca72",
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Function to add restaurants to Firestore
  function addRestaurants() {
    const restaurants = [
      // Array of restaurant objects from above
      {
        "restaurants": [
          {
            "id": "restaurant1",
            "name": "Vieux Chalet",
            "location": "Taktak Road, Antipolo City, Luzon Philippines",
            "city": "Antipolo",
            "cuisine": ["European", "Swiss"],
            "image": "https://example.com/vieux-chalet.jpg",
            "rating": 4.5,
            "priceRange": "$$$",
            "features": ["Romantic", "Mountain View"],
            "contact": "+6321234567",
            "website": "https://vieuxchalet.com.ph"
          },
          {
            "id": "restaurant2",
            "name": "Vikings Luxury Buffet - Robinsons Antipolo",
            "location": "Sumulong cor. Circumferential Rd Lower Ground Floor, Robinsons Antipolo, Antipolo City, Luzon 1870 Philippines",
            "city": "Antipolo",
            "cuisine": ["International", "Buffet"],
            "image": "https://example.com/vikings.jpg",
            "rating": 4.2,
            "priceRange": "$$$$",
            "features": ["All-you-can-eat", "Family-friendly"],
            "contact": "+6322345678"
          },
          {
            "id": "restaurant3",
            "name": "Tong Yang, Robinsons Antipolo",
            "location": "Lower Ground Floor, Antipolo City, Luzon 1870 Philippines",
            "city": "Antipolo",
            "cuisine": ["Chinese", "Hot Pot"],
            "image": "https://example.com/tongyang.jpg",
            "rating": 4.0,
            "priceRange": "$$$",
            "features": ["Shabu-shabu", "Group Dining"]
          },
          {
            "id": "restaurant4",
            "name": "Tipulo - Modern Filipino Cuisine",
            "location": "Fpla Premises, Km. 27 Sumulong Highway, Antipolo City Located inside the First Pacific Leadership Academy, Antipolo City, Luzon 1870 Philippines",
            "city": "Antipolo",
            "cuisine": ["Filipino", "Modern"],
            "image": "https://example.com/tipulo.jpg",
            "rating": 4.3,
            "priceRange": "$$",
            "features": ["Garden Setting", "Local Ingredients"]
          },
          {
            "id": "restaurant5",
            "name": "La Travieza Seafood Restaurant",
            "location": "L. Sumulong Memorial Circle San Roque, Antipolo City, Luzon 1870 Philippines",
            "city": "Antipolo",
            "cuisine": ["Seafood", "Filipino"],
            "image": "https://example.com/latravieza.jpg",
            "rating": 4.1,
            "priceRange": "$$",
            "features": ["Fresh Seafood", "Al Fresco Dining"]
          },
          {
            "id": "restaurant6",
            "name": "The Bistro at Le Blanc",
            "location": "3 Taktak Road, Antipolo City, Luzon 1870 Philippines",
            "city": "Antipolo",
            "cuisine": ["International", "Cafe"],
            "image": "https://example.com/lebistro.jpg",
            "rating": 4.4,
            "priceRange": "$$$",
            "features": ["Resort Setting", "Breakfast"]
          },
          {
            "id": "restaurant7",
            "name": "Theo & Miguel Restaurant",
            "location": "Bosay Resort, Near Galang/Roco Farm, Marigman Rd, Antipolo, 1870 Rizal, Philippines",
            "city": "Antipolo",
            "cuisine": ["Filipino", "Fusion"],
            "image": "https://example.com/theomiguel.jpg",
            "rating": 4.6,
            "priceRange": "$$$",
            "features": ["Romantic", "Garden View"]
          }
        ]
      }
    ];
  
    restaurants.forEach(restaurant => {
      db.collection("restaurants").add(restaurant)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    });
  }
  
  // Call this function once to populate your database
  // addRestaurants();