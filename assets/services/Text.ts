import { getRandomAdventureImage, getRandomIndexedImage } from "./Images";

export const PACKAGES = [
  {
    __id: "1",
    name: "Rajasthan Heritage Tour",
    image: getRandomIndexedImage(),
    days: 10,
    nights: 9,
    Overview: [
      `Explore the rich cultural heritage of Rajasthan with our exclusive Rajasthan Heritage Tour Package. Discover the majestic forts, royal palaces, and vibrant traditions of Jaipur, Jodhpur, Udaipur, and more. This tour is perfect for history enthusiasts and culture lovers looking to experience the true essence of Rajasthan.`,
      `Visit iconic landmarks like the Amber Fort, Mehrangarh Fort, and City Palace. Enjoy camel safaris in Jaisalmer, boat rides in Udaipur, and the colorful bazaars of Jaipur. Immerse yourself in the royal lifestyle and create unforgettable memories.`,
      `Rajasthan is a land of vibrant festivals, intricate handicrafts, and stunning architecture. This tour offers a perfect blend of history, culture, and adventure, making it an ideal choice for travelers seeking an authentic Indian experience.`,
    ],
    Highlight: [
      "Camel safari in Jaisalmer",
      "Cultural and folk dance performances",
      "Visit Mehrangarh Fort and Umaid Bhawan Palace",
      "Boat ride in Udaipur's Lake Pichola",
      "Elephant ride at Amber Fort in Jaipur",
      "Jeep safari in the Thar Desert",
      "Explore the holy city of Pushkar",
    ],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description: `Arrive Delhi/Jaipur Airport, welcomed by our Travel Agent at the Airport and Straight Drive to Jaipur. 
          Arrive Jaipur and Transfer to your hotel and our travel agent will brief you about your tour and hand over the documents.`,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
      {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur",
        description: `En route to Udaipur, visit the stunning Jain Temples of Ranakpur, known for their intricate marble carvings. Continue to Udaipur and check into your hotel. Overnight stay in Udaipur.`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Jaipur to Delhi Departure",
        description:
          "Conclude your Rajasthan Heritage Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    Price: 1600,
    FAQs: [
      {
        name: "What is the best time to visit Rajasthan?",
        description:
          "The best time to visit Rajasthan is from October to March when the weather is pleasant and ideal for sightseeing.",
      },
      {
        name: "Are camel safaris included in the package?",
        description:
          "Yes, a camel safari in Jaisalmer is included in the Rajasthan Heritage Tour Package.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  {
    __id: "2",
    name: "Incredible Tour of Rajasthan",
    image: getRandomIndexedImage(),
    days: 10,
    nights: 9,
    Overview: [
      `Explore the rich cultural heritage of Rajasthan with our exclusive Rajasthan Heritage Tour Package. Discover the majestic forts, royal palaces, and vibrant traditions of Jaipur, Jodhpur, Udaipur, and more. This tour is perfect for history enthusiasts and culture lovers looking to experience the true essence of Rajasthan.`,
      `Visit iconic landmarks like the Amber Fort, Mehrangarh Fort, and City Palace. Enjoy camel safaris in Jaisalmer, boat rides in Udaipur, and the colorful bazaars of Jaipur. Immerse yourself in the royal lifestyle and create unforgettable memories.`,
      `Rajasthan is a land of vibrant festivals, intricate handicrafts, and stunning architecture. This tour offers a perfect blend of history, culture, and adventure, making it an ideal choice for travelers seeking an authentic Indian experience.`,
    ],
    Highlight: [
      "Camel safari in Jaisalmer",
      "Cultural and folk dance performances",
      "Visit Mehrangarh Fort and Umaid Bhawan Palace",
      "Boat ride in Udaipur's Lake Pichola",
      "Elephant ride at Amber Fort in Jaipur",
      "Jeep safari in the Thar Desert",
      "Explore the holy city of Pushkar",
    ],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description: `Arrive Delhi/Jaipur Airport, welcomed by our Travel Agent at the Airport and Straight Drive to Jaipur. 
          Arrive Jaipur and Transfer to your hotel and our travel agent will brief you about your tour and hand over the documents.`,
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
      {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br/><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work. Entry fee is ₹50 for Indians and ₹200 for foreigners.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Khuri",
        description: `
    <strong>Day 1: Arrival and Khuri Exploration</strong><br/><br/>
    <strong>2:00 PM:</strong> Depart from Jaisalmer, with a 1.5-hour drive to Khuri, covering approximately 50 km.<br/><br/>
    <strong>4:00 PM:</strong> Arrive in Khuri village.<br/><br/>
    <strong>4:15 PM - 5:15 PM:</strong> Explore the village, including traditional mud houses, local artisan crafts, and experiencing the warm hospitality of village life.<br/><br/>
    <strong>5:00 PM - 7:00 PM:</strong> Enjoy a sunset camel safari at the Khuri Sand Dunes, with options for a jeep safari as well. The dunes are known for their golden sands and fewer crowds compared to Sam Sand Dunes.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Cultural evening at the desert camp, featuring Rajasthani music, dance, and a buffet dinner. Accommodation is in desert tents with attached bathrooms.<br/><br/>
    
    <strong>Day 2: Sunrise and Departure</strong><br/><br/>
    <strong>5:45 AM - 6:30 AM:</strong> Sunrise viewing over the dunes, followed by a morning camel ride or quiet chai on the dunes.<br/><br/>
    <strong>7:00 AM:</strong> Breakfast at the camp.<br/><br/>
    <strong>Morning (8:20 AM):</strong> Local sightseeing in Khuri (optional).<br/><br/>
    Possible desert wildlife spotting, including desert foxes, peacocks, and chinkaras (local guide recommended).<br/><br/>
    Optional visit to the Khuri Jain Temple, a serene temple in traditional style.
`,
      },

      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur",
        description: `En route to Udaipur, visit the stunning Jain Temples of Ranakpur, known for their intricate marble carvings. Continue to Udaipur and check into your hotel. Overnight stay in Udaipur.`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Jaipur",
        description:
          "Return to Jaipur for a full-day sightseeing tour. Visit the Jantar Mantar observatory, Albert Hall Museum, and enjoy shopping in the local markets. Overnight stay in Jaipur.",
      },
      {
        name: "Jaipur to Delhi Departure",
        description:
          "Conclude your Rajasthan Heritage Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    Price: 2000,
    FAQs: [
      {
        name: "What is the best time to visit Rajasthan?",
        description:
          "The best time to visit Rajasthan is from October to March when the weather is pleasant and ideal for sightseeing.",
      },
      {
        name: "Are camel safaris included in the package?",
        description:
          "Yes, a camel safari in Jaisalmer is included in the Rajasthan Heritage Tour Package.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  {
    __id: "3",
    name: "Colorful Rajasthan Tour",
    image: getRandomIndexedImage(),
    days: 16,
    nights: 15,
    Overview: [
      `Experience the vibrant culture and colorful traditions of Rajasthan with our Colorful Rajasthan Tour Package. This tour takes you through the most iconic destinations, including Jaipur, Udaipur, Jodhpur, and Pushkar, offering a perfect blend of history, culture, and adventure.`,
      `Witness the grandeur of Rajasthan's forts and palaces, enjoy camel safaris in the Thar Desert, and participate in local festivals and cultural performances. This tour is ideal for travelers looking to immerse themselves in the rich heritage of Rajasthan.`,
    ],
    Highlight: [
      "Explore the Pink City of Jaipur",
      "Visit the City of Lakes, Udaipur",
      "Camel safari in Jaisalmer",
      "Cultural performances in the Thar Desert",
      "Visit the holy city of Pushkar",
      "Shop for traditional handicrafts and textiles",
    ],
    Itinerary: [
      {
        name: "Arrival in Jaipur",
        description:
          "Begin your journey in Jaipur, the Pink City. Visit the Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Khuri",
        description: `
    <strong>Day 1: Arrival and Khuri Exploration</strong><br/><br/>
    <strong>2:00 PM:</strong> Depart from Jaisalmer, with a 1.5-hour drive to Khuri, covering approximately 50 km.<br/><br/>
    <strong>4:00 PM:</strong> Arrive in Khuri village.<br/><br/>
    <strong>4:15 PM - 5:15 PM:</strong> Explore the village, including traditional mud houses, local artisan crafts, and experiencing the warm hospitality of village life.<br/><br/>
    <strong>5:00 PM - 7:00 PM:</strong> Enjoy a sunset camel safari at the Khuri Sand Dunes, with options for a jeep safari as well. The dunes are known for their golden sands and fewer crowds compared to Sam Sand Dunes.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Cultural evening at the desert camp, featuring Rajasthani music, dance, and a buffet dinner. Accommodation is in desert tents with attached bathrooms.<br/><br/>
    
    <strong>Day 2: Sunrise and Departure</strong><br/><br/>
    <strong>5:45 AM - 6:30 AM:</strong> Sunrise viewing over the dunes, followed by a morning camel ride or quiet chai on the dunes.<br/><br/>
    <strong>7:00 AM:</strong> Breakfast at the camp.<br/><br/>
    <strong>Morning (8:20 AM):</strong> Local sightseeing in Khuri (optional).<br/><br/>
    Possible desert wildlife spotting, including desert foxes, peacocks, and chinkaras (local guide recommended).<br/><br/>
    Optional visit to the Khuri Jain Temple, a serene temple in traditional style.
`,
      },
     {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur",
        description: `Ranakpur is famous for the stunning white marble Jain Temple dedicated to Tirthankara Adinatha, set amidst green hills.`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
     {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Ranthambore",
        description: `Ranthambore is a renowned national park famous for tiger safaris, Ranthambore Fort, and picturesque lakes and ruins.`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/>

`,
      },
      {
        name: "Departure",
        description:
          "Conclude your Colorful Rajasthan Tour with a transfer to Jaipur or Delhi for your onward journey.",
      },
    ],
    Inclusion: [
      "Luxury air-conditioned transportation",
      "Daily buffet breakfast",
      "Accommodation in heritage hotels",
      "Camel safari in Jaisalmer",
      "Boat ride in Udaipur",
      "English-speaking tour guide",
      "All applicable taxes and service charges",
    ],
    Exclusion: [
      "Meals not mentioned in the itinerary",
      "Personal expenses such as tips and laundry",
      "Entrance fees to monuments",
      "International and domestic airfare",
      "Travel insurance",
    ],
    Price: 2500,
    FAQs: [
      {
        name: "What is included in the package?",
        description:
          "The package includes transportation, accommodation, daily breakfast, and guided tours.",
      },
      {
        name: "Can I customize the itinerary?",
        description:
          "Yes, the itinerary can be customized to suit your preferences. Please contact us for more details.",
      },
    ],
  },
  // {
  //   __id: "3",
  //   name: "Rajasthan Culture Tour",
  //   image: getRandomIndexedImage(),
  //   days: 15,
  //   nights: 14,
  //   Overview: [
  //     `Discover Royal Culture, Traditions, Customs & History During Rajasthan Cultural Tour. Welcome to India, You will be received by Incredible Tour To India representative at the airport and assisted to your hotel.`,
  //     `In the Hotel you will have a brief description of your tour and the representative will hand over your documents regarding the tour, Rest of the time at leisure. Overnight in Hotel.`,
  //   ],
  //   Highlights: [
  //     "Architecture Reach Mandawa Mansion (havelies) Tour",
  //     "Royal experience of Rajput Region Shekhawati",
  //     "Amber fort and City Palace of Jaipur",
  //     "Mehrangarh fort and Jaswant Tharra.",
  //     "Boating in Lake Pichola in udaipur",
  //   ],
  //   Itinerary: [
  //     {
  //       name: "Arrive Delhi – Jaipur",
  //       description: `Arrive in Delhi and transfer to Jaipur via cab/train/bus.`,
  //     },
  //     {
  //       name: "Jaipur",
  //       description: `
  //       <h1><strong>City Place</strong><h1>
  //       The City Palace of Jaipur is located in the heart of the old city of Jaipur in Rajasthan, India. It is spread over a large area, split into a series of courtyards, gardens, and buildings. <br/><br/>

  //       The outer wall was built by Maharaja Jai Singh II, but other additions are much more recent, some dating back to the beginning of the 20th century. The palace is a wonderful blend of Rajasthani and Mughal architectural style. The City Place of Jaipur is a major tourist attraction in Rajasthan. <br/><br/>

  //       <h1><strong>Astronomical Observatory (Jantar Mantar):</strong><h1>
  //       Between 1727 and 1734 Maharajah Jai Singh II of Jaipur constructed five astronomical observatories in west-central India. The observatories, or “Jantar Mantar” as they are commonly known, incorporate multiple buildings of unique form, each with a specialized function for astronomical measurement. <br/><br/>

  //       These structures with their striking combinations of geometric forms at large scale, have captivated the attention of architects, artists, and art historians worldwide, yet remain largely unknown to the general public.

  //       Jantar Mantar presents the observatories through a variety of media and information sources, making it possible to explore and learn about these historic sites through interactive panoramic “VR” photographs, time-lapse sequences, and 3D models as well as articles, drawings, and historic texts. It is a comprehensive resource for exploring the observatories in depth.
  //       `,
  //     },
  //     {
  //       name: "Shekawati",
  //       description: `
  //       <h1><strong>Amer Fort</strong><h1>

  //       The Amer Fort is situated in Amer, which is 11 kilometres from Jaipur. Amer, originally, was the capital of the state before Jaipur. It is an old fort, built-in 1592 by Raja Man Singh. This fort is also very popularly known as the Amer Palace.<br/><br/>

  //       The Amer Fort was built in red sandstone and marble and the Maotha Lake adds a certain charm to the entire Fort. Though the fort is quite old and may even look so from the outside, it is beautiful on the inside and boasts of various buildings of prominence like the ‘Diwan-i-Aam’, the ‘Sheesh Mahal’ and even the ‘Sukh Mahal’. The Amer Fort has influences of both Hindu and Muslim architecture.<br/><br/>

  //       This fort also has the ‘Shila Devi’ Temple and the ‘Ganesh Pol’ which is a gate that leads to the private palaces of the kings. The Amer Fort has many pavilions and halls of great interest and other popular attractions.<br/><br/>

  //       <h1><strong>Jaigarh Fort</strong><h1>

  //       The Jaigarh fort is the most spectacular of the three-hilltop forts that overlook Jaipur. In Mughal times, the Jaipur region was a major weapon-producing centre for the Mughal and Rajput rulers, several of the weapons being on display in the fort’s museum.<br/><br/>

  //       It is one of the few military structures of medieval India preserved almost intact, containing palaces, a granary, a well-planned cannon foundry, several temples, a tall tower and giant mounted cannon-the Jai Ban (Jaivan) which is the largest cannon on wheels in the world. Jaigarh Fort is also known as the fort of victory. The display includes a collection of canons, many of which are exquisitely decorated and were used in the Mughal campaigns led by the Rajput King, Raja Man Singh.<br/><br/>

  //       Of Jaipur’s three forts, Jaigarh is perhaps the most imposing. It does not have those delicate structures or palaces like that of Amber but if you want a quick look at a hard-core fortress, this is it. Jaigarh means ‘Victory Fort’ and was built between the 15th and the 18th century AD, and stands 15 km from Jaipur, amidst rock-strewn, thorn-scrub covered hills, its forbidding stone ramparts being visible from the Jaipur town. A steep road goes up to the main gate, the Dungar Darwaza, from where the view is are inspiring. <br/><br/>

  //       <h1><strong>Nahargarh Fort</strong><h1>

  //       Nahargarh Fort is located on the rugged ridge of Aravali Hills and it forms an impressive northern backdrop of Jaipur. It looks most classy when floodlit at night. The fort overlooks the city and presents a glittering view of the city lights. It was built in 1734 and extended in 1868. Nahargarh meaning abode of the tigers was built by Jai Singh to bolster the defence of Amber.<br/><br/>

  //       The legend has it that it was named Nahargarh after Nahar Singh, a prince whose spirit would destroy the construction and stall its progress. So after a Tantrik invoked the spirit, it agreed to withdraw on condition that the fort would be named after him. The Madhavendra Bhawan, built by Sawai Madho Singh has a unique cluster of 12 identical suites for queens and at the head is a suite for the king himself.<br/><br/>

  //       The rooms are linked by corridors and retain some delicate frescoes as well as toilets and kitchen hearths. It was used by members of the royal family for an excursion in summers and is even now a favoured picnic spot. Durg Cafeteria just above the entrance sells meals and refreshments, while Padao Restaurant on the west sells drinks around sunset.`,
  //     },
  //     {
  //       name: "Kuchaman Fort",
  //       description: `Mandawa is located in the Shekhawati region of Rajasthan. The presence of a number of forts, mansions and Haveli’s also make it a great tourist destination.<br/><br/>

  //       Mandawa used to a busy market town for Rajput merchants. It was during that period, the Rajputs built a number of palatial mansions. It was their initiative to build the archways, murals etc. as well. This actually helped in imparting a royal ambiance and vintage charm to the place. The traders used to work in different parts of the country.<br/><br/>

  //       However, whenever there was a question of building a palatial mansion, they built it in Mandawa. These mansions marked their wealth and prosperity.`,
  //     },
  //     {
  //       name: "Bikaner Via Nagaur Fort",
  //       description: `The Kuchaman Fort, a Heritage Hotel near Jaipur, Rajasthan. Ideally situated with proximity to key tourist destinations in India Pushkar, Ajmer, Jaipur and Samode. The scenic beauty and picturesque setting of this fort make you travel back in time. <br/><br/>

  //       This Heritage Hotel and Resort offers more than just accommodation activities include Horse Safaris, Camel Safaris, Village Safaris, Bird watching and Temple excursions. Our special Kuchaman City excursion takes you through old heritage Haveli’s and other memorable lanes. <br/><br/>

  //       The resort itself offers Five-star comfort. An indoor Pool, Yoga Centre, Kerala Massages and a multi-cuisine restaurant. This Heritage Hotel and Fort with its high and massive ramparts, 32 bastions, 10 gates and various defences is a formidable fort unique in its architecture. One of the finest Heritage Hotels in Rajasthan, The Kuchaman Fort is rapidly becoming the favourite choice for the discerning traveller. <br/><br/>

  //       As you go winding up an undulating mountain road, towards the massive portals of this magnificent fort, you travel back to in time, only to be swallowed into the inside of this ancient world of strange mysteries, of secret chants and mantras, of classical music and ragas, and of fine arts and murals. The Kuchaman Fort. Beckoning, inviting, waiting to welcome you as it rises proudly int the clear skies at the top of a 1000 feet high rock cliff.
  //       <br/><br/>

  //       The Kuchaman Fort, a rare jewel set in a glittering sea of golden sands, as though a million-year-old rock itself changed its shape, to record the extraordinary era of Kuchaman glory. The Kuchaman Fort, where with echoing, reverberating step, you peel away successive layers of timeless history, perfectly preserved, frozen in rock and time.`,
  //     },
  //     {
  //       name: "Jaisalmer",
  //       description: `Just over five centuries old, Bikaner was founded by a scion of the house of Marwar (Jodhpur). The fort of Bikaner, Junagadh, however, was built in 1593 by Raja Rai Singh who also served as a general in the army of Emperor Akbar. Made from red sandstone and encircled by a moat around which the modern city of Bikaner has spread in a somewhat erratic fashion, Junagadh consists of several palaces and apartments in a remarkable state of preservation. The art of mason and sculptor is most obvious in the recreation of delicate stone screens, kiosks, pavilions and series of arched entrances to buildings reached from corridors that have windows overlooking the city beyond. <br/><br/>

  //       Some of the palaces are among the most richly decorated in Rajasthan and include Anup Mahal, Chandra Mahal and Phool Mahal. They give the impression of rich inlay of pietra dura, though in fact the apartments are merely richly painted. The paintings have been preserved as good as new because of the extremely dry heat conditions of the desert town. Another palace, Badal Mahal recreated the painting of clouds on its walls, a reminder of the monsoon that often failed the settlement. The Anup Mahal courtyard has a throne set in a pool of water. Bringing alive the sensitivity the rulers showed in their building environment.`,
  //     },
  //     {
  //       name: "Jaisalmer",
  //       description: `Morning sightseeing tour of Jaisalmer The golden rays of the setting sun, the colourfully adorned locals, the massive forts and mansions, the extremely fascinating craftsmanship, Rajput Havelis, all these make Jaisalmer a place of must visit in Rajasthan. Moreover, a visit to the Jaisalmer Fort (the second oldest fort in Rajasthan after Chittaur), Patwon ki Haweli, (the grandest haveli of Jaisalmer), Desert Culture centre and museums gives you some glimpse of this small town’s past. <br/><br/>

  //       meet your religious taste; Salim Singh ki Haweli and Nathmal ki Haweli give you some more idea of the haweli architecture of the town. Besides these, Gadsisar Lake is also an interesting spot that you must visit in this desert city.

  //       Afternoon visit Sam Sand Dunes, Ideal for viewing sunsets, these sites will also give you a chance to capture the picturesque sand dunes in your camera. Overnight in Hotel. / Night at Desert Camp.`,
  //     },
  //     {
  //       name: "Manvar",
  //       description: `Rajasthan is presently one of the most enchanting tourist destinations in the world. Among all the cities in Rajasthan, Jodhpur is also experiencing a huge number of tourist footfalls in the recent past Tours to Manvar is one such attraction that is located in the midst of the Thar Desert, Manvar lying exactly between the Jodhpur, Jaisalmer and Bikaner. It will surely give a great experience for the tourists by offering the beauty of the desert of at its best. It becomes a must visit during excursions from Jodhpur.<br/><br/>

  //       Manvar is an excellent destination to have a thoroughly enjoyable holiday. Manvar is one of the perfect options for those who wish to get the true feel of deserts. It is such a fascinating place that offers the raw beauty of nature. It will let you explore the various parts of the desert to enjoy its kaleidoscopic beauty. Sightseeing Manvar provides you with an opportunity to enjoy the enthusiasm of wilderness in the desert. Manvar has the sprawling resort that built on 5 acres of land reflecting the true ambience of the traditional village.<br/><br/>

  //       The best time to visit here is between the months of September to March. During this time, you will be able to get to see a large number of migratory demoiselle cranes. Ride-on Jeep safaris gives you an enjoyable experience for the tourists.<br/><br/>`,
  //     },
  //     {
  //       name: "Jodhpur",
  //       description: `Rajasthan is one of the most prominent tourist destinations that offer a lot of tourist attractions. The variety of tourist attraction helps in making Rajasthan one of the most sought after tourist attraction. In fact, Rajasthan is currently one of the most popular tourist destinations in the world. The unique charm appeals similarly to the domestic tourists as well as foreign tourists. Among the various cities in Rajasthan that manages to attract a large number of tourists, Jodhpur is a prominent one.<br/><br/>

  //       Jodhpur is a tourist place in Rajasthan that has a variety of tourist places. These tourist places experience a huge number of tourist footfall. However, in the recent past, Jodhpur is also experiencing a huge number of tourist footfalls as the tourists are coming down to the place to go for excursions from Jodhpur. Presence of a number of tourist attractions in close proximity to the Jodhpur helps in making Jodhpur excursions a thoroughly enjoyable excursion for the tourists. These excursions take you for a number of tours.<br/><br/>

  //       Tours to Manvar is one such attraction that will surely be a great experience for the tourists. Offering the beauty of desert of at its best, it is a must-visit during excursions from Jodhpur.`,
  //     },
  //     {
  //       name: "Jodhpur (Maharangarh Fort with Jaswantarda) via Osian – Bundi",
  //       description: `Having arranged many mobile camel safaris in the usual mainstream and busy destinations we realized that a more exclusive destination was missing from this fun experience. A location was sourced and what better than on the first sand dune of the famous Thar Desert of Rajasthan.<br/><br/>

  //       With expansive views of the vast desert on one side and the intricate temples of Osian on the other, this camp, the first of its kind in India, offers easy access to the local desert villages. Venturing out on camel one can meet the proud local tribes, the Bishnois and Bhils, potters and weavers and shepherds in their natural surroundings, not to mention the various varieties of desert wildlife such as blue bulls, gazelles, foxes, peacocks and partridges to name but a few.<br/><br/>

  //       The nearby ancient village of Osian is legendary for its mesmerizing 6th /8th-century temples, sand-dunes and diversity of Rajasthani culture and tradition and Jodhpur, with its magnificent Meherangarh Fort, is just 60 km away.<br/><br/>

  //       Being a permanent structure we also have the additional bonus of a refreshing swimming pool, a feat of architectural engineering in a sand dune ! and the safari bar, a wonderful place to relax in the evenings over a drink and cigar to the gentle strains of jazz music.<br/><br/>

  //       Once at the camp -nestled in the dunes your host Reggie Singh, grandson of Maharaj Ratan Singh of Jodhpur will invite you for an evening of cocktails, folk entertainment and a semi-formal candle lit dinner.

  //       `,
  //     },
  //     {
  //       name: "Jodhpur – Udaipur",
  //       description: `This morning after breakfast drive to Udaipur. En-route Visit Ranakpur famous for Jain Temples. The Ranakpur Jain Temples were built during the reign of the liberal and gifted monarch Rana Kumbha in the 15th century. An enormous basement covers 48,000 sq. feet area. There are four subsidiary shrines, twenty-four pillared halls and eligibly domes supported by over four hundred columns.<br/><br/>

  //       Visit Muchhal Mahaveer Temple – The distinctive feature of this Jain temple is the statue of Lord Mahavira with a moustache. From here proceed to Udaipur. check into your hotel. Rest of the day is at your leisure you may rest in the hotel Or visit the Udaipur city in the evening. Overnight in Udaipur Overnight at the hotel.`,
  //     },
  //     {
  //       name: "Udaipur City Tour",
  //       description: `This morning after the breakfast City tour of Udaipur also known as the city of Lakes. It is the historic capital of the former kingdom of Mewar in Rajasthan Agency. Lake Pichola, Fateh Sagar Lake, Udai Sagar and Swaroop Sagar in the city are considered some of the most beautiful lakes in the state. Places you visit CITY PALACE. Udaipur is a palaces complex in Udaipur in the Indian state Rajasthan. It was built by the Maharana Udai Mirza Singh as the capital of the Sisodia Rajput clan in 1559 after he moved from Chittor. It is located on the east bank of the Lake Pichola and has several palaces built within its complex.<br/><br/>

  //       Udaipur was the historic capital of the former kingdom of Mewar in the Rajputana Agency and its last capital. JAGDISH TEMPLE is one of the famous temples of Udaipur. Located in the city palaces compel of Udaipur, this temple is made in the Indo Aryan style of architecture. In 1651, Jagdish temple was built by Maharana Jagat Singh, who ruled Udaipur during 1628-53. The temple is dedicated to Lord Vishnu (Laxmi Narayan), the preserver of the universe. JAG MANDIR is a palace built on an island in the Lake Pichola.<br/><br/>

  //       It is also called the “Lake Garden Palace”. Its construction is credited to three Maharana of the Sisodia Rajputs of Mewar kingdom. It is named as “Jagat Mandir” in honour of the last-named Maharana Jagat Singh. SAHELION KI BARI is one of the most beautiful gardens and a major tourist destination in Udaipur.<br/><br/>

  //       The garden is famous for its lush green lawns marble art and fountains. English translation of Sahelian ki Bari means Garden of Maids. By evening you may take a walking tour on your own through the narrow lanes and back streets of Udaipur up to the Washing Ghats at the lake Pichola. by late evening return to your hotel. Overnight in Udaipur.`,
  //     },
  //     {
  //       name: "Bundi",
  //       description: `Built in the 14th century, the Taragarh Fort is the star attraction in Bundi. With the entry being free and souvenir shops fortunately absent, the fort provides an option of a peaceful ramble round its premises. Inside the instant, eye-catchers include the Bhim Burj, a large battlement with a cannon placed on it and a large reservoir carved out of a single piece of rock.<br/><br/>

  //       The views from the fort are exceptional, especially during the sunset when the rays seem to lend a lovely grace to the entire area. In Chittorgarh, the Chittorgarh Fort is the imposing structure atop a hill of 300 m which has many palaces and monuments. This fort is situated 1 km from the new town and is spread over an area of around 692 acres.<br/><br/>

  //       Inside the large fort, is a road that connects the different gates, viz. the main gate or Ram Pol, Padan Pol, Bhairon Pol, Hanuman Pol, Ganesh Pol, Laxman Pol and Jodla Pol. These gates were built for security and fortification of the area. There are around 84 water bodies and many small palaces, important ones being Rana Kumbha Palace, Rani Padmini’s Palace, etc.<br/><br/>

  //       Besides these structures, the fort is known for the Kirti Stambha, in honour of the 1st Jain Tirthankara, the victory tower or Vijay Stambha, Meera Temple, Kalika Mata temple and the various sculptures and carvings on the monuments.`,
  //     },
  //     {
  //       name: "Jaipur",
  //       description: `After breakfast, explore the Pink City with an excursion to Amber Fort, situated just outside the city, enjoy the experience of ride on elephant back to and from the top of the hill on which the fort is situated. Afternoon sightseeing tour of City Palace in the heart of Jaipur is known for its blend of Rajasthani and Mughal architecture. Not far away is the Central Museum.<br/><br/>

  //       Jantar Mantar is the largest of the five observatories built by Sawai Jai Singh. The Hawa Mahal or the Palace of Winds was constructed for the royal ladies to watch the royal processions without being seen, all monuments are located in the vicinity of City Palace Complex of Jaipur.<br/><br/>

  //       Later late afternoon is kept free to visit the famous Markets of Textiles, Gems, Carpets, and handicrafts. One can also visit Nahargarh Fort to see it illuminated over the floodlights. Return to the hotel for overnight.`,
  //     },
  //     {
  //       name: "Agra",
  //       description: `After breakfast drive to Jaipur en-route visit Old deserted town of Mughal Dynasty – Fatehpur Sikri built in red sandstone in honour of Saint Salim Chisti who foretold the birth of 3 sons to Emperor Akbar, is an example of robust stability combined with originality.<br/><br/>

  //       Each important edifice here represents a type by itself. Notable among them is the Diwan-e-Khas, Punch Mahal, the Tomb of Salim Chisti, and the Bulund Darwaza. Later continue to proceed to Jaipur. Rest of the day at leisure, in the evening hours, enjoy walking in the colourful streets and bazaars of Jaipur City.<br/><br/>

  //       The beauty of Jaipur is that its unique architecture and town planning is visible at even the most common places such as its squares and lanes. Overnight at Hotel.

  //       `,
  //     },
  //   ],
  //   Inclusion: [
  //     "All arrival, departure, sightseeing as per the above Itinerary by air-conditioned Luxury car with English speaking driver",
  //     "Daily buffet breakfast",
  //     "Indian sim card with cell phone",
  //     "Elephant ride at amber fort",
  //     "Boat ride at Udaipur",
  //     "Flight ticket from Jodhpur to New Delhi",
  //     "Guide service at all destinations and monuments",
  //     "All applicable hotel & transport taxes",
  //     "Government services tax of 4.89%",
  //   ],
  //   Exclusion: [
  //     "Any meals other than those specified",
  //     "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
  //     "Entrance fees during sightseeing",
  //     "Any other item not specified",
  //     "Driver tip",
  //     "International airfare",
  //   ],
  //   Price:110100,
  //   FAQs: [
  //     {
  //       name: "How do we plan Rajasthan Cultural Tour?",
  //       description:
  //         "New Delhi – Jaipur – Shekhawati – Kuchaman Fort – Bikaner – Jaisalmer – Manvar – Jodhpur – Bundi – Udaipur – Agra - New Delhi.",
  //     },
  //     {
  //       name: "Best time for Rajasthan Cultural Tour",
  //       description:
  //         "Rajasthan is the western part of Inia and it's always hot so October t March is the best time for visit the Rajasthan Cultural tour.",
  //     },
  //     {
  //       name: "how to reach Rajasthan",
  //       description:
  //         "After landing in New Delhi we can reach Rajasthan( Jaipur ) by Air, Train, and Privet car.",
  //     },
  //   ],
  // },
  {
    __id: "4",
    name: "Royal Heritage Tour of Rajasthan",
    image: getRandomIndexedImage(),
    days: 15,
    nights: 14,
    Overview: [
      `The Royal Heritage Tour of Rajasthan offers a majestic journey through the grand palaces, mighty forts, and regal traditions of India's most colorful state. Starting in Jaipur, the Pink City, travelers experience royal splendor at the City Palace, Amber Fort, and Hawa Mahal. Moving to Mandawa and Kuchaman, the tour showcases intricately painted havelis and ancient forts that reflect the merchant and feudal legacy of Shekhawati. In Bikaner, the majestic Junagarh Fort and the unique Karni Mata Temple impress with their architecture and mystique. The golden sands of Jaisalmer highlight desert charm with its towering fort, ornate havelis, and dune camps in Khuri. Jodhpur, the Blue City, offers the awe-inspiring Mehrangarh Fort and royal palaces. Udaipur, with its serene lakes and opulent City Palace, epitomizes romance and royal grace. The historic battlefields of Chittorgarh and the formidable walls of Kumbhalgarh Fort echo tales of valor and resistance. Ranakpur stuns with its intricately carved Jain temples, while Mount Abu offers a refreshing hill retreat. The spiritual charm of Ajmer and the wilderness of Ranthambore blend history and nature. Bundi, Alwar, Rohitgarh, and boutique retreats like Lakshman Sagar provide intimate glimpses into Rajasthan’s noble legacy. Ending in Delhi, the capital connects the journey with Mughal grandeur and modern vibrance. This tour immerses travelers in the legacy of Rajput kings, warrior tales, timeless art, and unmatched hospitality.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Arrive from Delhi to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Kuchaman and Nagaur fort",
        description: `Kuchaman Fort is located in the town of Kuchaman and is a majestic fort offering panoramic views and showcasing Rajput architecture, now partly a heritage hotel.`,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: " Hanumangarh",
        description: `Hanumangarh is an ancient town with historical significance, featuring remnants from the Indus Valley Civilization and the Bhatner Fort.`,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Ranthambore",
        description: `
    <strong>Ajmer to Ranthambore Itinerary</strong><br/><br/>

    <strong>8:00 AM – 12:00 PM:</strong> Travel from Ajmer to Ranthambore<br/><br/>

    <strong>12:00 PM – 1:00 PM:</strong> Lunch in Sawai Madhopur (Ranthambore Town)<br/><br/>
    Suggested Restaurants:<br/><br/>
    - The Oberoi Vanyavilas Café<br/><br/>
    - The Dining Room<br/><br/>
    - Local dhabas<br/><br/>

    <strong>1:00 PM – 1:30 PM:</strong> Entry & Permit Check for Ranthambore National Park<br/><br/>
    Zone Allotment: Based on booking<br/><br/>
    Safari Timings (Afternoon): 2:30 PM – 5:30 PM<br/><br/>

    <strong>2:30 PM – 5:30 PM:</strong> Ranthambore National Park – Jungle Safari<br/><br/>
    Entry Fee (per person):<br/><br/>
    - Indians: ₹1000 (Gypsy), ₹600 (Canter)<br/><br/>
    - Foreigners: ₹1800 (Gypsy), ₹1400 (Canter)<br/><br/>
    Safari Duration: 3 hrs<br/><br/>
    Highlights: Tiger sighting (if lucky!), leopards, sloth bears, birds, lakes, fort views<br/><br/>

    <strong>5:45 PM – 6:30 PM:</strong> Ranthambore Fort (Optional Quick Visit)<br/><br/>
    Drive to Jaipur
`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/><br/>

    <strong>7:00 PM:</strong> Departure to Agra
`,
      },
      {
        name: "Jaipur to Delhi departure",
        description: `Departure from Jaipur to Delhi.`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 5350,
    FAQs: [],
  },
  {
    __id: "10",
    name: "Cultural and Colorful Tour of Rajasthan, Delhi and Agra",
    image: getRandomIndexedImage(),
    days: 30,
    nights: 29,
    Overview: [
      `Rajasthan, the Land of Kings, offers a vibrant and deeply cultural experience shaped by centuries of royal heritage, desert landscapes, and diverse traditions. Its cities burst with color — from the pink hues of Jaipur and the blue lanes of Jodhpur to the golden sandstone of Jaisalmer. The state celebrates life with exuberant festivals like Pushkar Fair, Teej, and Gangaur, where locals don traditional attire, perform folk dances like Ghoomar and Kalbelia, and play lively music with instruments like the sarangi and dholak. Every corner showcases rich craftsmanship through intricate textiles, hand-painted pottery, and mirror-work embroidery. 
      Historic forts, majestic palaces, and havelis reflect the grandeur of Rajput architecture, while bustling bazaars overflow with spices, bangles, and Rajasthani cuisine like dal baati churma and ghevar. Rajasthan’s villages and desert camps offer authentic glimpses into rural life, where camel rides, puppet shows, and warm hospitality complete the colorful and cultural tapestry of the state.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Delhi (Arrival)",
        description: `
    <strong>Delhi Tour Itinerary</strong><br/><br/>

    <strong>8:00 AM – 9:00 AM: Lodhi Gardens</strong><br/><br/>
    A serene park housing 15th-century tombs, ideal for a peaceful morning walk amidst historical architecture.<br/><br/>

    <strong>9:15 AM – 10:15 AM: Humayun's Tomb</strong><br/><br/>
    A UNESCO World Heritage Site and a precursor to the Taj Mahal, showcasing Mughal architecture.<br/><br/>

    <strong>10:30 AM – 11:15 AM: Lotus Temple</strong> (Closed on Monday)<br/><br/>
    Known for its flower-like architecture, it's a Baháʼí House of Worship open to all, promoting unity and peace.<br/><br/>

    <strong>11:30 AM – 12:15 PM: Gurudwara Bangla Sahib</strong><br/><br/>
    A prominent Sikh gurdwara known for its association with the eighth Sikh Guru and its community kitchen (langar).<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch at Connaught Place</strong><br/><br/>
    Options: Various eateries ranging from local street food to international cuisines.<br/><br/>

    <strong>1:45 PM – 2:15 PM: Agrasen ki Baoli</strong><br/><br/>
    A historical stepwell with unique architecture, offering a glimpse into ancient water conservation methods.<br/><br/>

    <strong>2:30 PM – 3:30 PM: Red Fort</strong> (Closed on Mondays)<br/><br/>
    A UNESCO World Heritage Site, this fort was the main residence of the Mughal emperors and a symbol of India's rich history.<br/><br/>

    <strong>3:45 PM – 4:15 PM: Jama Masjid</strong><br/><br/>
    One of the largest mosques in India, known for its impressive architecture and panoramic views from its minaret.<br/><br/>

    <strong>4:30 PM – 5:30 PM: Qutub Minar</strong><br/><br/>
    The tallest brick minaret in the world, this UNESCO World Heritage Site is a fine example of Indo-Islamic architecture.<br/><br/>

    <strong>6:00 PM – 7:00 PM: Akshardham Temple</strong> (Charges apply for exhibitions and water show)<br/><br/>
    Darshan Hours: 10:00 AM – 8:00 PM<br/><br/>
    A modern architectural marvel showcasing Indian culture, spirituality, and traditions. Note: Mobile phones and cameras are not allowed inside.<br/><br/>

    <strong>7:00 PM – 7:45 PM: Dinner at Akshardham Food Court</strong><br/><br/>
    Options: Pure vegetarian meals in a serene environment.<br/><br/>

    <strong>7:45 PM – 8:15 PM: Sahaj Anand Water Show at Akshardham</strong><br/><br/>
    Show Timing: 7:45 PM (After sunset)<br/><br/>
    Duration: Approximately 24 minutes<br/><br/>
    A captivating multimedia water show combining lasers, video projections, underwater flames, water jets, and surround sound to narrate a spiritual story.<br/><br/>

    <strong>8:30 PM – 9:30 PM: India Gate</strong><br/><br/>
    A war memorial dedicated to Indian soldiers, beautifully illuminated at night, offering a serene end to your day.
`,
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Kuchaman fort ",
        description: `Kuchaman Fort is located in the town of Kuchaman and is a majestic fort offering panoramic views and showcasing Rajput architecture, now partly a heritage hotel.`,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Khuri",
        description: `
    <strong>Day 1: Arrival and Khuri Exploration</strong><br/><br/>
    <strong>2:00 PM:</strong> Depart from Jaisalmer, with a 1.5-hour drive to Khuri, covering approximately 50 km.<br/><br/>
    <strong>4:00 PM:</strong> Arrive in Khuri village.<br/><br/>
    <strong>4:15 PM - 5:15 PM:</strong> Explore the village, including traditional mud houses, local artisan crafts, and experiencing the warm hospitality of village life.<br/><br/>
    <strong>5:00 PM - 7:00 PM:</strong> Enjoy a sunset camel safari at the Khuri Sand Dunes, with options for a jeep safari as well. The dunes are known for their golden sands and fewer crowds compared to Sam Sand Dunes.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Cultural evening at the desert camp, featuring Rajasthani music, dance, and a buffet dinner. Accommodation is in desert tents with attached bathrooms.<br/><br/>
    
    <strong>Day 2: Sunrise and Departure</strong><br/><br/>
    <strong>5:45 AM - 6:30 AM:</strong> Sunrise viewing over the dunes, followed by a morning camel ride or quiet chai on the dunes.<br/><br/>
    <strong>7:00 AM:</strong> Breakfast at the camp.<br/><br/>
    <strong>Morning (8:20 AM):</strong> Local sightseeing in Khuri (optional).<br/><br/>
    Possible desert wildlife spotting, including desert foxes, peacocks, and chinkaras (local guide recommended).<br/><br/>
    Optional visit to the Khuri Jain Temple, a serene temple in traditional style.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Ranakpur and Mount-Abu",
        description: `Ranakpur is famous for the stunning white marble Jain Temple dedicated to Tirthankara Adinatha, set amidst green hills.

        Mount Abu is Rajasthan’s only hill station, popular for the Dilwara Jain Temples, Nakki Lake, and the cool, green hill environment.`,
      },
     {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: " Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: " Ranthambore",
        description: `
    <strong>Ajmer to Ranthambore Itinerary</strong><br/><br/>

    <strong>8:00 AM – 12:00 PM:</strong> Travel from Ajmer to Ranthambore<br/><br/>

    <strong>12:00 PM – 1:00 PM:</strong> Lunch in Sawai Madhopur (Ranthambore Town)<br/><br/>
    Suggested Restaurants:<br/><br/>
    - The Oberoi Vanyavilas Café<br/><br/>
    - The Dining Room<br/><br/>
    - Local dhabas<br/><br/>

    <strong>1:00 PM – 1:30 PM:</strong> Entry & Permit Check for Ranthambore National Park<br/><br/>
    Zone Allotment: Based on booking<br/><br/>
    Safari Timings (Afternoon): 2:30 PM – 5:30 PM<br/><br/>

    <strong>2:30 PM – 5:30 PM:</strong> Ranthambore National Park – Jungle Safari<br/><br/>
    Entry Fee (per person):<br/><br/>
    - Indians: ₹1000 (Gypsy), ₹600 (Canter)<br/><br/>
    - Foreigners: ₹1800 (Gypsy), ₹1400 (Canter)<br/><br/>
    Safari Duration: 3 hrs<br/><br/>
    Highlights: Tiger sighting (if lucky!), leopards, sloth bears, birds, lakes, fort views<br/><br/>

    <strong>5:45 PM – 6:30 PM:</strong> Ranthambore Fort (Optional Quick Visit)<br/><br/>
`,
      },
      {
        name: " Lakshman Sagar",
        description: `Lakshman Sagar is a luxury boutique resort near Raipur, offering a blend of rustic charm and comfort in a natural setting.`,
      },
      {
        name: " Rohitgarh",
        description: `Rohitgarh is a lesser-known heritage village area with rural Rajasthani charm, featuring a heritage fort now serving as a homestay.`,
      },
      {
        name: " Alwar",
        description: `Alwar features scenic spots like Siliserh Lake, Bala Quila Fort, and is close to the haunted Bhangarh Fort and Sariska Tiger Reserve.`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/><br/>

    <strong>7:00 PM:</strong> Departure to Agra
`,
      },
      {
        name: "Agra",
        description: `
    <strong>Agra Itinerary</strong><br/><br/>

    <strong>8:00 AM – 10:00 AM: Taj Mahal</strong><br/><br/>
    Opening Hours: Sunrise to Sunset (Closed on Fridays)<br/><br/>
    Iconic white marble mausoleum, UNESCO World Heritage Site.<br/><br/>

    <strong>10:15 AM – 11:30 AM: Agra Fort</strong><br/><br/>
    Historic Mughal fort with views of Taj Mahal and royal chambers.<br/><br/>

    <strong>11:45 AM – 12:15 PM: Itmad-ud-Daulah ("Baby Taj")</strong><br/><br/>
    First Mughal tomb in white marble, intricate pietra dura work.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch in Agra</strong><br/><br/>
    Suggestions:<br/><br/>
    - Pinch of Spice<br/><br/>
    - Shankara Vegis<br/><br/>
    - Joney's Place<br/><br/>

    <strong>1:45 PM – 2:15 PM: Mehtab Bagh</strong><br/><br/>
    Garden across Yamuna River with rear Taj Mahal view—great for photos.<br/><br/>

    <strong>2:30 PM – 3:30 PM: Akbar's Tomb, Sikandra</strong><br/><br/>
    Resting place of Emperor Akbar, grand architecture in a serene complex.<br/><br/>

    <strong>4:00 PM – 5:00 PM: Mariam's Tomb</strong> (Optional, if time permits)<br/><br/>
    Wife of Akbar, less crowded Mughal-era monument.<br/><br/>

    <strong>5:30 PM – 7:00 PM: Sadar Bazaar / Shopping</strong><br/><br/>
    What to buy:<br/><br/>
    - Marble artifacts<br/><br/>
    - Leather goods<br/><br/>
    - Sweets (petha)<br/><br/>

    <strong>7:00 PM – 9:30 PM: Dinner + Optional Light & Sound Show at Agra Fort</strong>
`,
      },
      {
        name: "Agra to Delhi departure",
        description: `Departure from Agra to Delhi.`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 5000,
    FAQs: [],
  },
  {
    __id: "11",
    name: "Marwar Tour",
    image: getRandomIndexedImage(),
    days: 6,
    nights: 7,
    Overview: [
      `The Marwar Tour of Rajasthan takes you through the heart of the desert kingdom, revealing the rugged beauty, valorous history, and vibrant culture of the Marwar region. Centered around Jodhpur, the Blue City, the tour begins with the awe-inspiring Mehrangarh Fort, Umaid Bhawan Palace, and the bustling Sardar Market. From there, travelers can explore Mandore, the ancient capital of Marwar, known for its cenotaphs and gardens. A visit to Osian, an ancient temple town in the Thar Desert, offers both spiritual significance and camel safari experiences. The tour often includes nearby desert villages like Khimsar and Rohetgarh, where heritage hotels and rustic charm showcase Marwar’s noble hospitality. Bikaner, another jewel of Marwar, enchants with Junagarh Fort, the royal palaces, and the unique Karni Mata Temple. In smaller towns like Nagaur and Phalodi, travelers witness authentic desert life, historic forts, and salt-lake landscapes. This tour paints a vivid picture of Marwar’s royal legacy, Rajput bravery, and desert traditions through its architecture, cuisine, music, and warm desert hospitality.`,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Delhi to Mandawa (Arrival)",
        description: `You will be arrived at Delhi airport and be shifted to the hotel. On the first day you will be exploring the historical walled city of Delhi.
        
        The sightseeing tour of Delhi will include the Qutub Minar, Humayun’s Tomb, India Gate, President House, Mahatma Gandhi memorial, Red Fort, Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel. Jama Masjid and Laxmi Narayan Temple. Overnight in your hotel.
        `,
      },
      {
        name: " Mandawa",
        description: `
        <strong>06:00am</strong>: Depart from Jaipur to Mandawa by private vehicle (3 hours).<br/><br/>
        <strong>11:00am</strong>: Arrive in Mandawa and check into your hotel.<br/><br/>
        <strong>Visit Mandawa Fort (11:30am - 12:00pm)</strong>: Explore the 18th century fort showcasing Rajput architecturea and Intricate handicrafts.<br/><br/>
        <strong>Explore Hanuman Prasad Gaenka Haweli(12:30pm - 01:00pm)</strong>: Admire the elaborate frescaes depicting mythoogical themes and daily life scenes.<br/><br/>
        <strong>Visit Marmuria Haveli (01:00pm - 01:30pm)</strong>: Notable for its paintings of leaders like Nehru and scenes of Trains and cars, reflecting a blend of traditional and modern themes.<br/><br/>
        <strong>Lunch at Castle Mandawa (01:30pm - 02:30pm)</strong>: <br/><br/>
        Cuisine: Traditional Rajasthani Buffet.<br/><br/>
        Cost: INR 1000 per person for non-guests.<br/><br/>
        Enjoy a meal in a heritage setting with views of the fort.<br/><br/>
        <strong>Visit Jhunjhunwala Haveli (02:30pm - 03:00pm)</strong>: Famous for its golden adornments and intricate carvings, showcasing the opulence of the era.<br/><br/>
        <strong>Explore Gulab Rai Ladia Haveli (03:00pm - 04:00pm)</strong>: Known for its unique and architectural style, featuring a blend of Rajput and Mughal influences.<br/><br/>
        <strong>Stall at Mandawa Bazaar (04:00pm - 05:00pm)</strong>: Shop for local handicrafts, textiles, and souvenirs.<br/><br/>
        Experience the vibrant atmosphere of the local market.<br/><br/>
        <strong>Departure for Bikaner (05:00pm)</strong>: Depart from Mandawa and arrive in Bikaner by private vehicle.<br/><br/>
        `,
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: " Nagaur",
        description: `Nagaur, located between Jodhpur and Bikaner, is a lesser-explored gem of Rajasthan known for its historical significance and rustic charm. The centerpiece is the massive Nagaur Fort, which houses beautiful palaces, temples, gardens, and ancient frescoes. The fort comes alive during the Nagaur Cattle Fair, one of the largest in India, drawing visitors with its vibrant mix of trading, folk music, camel races, and local crafts. Other notable sites include the Tarkeen Dargah, a revered Sufi shrine, and the serene Jain Glass Temple. With its authentic Rajasthani atmosphere, fewer crowds, and well-preserved heritage, Nagaur offers a peaceful yet culturally rich experience for travelers seeking offbeat destinations in Rajasthan.`,
      },
      {
        name: "Mandawa to Delhi Departure",
        description: `Check out and drive to Delhi airport to board the flight back to your home with sweet memories, a bundle of souvenirs and an address book full of friends. (The Tour Ends).`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 3500,
    FAQs: [],
  },
  {
    __id: "12",
    name: "East Rajasthan Tour",
    image: getRandomIndexedImage(),
    days: 8,
    nights: 7,
    Overview: [
      `The East Rajasthan Tour offers a captivating journey through the culturally rich and ecologically diverse eastern region of the state, blending royal heritage with wildlife and spirituality. The tour often starts from Jaipur, the Pink City, with its majestic forts like Amber and Nahargarh, royal palaces, and colorful bazaars. Moving to Ranthambore, visitors enjoy thrilling wildlife safaris in one of India’s top tiger reserves, home to Bengal tigers and ancient fort ruins nestled in the jungle. Bharatpur enchants bird lovers with the Keoladeo National Park, a UNESCO World Heritage site known for its migratory birds. Alwar, with attractions like Bala Quila, Siliserh Lake, and proximity to the haunted Bhangarh Fort, adds historical depth and mystery. The spiritual town of Ajmer, home to the Ajmer Sharif Dargah, and nearby Pushkar, with its sacred lake and Brahma Temple, offer a spiritual pause along the route. This tour gives a perfect blend of history, nature, culture, and faith, all within a compact and scenic circuit of Rajasthan.
    `,
    ],
    Highlights: [],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 3500,
    Itinerary: [
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Mount-Abu",
        description: `Mount Abu is Rajasthan’s only hill station, popular for the Dilwara Jain Temples, Nakki Lake, and the cool, green hill environment.
        `,
      },
     {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: "Bundi",
        description: `
    <strong>Arrival in Bundi: 6:30 PM</strong><br/><br/>
    <strong>Accommodation:</strong> Check into your hotel.<br/><br/>
    <strong>Evening Activity:</strong> Stroll through the local markets, enjoy a traditional Rajasthani dinner, and relax to prepare for the next day's sightseeing.<br/><br/>

    <strong>🏯 Day 2:</strong><br/><br/>
    <strong>9:00 AM – 10:30 AM: Bundi Palace (Garh Palace)</strong><br/><br/>
    Explore the Chitrashala (art gallery), Hathi Pol (elephant gate), and the Chahar Bagh (terraced garden).<br/><br/>

    <strong>10:30 AM – 12:00 PM: Taragarh Fort</strong><br/><br/>
    Visit the ruins of the fort, including the Rani Mahal and the Bhim Burj, and enjoy panoramic views of Bundi.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Lunch</strong><br/><br/>

    <strong>1:00 PM – 2:00 PM: Raniji ki Baori (Queen's Stepwell)</strong><br/><br/>
    Admire the intricate carvings and architecture of this historic stepwell.<br/><br/>

    <strong>2:00 PM – 3:00 PM: Chaurasi Khambon ki Chhatri (84-Pillared Cenotaph)</strong><br/><br/>
    Explore the cenotaph dedicated to Rao Raja Anirudh Singh, featuring 84 intricately carved pillars.<br/><br/>

    <strong>3:00 PM – 4:00 PM: Sukh Mahal</strong><br/><br/>
    Visit the summer palace known for its scenic location by Jait Sagar Lake and its association with Rudyard Kipling's novel "Kim."<br/><br/>

    <strong>4:00 PM – 5:00 PM: Chitrashala (Art Gallery)</strong><br/><br/>
    Admire the exquisite miniature paintings depicting courtly life and historical events.
`,
      },
      {
        name: " Bharatpur",
        description: `
    <strong>Jaipur to Bharatpur Itinerary</strong><br/><br/>

    <strong>8:00 AM:</strong> Depart from Jaipur<br/><br/>
    Distance: ~185 km<br/><br/>
    Travel Time: 3.5–4 hours by car or taxi<br/><br/>
    Route: Jaipur → Dausa → Mahwa → Bharatpur (via NH21)<br/><br/>

    <strong>12:00 PM:</strong> Arrive in Bharatpur + Lunch<br/><br/>
    Restaurant Suggestions:<br/><br/>
    - Hotel Spoonbill<br/><br/>
    - Saras Resort<br/><br/>
    - Hotel Sunbird<br/><br/>

    <strong>1:00 PM – 4:00 PM:</strong> Keoladeo National Park (Bharatpur Bird Sanctuary)<br/><br/>
    UNESCO World Heritage Site; over 350 bird species, especially during winter<br/><br/>

    <strong>4:15 PM – 5:15 PM:</strong> Lohagarh Fort<br/><br/>
    Unconquered fort with historical significance, museums & moat<br/><br/>

    <strong>5:30 PM – 6:30 PM:</strong> Government Museum (inside Lohagarh premises)<br/><br/>
    Displays Bharatpur's royal artifacts, weaponry, and local heritage<br/><br/>

    <strong>6:30 PM – 7:00 PM:</strong> Local Market / Street Food Break<br/><br/>
    Try kachori, jalebi, or rabri at local shops<br/><br/>

`,
      },
      {
        name: " Bharatpur to Jaipur departure",
        description: `Bharatpur is known for the Keoladeo National Park, a UNESCO World Heritage site and a haven for migratory birds and birdwatchers.`,
      },
    ],
    FAQs: [],
  },
  {
    __id: "13",
    name: "Mini Rajasthan Tour",
    image: getRandomIndexedImage(),
    days: 15,
    nights: 14,
    Price: 3600,
    Overview: [
      `The Mini Rajasthan Tour is a compact yet enriching journey that captures the essence of Rajasthan’s royal heritage, desert charm, vibrant culture, and scenic beauty within a short span. Ideal for travelers with limited time, the tour typically includes key destinations like Jaipur, Jodhpur, and Udaipur. Starting in Jaipur, visitors explore architectural marvels like Amber Fort, City Palace, and Hawa Mahal while enjoying traditional markets and Rajasthani cuisine. The tour then moves to Jodhpur, the Blue City, where the massive Mehrangarh Fort, Umaid Bhawan Palace, and vibrant bazaars reveal the grandeur of Marwar. Finally, Udaipur, the City of Lakes, offers serene boat rides on Lake Pichola, visits to the majestic City Palace, and strolls through romantic gardens. This compact route gives travelers a taste of Rajasthan’s royal history, desert landscapes, local crafts, and warm hospitality—making it perfect for a first-time or quick visit.
    `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: "Arrive to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Chittorgarh",
        description: `
    <strong>Chittorgarh Fort Complex Itinerary</strong><br/><br/>
    <em>The Chittorgarh Fort is a UNESCO World Heritage Site and houses several historical palaces and monuments. The entire complex is open from 9:00 AM to 6:00 PM daily.</em><br/><br/>

    <strong>9:00 AM – 10:00 AM: Rana Kumbha Palace</strong><br/><br/>
    Highlights: One of the oldest structures in the fort, known for its historical significance and underground cellars.<br/><br/>
    Historical Note: Believed to be the site where Rani Padmini and other women committed Jauhar (self-immolation).<br/><br/>

    <strong>10:00 AM – 11:00 AM: Padmini Palace</strong><br/><br/>
    Highlights: Famous for the tale of Queen Padmini's beauty and the mirror incident involving Alauddin Khilji.<br/><br/>
    Features: Surrounded by a water moat, offering picturesque views.<br/><br/>

    <strong>11:00 AM – 12:00 PM: Vijay Stambh (Victory Tower)</strong><br/><br/>
    Highlights: A 9-story tower built to commemorate Rana Kumbha's victory over Mahmud Khilji.<br/><br/>
    Note: Visitors can climb to the top for panoramic views of the fort and surrounding areas.<br/><br/>

    <strong>12:00 PM – 12:30 PM: Kirti Stambh (Tower of Fame)</strong><br/><br/>
    Highlights: A 22-meter high tower dedicated to the first Jain Tirthankara, Adinath.<br/><br/>
    Features: Notable for its intricate Jain sculptures and carvings.<br/><br/>

    <strong>12:30 PM – 1:30 PM: Lunch Break</strong><br/><br/>
    Suggestion: Dine at local eateries near the fort entrance or in Chittorgarh city.<br/><br/>

    <strong>1:30 PM – 2:30 PM: Kalika Mata Temple</strong><br/><br/>
    Highlights: Originally built as a Sun Temple in the 8th century, later converted to a shrine dedicated to Goddess Kali.
`,
      },
      {
        name: " Kumbargarh",
        description: `Kumbhalgarh is known for Kumbhalgarh Fort, with the second-longest wall in the world, and it is surrounded by scenic wildlife and hills.`,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Jaipur to Delhi departure",
        description: `Departure from Agra to Delhi.`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "14",
    name: "Rajasthan Central City Tour",
    image: getRandomIndexedImage(),
    days: 5,
    nights: 4,
    Price: 4500,
    Overview: [
      `The Rajasthan Central Tour offers a deep dive into the heart of the state, blending royal heritage, desert culture, and spiritual richness. Centered around Jodhpur, Ajmer, Pushkar, and Nagaur, the tour highlights majestic forts like Mehrangarh, sacred sites like the Ajmer Sharif Dargah, and the holy Pushkar Lake with its unique Brahma Temple. Nagaur Fort and its annual cattle fair provide a glimpse into traditional desert life. This central circuit showcases authentic Rajasthani architecture, vibrant markets, and folk traditions, offering a rich cultural experience in a compact, centrally located route.
      `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    FAQs: [],
  },
  {
    __id: "15",
    name: "Lake City Tour",
    image: getRandomIndexedImage(),
    days: 15,
    nights: 14,
    Overview: [
      `The Lake City Tour of Rajasthan revolves around the enchanting beauty of Udaipur, famously known as the City of Lakes. Nestled in the Aravalli hills, Udaipur offers a romantic blend of serene waters, royal palaces, and scenic landscapes. Highlights include the grand City Palace, tranquil Lake Pichola, the iconic Lake Palace, and the serene Fateh Sagar Lake. Nearby attractions like Saheliyon ki Bari, Bagore Ki Haveli, and Monsoon Palace add charm to the experience. The tour may also include nearby lake towns like Rajsamand and Jaisamand, making it ideal for those seeking beauty, heritage, and peace in one journey.
      `,
    ],
    Highlights: [],
    Itinerary: [
      {
        name: " Jaipur",
        description: `
        <strong>Moti Dungri Temple (08:00am - 08:30am)</strong>: Peaceful start to the day with blessing at this iconic temple.<br/><br/>
        <strong>Hawa Mahal (08:45am - 09:15am)</strong>: Enjoy the breeze and architecture of the Palace of Winds.<br/><br/>
        <strong>Jantar Mantar (09:20am - 10:00am)</strong>: Fascinating artromonical observatory with impressive instruments.<br/><br/>
        <strong>City Palace (10:15am - 11:00am)</strong>: Explore the royal courtyards museums galleries and traditional architecture of Jaipur.<br/><br/>
        <strong>Travel to Amber Fort (11:00am - 11:45am)</strong>: Stop at Jal Mahal for a panoramic view and quick lakeside photo session.<br/><br/>
        <strong>Amber Fort (01:00pm - 02:30pm)</strong>: Discover Seesh mahal, Diwan-e-Aam, and Diwan-e-Khas with a guided tour of the fort's history and architecture.<br/><br/>
        <strong>Nahargarh Fort (02:30pm - 04:00pm)</strong>: End of the day with  stunning view of Jaipur, Enjoy snacks or tea at padao Cafe inside fort. Ideal spot to relax and take in the panoramic views of the Pink City.<br/><br/>
        `,
      },
      {
        name: "Ajmer-Pushkar",
        description: `
    <strong>Ajmer-Pushkar Itinerary</strong><br/><br/>

    <strong>9:00 AM – 10:00 AM: Brahma Temple</strong><br/><br/>
    Entry Fee: Free<br/><br/>
    Exploring Time: 1 hr<br/><br/>
    Highlights: Unique and sacred Hindu temple.<br/><br/>

    <strong>9:45 AM – 11:00 AM: Pushkar Lake & Ghats</strong><br/><br/>
    Ritual bathing, temple bells, ghats.<br/><br/>

    <strong>11:00 AM – 11:45 AM: Man Mahal</strong><br/><br/>
    Beautiful royal palace on the lake, heritage architecture and photo spot.<br/><br/>

    <strong>12:00 PM – 1:00 PM: Rangji Temple</strong><br/><br/>
    Unique temple architecture.<br/><br/>

    <strong>1:00 PM – 2:00 PM: Lunch</strong><br/><br/>
    Suggested: Sunset Café or Raju Garden Café<br/><br/>

    <strong>2:15 PM – 3:30 PM: Savitri Mata Temple</strong><br/><br/>
    (via ropeway or hike)<br/><br/>
    Hilltop temple with panoramic views.<br/><br/>

    <strong>3:30 PM – 5:00 PM: Pushkar Market</strong><br/><br/>
    Local handicrafts, silver jewelry, Rajasthani clothes.<br/><br/>

    <strong>5:00 PM – 6:30 PM: Camel Fair Ground & Sunset at Pushkar Dunes</strong><br/><br/>
    Scenic desert edge, photography.<br/><br/>

    <strong>6:30 PM – 8:30 PM: Dinner & Return</strong><br/><br/>
    Dinner at Café + Return to Ajmer / Hotel Stay in Pushkar
`,
      },
      {
        name: "Rajsamand",
        description: `Rajsamand, located near Udaipur in Rajasthan, is known for the historic Rajsamand Lake, built by Maharana Raj Singh. Nearby attractions include the majestic Kumbhalgarh Fort, a UNESCO World Heritage Site, and the Kumbhalgarh Wildlife Sanctuary. Haldighati, famous for the battle of Maharana Pratap, and the cave temple of Parshuram Mahadev are also close by. The town is rich in history and offers scenic landscapes, making it a peaceful yet culturally significant destination.
        `,
      },
      {
        name: "Udaipur",
        description: `
    <strong>Udaipur Itinerary</strong><br/><br/>
    
    <strong>1. City Palace & Museum (9:30 AM – 5:30 PM):</strong><br/><br/>
    Largest palace in Rajasthan, stunning views of Lake Pichola, museums, and royal courtyards.<br/><br/>
    
    <strong>2. Boat Ride to Jag Mandir via Lake Pichola (from City Palace):</strong><br/><br/>
    Scenic lake views, visit Jag Mandir (island palace).<br/><br/>
    
    <strong>3. Lunch Break (1:00 PM – 2:00 PM):</strong><br/><br/>
    Suggestion: Try Krishna Dal Bati Restro or Garden Hotel Restaurant (₹200–300/person).<br/><br/>
    
    <strong>4. Saheliyon Ki Bari:</strong><br/><br/>
    Beautiful gardens, fountains, lotus pools, marble pavilions.<br/><br/>
    
    <strong>5. Fateh Sagar Lake:</strong><br/><br/>
    Peaceful atmosphere, visit Nehru Park on the lake.<br/><br/>
    
    <strong>6. Vintage & Classic Car Museum:</strong><br/><br/>
    Royal vintage car collection of Maharajas.<br/><br/>
    
    <strong>7. Bagore Ki Haveli Museum & Cultural Show:</strong><br/><br/>
    Rajasthani folk dances, puppetry, and local music in an authentic Haveli setting.
`,
      },
      {
        name: " Back to Jaipur",
        description: `Back to Jaipur`,
      },
    ],
    Inclusion: [
      "All arrival, departure, sightseeing’s as per above Itinerary by air conditioned Luxury car with English speaking driver",
      "Daily buffet breakfast",
      "Indian sim card with cell phone",
      "One double/ twin bedroom",
      "Elephant ride at amber fort",
      " Boat ride at Udaipur",
      "rain ticket New Delhi to Jaisalmer",
      "Guide service at all destinations and monuments",
      "All applicable hotel & transport taxes",
      "Government services tax of 4.89%",
    ],
    Exclusion: [
      "Any meals other than those specified",
      "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc",
      "Entrance fees during sightseeing",
      "Any other item not specified",
      "Driver tip",
      "International airfare",
    ],
    Price: 3500,
    FAQs: [],
  },
  {
    __id: "16",
    name: "Desert Tour",
    image: "@/assets/images/camel1.jpg",
    days: 15,
    nights: 14,
    Overview: [
      `A Desert Tour in Rajasthan immerses travelers in the golden landscapes of the Thar Desert, offering a blend of adventure, history, and cultural richness. Starting from Jaisalmer, the "Golden City," visitors can explore the towering Jaisalmer Fort, wander through the intricate Patwon Ki Haveli, and enjoy the serenity of Gadisar Lake before heading to the mesmerizing Sam Sand Dunes for a camel safari and traditional Rajasthani folk performances under the starlit sky. Moving to Bikaner, the city known as the "Camel Country," tourists can visit Junagarh Fort, marvel at the unique Karni Mata Temple, and learn about India's finest camels at the Camel Breeding Farm. The lesser-known Osian, often referred to as the "Oasis in the Desert," presents a treasure trove of ancient Jain and Hindu temples and thrilling jeep safaris through the rugged terrain. Khimsar, a hidden gem in the desert, offers tranquil luxury amidst the dunes, where heritage camps provide an authentic desert experience with breathtaking sunset views. Throughout the journey, travelers can enjoy immersive experiences such as camel rides, jeep safaris, fire dance performances, and Rajasthani folk music, all while savoring the region’s signature delicacies like Dal Baati Churma. The Desert Tour of Rajasthan is a captivating blend of royal history, desert adventures, and local traditions, leaving visitors enchanted by the rustic charm and warm hospitality of the desert communities.
      `,
    ],

    Highlights: [],
    Itinerary: [
      {
        name: "Arrive from Delhi to Jaipur",
        description:
          "Begin your Rajasthan adventure in Jaipur, the Pink City. Visit the iconic Amber Fort, City Palace, and Hawa Mahal. Enjoy a traditional Rajasthani dinner and overnight stay in Jaipur.",
      },
      {
        name: "Bikaner",
        description: `
        <strong>Start your day at rampuria Havelis (08:00am)</strong>: Starts through the lanes of those 15th century havelis, which are adorned with intricate frescoes and carvings.<br/><br/>
        <strong>Visit Junagarh Fort (09:00am - 11:00am)</strong>: Explore the 16th century fort showcasing Rajput architecture and Intricate handicrafts.<br/><br/>
        <strong>Explore Ganga Golden Jubilere Museum (11:00am - 12:00pm)</strong>: Admire the exquisite collection of ancient sculptures, paintings, and sculptures, showcasing the opulence of the era.<br/><br/>
        <strong>Bhandasar Jain Temple (12:00pm - 01:00pm)</strong>: Marble Carvings and intricate frescoes, showcasing the opulence of the era.<br/><br/>
        <strong>Lunch at Laxmi Niwas Palace (01:00pm - 02:00pm)</strong>: Laxmi Niwas Palace, a heritage hotel, offers a royal dining experience with Rajasthani cuisine.<br/><br/>
        <strong>Visit Lalgarh Palace and Ladui Museum (02:30pm - 03:30pm)</strong>: Edwardian archit.ecture and a museum showcasing the history of Bikaner.<br/><br/>
        <strong>National Research Centre on Camel (03:30pm - 05:00pm)</strong>: Camel Breeds, Breeding, and Research Centre.<br/><br/>
        <strong>End of tour and Departure</strong>: Rajasthani Cultural Dinner, Folk dances and music (optional).<br/><br/>
        `,
      },
       {
        name: "Jaisalmer",
        description: `
    <strong>Day 1:</strong><br/><br/>
    <strong>Morning:</strong> Arrival in Jaisalmer and enjoy a local Rajasthani meal.<br/><br/>
    <strong>2:20 PM - 4:00 PM:</strong> Visit Jaisalmer Fort (Sonar Quila), exploring the fort complex, temples, and viewpoints. Entrance fees are ₹200 for Indians and ₹250 for foreigners.<br/><br/>
    <strong>4:00 PM - 5:00 PM:</strong> Explore Maharaja's Palace inside the fort, a museum showcasing royal relics.<br/><br/>
    <strong>5:00 PM - 5:30 PM:</strong> Visit Nathmal Ki Haveli and take a short walk to admire the intricate architecture.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Travel to Sam Sand Dunes (approximately 45 minutes drive from the city).<br/><br/>
    <strong>6:30 PM - 7:30 PM:</strong> Experience a camel safari and sunset at the Sam Sand Dunes, including photo opportunities and traditional camel rides.<br/><br/>
    <strong>7:30 PM - 9:30 PM:</strong> Enjoy a cultural evening at a desert camp, featuring Kalbeliya dance, folk music, and dinner (optional, but recommended). Overnight stay in the desert camp.<br><br/><br/>
    
    <strong>Day 2:</strong><br/><br/>
    <strong>5:30 AM - 6:30 AM:</strong> Watch the sunrise over the dunes, ideal for photography and morning tea.<br/><br/>
    <strong>Morning:</strong> Heritage walk and departure.<br/><br/>
    <strong>6:30 AM - 7:30 AM:</strong> Returning from a desert camp to a hotel in the city for freshening up and breakfast.<br><br/>
    <strong>Patwon ki Haveli (8:00 AM - 9:00 AM):</strong> A visit to this haveli known for its intricate carvings and mirror work.<br/><br/>
    <strong>Salim Singh ki Haveli (9:00 AM - 10:00 AM):</strong> A haveli known for its peacock-shaped roof and 38 balconies.
`,
      },
      {
        name: "Jodhpur",
        description: `
    <strong>Departure for Jodhpur (9:30 AM):</strong><br/><br/>
    Distance: 300 km.<br/><br/>
    Travel time: Approximately 6 hours.<br/><br/>
    Route: Khuri -> Pokaran -> Jodhpur.<br/><br/>
    <strong>4:00 PM - 4:30 PM:</strong> Check-in and freshen up. Recommended areas to stay include the clock tower area, Ratanada, or near Umaid Bhawan.<br/><br/>
    <strong>4:30 PM - 5:30 PM:</strong> Visit Toorji Ka Jhalra (stepwell), a popular social media spot, and explore local cafes.<br/><br/>
    <strong>5:30 PM - 6:30 PM:</strong> Explore the clock tower and Sardar market, shop for spices, textiles, and handicrafts.<br/><br/>
    <strong>7:00 PM - 9:00 PM:</strong> Rooftop dinner with fort view at one of the following locations:<br/><br/>
    - Indique at the view of Mehrangarh.<br/><br/>
    - Darikhana at RAAS Hotel.<br/><br/>
    - Sky 22 Rooftop Restaurant.<br/><br/>
    - On the Rocks near Circuit House lounge.<br/><br/>

    <strong>Day 2:</strong><br/><br/>
    <strong>8:00 AM - 1:00 PM:</strong> Visit Mandore Gardens, which include temples, cenotaphs, and lush gardens.<br/><br/>
    <strong>9:30 AM - 11:30 AM:</strong> Explore Mehrangarh Fort, which includes a museum and panoramic views.<br/><br/>
    <strong>11:15 AM - 12:15 PM:</strong> Jaswant Thada - A marble cenotaph known for its peaceful setting.<br/><br/>
    <strong>12:20 PM - 1:30 PM:</strong> Lunch break.<br/><br/>

    <strong>Afternoon:</strong><br/><br/>
    <strong>1:45 PM - 3:00 PM:</strong> Umaid Bhawan Palace Museum - A museum showcasing vintage cars and palace history.<br/><br/>
    <strong>3:15 PM - 4:15 PM:</strong> Rao Jodha Desert Rock Park - Features nature trails, desert ecology, and a fort backdrop.<br/><br/>

    <strong>Late Afternoon/Evening:</strong><br/><br/>
    <strong>4:30 PM - 6:00 PM:</strong> Leisure time for shopping. A visit to Sardar Market is suggested for last-minute souvenirs, spices, and textiles.<br/><br/>
    <strong>6:00 PM - 7:00 PM:</strong> Sunset dinner.
`,
      },
      {
        name: "Jaipur to Delhi Departure",
        description: `Depature from Jaipur to Delhi`,
      },
    ],
    Price: 4000,
    Inclusion: [],
    Exclusion: [],
    FAQs: [],
  },
];
