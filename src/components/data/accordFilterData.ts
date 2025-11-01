export const accordFilterData = [
    {
        id: 1,
        name: 'Vehicles',
        content:[
            {
                type:'Cars',
                filter:[
                    {
                        id: 1,
                        name: 'Make/Brand',
                        options: [
                            { id: 1, title: 'Nissan' },
                            { id: 2, title: 'Audi' },
                            { id: 3, title: 'Corolla' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Model',
                        options: [
                            { id: 1, title: 'Altima' },
                            { id: 2, title: 'A4' },
                            { id: 3, title: 'Camry' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Year',
                        options: [
                            { id: 1, title: '2020' },
                            { id: 2, title: '2021' },
                            { id: 3, title: '2022' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Fuel Type',
                        options: [
                            { id: 1, title: 'Petrol' },
                            { id: 2, title: 'Diesel' },
                            { id: 3, title: 'Electric' },
                            { id: 4, title: 'Hybrid' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Transmission (Auto/Manual)',
                        options: [
                            { id: 1, title: 'Automatic' },
                            { id: 2, title: 'Manual' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Condition (New/Used)',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'Red' },
                            { id: 2, title: 'Black' },
                            { id: 3, title: 'White' },
                            { id: 4, title: 'Silver' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'Mileage',
                        options: [
                            { id: 1, title: 'Under 10,000 km' },
                            { id: 2, title: '10,000 - 50,000 km' },
                            { id: 3, title: '50,000 - 100,000 km' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'Price Range',
                    },
                ]
            },
            {
                type: 'Motorcycles & Scooters',
                filter: [
                    {
                        id: 1,
                        name: 'Make/Brand',
                        options: [
                            { id: 1, title: 'Honda' },
                            { id: 2, title: 'Yamaha' },
                            { id: 3, title: 'Suzuki' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Model',
                        options: [
                            { id: 1, title: 'CD 70' },
                            { id: 2, title: 'YBR 125' },
                            { id: 3, title: 'GS 150' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Engine CC',
                        options: [
                            { id: 1, title: '70 CC' },
                            { id: 2, title: '100 CC' },
                            { id: 3, title: '125 CC' },
                            { id: 4, title: '150 CC' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Fuel Type',
                        options: [
                            { id: 1, title: 'Petrol' },
                            { id: 2, title: 'Electric' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Price Range',
                    },
                ],
            },
            {
                type: 'Bicycles',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Mountain, Road, Hybrid)',
                        options: [
                            { id: 1, title: 'Mountain' },
                            { id: 2, title: 'Road' },
                            { id: 3, title: 'Hybrid' },
                            { id: 4, title: 'BMX' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Gear/Non-Gear',
                        options: [
                            { id: 1, title: 'Gear' },
                            { id: 2, title: 'Non-Gear' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Giant' },
                            { id: 2, title: 'Trek' },
                            { id: 3, title: 'Hero' },
                            { id: 4, title: 'Firefox' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                ],
            },
            {
                type: 'Trucks & Commercial Vehicles',
                filter: [
                    {
                        id: 1,
                        name: 'Vehicle Type (Truck, Van, Bus)',
                        options: [
                            { id: 1, title: 'Truck' },
                            { id: 2, title: 'Van' },
                            { id: 3, title: 'Bus' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Load Capacity',
                        options: [
                            { id: 1, title: '1 Ton' },
                            { id: 2, title: '3 Ton' },
                            { id: 3, title: '5 Ton' },
                            { id: 4, title: '10+ Ton' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Make/Model',
                        options: [
                            { id: 1, title: 'Isuzu NPR' },
                            { id: 2, title: 'Tata Ace' },
                            { id: 3, title: 'Ashok Leyland' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Fuel Type',
                        options: [
                            { id: 1, title: 'Diesel' },
                            { id: 2, title: 'CNG' },
                            { id: 3, title: 'Electric' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                ],
            },
            {
                type: 'Auto Rickshaws',
                filter: [
                    {
                        id: 1,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Piaggio' },
                            { id: 2, title: 'TVS' },
                            { id: 3, title: 'Bajaj' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Fuel Type',
                        options: [
                            { id: 1, title: 'Petrol' },
                            { id: 2, title: 'CNG' },
                            { id: 3, title: 'Electric' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Seating Capacity',
                        options: [
                            { id: 1, title: '2 Seater' },
                            { id: 2, title: '3 Seater' },
                            { id: 3, title: '6 Seater' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price Range',
                    },
                    {
                        id: 6,
                        name: 'Location',
                        options: [
                            { id: 1, title: 'Karachi' },
                            { id: 2, title: 'Lahore' },
                            { id: 3, title: 'Islamabad' },
                        ],
                    },
                ],
            },
            {
                type: 'Vehicle Accessories',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Seat Cover, Tyre, Lights)',
                        options: [
                            { id: 1, title: 'Seat Cover' },
                            { id: 2, title: 'Tyre' },
                            { id: 3, title: 'Lights' },
                            { id: 4, title: 'Floor Mats' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Philips' },
                            { id: 2, title: 'Osram' },
                            { id: 3, title: 'Bridgestone' },
                            { id: 4, title: 'General' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Compatible Vehicle',
                        options: [
                            { id: 1, title: 'Car' },
                            { id: 2, title: 'Motorcycle' },
                            { id: 3, title: 'Truck' },
                            { id: 4, title: 'Rickshaw' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price',
                    },
                ],
            },
            {
                type: 'Boats & Watercraft',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Speedboat, Fishing, Jet Ski)',
                        options: [
                            { id: 1, title: 'Speedboat' },
                            { id: 2, title: 'Fishing Boat' },
                            { id: 3, title: 'Jet Ski' },
                            { id: 4, title: 'Yacht' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Length',
                        options: [
                            { id: 1, title: 'Up to 10 ft' },
                            { id: 2, title: '10-20 ft' },
                            { id: 3, title: '20-30 ft' },
                            { id: 4, title: '30+ ft' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Engine Type',
                        options: [
                            { id: 1, title: 'Inboard' },
                            { id: 2, title: 'Outboard' },
                            { id: 3, title: 'Jet Drive' },
                            { id: 4, title: 'Electric' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price',
                    },
                ],
            },
            {
                type: 'RVs & Campers',
                filter: [
                    {
                        id: 1,
                        name: 'Type',
                        options: [
                            { id: 1, title: 'Class A Motorhome' },
                            { id: 2, title: 'Class B Campervan' },
                            { id: 3, title: 'Travel Trailer' },
                            { id: 4, title: 'Pop-Up Camper' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Length',
                        options: [
                            { id: 1, title: 'Up to 15 ft' },
                            { id: 2, title: '15-25 ft' },
                            { id: 3, title: '25-35 ft' },
                            { id: 4, title: '35+ ft' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Sleeping Capacity',
                        options: [
                            { id: 1, title: '2 Persons' },
                            { id: 2, title: '4 Persons' },
                            { id: 3, title: '6 Persons' },
                            { id: 4, title: '8+ Persons' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Fuel Type',
                        options: [
                            { id: 1, title: 'Diesel' },
                            { id: 2, title: 'Petrol' },
                            { id: 3, title: 'Electric' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price',
                    },
                ],
            },
        ]
    },
    {   id: 2,
        name: 'Apparel',
        content:[
            {
                type: "Men's Clothing",
                filter: [
                    {
                        id: 1,
                        name: 'Type (Shirts, Pants, Jackets)',
                        options: [
                            { id: 1, title: 'Shirts' },
                            { id: 2, title: 'Pants' },
                            { id: 3, title: 'Jackets' },
                            { id: 4, title: 'T-Shirts' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'S' },
                            { id: 2, title: 'M' },
                            { id: 3, title: 'L' },
                            { id: 4, title: 'XL' },
                            { id: 5, title: 'XXL' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Nike' },
                            { id: 2, title: 'Adidas' },
                            { id: 3, title: 'Levi’s' },
                            { id: 4, title: 'Puma' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Cotton' },
                            { id: 2, title: 'Polyester' },
                            { id: 3, title: 'Wool' },
                            { id: 4, title: 'Denim' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'Black' },
                            { id: 2, title: 'White' },
                            { id: 3, title: 'Blue' },
                            { id: 4, title: 'Grey' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'Price',
                    },
                ],
            },
            {
                type: "Women's Clothing",
                filter: [
                    {
                        id: 1,
                        name: 'Type (Abaya, Kurti, Tops)',
                        options: [
                            { id: 1, title: 'Abaya' },
                            { id: 2, title: 'Kurti' },
                            { id: 3, title: 'Tops' },
                            { id: 4, title: 'Dresses' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'XS' },
                            { id: 2, title: 'S' },
                            { id: 3, title: 'M' },
                            { id: 4, title: 'L' },
                            { id: 5, title: 'XL' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Zara' },
                            { id: 2, title: 'H&M' },
                            { id: 3, title: 'Gucci' },
                            { id: 4, title: 'Uniqlo' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Fabric',
                        options: [
                            { id: 1, title: 'Cotton' },
                            { id: 2, title: 'Silk' },
                            { id: 3, title: 'Chiffon' },
                            { id: 4, title: 'Linen' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'Red' },
                            { id: 2, title: 'Black' },
                            { id: 3, title: 'White' },
                            { id: 4, title: 'Pink' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'Price',
                    },
                ],
            },
            {
                type: "Kids' Clothing",
                filter: [
                    {
                        id: 1,
                        name: 'Age Group',
                        options: [
                            { id: 1, title: '0-2 Years' },
                            { id: 2, title: '3-5 Years' },
                            { id: 3, title: '6-8 Years' },
                            { id: 4, title: '9-12 Years' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Type (Uniform, Babywear)',
                        options: [
                            { id: 1, title: 'Uniform' },
                            { id: 2, title: 'Babywear' },
                            { id: 3, title: 'Casual' },
                            { id: 4, title: 'Formal' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Gender',
                        options: [
                            { id: 1, title: 'Boys' },
                            { id: 2, title: 'Girls' },
                            { id: 3, title: 'Unisex' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'XS' },
                            { id: 2, title: 'S' },
                            { id: 3, title: 'M' },
                            { id: 4, title: 'L' },
                            { id: 5, title: 'XL' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Price',
                    },
                ],
            },
            {
                type:"Footwear",
                filter:[
                    {
                        id: 1,
                        name: 'Type (Shoes, Sandals, Sneakers)'
                    },
                    {
                        id: 2,
                        name: 'Size'
                    },
                    {
                        id: 3,
                        name: 'Brand'
                    },
                    {
                        id: 4,
                        name: 'Gender'
                    },
                    {
                        id: 5,
                        name: 'Color'
                    },
                    {
                        id: 6,
                        name: 'Condition'
                    },
                    {
                        id: 7,
                        name: 'Material'
                    },
                ]
            },
            {
                type:"Accessories",
                filter:[
                    {
                        id: 1,
                        name: 'Type (Belts, Bags, Jewelry)'
                    },
                    {
                        id: 2,
                        name: 'Brand'
                    },
                    {
                        id: 3,
                        name: 'Gender'
                    },
                    {
                        id: 4,
                        name: 'Material'
                    },
                    {
                        id: 5,
                        name: 'Condition'
                    },
                    {
                        id: 6,
                        name: 'Color'
                    },
                    {
                        id: 7,
                        name: 'size'
                    },
                ]
            },
        ]
    },
    {   id: 3,
        name: 'Property',
        content:[
            {
                type: 'Houses for Sale',
                filter: [
                    {
                        id: 1,
                        name: 'Location',
                        options: [
                            { id: 1, title: 'Downtown' },
                            { id: 2, title: 'Suburbs' },
                            { id: 3, title: 'Countryside' },
                            { id: 4, title: 'Beachside' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Bedrooms',
                        options: [
                            { id: 1, title: '1' },
                            { id: 2, title: '2' },
                            { id: 3, title: '3' },
                            { id: 4, title: '4+' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Bathrooms',
                        options: [
                            { id: 1, title: '1' },
                            { id: 2, title: '2' },
                            { id: 3, title: '3+' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Area (sq ft)',
                        options: [
                            { id: 1, title: 'Up to 1000' },
                            { id: 2, title: '1000-2000' },
                            { id: 3, title: '2000-3000' },
                            { id: 4, title: '3000+' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price Range',
                    },
                    {
                        id: 6,
                        name: 'Furnishing Status',
                        options: [
                            { id: 1, title: 'Furnished' },
                            { id: 2, title: 'Semi-Furnished' },
                            { id: 3, title: 'Unfurnished' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'Ownership',
                        options: [
                            { id: 1, title: 'Freehold' },
                            { id: 2, title: 'Leasehold' },
                            { id: 3, title: 'Rented' },
                        ],
                    },
                ],
            },
            {
                type: 'Houses for Rent',
                filter: [
                    {
                        id: 1,
                        name: 'Location',
                        options: [
                            { id: 1, title: 'City Center' },
                            { id: 2, title: 'Suburbs' },
                            { id: 3, title: 'Near University' },
                            { id: 4, title: 'Industrial Area' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Rent Range',
                    },
                    {
                        id: 3,
                        name: 'Bedrooms',
                        options: [
                            { id: 1, title: '1' },
                            { id: 2, title: '2' },
                            { id: 3, title: '3' },
                            { id: 4, title: '4+' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Area',
                        options: [
                            { id: 1, title: 'Up to 800 sq ft' },
                            { id: 2, title: '800-1500 sq ft' },
                            { id: 3, title: '1500-2500 sq ft' },
                            { id: 4, title: '2500+ sq ft' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Furnished/Unfurnished',
                        options: [
                            { id: 1, title: 'Furnished' },
                            { id: 2, title: 'Unfurnished' },
                            { id: 3, title: 'Semi-Furnished' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Agreement Type',
                        options: [
                            { id: 1, title: 'Short Term' },
                            { id: 2, title: 'Long Term' },
                            { id: 3, title: 'Monthly' },
                        ],
                    },
                ],
            },
            {
                type: 'Apartments & Flats',
                filter: [
                    {
                        id: 1,
                        name: 'Location',
                        options: [
                            { id: 1, title: 'Downtown' },
                            { id: 2, title: 'Suburbs' },
                            { id: 3, title: 'Near Park' },
                            { id: 4, title: 'Waterfront' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Floor Level',
                        options: [
                            { id: 1, title: 'Ground' },
                            { id: 2, title: '1st' },
                            { id: 3, title: '2nd' },
                            { id: 4, title: '3rd+' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Bedrooms',
                        options: [
                            { id: 1, title: '1' },
                            { id: 2, title: '2' },
                            { id: 3, title: '3' },
                            { id: 4, title: '4+' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Bathrooms',
                        options: [
                            { id: 1, title: '1' },
                            { id: 2, title: '2' },
                            { id: 3, title: '3+' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Kitchen',
                        options: [
                            { id: 1, title: 'Open' },
                            { id: 2, title: 'Closed' },
                            { id: 3, title: 'Modular' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Price',
                    },
                    {
                        id: 7,
                        name: 'Area',
                        options: [
                            { id: 1, title: 'Up to 800 sq ft' },
                            { id: 2, title: '800-1500 sq ft' },
                            { id: 3, title: '1500-2500 sq ft' },
                            { id: 4, title: '2500+ sq ft' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'Lift Available',
                        options: [
                            { id: 1, title: 'Yes' },
                            { id: 2, title: 'No' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'Parking',
                        options: [
                            { id: 1, title: 'Covered' },
                            { id: 2, title: 'Open' },
                            { id: 3, title: 'None' },
                        ],
                    },
                ],
            },
            {
                type: 'Commercial Property',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Shop, Office, Warehouse)',
                        options: [
                            { id: 1, title: 'Shop' },
                            { id: 2, title: 'Office' },
                            { id: 3, title: 'Warehouse' },
                            { id: 4, title: 'Showroom' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Location',
                        options: [
                            { id: 1, title: 'Business District' },
                            { id: 2, title: 'Industrial Area' },
                            { id: 3, title: 'Suburban Area' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Area',
                        options: [
                            { id: 1, title: 'Up to 1000 sq ft' },
                            { id: 2, title: '1000-3000 sq ft' },
                            { id: 3, title: '3000-5000 sq ft' },
                            { id: 4, title: '5000+ sq ft' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Price',
                    },
                    {
                        id: 5,
                        name: 'Facilities',
                        options: [
                            { id: 1, title: 'Parking' },
                            { id: 2, title: 'Security' },
                            { id: 3, title: 'Elevator' },
                            { id: 4, title: 'Loading Dock' },
                        ],
                    },
                ],
            },
            {
                type: 'Plots & Land',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Residential, Agricultural)',
                        options: [
                            { id: 1, title: 'Residential' },
                            { id: 2, title: 'Agricultural' },
                            { id: 3, title: 'Commercial' },
                            { id: 4, title: 'Industrial' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Area',
                        options: [
                            { id: 1, title: 'Up to 500 sq ft' },
                            { id: 2, title: '500-1000 sq ft' },
                            { id: 3, title: '1000-2000 sq ft' },
                            { id: 4, title: '2000+ sq ft' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Location',
                        options: [
                            { id: 1, title: 'City Center' },
                            { id: 2, title: 'Suburbs' },
                            { id: 3, title: 'Countryside' },
                            { id: 4, title: 'Near Highway' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Price', 
                        options: [
                            { id: 1, title: 'Under $10,000' },
                            { id: 2, title: '$10,000 - $50,000' },
                            { id: 3, title: '$50,000 - $100,000' },
                            { id: 4, title: 'Over $100,000' },
                        ],
                    },
                ],
            },
        ]
    },
    // {   id: 4,
    //     name: 'Classified',
    //     content:[
    //         {
    //             type:'Classified Type',
    //             filter:[
    //                 {
    //                     id: 1,
    //                     name: 'Make/Classified 01'
    //                 },
    //             ]
    //         },
    //     ]
    // },
    {   id: 5,
        name: 'Electronics',
        content:[
            {
                type: 'Mobile Phones & Accessories',
                filter: [
                    {
                        id: 1,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Apple' },
                            { id: 2, title: 'Samsung' },
                            { id: 3, title: 'OnePlus' },
                            { id: 4, title: 'Xiaomi' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Model',
                        options: [
                            { id: 1, title: 'iPhone 13' },
                            { id: 2, title: 'Galaxy S21' },
                            { id: 3, title: 'OnePlus 9' },
                            { id: 4, title: 'Redmi Note 10' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'RAM/Storage',
                        options: [
                            { id: 1, title: '4GB / 64GB' },
                            { id: 2, title: '6GB / 128GB' },
                            { id: 3, title: '8GB / 256GB' },
                            { id: 4, title: '12GB / 512GB' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                            { id: 4, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Warranty',
                        options: [
                            { id: 1, title: 'No Warranty' },
                            { id: 2, title: '6 Months' },
                            { id: 3, title: '1 Year' },
                            { id: 4, title: '2 Years' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Accessories Included',
                        options: [
                            { id: 1, title: 'Charger' },
                            { id: 2, title: 'Earphones' },
                            { id: 3, title: 'Case' },
                            { id: 4, title: 'Screen Protector' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'Price',
                        options: [
                            { id: 1, title: 'Under $100' },
                            { id: 2, title: '$100 - $300' },
                            { id: 3, title: '$300 - $600' },
                            { id: 4, title: 'Above $600' },
                        ],
                    },
                ],
            },
            {
                type: 'Laptops & Computers',
                filter: [
                    {
                        id: 1,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Dell' },
                            { id: 2, title: 'HP' },
                            { id: 3, title: 'Apple' },
                            { id: 4, title: 'Lenovo' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Processor',
                        options: [
                            { id: 1, title: 'Intel i3' },
                            { id: 2, title: 'Intel i5' },
                            { id: 3, title: 'Intel i7' },
                            { id: 4, title: 'AMD Ryzen 5' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'RAM',
                        options: [
                            { id: 1, title: '4 GB' },
                            { id: 2, title: '8 GB' },
                            { id: 3, title: '16 GB' },
                            { id: 4, title: '32 GB' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Screen Size',
                        options: [
                            { id: 1, title: '13 inch' },
                            { id: 2, title: '14 inch' },
                            { id: 3, title: '15.6 inch' },
                            { id: 4, title: '17 inch' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Operating System',
                        options: [
                            { id: 1, title: 'Windows 10' },
                            { id: 2, title: 'Windows 11' },
                            { id: 3, title: 'macOS' },
                            { id: 4, title: 'Linux' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                            { id: 4, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'Price',
                        options: [
                            { id: 1, title: 'Under $500' },
                            { id: 2, title: '$500 - $1000' },
                            { id: 3, title: '$1000 - $1500' },
                            { id: 4, title: 'Above $1500' },
                        ],
                    },
                ],
            },
            {
                type: 'TVs & Home Entertainment',
                filter: [
                    {
                        id: 1,
                        name: 'Screen Size',
                        options: [
                            { id: 1, title: '32 inch' },
                            { id: 2, title: '40 inch' },
                            { id: 3, title: '50 inch' },
                            { id: 4, title: '65 inch' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Samsung' },
                            { id: 2, title: 'LG' },
                            { id: 3, title: 'Sony' },
                            { id: 4, title: 'TCL' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Display Type (LED, OLED, etc.)',
                        options: [
                            { id: 1, title: 'LED' },
                            { id: 2, title: 'OLED' },
                            { id: 3, title: 'QLED' },
                            { id: 4, title: 'LCD' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Resolution (HD, 4K)',
                        options: [
                            { id: 1, title: 'HD' },
                            { id: 2, title: 'Full HD' },
                            { id: 3, title: '4K UHD' },
                            { id: 4, title: '8K UHD' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                            { id: 4, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Smart/Non-smart',
                        options: [
                            { id: 1, title: 'Smart' },
                            { id: 2, title: 'Non-smart' },
                        ],
                    },
                ],
            },
            {
                type: 'Cameras & Drones',
                filter: [
                    {
                        id: 1,
                        name: 'Type (DSLR, Action, Drone)',
                        options: [
                            { id: 1, title: 'DSLR' },
                            { id: 2, title: 'Action' },
                            { id: 3, title: 'Drone' },
                            { id: 4, title: 'Mirrorless' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Canon' },
                            { id: 2, title: 'Nikon' },
                            { id: 3, title: 'DJI' },
                            { id: 4, title: 'GoPro' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Megapixels',
                        options: [
                            { id: 1, title: '12 MP' },
                            { id: 2, title: '16 MP' },
                            { id: 3, title: '24 MP' },
                            { id: 4, title: '48 MP' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Lens Included',
                        options: [
                            { id: 1, title: 'Yes' },
                            { id: 2, title: 'No' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                            { id: 4, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Price',
                        options: [
                            { id: 1, title: 'Under $500' },
                            { id: 2, title: '$500 - $1000' },
                            { id: 3, title: '$1000 - $2000' },
                            { id: 4, title: 'Above $2000' },
                        ],
                    },
                ],
            },
            {
                type: 'Home Appliances',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Fridge, AC, Oven)',
                        options: [
                            { id: 1, title: 'Fridge' },
                            { id: 2, title: 'Air Conditioner' },
                            { id: 3, title: 'Oven' },
                            { id: 4, title: 'Washing Machine' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'LG' },
                            { id: 2, title: 'Samsung' },
                            { id: 3, title: 'Whirlpool' },
                            { id: 4, title: 'Panasonic' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Capacity',
                        options: [
                            { id: 1, title: '1-3 Kg' },
                            { id: 2, title: '4-6 Kg' },
                            { id: 3, title: '7-10 Kg' },
                            { id: 4, title: 'Above 10 Kg' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Energy Rating',
                        options: [
                            { id: 1, title: '1 Star' },
                            { id: 2, title: '2 Star' },
                            { id: 3, title: '3 Star' },
                            { id: 4, title: '4 Star' },
                            { id: 5, title: '5 Star' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                            { id: 3, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Warranty',
                        options: [
                            { id: 1, title: 'No Warranty' },
                            { id: 2, title: '6 Months' },
                            { id: 3, title: '1 Year' },
                            { id: 4, title: '2 Years' },
                        ],
                    },
                ],
            },
            {
                type: 'Gaming Consoles',
                filter: [
                    {
                        id: 1,
                        name: 'Type (PlayStation, Xbox, Nintendo)',
                        options: [
                            { id: 1, title: 'PlayStation' },
                            { id: 2, title: 'Xbox' },
                            { id: 3, title: 'Nintendo' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Model',
                        options: [
                            { id: 1, title: 'PS5' },
                            { id: 2, title: 'Xbox Series X' },
                            { id: 3, title: 'Nintendo Switch' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Storage',
                        options: [
                            { id: 1, title: '256 GB' },
                            { id: 2, title: '512 GB' },
                            { id: 3, title: '1 TB' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                            { id: 3, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Games Included',
                        options: [
                            { id: 1, title: 'No Games' },
                            { id: 2, title: 'With Games' },
                            { id: 3, title: 'Multiple Games' },
                        ],
                    },
                ],
            },
            {
                type: 'Wearables',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Smartwatch, Band)',
                        options: [
                            { id: 1, title: 'Smartwatch' },
                            { id: 2, title: 'Fitness Band' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Apple' },
                            { id: 2, title: 'Samsung' },
                            { id: 3, title: 'Fitbit' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Features (Heart Rate, GPS)',
                        options: [
                            { id: 1, title: 'Heart Rate Monitor' },
                            { id: 2, title: 'GPS' },
                            { id: 3, title: 'Sleep Tracking' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Battery Life',
                        options: [
                            { id: 1, title: '1 Day' },
                            { id: 2, title: '3 Days' },
                            { id: 3, title: '7 Days+' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                ],
            }
        ]
    },
    // {   id: 6,
    //     name: 'Entertainment',
    //     content:[
    //         {
    //             type:'Movie Tickets',
    //             filter:[
    //                 {
    //                     id: 1,
    //                     name: 'Make/Brand'
    //                 },
    //             ]
    //         },
    //         {
    //             type:'Event Passes',
    //             filter:[
    //                 {
    //                     id: 1,
    //                     name: 'Make/Brand'
    //                 },
    //             ]
    //         },
    //         {
    //             type:'Streaming Devices',
    //             filter:[
    //                 {
    //                     id: 1,
    //                     name: 'Make/Brand'
    //                 },
    //             ]
    //         },
    //         {
    //             type:'Books & Magazines',
    //             filter:[
    //                 {
    //                     id: 1,
    //                     name: 'Make/Brand'
    //                 },
    //             ]
    //         },
    //         {
    //             type:'Musical Shows',
    //             filter:[
    //                 {
    //                     id: 1,
    //                     name: 'Make/Brand'
    //                 },
    //             ]
    //         },
    //         {
    //             type:'Game Zones & Arcades',
    //             filter:[
    //                 {
    //                     id: 1,
    //                     name: 'Make/Brand'
    //                 },
    //             ]
    //         },
    //     ]
    // },
    {   id: 7,
        name: 'Family',
        content:[
            {
                type: 'Baby Products',
                filter: [
                    {
                        id: 1,
                        name: 'Product Type (Diapers, Feeding Bottles, Toys)',
                        options: [
                            { id: 1, title: 'Diapers' },
                            { id: 2, title: 'Feeding Bottles' },
                            { id: 3, title: 'Toys' },
                            { id: 4, title: 'Strollers' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Age Group',
                        options: [
                            { id: 1, title: '0-6 Months' },
                            { id: 2, title: '6-12 Months' },
                            { id: 3, title: '1-2 Years' },
                            { id: 4, title: '2+ Years' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Pampers' },
                            { id: 2, title: 'Philips Avent' },
                            { id: 3, title: 'Fisher-Price' },
                            { id: 4, title: 'Chicco' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Size/Quantity',
                        options: [
                            { id: 1, title: 'Small' },
                            { id: 2, title: 'Medium' },
                            { id: 3, title: 'Large' },
                            { id: 4, title: 'Pack of 3' },
                            { id: 5, title: 'Pack of 6' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Price',
                    },
                ],
            }
        ]
    },
    {   id: 8,
        name: 'Hobbies',
        content:[
            {
                type: 'Art & Craft Supplies',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Paints, Brushes, Kits)',
                        options: [
                            { id: 1, title: 'Paints' },
                            { id: 2, title: 'Brushes' },
                            { id: 3, title: 'Kits' },
                            { id: 4, title: 'Canvas' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Winsor & Newton' },
                            { id: 2, title: 'Faber-Castell' },
                            { id: 3, title: 'Prang' },
                            { id: 4, title: 'Crayola' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Acrylic' },
                            { id: 2, title: 'Oil' },
                            { id: 3, title: 'Watercolor' },
                            { id: 4, title: 'Wood' },
                            { id: 5, title: 'Plastic' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price',
                    },
                ]
            },
            {
                type: 'Collectibles',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Coins, Stamps, Vintage Toys)',
                        options: [
                            { id: 1, title: 'Coins' },
                            { id: 2, title: 'Stamps' },
                            { id: 3, title: 'Vintage Toys' },
                            { id: 4, title: 'Postcards' },
                            { id: 5, title: 'Comic Books' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Era/Year',
                        options: [
                            { id: 1, title: 'Pre-1900' },
                            { id: 2, title: '1900-1950' },
                            { id: 3, title: '1951-2000' },
                            { id: 4, title: '2001-Present' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'Mint' },
                            { id: 2, title: 'Good' },
                            { id: 3, title: 'Fair' },
                            { id: 4, title: 'Poor' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Rarity',
                        options: [
                            { id: 1, title: 'Common' },
                            { id: 2, title: 'Uncommon' },
                            { id: 3, title: 'Rare' },
                            { id: 4, title: 'Ultra Rare' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price',
                    },
                ]
            },
            {
                type: 'Musical Instruments',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Guitar, Tabla, Violin)',
                        options: [
                            { id: 1, title: 'Guitar' },
                            { id: 2, title: 'Tabla' },
                            { id: 3, title: 'Violin' },
                            { id: 4, title: 'Piano' },
                            { id: 5, title: 'Drums' },
                            { id: 6, title: 'Flute' },
                            { id: 7, title: 'Saxophone' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Brand',
                    },
                    {
                        id: 3,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Like New' },
                            { id: 3, title: 'Used' },
                            { id: 4, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Accessories Included',
                        options: [
                            { id: 1, title: 'Yes' },
                            { id: 2, title: 'No' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Skill Level',
                        options: [
                            { id: 1, title: 'Beginner' },
                            { id: 2, title: 'Intermediate' },
                            { id: 3, title: 'Advanced' },
                            { id: 4, title: 'Professional' },
                        ],
                    },
                ]
            },
            {
                type: 'Photography Equipment',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Lenses, Tripods, Flash)',
                        options: [
                            { id: 1, title: 'Lenses' },
                            { id: 2, title: 'Tripods' },
                            { id: 3, title: 'Flash' },
                            { id: 4, title: 'Camera Bags' },
                            { id: 5, title: 'Filters' },
                            { id: 6, title: 'Memory Cards' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Compatibility',
                        options: [
                            { id: 1, title: 'Canon' },
                            { id: 2, title: 'Nikon' },
                            { id: 3, title: 'Sony' },
                            { id: 4, title: 'Fujifilm' },
                            { id: 5, title: 'Panasonic' },
                            { id: 6, title: 'Olympus' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                            { id: 3, title: 'Refurbished' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Price Range',
                    },
                ],
            },
            {
                type: 'DIY Kits',
                filter: [
                    {
                        id: 1,
                        name: 'Project Type (Home Decor, Science Models)',
                        options: [
                            { id: 1, title: 'Home Decor' },
                            { id: 2, title: 'Science Models' },
                            { id: 3, title: 'Robotics' },
                            { id: 4, title: 'Electronics' },
                            { id: 5, title: 'Crafts' },
                            { id: 6, title: 'Gardening' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Included Tools',
                        options: [
                            { id: 1, title: 'Glue Gun' },
                            { id: 2, title: 'Screwdriver' },
                            { id: 3, title: 'Paints' },
                            { id: 4, title: 'Brushes' },
                            { id: 5, title: 'Scissors' },
                            { id: 6, title: 'Drill' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Age Group',
                        options: [
                            { id: 1, title: 'Kids (5-12)' },
                            { id: 2, title: 'Teens (13-17)' },
                            { id: 3, title: 'Adults' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                        ],
                    },
                ],
            },
            {
                type: 'Model Building',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Airplane, Car, Ships)',
                        options: [
                            { id: 1, title: 'Airplane' },
                            { id: 2, title: 'Car' },
                            { id: 3, title: 'Ships' },
                            { id: 4, title: 'Trains' },
                            { id: 5, title: 'Military' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Scale',
                        options: [
                            { id: 1, title: '1:24' },
                            { id: 2, title: '1:48' },
                            { id: 3, title: '1:72' },
                            { id: 4, title: '1:144' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Plastic' },
                            { id: 2, title: 'Wood' },
                            { id: 3, title: 'Metal' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Revell' },
                            { id: 2, title: 'Tamiya' },
                            { id: 3, title: 'Airfix' },
                            { id: 4, title: 'Hasegawa' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Skill Level',
                        options: [
                            { id: 1, title: 'Beginner' },
                            { id: 2, title: 'Intermediate' },
                            { id: 3, title: 'Advanced' },
                        ],
                    },
                ],
            },
        ]
    },
    {   id: 9,
        name: 'Garden & Outdoor',
        content:[
            {
                type: 'Plants & Seeds',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Flowering, Indoor, Vegetable)',
                        options: [
                            { id: 1, title: 'Flowering' },
                            { id: 2, title: 'Indoor' },
                            { id: 3, title: 'Vegetable' },
                            { id: 4, title: 'Herbs' },
                            { id: 5, title: 'Succulents' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'Small' },
                            { id: 2, title: 'Medium' },
                            { id: 3, title: 'Large' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Pot Included',
                        options: [
                            { id: 1, title: 'Yes' },
                            { id: 2, title: 'No' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Organic/Hybrid',
                        options: [
                            { id: 1, title: 'Organic' },
                            { id: 2, title: 'Hybrid' },
                            { id: 3, title: 'Non-Organic' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'Quantity',
                        options: [
                            { id: 1, title: '1-5' },
                            { id: 2, title: '6-10' },
                            { id: 3, title: '11+' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'Price Range',
                    },
                ],
            },
            {
                type: 'Gardening Tools',
                filter: [
                    {
                        id: 1,
                        name: 'Tool Type (Shovel, Rake, Pruner)',
                        options: [
                            { id: 1, title: 'Shovel' },
                            { id: 2, title: 'Rake' },
                            { id: 3, title: 'Pruner' },
                            { id: 4, title: 'Hoe' },
                            { id: 5, title: 'Trowel' },
                            { id: 6, title: 'Garden Fork' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Steel' },
                            { id: 2, title: 'Plastic' },
                            { id: 3, title: 'Wood' },
                            { id: 4, title: 'Aluminum' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                            { id: 4, title: 'Used - Acceptable' },
                        ],
                    },
                ],
            },
            {
                type: 'Outdoor Furniture',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Benches, Tables, Swings)',
                        options: [
                            { id: 1, title: 'Bench' },
                            { id: 2, title: 'Table' },
                            { id: 3, title: 'Swing' },
                            { id: 4, title: 'Chair' },
                            { id: 5, title: 'Lounger' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'Material (Wood, Plastic, Metal)',
                        options: [
                            { id: 1, title: 'Wood' },
                            { id: 2, title: 'Plastic' },
                            { id: 3, title: 'Metal' },
                            { id: 4, title: 'Wicker' },
                            { id: 5, title: 'Rattan' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'Seating Capacity',
                        options: [
                            { id: 1, title: '1' },
                            { id: 2, title: '2' },
                            { id: 3, title: '3' },
                            { id: 4, title: '4+' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                        ],
                    },
                ],
            },
            {
                type: 'Lawn Care Equipment',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Lawn Mower, Sprinklers)',
                        options: [
                            { id: 1, title: 'Lawn Mower' },
                            { id: 2, title: 'Sprinklers' },
                            { id: 3, title: 'Edger' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Power Type (Manual, Electric)',
                        options: [
                            { id: 1, title: 'Manual' },
                            { id: 2, title: 'Electric' },
                            { id: 3, title: 'Gas' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Brand A' },
                            { id: 2, title: 'Brand B' },
                            { id: 3, title: 'Brand C' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                            { id: 3, title: 'Refurbished' }
                        ],
                    },
                ]
            },
            {
                type: 'Grills & BBQs',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Charcoal, Gas, Electric)',
                        options: [
                            { id: 1, title: 'Charcoal' },
                            { id: 2, title: 'Gas' },
                            { id: 3, title: 'Electric' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'Small' },
                            { id: 2, title: 'Medium' },
                            { id: 3, title: 'Large' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Brand A' },
                            { id: 2, title: 'Brand B' },
                            { id: 3, title: 'Brand C' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Portability',
                        options: [
                            { id: 1, title: 'Portable' },
                            { id: 2, title: 'Stationary' }
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                            { id: 3, title: 'Refurbished' }
                        ],
                    },
                ]
            },
            {
                type: 'Decorative Lights',
                filter: [
                    {
                        id: 1,
                        name: 'Type (String Lights, Spotlights)',
                        options: [
                            { id: 1, title: 'String Lights' },
                            { id: 2, title: 'Spotlights' },
                            { id: 3, title: 'Floodlights' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'White' },
                            { id: 2, title: 'Yellow' },
                            { id: 3, title: 'Multicolor' },
                            { id: 4, title: 'Blue' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Power Source',
                        options: [
                            { id: 1, title: 'Battery' },
                            { id: 2, title: 'Electric' },
                            { id: 3, title: 'Solar' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Waterproof (Yes/No)',
                        options: [
                            { id: 1, title: 'Yes' },
                            { id: 2, title: 'No' }
                        ],
                    },
                    {
                        id: 5,
                        name: 'Length',
                        options: [
                            { id: 1, title: '1 meter' },
                            { id: 2, title: '3 meters' },
                            { id: 3, title: '5 meters' },
                            { id: 4, title: '10 meters' }
                        ],
                    },
                ]
            }
        ]
    },
    {   id: 10,
        name: 'Home Goods',
        content:[
            {
                type: 'Furniture',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Sofa, Bed, Table)',
                        options: [
                            { id: 1, title: 'Sofa' },
                            { id: 2, title: 'Bed' },
                            { id: 3, title: 'Table' },
                            { id: 4, title: 'Chair' },
                            { id: 5, title: 'Cabinet' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Material (Wood, Metal, Plastic)',
                        options: [
                            { id: 1, title: 'Wood' },
                            { id: 2, title: 'Metal' },
                            { id: 3, title: 'Plastic' },
                            { id: 4, title: 'Glass' },
                            { id: 5, title: 'Fabric' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Size/Dimensions',
                        options: [
                            { id: 1, title: 'Small' },
                            { id: 2, title: 'Medium' },
                            { id: 3, title: 'Large' },
                            { id: 4, title: 'Custom' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Ikea' },
                            { id: 2, title: 'Home Centre' },
                            { id: 3, title: 'Urban Ladder' },
                            { id: 4, title: 'Other' }
                        ],
                    },
                    {
                        id: 5,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'Brown' },
                            { id: 2, title: 'Black' },
                            { id: 3, title: 'White' },
                            { id: 4, title: 'Gray' },
                            { id: 5, title: 'Beige' }
                        ],
                    },
                    {
                        id: 6,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                            { id: 4, title: 'Used - Acceptable' }
                        ],
                    },
                ]
            },
            {
                type: 'Kitchenware',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Cookware, Utensils, Appliances)',
                        options: [
                            { id: 1, title: 'Cookware' },
                            { id: 2, title: 'Utensils' },
                            { id: 3, title: 'Appliances' },
                            { id: 4, title: 'Storage' },
                            { id: 5, title: 'Cutlery' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Material (Steel, Non-stick, Glass)',
                        options: [
                            { id: 1, title: 'Steel' },
                            { id: 2, title: 'Non-stick' },
                            { id: 3, title: 'Glass' },
                            { id: 4, title: 'Ceramic' },
                            { id: 5, title: 'Plastic' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Prestige' },
                            { id: 2, title: 'Hawkins' },
                            { id: 3, title: 'Philips' },
                            { id: 4, title: 'Wonderchef' },
                            { id: 5, title: 'Other' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used - Like New' },
                            { id: 3, title: 'Used - Good' },
                            { id: 4, title: 'Used - Fair' }
                        ],
                    },
                    {
                        id: 5,
                        name: 'Quantity',
                        options: [
                            { id: 1, title: 'Single Item' },
                            { id: 2, title: 'Set of 2' },
                            { id: 3, title: 'Set of 4' },
                            { id: 4, title: 'Set of 6+' }
                        ],
                    },
                ]
            },
            {
                type: 'Home Decor',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Wall Art, Clocks, Vases)',
                        options: [
                            { id: 1, title: 'Wall Art' },
                            { id: 2, title: 'Clocks' },
                            { id: 3, title: 'Vases' },
                            { id: 4, title: 'Candles' },
                            { id: 5, title: 'Figurines' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Style (Modern, Traditional)',
                        options: [
                            { id: 1, title: 'Modern' },
                            { id: 2, title: 'Traditional' },
                            { id: 3, title: 'Rustic' },
                            { id: 4, title: 'Bohemian' },
                            { id: 5, title: 'Minimalist' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'White' },
                            { id: 2, title: 'Black' },
                            { id: 3, title: 'Gold' },
                            { id: 4, title: 'Silver' },
                            { id: 5, title: 'Multi-color' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'Small' },
                            { id: 2, title: 'Medium' },
                            { id: 3, title: 'Large' }
                        ],
                    },
                    {
                        id: 5,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Wood' },
                            { id: 2, title: 'Metal' },
                            { id: 3, title: 'Glass' },
                            { id: 4, title: 'Ceramic' },
                            { id: 5, title: 'Plastic' }
                        ],
                    }
                ]
            },
            {
                type: 'Storage Solutions',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Cabinets, Boxes, Organizers)',
                        options: [
                            { id: 1, title: 'Cabinets' },
                            { id: 2, title: 'Boxes' },
                            { id: 3, title: 'Organizers' },
                            { id: 4, title: 'Drawers' },
                            { id: 5, title: 'Racks' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Capacity',
                        options: [
                            { id: 1, title: 'Small' },
                            { id: 2, title: 'Medium' },
                            { id: 3, title: 'Large' },
                            { id: 4, title: 'Extra Large' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Plastic' },
                            { id: 2, title: 'Wood' },
                            { id: 3, title: 'Metal' },
                            { id: 4, title: 'Fabric' },
                            { id: 5, title: 'Bamboo' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Stackable (Yes/No)',
                        options: [
                            { id: 1, title: 'Yes' },
                            { id: 2, title: 'No' }
                        ],
                    },
                    {
                        id: 5,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'IKEA' },
                            { id: 2, title: 'Sterilite' },
                            { id: 3, title: 'Rubbermaid' },
                            { id: 4, title: 'Home Depot' },
                            { id: 5, title: 'Generic' }
                        ],
                    }
                ]
            },
            {
                type: 'Lighting',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Lamps, Ceiling, Wall-mounted)',
                        options: [
                            { id: 1, title: 'Lamps' },
                            { id: 2, title: 'Ceiling' },
                            { id: 3, title: 'Wall-mounted' },
                            { id: 4, title: 'Pendant' },
                            { id: 5, title: 'Chandelier' }
                        ],
                    },
                    {
                        id: 2,
                        name: 'Power Type (Battery, Electric)',
                        options: [
                            { id: 1, title: 'Battery' },
                            { id: 2, title: 'Electric' },
                            { id: 3, title: 'Solar' }
                        ],
                    },
                    {
                        id: 3,
                        name: 'Brightness',
                        options: [
                            { id: 1, title: 'Low' },
                            { id: 2, title: 'Medium' },
                            { id: 3, title: 'High' },
                            { id: 4, title: 'Adjustable' }
                        ],
                    },
                    {
                        id: 4,
                        name: 'Color Temperature (Warm/White)',
                        options: [
                            { id: 1, title: 'Warm White' },
                            { id: 2, title: 'Cool White' },
                            { id: 3, title: 'Daylight' },
                            { id: 4, title: 'Adjustable' }
                        ],
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Like New' },
                            { id: 3, title: 'Used' },
                            { id: 4, title: 'Refurbished' }
                        ],
                    }
                ]
            },
        ]
    },
    {   id: 11,
        name: 'Home Improvement Supplies',
        content: [
            {
                type: 'Tools',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Hammer, Drill, Wrench)',
                        options: [
                            { id: 1, title: 'Hammer' },
                            { id: 2, title: 'Drill' },
                            { id: 3, title: 'Wrench' },
                            { id: 4, title: 'Screwdriver' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Power Source (Manual, Electric)',
                        options: [
                            { id: 1, title: 'Manual' },
                            { id: 2, title: 'Electric' },
                            { id: 3, title: 'Battery' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Bosch' },
                            { id: 2, title: 'DeWalt' },
                            { id: 3, title: 'Makita' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' },
                            { id: 3, title: 'Refurbished' }
                        ]
                    }
                ]
            },
            {
                type: 'Electrical Supplies',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Wires, Switches, Lights)',
                        options: [
                            { id: 1, title: 'Wires' },
                            { id: 2, title: 'Switches' },
                            { id: 3, title: 'Lights' },
                            { id: 4, title: 'Sockets' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Voltage',
                        options: [
                            { id: 1, title: '110V' },
                            { id: 2, title: '220V' },
                            { id: 3, title: 'Multi-Voltage' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Philips' },
                            { id: 2, title: 'Havells' },
                            { id: 3, title: 'Legrand' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Quantity',
                        options: [
                            { id: 1, title: 'Single' },
                            { id: 2, title: 'Pack of 5' },
                            { id: 3, title: 'Pack of 10' }
                        ]
                    }
                ]
            },
            {
                type: 'Plumbing Supplies',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Taps, Pipes, Fittings)',
                        options: [
                            { id: 1, title: 'Taps' },
                            { id: 2, title: 'Pipes' },
                            { id: 3, title: 'Fittings' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Material (PVC, Metal)',
                        options: [
                            { id: 1, title: 'PVC' },
                            { id: 2, title: 'Metal' },
                            { id: 3, title: 'Brass' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Size',
                        options: [
                            { id: 1, title: '1/2 inch' },
                            { id: 2, title: '3/4 inch' },
                            { id: 3, title: '1 inch' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
            {
                type: 'Paint & Wallpapers',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Oil-based, Water-based, Wallpaper)',
                        options: [
                            { id: 1, title: 'Oil-based' },
                            { id: 2, title: 'Water-based' },
                            { id: 3, title: 'Wallpaper' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'White' },
                            { id: 2, title: 'Blue' },
                            { id: 3, title: 'Grey' },
                            { id: 4, title: 'Custom' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Asian Paints' },
                            { id: 2, title: 'Berger' },
                            { id: 3, title: 'Dulux' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Coverage Area',
                        options: [
                            { id: 1, title: 'Up to 100 sq.ft' },
                            { id: 2, title: 'Up to 500 sq.ft' },
                            { id: 3, title: 'Above 500 sq.ft' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Quantity',
                        options: [
                            { id: 1, title: '1 Litre' },
                            { id: 2, title: '4 Litres' },
                            { id: 3, title: '10 Litres' }
                        ]
                    }
                ]
            },
            {
                type: 'Flooring & Tiles',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Ceramic, Wood, Vinyl)',
                        options: [
                            { id: 1, title: 'Ceramic' },
                            { id: 2, title: 'Wood' },
                            { id: 3, title: 'Vinyl' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Size',
                        options: [
                            { id: 1, title: '12x12' },
                            { id: 2, title: '24x24' },
                            { id: 3, title: 'Custom' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Finish (Matte/Glossy)',
                        options: [
                            { id: 1, title: 'Matte' },
                            { id: 2, title: 'Glossy' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Color',
                        options: [
                            { id: 1, title: 'Beige' },
                            { id: 2, title: 'Grey' },
                            { id: 3, title: 'Brown' },
                            { id: 4, title: 'White' }
                        ]
                    }
                ]
            }
        ]
    },
    {   id: 12,
        name: 'Musical Instruments',
        content:[
            {
                type: 'String Instruments',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Guitar, Violin, Sitar)',
                        options: [
                            { id: 1, title: 'Guitar' },
                            { id: 2, title: 'Violin' },
                            { id: 3, title: 'Sitar' },
                            { id: 4, title: 'Ukulele' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Yamaha' },
                            { id: 2, title: 'Fender' },
                            { id: 3, title: 'Ibanez' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'Full Size' },
                            { id: 2, title: '3/4 Size' },
                            { id: 3, title: '1/2 Size' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Included Accessories',
                        options: [
                            { id: 1, title: 'Bag' },
                            { id: 2, title: 'Strings' },
                            { id: 3, title: 'Strap' }
                        ]
                    }
                ]
            },
            {
                type: 'Percussion Instruments',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Tabla, Drum Set, Dhol)',
                        options: [
                            { id: 1, title: 'Tabla' },
                            { id: 2, title: 'Drum Set' },
                            { id: 3, title: 'Dhol' },
                            { id: 4, title: 'Cajon' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Wood' },
                            { id: 2, title: 'Synthetic' },
                            { id: 3, title: 'Metal' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Size',
                        options: [
                            { id: 1, title: 'Standard' },
                            { id: 2, title: 'Compact' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Pearl' },
                            { id: 2, title: 'Tama' },
                            { id: 3, title: 'Meinl' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
            {
                type: 'Wind Instruments',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Flute, Saxophone, Clarinet)',
                        options: [
                            { id: 1, title: 'Flute' },
                            { id: 2, title: 'Saxophone' },
                            { id: 3, title: 'Clarinet' },
                            { id: 4, title: 'Trumpet' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Key',
                        options: [
                            { id: 1, title: 'C' },
                            { id: 2, title: 'D' },
                            { id: 3, title: 'E' },
                            { id: 4, title: 'Bb' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Yamaha' },
                            { id: 2, title: 'Selmer' },
                            { id: 3, title: 'Jean Paul' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Material',
                        options: [
                            { id: 1, title: 'Wood' },
                            { id: 2, title: 'Metal' },
                            { id: 3, title: 'Plastic' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
            {
                type: 'Keyboards & Pianos',
                filter: [
                    {
                        id: 1,
                        name: 'Number of Keys',
                        options: [
                            { id: 1, title: '49' },
                            { id: 2, title: '61' },
                            { id: 3, title: '76' },
                            { id: 4, title: '88' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Digital/Analog',
                        options: [
                            { id: 1, title: 'Digital' },
                            { id: 2, title: 'Analog' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Casio' },
                            { id: 2, title: 'Yamaha' },
                            { id: 3, title: 'Roland' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Power Source',
                        options: [
                            { id: 1, title: 'Battery' },
                            { id: 2, title: 'Electric' },
                            { id: 3, title: 'USB' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
            {
                type: 'Accessories',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Amplifier, Stand, Case)',
                        options: [
                            { id: 1, title: 'Amplifier' },
                            { id: 2, title: 'Stand' },
                            { id: 3, title: 'Case' },
                            { id: 4, title: 'Tuner' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                            { id: 1, title: 'Marshall' },
                            { id: 2, title: 'Boss' },
                            { id: 3, title: 'Fender' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Compatibility',
                        options: [
                            { id: 1, title: 'Guitar' },
                            { id: 2, title: 'Keyboard' },
                            { id: 3, title: 'Violin' },
                            { id: 4, title: 'Universal' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                            { id: 1, title: 'New' },
                            { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
        ]
    },
    {   id: 13,
        name: 'Office Supplies',
        content: [
            {
                type: 'Stationery',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Pens, Notebooks, Files)',
                        options: [
                        { id: 1, title: 'Pens' },
                        { id: 2, title: 'Notebooks' },
                        { id: 3, title: 'Files' },
                        { id: 4, title: 'Sticky Notes' },
                        { id: 5, title: 'Markers' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                        { id: 1, title: 'Camlin' },
                        { id: 2, title: 'Classmate' },
                        { id: 3, title: 'Faber-Castell' },
                        { id: 4, title: 'Cello' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Color',
                        options: [
                        { id: 1, title: 'Blue' },
                        { id: 2, title: 'Black' },
                        { id: 3, title: 'Red' },
                        { id: 4, title: 'Green' },
                        { id: 5, title: 'Multi-color' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Paper Size (A4, A5)',
                        options: [
                        { id: 1, title: 'A4' },
                        { id: 2, title: 'A5' },
                        { id: 3, title: 'Legal' },
                        { id: 4, title: 'Letter' }
                        ]
                    }
                ]
            },
            {
                type: 'Office Furniture',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Desk, Chair, Cabinet)',
                        options: [
                        { id: 1, title: 'Desk' },
                        { id: 2, title: 'Chair' },
                        { id: 3, title: 'Cabinet' },
                        { id: 4, title: 'Bookshelf' },
                        { id: 5, title: 'Drawer Unit' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Material',
                        options: [
                        { id: 1, title: 'Wood' },
                        { id: 2, title: 'Metal' },
                        { id: 3, title: 'Plastic' },
                        { id: 4, title: 'Glass' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Ergonomic (Yes/No)',
                        options: [
                        { id: 1, title: 'Yes' },
                        { id: 2, title: 'No' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                        { id: 1, title: 'New' },
                        { id: 2, title: 'Used' }
                        ]
                    }
                ]
            }
        ]
    },
    {   id: 14,
        name: 'Pet Supplies',
        content: [
            {
                type: 'Food & Nutrition',
                filter: [
                    {
                        id: 1,
                        name: 'Pet Type (Dog, Cat, Bird)',
                        options: [
                        { id: 1, title: 'Dog' },
                        { id: 2, title: 'Cat' },
                        { id: 3, title: 'Bird' },
                        { id: 4, title: 'Fish' },
                        { id: 5, title: 'Small Mammals' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                        { id: 1, title: 'Pedigree' },
                        { id: 2, title: 'Whiskas' },
                        { id: 3, title: 'Drools' },
                        { id: 4, title: 'Purepet' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Age Group',
                        options: [
                        { id: 1, title: 'Puppy/Kitten' },
                        { id: 2, title: 'Adult' },
                        { id: 3, title: 'Senior' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Quantity',
                        options: [
                        { id: 1, title: '100g' },
                        { id: 2, title: '500g' },
                        { id: 3, title: '1kg' },
                        { id: 4, title: '5kg' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Flavor',
                        options: [
                        { id: 1, title: 'Chicken' },
                        { id: 2, title: 'Fish' },
                        { id: 3, title: 'Lamb' },
                        { id: 4, title: 'Vegetable' }
                        ]
                    }
                ]
            },
            {
                type: 'Grooming Products',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Shampoo, Brush, Clippers)',
                        options: [
                        { id: 1, title: 'Shampoo' },
                        { id: 2, title: 'Brush' },
                        { id: 3, title: 'Clippers' },
                        { id: 4, title: 'Nail Trimmer' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                        { id: 1, title: 'Himalaya' },
                        { id: 2, title: 'Pet Head' },
                        { id: 3, title: 'Wahl' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Scent/Features',
                        options: [
                        { id: 1, title: 'Lavender' },
                        { id: 2, title: 'Aloe Vera' },
                        { id: 3, title: 'Anti-flea' },
                        { id: 4, title: 'Hypoallergenic' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Size',
                        options: [
                        { id: 1, title: 'Small' },
                        { id: 2, title: 'Medium' },
                        { id: 3, title: 'Large' }
                        ]
                    }
                ]
            },
            {
                type: 'Toys & Accessories',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Chew Toy, Leash, Litter Box)',
                        options: [
                        { id: 1, title: 'Chew Toy' },
                        { id: 2, title: 'Leash' },
                        { id: 3, title: 'Litter Box' },
                        { id: 4, title: 'Scratching Post' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Pet Type',
                        options: [
                        { id: 1, title: 'Dog' },
                        { id: 2, title: 'Cat' },
                        { id: 3, title: 'Bird' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Size',
                        options: [
                        { id: 1, title: 'Small' },
                        { id: 2, title: 'Medium' },
                        { id: 3, title: 'Large' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Color',
                        options: [
                        { id: 1, title: 'Red' },
                        { id: 2, title: 'Blue' },
                        { id: 3, title: 'Green' },
                        { id: 4, title: 'Multi-color' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Material',
                        options: [
                        { id: 1, title: 'Rubber' },
                        { id: 2, title: 'Plastic' },
                        { id: 3, title: 'Fabric' }
                        ]
                    }
                ]
            },
            {
                type: 'Health & Safety',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Medicine, Collar, Crate)',
                        options: [
                        { id: 1, title: 'Medicine' },
                        { id: 2, title: 'Collar' },
                        { id: 3, title: 'Crate' },
                        { id: 4, title: 'First Aid Kit' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Pet Type',
                        options: [
                        { id: 1, title: 'Dog' },
                        { id: 2, title: 'Cat' },
                        { id: 3, title: 'Bird' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Dosage/Size',
                        options: [
                        { id: 1, title: 'Small' },
                        { id: 2, title: 'Medium' },
                        { id: 3, title: 'Large' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Brand',
                        options: [
                        { id: 1, title: 'Vetoquinol' },
                        { id: 2, title: 'Virbac' },
                        { id: 3, title: 'Drools' }
                        ]
                    }
                ]
            }
            ]
    },
    {   id: 15,
        name: 'Support Goods',
        content: [
            {
                type: 'Mobility Aids',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Walker, Wheelchair, Cane)',
                        options: [
                        { id: 1, title: 'Walker' },
                        { id: 2, title: 'Wheelchair' },
                        { id: 3, title: 'Cane' },
                        { id: 4, title: 'Crutches' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Weight Capacity',
                        options: [
                        { id: 1, title: 'Up to 100 kg' },
                        { id: 2, title: '100–150 kg' },
                        { id: 3, title: '150+ kg' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Folding (Yes/No)',
                        options: [
                        { id: 1, title: 'Yes' },
                        { id: 2, title: 'No' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Material',
                        options: [
                        { id: 1, title: 'Aluminum' },
                        { id: 2, title: 'Steel' },
                        { id: 3, title: 'Carbon Fiber' }
                        ]
                    },
                    {
                        id: 5,
                        name: 'Condition',
                        options: [
                        { id: 1, title: 'New' },
                        { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
            {
                type: 'Medical Equipment',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Oxygen Cylinder, BP Monitor)',
                        options: [
                        { id: 1, title: 'Oxygen Cylinder' },
                        { id: 2, title: 'BP Monitor' },
                        { id: 3, title: 'Glucometer' },
                        { id: 4, title: 'Nebulizer' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                        { id: 1, title: 'Omron' },
                        { id: 2, title: 'Dr Trust' },
                        { id: 3, title: 'Philips' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Usage Type (Home/Hospital)',
                        options: [
                        { id: 1, title: 'Home' },
                        { id: 2, title: 'Hospital' },
                        { id: 3, title: 'Both' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                        { id: 1, title: 'New' },
                        { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
            {
                type: 'Personal Care',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Massager, Heating Pad)',
                        options: [
                        { id: 1, title: 'Massager' },
                        { id: 2, title: 'Heating Pad' },
                        { id: 3, title: 'Foot Spa' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Brand',
                        options: [
                        { id: 1, title: 'Beurer' },
                        { id: 2, title: 'Lifelong' },
                        { id: 3, title: 'Dr Physio' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Power Source',
                        options: [
                        { id: 1, title: 'Battery' },
                        { id: 2, title: 'Electric' },
                        { id: 3, title: 'Manual' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Condition',
                        options: [
                        { id: 1, title: 'New' },
                        { id: 2, title: 'Used' }
                        ]
                    }
                ]
            },
            {
                type: 'Rehabilitation Tools',
                filter: [
                    {
                        id: 1,
                        name: 'Type (Exercise Band, Therapy Ball)',
                        options: [
                        { id: 1, title: 'Exercise Band' },
                        { id: 2, title: 'Therapy Ball' },
                        { id: 3, title: 'Foam Roller' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Size/Resistance',
                        options: [
                        { id: 1, title: 'Light' },
                        { id: 2, title: 'Medium' },
                        { id: 3, title: 'Heavy' }
                        ]
                    },
                    {
                        id: 3,
                        name: 'Material',
                        options: [
                        { id: 1, title: 'Rubber' },
                        { id: 2, title: 'PVC' },
                        { id: 3, title: 'Foam' }
                        ]
                    },
                    {
                        id: 4,
                        name: 'Intended Use',
                        options: [
                        { id: 1, title: 'Physical Therapy' },
                        { id: 2, title: 'Fitness' },
                        { id: 3, title: 'Post-Surgery' }
                        ]
                    }
                ]
            }
        ]
    },
]