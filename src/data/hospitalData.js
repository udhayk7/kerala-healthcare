export const hospitals = [
  // Thiruvananthapuram District
  {
    id: 1,
    name: "KIMS Hospital",
    rating: 4.8,
    location: {
      address: "Anayara P.O, Thiruvananthapuram, Kerala 695029",
      coordinates: { lat: 8.5241, lng: 76.9366 }
    },
    phone: "tel:+914712447575",
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Thiruvananthapuram",
    subDistrict: "Anayara"
  },
  {
    id: 2,
    name: "Medical College Hospital",
    rating: 4.5,
    location: {
      address: "Medical College Rd, Thiruvananthapuram, Kerala 695011",
      coordinates: { lat: 8.5233, lng: 76.9275 }
    },
    phone: "tel:+914712528386",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Thiruvananthapuram",
    subDistrict: "Medical College"
  },
  {
    id: 3,
    name: "SUT Hospital",
    rating: 4.6,
    location: {
      address: "Pattom, Thiruvananthapuram, Kerala 695004",
      coordinates: { lat: 8.5241, lng: 76.9366 }
    },
    phone: "tel:+914712446140",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Thiruvananthapuram",
    subDistrict: "Pattom"
  },
  {
    id: 4,
    name: "Ananthapuri Hospitals",
    rating: 4.7,
    location: {
      address: "Chackai, Thiruvananthapuram, Kerala 695024",
      coordinates: { lat: 8.4855, lng: 76.9319 }
    },
    phone: "tel:+914712579900",
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Thiruvananthapuram",
    subDistrict: "Chackai"
  },
  {
    id: 5,
    name: "SP Fort Hospital",
    rating: 4.4,
    location: {
      address: "Fort, Thiruvananthapuram, Kerala 695023",
      coordinates: { lat: 8.4855, lng: 76.9319 }
    },
    phone: "tel:+914712471374",
    specialties: ["General Medicine", "Surgery", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Thiruvananthapuram",
    subDistrict: "Fort"
  },
  {
    id: 6,
    name: "Lords Hospital",
    rating: 4.3,
    location: {
      address: "Anayara, Thiruvananthapuram, Kerala 695029",
      coordinates: { lat: 8.5241, lng: 76.9366 }
    },
    phone: "tel:+914712741000",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Thiruvananthapuram",
    subDistrict: "Anayara"
  },
  // Rest of the hospitals...
  {
    id: 11,
    name: "Aster Medcity",
    rating: 4.7,
    location: {
      address: "Kuttisahib Road, Near Kothad Bridge, South Chittoor, Kochi",
      coordinates: { lat: 10.0261, lng: 76.2867 }
    },
    phone: "+91-484-6699999",
    specialties: ["General Medicine", "Oncology", "Cardiology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1538108149393-fbbd81895907"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 12,
    name: "Baby Memorial Hospital",
    rating: 4.6,
    location: {
      address: "Indira Gandhi Road, Kozhikode",
      coordinates: { lat: 11.2588, lng: 75.7804 }
    },
    phone: "+91-495-2723272",
    specialties: ["General Medicine", "Gynecology", "Pediatrics", "ENT"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kozhikode",
    subDistrict: "Kozhikode"
  },
  {
    id: 13,
    name: "Lourdes Hospital",
    rating: 4.5,
    location: {
      address: "Pachalam, Kochi",
      coordinates: { lat: 10.0261, lng: 76.2867 }
    },
    phone: "+91-484-4123456",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 14,
    name: "Ananthapuri Hospitals",
    rating: 4.6,
    location: {
      address: "Chackai, Thiruvananthapuram",
      coordinates: { lat: 8.4855, lng: 76.9320 }
    },
    phone: "+91-471-2579900",
    specialties: ["General Medicine", "Orthopedics", "Neurology", "Cardiology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Thiruvananthapuram",
    subDistrict: "Thiruvananthapuram"
  },
  {
    id: 15,
    name: "Caritas Hospital",
    rating: 4.7,
    location: {
      address: "Thellakom, Kottayam",
      coordinates: { lat: 9.5916, lng: 76.5222 }
    },
    phone: "+91-481-2790025",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kottayam",
    subDistrict: "Kottayam"
  },
  {
    id: 16,
    name: "PVS Memorial Hospital",
    rating: 4.4,
    location: {
      address: "Kaloor, Kochi",
      coordinates: { lat: 9.9816, lng: 76.2999 }
    },
    phone: "+91-484-2345678",
    specialties: ["General Medicine", "Pediatrics", "Gynecology", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 17,
    name: "Believers Medical Center",
    rating: 4.3,
    location: {
      address: "Tiruvalla",
      coordinates: { lat: 9.3850, lng: 76.5764 }
    },
    phone: "+91-469-2634567",
    specialties: ["General Medicine", "ENT", "Orthopedics", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1586534313122-9a9b08ea5ca8"],
    district: "Pathanamthitta",
    subDistrict: "Tiruvalla"
  },
  {
    id: 18,
    name: "Rajagiri Hospital",
    rating: 4.8,
    location: {
      address: "Aluva, Kochi",
      coordinates: { lat: 10.1089, lng: 76.3576 }
    },
    phone: "+91-484-2905000",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1587351021355-a479a299d2f9"],
    district: "Ernakulam",
    subDistrict: "Aluva"
  },
  {
    id: 19,
    name: "Caritas Hospital",
    rating: 4.7,
    location: {
      address: "Thellakom, Kottayam, Kerala 686630",
      coordinates: { lat: 9.6144, lng: 76.5203 }
    },
    phone: "tel:+914812790025",
    specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kottayam",
    subDistrict: "Thellakom"
  },
  {
    id: 20,
    name: "Medical College Hospital Kottayam",
    rating: 4.6,
    location: {
      address: "Medical College Road, Kottayam, Kerala 686008",
      coordinates: { lat: 9.6486, lng: 76.5016 }
    },
    phone: "tel:+914812597284",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kottayam",
    subDistrict: "Medical College"
  },
  {
    id: 21,
    name: "Baselios Medical Mission Hospital",
    rating: 4.5,
    location: {
      address: "Kothanalloor, Kottayam, Kerala 686632",
      coordinates: { lat: 9.6267, lng: 76.5214 }
    },
    phone: "tel:+914812597456",
    specialties: ["General Medicine", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kottayam",
    subDistrict: "Kothanalloor"
  },
  {
    id: 22,
    name: "Indo-American Hospital",
    rating: 4.4,
    location: {
      address: "Vaikom Road, Kottayam, Kerala 686001",
      coordinates: { lat: 9.5916, lng: 76.5222 }
    },
    phone: "tel:+914812563951",
    specialties: ["Cardiology", "Neurology", "General Surgery"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kottayam",
    subDistrict: "Vaikom Road"
  },
  {
    id: 23,
    name: "Kottayam District Hospital",
    rating: 4.3,
    location: {
      address: "Baker Junction, Kottayam, Kerala 686001",
      coordinates: { lat: 9.5899, lng: 76.5214 }
    },
    phone: "tel:+914812562345",
    specialties: ["General Medicine", "Emergency Care", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kottayam",
    subDistrict: "Baker Junction"
  },
  {
    id: 24,
    name: "Mar Sleeva Medicity",
    rating: 4.5,
    location: {
      address: "Chingavanam, Kottayam, Kerala 686531",
      coordinates: { lat: 9.5899, lng: 76.5214 }
    },
    phone: "tel:+914812738200",
    specialties: ["General Medicine", "Cardiology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kottayam",
    subDistrict: "Chingavanam"
  },
  {
    id: 25,
    name: "SUT Hospital",
    rating: 4.5,
    location: {
      address: "Pattom, Thiruvananthapuram, Kerala 695004",
      coordinates: { lat: 8.5241, lng: 76.9366 }
    },
    phone: "+91-471-2446220",
    specialties: ["General Medicine", "Orthopedics", "Gynecology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313164-f67f6dd1959a"],
    district: "Thiruvananthapuram",
    subDistrict: "Thiruvananthapuram"
  },
  {
    id: 26,
    name: "Renai Medicity",
    rating: 4.6,
    location: {
      address: "Palarivattom, Kochi, Kerala 682025",
      coordinates: { lat: 10.0037, lng: 76.3046 }
    },
    phone: "+91-484-2860666",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Gastroenterology"],
    images: ["https://images.unsplash.com/photo-1586534313195-a592d24a6eb2"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 27,
    name: "Elite Mission Hospital",
    rating: 4.3,
    location: {
      address: "Thrissur, Kerala 680007",
      coordinates: { lat: 10.5276, lng: 76.2144 }
    },
    phone: "+91-487-2436100",
    specialties: ["General Medicine", "Orthopedics", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1586534313199-cc53a0968567"],
    district: "Thrissur",
    subDistrict: "Thrissur"
  },
  {
    id: 28,
    name: "Starcare Hospital",
    rating: 4.4,
    location: {
      address: "Kozhikode, Kerala 673001",
      coordinates: { lat: 11.2588, lng: 75.7804 }
    },
    phone: "+91-495-2765222",
    specialties: ["General Medicine", "Pediatrics", "Dermatology", "Psychiatry"],
    images: ["https://images.unsplash.com/photo-1586534313202-e0f2a5b5f2f9"],
    district: "Kozhikode",
    subDistrict: "Kozhikode"
  },
  {
    id: 29,
    name: "Mary Queen Mission Hospital",
    rating: 4.5,
    location: {
      address: "Kanjikode, Palakkad, Kerala 678621",
      coordinates: { lat: 10.7867, lng: 76.7072 }
    },
    phone: "+91-491-2566766",
    specialties: ["General Medicine", "Gynecology", "Pediatrics", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1586534313207-a1baae4abf76"],
    district: "Palakkad",
    subDistrict: "Palakkad"
  },
  {
    id: 30,
    name: "Alappuzha Medical College Hospital",
    rating: 4.4,
    location: {
      address: "Vandanam, Alappuzha",
      coordinates: { lat: 9.5417, lng: 76.3162 }
    },
    phone: "+91-477-2282015",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313217-4ad0d2d5a5ba"],
    district: "Alappuzha",
    subDistrict: "Alappuzha"
  },
  {
    id: 31,
    name: "Malabar Medical College Hospital",
    rating: 4.3,
    location: {
      address: "Modakkallur, Atholi, Kozhikode",
      coordinates: { lat: 11.3352, lng: 75.7452 }
    },
    phone: "+91-495-2742111",
    specialties: ["General Medicine", "Orthopedics", "ENT", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1586534313219-f1c8c5c5d5a9"],
    district: "Kozhikode",
    subDistrict: "Quilandy"
  },
  {
    id: 32,
    name: "District Hospital Kannur",
    rating: 4.2,
    location: {
      address: "Kannur City",
      coordinates: { lat: 11.8745, lng: 75.3704 }
    },
    phone: "+91-497-2700107",
    specialties: ["General Medicine", "Gynecology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313221-7ea4c2c1c6b6"],
    district: "Kannur",
    subDistrict: "Kannur"
  },
  {
    id: 33,
    name: "Taluk Hospital Sulthan Bathery",
    rating: 4.1,
    location: {
      address: "Sulthan Bathery, Wayanad",
      coordinates: { lat: 11.6854, lng: 76.2599 }
    },
    phone: "+91-493-6220223",
    specialties: ["General Medicine", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313223-8c7c62f3a513"],
    district: "Wayanad",
    subDistrict: "Sulthan Bathery"
  },
  {
    id: 34,
    name: "General Hospital Kasaragod",
    rating: 4.2,
    location: {
      address: "Kasaragod Town",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "+91-499-4230223",
    specialties: ["General Medicine", "Orthopedics", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313225-9a4b53bc9c33"],
    district: "Kasaragod",
    subDistrict: "Kasaragod"
  },
  {
    id: 35,
    name: "District Hospital Malappuram",
    rating: 4.3,
    location: {
      address: "Malappuram Town",
      coordinates: { lat: 11.0477, lng: 76.0730 }
    },
    phone: "+91-483-2734324",
    specialties: ["General Medicine", "Gynecology", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313227-7ea4c2c1c6b8"],
    district: "Malappuram",
    subDistrict: "Malappuram"
  },
  {
    id: 36,
    name: "Taluk Hospital Perinthalmanna",
    rating: 4.4,
    location: {
      address: "Perinthalmanna",
      coordinates: { lat: 10.9766, lng: 76.2270 }
    },
    phone: "+91-493-3227445",
    specialties: ["General Medicine", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1586534313229-7ea4c2c1c6ba"],
    district: "Malappuram",
    subDistrict: "Perinthalmanna"
  },
  {
    id: 37,
    name: "General Hospital Thalassery",
    rating: 4.3,
    location: {
      address: "Thalassery Town",
      coordinates: { lat: 11.7490, lng: 75.4890 }
    },
    phone: "+91-490-2344223",
    specialties: ["General Medicine", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313231-7ea4c2c1c6bc"],
    district: "Kannur",
    subDistrict: "Thalassery"
  },
  {
    id: 38,
    name: "Taluk Hospital Mananthavady",
    rating: 4.2,
    location: {
      address: "Mananthavady, Wayanad",
      coordinates: { lat: 11.8009, lng: 76.0027 }
    },
    phone: "+91-493-6202445",
    specialties: ["General Medicine", "Gynecology", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313233-8c7c62f3a513"],
    district: "Wayanad",
    subDistrict: "Mananthavady"
  },
  {
    id: 39,
    name: "District Hospital Kollam",
    rating: 4.4,
    location: {
      address: "Kollam City",
      coordinates: { lat: 8.8932, lng: 76.6141 }
    },
    phone: "+91-474-2742114",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313235-7ea4c2c1c6c0"],
    district: "Kollam",
    subDistrict: "Kollam"
  },
  // Kollam District
  {
    id: 7,
    name: "Bishop Benziger Hospital",
    rating: 4.6,
    location: {
      address: "Beach Road, Kollam, Kerala 691001",
      coordinates: { lat: 8.8932, lng: 76.5942 }
    },
    phone: "tel:+91-474-2765214",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Cardiology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kollam",
    subDistrict: "Beach Road"
  },
  {
    id: 8,
    name: "Travancore Medicity",
    rating: 4.5,
    location: {
      address: "Kollam Bypass, Kollam, Kerala 691016",
      coordinates: { lat: 8.8932, lng: 76.5942 }
    },
    phone: "tel:+91-474-2742222",
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kollam",
    subDistrict: "Bypass"
  },
  {
    id: 9,
    name: "N.S Memorial Institute",
    rating: 4.4,
    location: {
      address: "Thattamala, Kollam, Kerala 691020",
      coordinates: { lat: 8.8854, lng: 76.6189 }
    },
    phone: "tel:+91-474-2750362",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kollam",
    subDistrict: "Thattamala"
  },
  {
    id: 10,
    name: "Upasana Hospital Kollam",
    rating: 4.3,
    location: {
      address: "High School Junction, Kollam, Kerala 691001",
      coordinates: { lat: 8.8867, lng: 76.5943 }
    },
    phone: "tel:+91-474-2764446",
    specialties: ["General Medicine", "Surgery", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kollam",
    subDistrict: "High School Junction"
  },
  {
    id: 11,
    name: "Meditrina Hospital",
    rating: 4.5,
    location: {
      address: "Kadappakada, Kollam, Kerala 691008",
      coordinates: { lat: 8.8867, lng: 76.5943 }
    },
    phone: "tel:+91-474-2747475",
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kollam",
    subDistrict: "Kadappakada"
  },
  {
    id: 12,
    name: "PRS Hospital",
    rating: 4.4,
    location: {
      address: "Killipalam, Kollam, Kerala 691004",
      coordinates: { lat: 8.8867, lng: 76.5943 }
    },
    phone: "tel:+91-474-2730021",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kollam",
    subDistrict: "Killipalam"
  },
  // Kozhikode District
  {
    id: 13,
    name: "Aster MIMS",
    rating: 4.8,
    location: {
      address: "Mini Bypass Road, Govindapuram, Kozhikode, Kerala 673016",
      coordinates: { lat: 11.2587, lng: 75.7849 }
    },
    phone: "tel:+914952322004",
    specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kozhikode",
    subDistrict: "Govindapuram"
  },
  {
    id: 14,
    name: "Baby Memorial Hospital",
    rating: 4.7,
    location: {
      address: "Indira Gandhi Road, Kozhikode, Kerala 673004",
      coordinates: { lat: 11.2729, lng: 75.7782 }
    },
    phone: "tel:+914952775777",
    specialties: ["Pediatrics", "Gynecology", "General Surgery"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kozhikode",
    subDistrict: "Indira Gandhi Road"
  },
  {
    id: 15,
    name: "Meitra Hospital",
    rating: 4.6,
    location: {
      address: "Thondayad, Kozhikode, Kerala 673017",
      coordinates: { lat: 11.2729, lng: 75.7782 }
    },
    phone: "tel:+914952088888",
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kozhikode",
    subDistrict: "Thondayad"
  },
  {
    id: 16,
    name: "PVS Hospital",
    rating: 4.5,
    location: {
      address: "Railway Station Road, Kozhikode, Kerala 673002",
      coordinates: { lat: 11.2502, lng: 75.7748 }
    },
    phone: "tel:+914952723272",
    specialties: ["General Medicine", "Emergency Care", "Surgery"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kozhikode",
    subDistrict: "Railway Station Road"
  },
  {
    id: 17,
    name: "Starcare Hospital",
    rating: 4.4,
    location: {
      address: "Malaparamba, Kozhikode, Kerala 673009",
      coordinates: { lat: 11.2729, lng: 75.7782 }
    },
    phone: "tel:+914952337733",
    specialties: ["General Medicine", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kozhikode",
    subDistrict: "Malaparamba"
  },
  {
    id: 18,
    name: "Metro International Hospital",
    rating: 4.3,
    location: {
      address: "Puthiyara, Kozhikode, Kerala 673004",
      coordinates: { lat: 11.2587, lng: 75.7849 }
    },
    phone: "tel:+914952766666",
    specialties: ["General Medicine", "Surgery", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kozhikode",
    subDistrict: "Puthiyara"
  },
  // Kottayam District
  {
    id: 60,
    name: "Caritas Hospital",
    rating: 4.7,
    location: {
      address: "Thellakom, Kottayam, Kerala 686630",
      coordinates: { lat: 9.5916, lng: 76.5222 }
    },
    phone: "+91-481-2790025",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kottayam",
    subDistrict: "Kottayam"
  },
  {
    id: 61,
    name: "Medical College Hospital Kottayam",
    rating: 4.5,
    location: {
      address: "Medical College Road, Gandhinagar, Kottayam, Kerala 686008",
      coordinates: { lat: 9.6037, lng: 76.5216 }
    },
    phone: "+91-481-2597284",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Psychiatry"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kottayam",
    subDistrict: "Kottayam"
  },
  {
    id: 62,
    name: "Baselios Medical Mission Hospital",
    rating: 4.6,
    location: {
      address: "Kothanalloor, Kottayam, Kerala 686632",
      coordinates: { lat: 9.6148, lng: 76.5478 }
    },
    phone: "+91-481-2597285",
    specialties: ["General Medicine", "Orthopedics", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Kottayam",
    subDistrict: "Kottayam"
  },
  {
    id: 63,
    name: "Mar Sleeva Medicity",
    rating: 4.4,
    location: {
      address: "Cherpunkal, Kottayam, Kerala 686584",
      coordinates: { lat: 9.6523, lng: 76.5478 }
    },
    phone: "+91-481-2597286",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Gastroenterology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Kottayam",
    subDistrict: "Pala"
  },
  {
    id: 64,
    name: "Marian Medical Centre",
    rating: 4.3,
    location: {
      address: "Pala, Kottayam, Kerala 686575",
      coordinates: { lat: 9.7148, lng: 76.6827 }
    },
    phone: "+91-482-2212632",
    specialties: ["General Medicine", "Gynecology", "Pediatrics", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kottayam",
    subDistrict: "Pala"
  },
  {
    id: 65,
    name: "Alphonsa Hospital",
    rating: 4.2,
    location: {
      address: "Bharananganam, Kottayam, Kerala 686578",
      coordinates: { lat: 9.7234, lng: 76.7234 }
    },
    phone: "+91-482-2264444",
    specialties: ["General Medicine", "Surgery", "Orthopedics", "Psychiatry"],
    images: ["https://images.unsplash.com/photo-1586534313132-9a9b08ea5ca8"],
    district: "Kottayam",
    subDistrict: "Pala"
  },
  {
    id: 66,
    name: "St. Thomas Hospital",
    rating: 4.5,
    location: {
      address: "Chethipuzha, Kottayam, Kerala 686104",
      coordinates: { lat: 9.5937, lng: 76.5216 }
    },
    phone: "+91-481-2597287",
    specialties: ["General Medicine", "Cardiology", "Oncology", "Nephrology"],
    images: ["https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6"],
    district: "Kottayam",
    subDistrict: "Kottayam"
  },
  {
    id: 67,
    name: "Pushpagiri Medical College Hospital",
    rating: 4.6,
    location: {
      address: "Thiruvalla, Kottayam, Kerala 689101",
      coordinates: { lat: 9.3833, lng: 76.5667 }
    },
    phone: "+91-469-2733761",
    specialties: ["General Medicine", "Neurology", "Urology", "Rheumatology"],
    images: ["https://images.unsplash.com/photo-1586773860418-d37222d8fce3"],
    district: "Kottayam",
    subDistrict: "Thiruvalla"
  },
  {
    id: 68,
    name: "Holy Family Hospital",
    rating: 4.3,
    location: {
      address: "Muttuchira, Kottayam, Kerala 686613",
      coordinates: { lat: 9.6827, lng: 76.5827 }
    },
    phone: "+91-481-2597288",
    specialties: ["General Medicine", "ENT", "Ophthalmology", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1632833239869-a37e3a5806d2"],
    district: "Kottayam",
    subDistrict: "Kottayam"
  },
  {
    id: 69,
    name: "Kottayam District Hospital",
    rating: 4.2,
    location: {
      address: "Baker Junction, Kottayam, Kerala 686001",
      coordinates: { lat: 9.5916, lng: 76.5216 }
    },
    phone: "+91-481-2562674",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kottayam",
    subDistrict: "Kottayam"
  },
  // Ernakulam District
  {
    id: 70,
    name: "Amrita Institute of Medical Sciences",
    rating: 4.9,
    location: {
      address: "Ponekkara, Kochi, Kerala 682041",
      coordinates: { lat: 10.0358, lng: 76.3189 }
    },
    phone: "tel:+914842851234",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 71,
    name: "Aster Medcity",
    rating: 4.8,
    location: {
      address: "Kuttisahib Road, South Chittoor, Kochi, Kerala 682027",
      coordinates: { lat: 10.0261, lng: 76.2867 }
    },
    phone: "tel:+914846699999",
    specialties: ["General Medicine", "Cardiology", "Neurosurgery", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 72,
    name: "Rajagiri Hospital",
    rating: 4.7,
    location: {
      address: "Chunangamvely, Aluva, Kerala 683112",
      coordinates: { lat: 10.1089, lng: 76.3576 }
    },
    phone: "tel:+914842905000",
    specialties: ["General Medicine", "Orthopedics", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Ernakulam",
    subDistrict: "Aluva"
  },
  {
    id: 73,
    name: "Lisie Hospital",
    rating: 4.6,
    location: {
      address: "Kaloor, Kochi, Kerala 682018",
      coordinates: { lat: 9.9912, lng: 76.2867 }
    },
    phone: "tel:+914842402044",
    specialties: ["General Medicine", "Cardiology", "Nephrology", "Gastroenterology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 74,
    name: "Medical Trust Hospital",
    rating: 4.5,
    location: {
      address: "M.G. Road, Kochi, Kerala 682016",
      coordinates: { lat: 9.9778, lng: 76.2778 }
    },
    phone: "tel:+914842358001",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 75,
    name: "Sunrise Hospital",
    rating: 4.4,
    location: {
      address: "Seaport-Airport Road, Kakkanad, Kerala 682030",
      coordinates: { lat: 10.0159, lng: 76.3419 }
    },
    phone: "tel:+914842428120",
    specialties: ["General Medicine", "Orthopedics", "Urology", "Psychiatry"],
    images: ["https://images.unsplash.com/photo-1586534313132-9a9b08ea5ca8"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 76,
    name: "Lakeshore Hospital",
    rating: 4.7,
    location: {
      address: "NH 47 Bypass, Maradu, Kochi, Kerala 682040",
      coordinates: { lat: 9.9497, lng: 76.3219 }
    },
    phone: "tel:+914842701032",
    specialties: ["General Medicine", "Cardiology", "Oncology", "Rheumatology"],
    images: ["https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 77,
    name: "Ernakulam Medical Centre",
    rating: 4.3,
    location: {
      address: "Palarivattom, Kochi, Kerala 682025",
      coordinates: { lat: 10.0037, lng: 76.3046 }
    },
    phone: "tel:+914842342215",
    specialties: ["General Medicine", "ENT", "Ophthalmology", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1586773860418-d37222d8fce3"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 78,
    name: "VPS Lakeshore Hospital",
    rating: 4.6,
    location: {
      address: "Nettoor, Kochi, Kerala 682040",
      coordinates: { lat: 9.9497, lng: 76.3219 }
    },
    phone: "tel:+914842525288",
    specialties: ["General Medicine", "Neurology", "Cardiology", "Pulmonology"],
    images: ["https://images.unsplash.com/photo-1632833239869-a37e3a5806d2"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  {
    id: 79,
    name: "Renai Medicity",
    rating: 4.5,
    location: {
      address: "Palarivattom, Kochi, Kerala 682025",
      coordinates: { lat: 10.0037, lng: 76.3046 }
    },
    phone: "tel:+914842344224",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Ernakulam",
    subDistrict: "Kochi"
  },
  // Thrissur District
  {
    id: 80,
    name: "Jubilee Mission Medical College",
    rating: 4.7,
    location: {
      address: "East Fort, Thrissur, Kerala 680005",
      coordinates: { lat: 10.5276, lng: 76.2144 }
    },
    phone: "tel:+914872432200",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Thrissur",
    subDistrict: "East Fort"
  },
  {
    id: 81,
    name: "Amala Institute of Medical Sciences",
    rating: 4.6,
    location: {
      address: "Amala Nagar, Thrissur, Kerala 680555",
      coordinates: { lat: 10.5391, lng: 76.2208 }
    },
    phone: "tel:+914872304000",
    specialties: ["General Medicine", "Cardiology", "Neurosurgery", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Thrissur",
    subDistrict: "Amala Nagar"
  },
  {
    id: 82,
    name: "West Fort Hi-Tech Hospital",
    rating: 4.5,
    location: {
      address: "West Fort, Thrissur, Kerala 680004",
      coordinates: { lat: 10.5267, lng: 76.2097 }
    },
    phone: "tel:+914872381000",
    specialties: ["General Medicine", "Orthopedics", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Thrissur",
    subDistrict: "West Fort"
  },
  {
    id: 83,
    name: "Mother Hospital",
    rating: 4.4,
    location: {
      address: "Pullazhi, Thrissur, Kerala 680012",
      coordinates: { lat: 10.5430, lng: 76.2087 }
    },
    phone: "tel:+914872557938",
    specialties: ["General Medicine", "Cardiology", "Nephrology", "Gastroenterology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Thrissur",
    subDistrict: "Pullazhi"
  },
  {
    id: 84,
    name: "Elite Mission Hospital",
    rating: 4.3,
    location: {
      address: "Koorkenchery, Thrissur, Kerala 680007",
      coordinates: { lat: 10.5548, lng: 76.2097 }
    },
    phone: "tel:+914872436000",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Thrissur",
    subDistrict: "Koorkenchery"
  },
  {
    id: 85,
    name: "Daya General Hospital",
    rating: 4.5,
    location: {
      address: "Thrissur Town, Kerala 680001",
      coordinates: { lat: 10.5276, lng: 76.2144 }
    },
    phone: "tel:+914872421514",
    specialties: ["General Medicine", "Cardiology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6"],
    district: "Thrissur",
    subDistrict: "Thrissur Town"
  },
  {
    id: 86,
    name: "Aswini Hospital",
    rating: 4.4,
    location: {
      address: "Nadathara, Thrissur, Kerala 680751",
      coordinates: { lat: 10.4955, lng: 76.2144 }
    },
    phone: "+91-487-2443300",
    specialties: ["General Medicine", "Cardiology", "Oncology", "Rheumatology"],
    images: ["https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6"],
    district: "Thrissur",
    subDistrict: "Thrissur"
  },
  {
    id: 87,
    name: "Vaidyaratnam Ayurveda College Hospital",
    rating: 4.4,
    location: {
      address: "Ollur, Thrissur, Kerala 680010",
      coordinates: { lat: 10.4755, lng: 76.2144 }
    },
    phone: "+91-487-2358900",
    specialties: ["Ayurveda", "Panchakarma", "Natural Medicine", "Yoga Therapy"],
    images: ["https://images.unsplash.com/photo-1586773860418-d37222d8fce3"],
    district: "Thrissur",
    subDistrict: "Thrissur"
  },
  {
    id: 88,
    name: "Lakshmi Hospital",
    rating: 4.3,
    location: {
      address: "Palakkad Road, Thrissur, Kerala 680001",
      coordinates: { lat: 10.5276, lng: 76.2044 }
    },
    phone: "+91-487-2445566",
    specialties: ["General Medicine", "ENT", "Ophthalmology", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1632833239869-a37e3a5806d2"],
    district: "Thrissur",
    subDistrict: "Thrissur"
  },
  {
    id: 89,
    name: "District Hospital Thrissur",
    rating: 4.1,
    location: {
      address: "Medical College Road, Thrissur, Kerala 680596",
      coordinates: { lat: 10.5276, lng: 76.2244 }
    },
    phone: "+91-487-2322100",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Thrissur",
    subDistrict: "Thrissur"
  },
  // Palakkad District
  {
    id: 90,
    name: "District Hospital Palakkad",
    rating: 4.5,
    location: {
      address: "District Hospital Junction, Palakkad, Kerala 678001",
      coordinates: { lat: 10.7867, lng: 76.6548 }
    },
    phone: "tel:+914912522260",
    specialties: ["General Medicine", "Surgery", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Palakkad",
    subDistrict: "Palakkad Town"
  },
  {
    id: 91,
    name: "Thangam Hospital",
    rating: 4.6,
    location: {
      address: "Chandranagar, Palakkad, Kerala 678007",
      coordinates: { lat: 10.7751, lng: 76.6568 }
    },
    phone: "tel:+914912522444",
    specialties: ["Cardiology", "Neurology", "General Surgery"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Palakkad",
    subDistrict: "Chandranagar"
  },
  {
    id: 92,
    name: "PK Das Institute of Medical Sciences",
    rating: 4.7,
    location: {
      address: "Vaniamkulam, Ottapalam, Kerala 679522",
      coordinates: { lat: 10.7726, lng: 76.3789 }
    },
    phone: "tel:+914662344500",
    specialties: ["General Medicine", "Orthopedics", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Palakkad",
    subDistrict: "Ottapalam"
  },
  {
    id: 93,
    name: "Karuna Hospital",
    rating: 4.4,
    location: {
      address: "Chittoor Road, Palakkad, Kerala 678001",
      coordinates: { lat: 10.7867, lng: 76.6548 }
    },
    phone: "tel:+914912535555",
    specialties: ["General Medicine", "ENT", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Palakkad",
    subDistrict: "Chittoor Road"
  },
  {
    id: 94,
    name: "Ahalia Foundation Eye Hospital",
    rating: 4.8,
    location: {
      address: "Kozhipara, Palakkad, Kerala 678557",
      coordinates: { lat: 10.8219, lng: 76.7250 }
    },
    phone: "tel:+914923225401",
    specialties: ["Ophthalmology", "General Medicine", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Palakkad",
    subDistrict: "Kozhipara"
  },
  {
    id: 95,
    name: "Lakshmi Hospital",
    rating: 4.5,
    location: {
      address: "Stadium Road, Palakkad, Kerala 678001",
      coordinates: { lat: 10.7751, lng: 76.6568 }
    },
    phone: "tel:+914912520270",
    specialties: ["General Medicine", "Cardiology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Palakkad",
    subDistrict: "Stadium Road"
  },
  {
    id: 96,
    name: "Ottapalam Cooperative Hospital",
    rating: 4.2,
    location: {
      address: "Hospital Road, Ottapalam, Kerala 679101",
      coordinates: { lat: 10.7751, lng: 76.3789 }
    },
    phone: "+91-466-2244500",
    specialties: ["General Medicine", "Surgery", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6"],
    district: "Palakkad",
    subDistrict: "Ottapalam"
  },
  {
    id: 97,
    name: "Welcare Hospital",
    rating: 4.4,
    location: {
      address: "Chandranagar, Palakkad, Kerala 678007",
      coordinates: { lat: 10.7845, lng: 76.6548 }
    },
    phone: "+91-491-2527999",
    specialties: ["General Medicine", "Cardiology", "Nephrology", "Urology"],
    images: ["https://images.unsplash.com/photo-1586773860418-d37222d8fce3"],
    district: "Palakkad",
    subDistrict: "Palakkad"
  },
  {
    id: 98,
    name: "Shanti Hospital",
    rating: 4.3,
    location: {
      address: "Fort Road, Palakkad, Kerala 678001",
      coordinates: { lat: 10.7867, lng: 76.6542 }
    },
    phone: "+91-491-2520130",
    specialties: ["General Medicine", "Dermatology", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1632833239869-a37e3a5806d2"],
    district: "Palakkad",
    subDistrict: "Palakkad"
  },
  {
    id: 99,
    name: "Mercy Hospital",
    rating: 4.2,
    location: {
      address: "Mannarkad Road, Palakkad, Kerala 678582",
      coordinates: { lat: 10.7751, lng: 76.6511 }
    },
    phone: "+91-491-2522280",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Palakkad",
    subDistrict: "Palakkad"
  },
  // Malappuram District
  {
    id: 100,
    name: "KIMS Al-Shifa Hospital",
    rating: 4.7,
    location: {
      address: "Perinthalmanna, Malappuram, Kerala 679322",
      coordinates: { lat: 10.9766, lng: 76.2269 }
    },
    phone: "+91-493-3227000",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Malappuram",
    subDistrict: "Perinthalmanna"
  },
  {
    id: 101,
    name: "Moulana Hospital",
    rating: 4.5,
    location: {
      address: "Perinthalmanna, Malappuram, Kerala 679322",
      coordinates: { lat: 10.9766, lng: 76.2269 }
    },
    phone: "+91-493-3225555",
    specialties: ["General Medicine", "Cardiology", "Neurosurgery", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Malappuram",
    subDistrict: "Perinthalmanna"
  },
  {
    id: 102,
    name: "MES Medical College Hospital",
    rating: 4.4,
    location: {
      address: "Palachode, Perinthalmanna, Kerala 679338",
      coordinates: { lat: 10.9858, lng: 76.2269 }
    },
    phone: "+91-493-3298300",
    specialties: ["General Medicine", "Orthopedics", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Malappuram",
    subDistrict: "Perinthalmanna"
  },
  {
    id: 103,
    name: "Educare Institute of Dental Sciences",
    rating: 4.3,
    location: {
      address: "Chattiparamba, Malappuram, Kerala 676504",
      coordinates: { lat: 11.0413, lng: 76.0734 }
    },
    phone: "+91-483-2708353",
    specialties: ["Dental", "Oral Surgery", "Orthodontics", "Periodontics"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Malappuram",
    subDistrict: "Malappuram"
  },
  {
    id: 104,
    name: "Al Shifa Hospital Tirur",
    rating: 4.5,
    location: {
      address: "Tirur, Malappuram, Kerala 676101",
      coordinates: { lat: 10.9146, lng: 75.9219 }
    },
    phone: "+91-494-2422900",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Malappuram",
    subDistrict: "Tirur"
  },
  {
    id: 105,
    name: "Manjeri Medical College Hospital",
    rating: 4.4,
    location: {
      address: "Manjeri, Malappuram, Kerala 676121",
      coordinates: { lat: 11.1200, lng: 76.1194 }
    },
    phone: "+91-483-2766056",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Malappuram",
    subDistrict: "Manjeri"
  },
  {
    id: 106,
    name: "PVS Hospital",
    rating: 4.3,
    location: {
      address: "Calicut Road, Malappuram, Kerala 676505",
      coordinates: { lat: 11.0413, lng: 76.0734 }
    },
    phone: "+91-483-2734100",
    specialties: ["General Medicine", "ENT", "Dermatology", "Psychiatry"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Malappuram",
    subDistrict: "Malappuram"
  },
  {
    id: 107,
    name: "Santhi Hospital",
    rating: 4.2,
    location: {
      address: "Kottakkal, Malappuram, Kerala 676503",
      coordinates: { lat: 10.9825, lng: 76.0234 }
    },
    phone: "+91-483-2742222",
    specialties: ["General Medicine", "Surgery", "Gynecology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Malappuram",
    subDistrict: "Kottakkal"
  },
  {
    id: 108,
    name: "Kottakkal Arya Vaidya Sala",
    rating: 4.8,
    location: {
      address: "Kottakkal, Malappuram, Kerala 676503",
      coordinates: { lat: 10.9825, lng: 76.0234 }
    },
    phone: "+91-483-2742216",
    specialties: ["Ayurveda", "Panchakarma", "Rejuvenation Therapy", "Traditional Medicine"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Malappuram",
    subDistrict: "Kottakkal"
  },
  {
    id: 109,
    name: "District Hospital Malappuram",
    rating: 4.1,
    location: {
      address: "Up Hill, Malappuram, Kerala 676505",
      coordinates: { lat: 11.0413, lng: 76.0734 }
    },
    phone: "+91-483-2734200",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Malappuram",
    subDistrict: "Malappuram"
  },
  // Wayanad District
  {
    id: 110,
    name: "District Hospital Mananthavady",
    rating: 4.5,
    location: {
      address: "Mananthavady, Wayanad, Kerala 670645",
      coordinates: { lat: 11.8018, lng: 76.0044 }
    },
    phone: "tel:+914935240240",
    specialties: ["General Medicine", "Emergency Care", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Wayanad",
    subDistrict: "Mananthavady"
  },
  {
    id: 111,
    name: "DM WIMS Medical College Hospital",
    rating: 4.7,
    location: {
      address: "Meppadi, Wayanad, Kerala 673577",
      coordinates: { lat: 11.5384, lng: 76.1331 }
    },
    phone: "tel:+914936287000",
    specialties: ["General Medicine", "Cardiology", "Neurology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Wayanad",
    subDistrict: "Meppadi"
  },
  {
    id: 112,
    name: "Government Medical College Wayanad",
    rating: 4.6,
    location: {
      address: "Kalpetta, Wayanad, Kerala 673121",
      coordinates: { lat: 11.6854, lng: 76.0832 }
    },
    phone: "tel:+914936204000",
    specialties: ["General Medicine", "Surgery", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Wayanad",
    subDistrict: "Kalpetta"
  },
  {
    id: 113,
    name: "Mary Queens Mission Hospital",
    rating: 4.4,
    location: {
      address: "Kalpetta, Wayanad, Kerala 673121",
      coordinates: { lat: 11.6854, lng: 76.0832 }
    },
    phone: "tel:+914936202003",
    specialties: ["General Medicine", "Gynecology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Wayanad",
    subDistrict: "Kalpetta"
  },
  {
    id: 114,
    name: "Sunrise Hospital",
    rating: 4.5,
    location: {
      address: "Sultan Bathery, Wayanad, Kerala 673592",
      coordinates: { lat: 11.6615, lng: 76.2598 }
    },
    phone: "tel:+914936220280",
    specialties: ["General Medicine", "Emergency Care", "Surgery"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Wayanad",
    subDistrict: "Sultan Bathery"
  },
  {
    id: 115,
    name: "Leo Hospital",
    rating: 4.3,
    location: {
      address: "Kalpetta, Wayanad, Kerala 673121",
      coordinates: { lat: 11.6854, lng: 76.0832 }
    },
    phone: "tel:+914936202266",
    specialties: ["General Medicine", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Wayanad",
    subDistrict: "Kalpetta"
  },
  // Kannur District
  {
    id: 49,
    name: "AKG Hospital",
    rating: 4.6,
    location: {
      address: "Talap, Kannur, Kerala 670002",
      coordinates: { lat: 11.8745, lng: 75.3704 }
    },
    phone: "tel:+914972749900",
    specialties: ["Cardiology", "Neurology", "General Surgery"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kannur",
    subDistrict: "Talap"
  },
  {
    id: 50,
    name: "District Hospital Kannur",
    rating: 4.4,
    location: {
      address: "Fort Road, Kannur, Kerala 670001",
      coordinates: { lat: 11.8676, lng: 75.3737 }
    },
    phone: "tel:+914972700107",
    specialties: ["General Medicine", "Emergency Care", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kannur",
    subDistrict: "Fort Road"
  },
  {
    id: 51,
    name: "Kannur Medical College",
    rating: 4.7,
    location: {
      address: "Anjarakandy, Kannur, Kerala 670612",
      coordinates: { lat: 11.9307, lng: 75.3550 }
    },
    phone: "tel:+914972855400",
    specialties: ["General Medicine", "Surgery", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kannur",
    subDistrict: "Anjarakandy"
  },
  {
    id: 52,
    name: "Baby Memorial Hospital Kannur",
    rating: 4.5,
    location: {
      address: "South Bazar, Kannur, Kerala 670002",
      coordinates: { lat: 11.8745, lng: 75.3704 }
    },
    phone: "tel:+914972764031",
    specialties: ["General Medicine", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kannur",
    subDistrict: "South Bazar"
  },
  {
    id: 53,
    name: "Aster MIMS Kannur",
    rating: 4.8,
    location: {
      address: "Chakkarakal Road, Kannur, Kerala 670017",
      coordinates: { lat: 11.8676, lng: 75.3737 }
    },
    phone: "tel:+914972799700",
    specialties: ["Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kannur",
    subDistrict: "Chakkarakal"
  },
  {
    id: 54,
    name: "Lourdes Hospital",
    rating: 4.5,
    location: {
      address: "Taliparamba, Kannur, Kerala 670141",
      coordinates: { lat: 12.0377, lng: 75.3566 }
    },
    phone: "tel:+914602203000",
    specialties: ["General Medicine", "Emergency Care", "Surgery"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kannur",
    subDistrict: "Taliparamba"
  },
  {
    id: 120,
    name: "Kannur District Hospital",
    rating: 4.3,
    location: {
      address: "Fort Road, Kannur, Kerala 670001",
      coordinates: { lat: 11.8745, lng: 75.3704 }
    },
    phone: "+91-497-2700107",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kannur",
    subDistrict: "Kannur"
  },
  {
    id: 121,
    name: "Government Medical College Kannur",
    rating: 4.6,
    location: {
      address: "Pariyaram, Kannur, Kerala 670503",
      coordinates: { lat: 12.0352, lng: 75.2535 }
    },
    phone: "+91-497-2808111",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kannur",
    subDistrict: "Pariyaram"
  },
  {
    id: 122,
    name: "AKG Hospital",
    rating: 4.5,
    location: {
      address: "Thalassery, Kannur, Kerala 670101",
      coordinates: { lat: 11.7483, lng: 75.4928 }
    },
    phone: "+91-490-2344000",
    specialties: ["General Medicine", "Cardiology", "Neurosurgery", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Kannur",
    subDistrict: "Thalassery"
  },
  {
    id: 123,
    name: "Aster MIMS",
    rating: 4.7,
    location: {
      address: "Chala, Kannur, Kerala 670002",
      coordinates: { lat: 11.8745, lng: 75.3704 }
    },
    phone: "+91-497-2766666",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Gastroenterology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Kannur",
    subDistrict: "Kannur"
  },
  {
    id: 124,
    name: "Thalassery Co-operative Hospital",
    rating: 4.2,
    location: {
      address: "Co-operative Hospital Road, Thalassery, Kerala 670101",
      coordinates: { lat: 11.7483, lng: 75.4928 }
    },
    phone: "+91-490-2322866",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kannur",
    subDistrict: "Thalassery"
  },
  {
    id: 125,
    name: "Baby Memorial Hospital",
    rating: 4.4,
    location: {
      address: "Payyanur, Kannur, Kerala 670307",
      coordinates: { lat: 12.1088, lng: 75.2022 }
    },
    phone: "+91-498-4200000",
    specialties: ["General Medicine", "Pediatrics", "Neonatology", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kannur",
    subDistrict: "Payyanur"
  },
  {
    id: 126,
    name: "Lourdes Hospital",
    rating: 4.3,
    location: {
      address: "Mattannur, Kannur, Kerala 670702",
      coordinates: { lat: 11.9300, lng: 75.5718 }
    },
    phone: "+91-490-2474444",
    specialties: ["General Medicine", "Surgery", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kannur",
    subDistrict: "Mattannur"
  },
  {
    id: 127,
    name: "Iritty Taluk Hospital",
    rating: 4.1,
    location: {
      address: "Iritty, Kannur, Kerala 670703",
      coordinates: { lat: 11.9891, lng: 75.6413 }
    },
    phone: "+91-490-2493333",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Kannur",
    subDistrict: "Iritty"
  },
  {
    id: 128,
    name: "Aswini Hospital",
    rating: 4.4,
    location: {
      address: "South Bazar, Kannur, Kerala 670002",
      coordinates: { lat: 11.8745, lng: 75.3704 }
    },
    phone: "+91-497-2764444",
    specialties: ["General Medicine", "Orthopedics", "Neurology", "Cardiology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Kannur",
    subDistrict: "Kannur"
  },
  {
    id: 129,
    name: "Santhwana Hospital",
    rating: 4.2,
    location: {
      address: "Dharmasala, Kannur, Kerala 670017",
      coordinates: { lat: 11.8745, lng: 75.3704 }
    },
    phone: "+91-497-2780000",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kannur",
    subDistrict: "Kannur"
  },
  // Kasaragod District
  {
    id: 116,
    name: "General Hospital Kasaragod",
    rating: 4.5,
    location: {
      address: "Vidyanagar, Kasaragod, Kerala 671123",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "tel:+914994230223",
    specialties: ["General Medicine", "Emergency Care", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kasaragod",
    subDistrict: "Vidyanagar"
  },
  {
    id: 117,
    name: "District Hospital Kanhangad",
    rating: 4.4,
    location: {
      address: "Kanhangad, Kasaragod, Kerala 671315",
      coordinates: { lat: 12.2974, lng: 75.0974 }
    },
    phone: "tel:+914672200266",
    specialties: ["General Medicine", "Surgery", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kasaragod",
    subDistrict: "Kanhangad"
  },
  {
    id: 118,
    name: "Unity Hospital",
    rating: 4.6,
    location: {
      address: "Mangalpady, Kasaragod, Kerala 671124",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "tel:+914994232100",
    specialties: ["Cardiology", "Neurology", "General Medicine"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kasaragod",
    subDistrict: "Mangalpady"
  },
  {
    id: 119,
    name: "Malik Deenar Hospital",
    rating: 4.7,
    location: {
      address: "Thalangara, Kasaragod, Kerala 671121",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "tel:+914994230666",
    specialties: ["General Medicine", "Gynecology", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kasaragod",
    subDistrict: "Thalangara"
  },
  {
    id: 120,
    name: "Central Hospital",
    rating: 4.3,
    location: {
      address: "Nileshwar, Kasaragod, Kerala 671314",
      coordinates: { lat: 12.2586, lng: 75.1353 }
    },
    phone: "tel:+914672283100",
    specialties: ["General Medicine", "Emergency Care", "Surgery"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kasaragod",
    subDistrict: "Nileshwar"
  },
  {
    id: 121,
    name: "Lifeline Hospital",
    rating: 4.5,
    location: {
      address: "Uppala, Kasaragod, Kerala 671322",
      coordinates: { lat: 12.7866, lng: 74.9469 }
    },
    phone: "tel:+914998244100",
    specialties: ["General Medicine", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kasaragod",
    subDistrict: "Uppala"
  },
  {
    id: 130,
    name: "General Hospital Kasaragod",
    rating: 4.2,
    location: {
      address: "Vidyanagar, Kasaragod, Kerala 671123",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "+91-499-4230035",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kasaragod",
    subDistrict: "Kasaragod"
  },
  {
    id: 131,
    name: "Central Hospital",
    rating: 4.4,
    location: {
      address: "Cherkala, Kasaragod, Kerala 671121",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "+91-499-4225555",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kasaragod",
    subDistrict: "Kasaragod"
  },
  {
    id: 132,
    name: "Unity Hospital",
    rating: 4.3,
    location: {
      address: "Kanhangad, Kasaragod, Kerala 671315",
      coordinates: { lat: 12.2978, lng: 75.0691 }
    },
    phone: "+91-467-2200444",
    specialties: ["General Medicine", "Surgery", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Kasaragod",
    subDistrict: "Kanhangad"
  },
  {
    id: 133,
    name: "District Hospital Kanhangad",
    rating: 4.1,
    location: {
      address: "Kanhangad, Kasaragod, Kerala 671315",
      coordinates: { lat: 12.2978, lng: 75.0691 }
    },
    phone: "+91-467-2200666",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Kasaragod",
    subDistrict: "Kanhangad"
  },
  {
    id: 134,
    name: "Al Shifa Hospital",
    rating: 4.3,
    location: {
      address: "Nullipady, Kasaragod, Kerala 671121",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "+91-499-4230099",
    specialties: ["General Medicine", "Orthopedics", "Neurology", "Cardiology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kasaragod",
    subDistrict: "Kasaragod"
  },
  {
    id: 135,
    name: "Malik Deenar Hospital",
    rating: 4.2,
    location: {
      address: "Thalangara, Kasaragod, Kerala 671121",
      coordinates: { lat: 12.4996, lng: 74.9869 }
    },
    phone: "+91-499-4231111",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Kasaragod",
    subDistrict: "Kasaragod"
  },
  {
    id: 136,
    name: "Taluk Hospital Nileshwar",
    rating: 4.0,
    location: {
      address: "Nileshwar, Kasaragod, Kerala 671314",
      coordinates: { lat: 12.2586, lng: 75.1352 }
    },
    phone: "+91-467-2283333",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Kasaragod",
    subDistrict: "Nileshwar"
  },
  {
    id: 137,
    name: "Lifeline Hospital",
    rating: 4.3,
    location: {
      address: "Uppala, Kasaragod, Kerala 671322",
      coordinates: { lat: 12.7901, lng: 74.9493 }
    },
    phone: "+91-499-4244444",
    specialties: ["General Medicine", "Surgery", "ENT", "Dermatology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Kasaragod",
    subDistrict: "Uppala"
  },
  {
    id: 138,
    name: "Crescent Hospital",
    rating: 4.2,
    location: {
      address: "Bekal, Kasaragod, Kerala 671316",
      coordinates: { lat: 12.3924, lng: 75.0311 }
    },
    phone: "+91-467-2236666",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Kasaragod",
    subDistrict: "Bekal"
  },
  {
    id: 139,
    name: "Sree Narayana Hospital",
    rating: 4.1,
    location: {
      address: "Cheruvathur, Kasaragod, Kerala 671313",
      coordinates: { lat: 12.5934, lng: 75.0871 }
    },
    phone: "+91-467-2253333",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Kasaragod",
    subDistrict: "Cheruvathur"
  },
  // Alappuzha District
  {
    id: 140,
    name: "TD Medical College Hospital",
    rating: 4.4,
    location: {
      address: "Vandanam, Alappuzha, Kerala 688005",
      coordinates: { lat: 9.4127, lng: 76.3456 }
    },
    phone: "+91-477-2282015",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Alappuzha",
    subDistrict: "Alappuzha"
  },
  {
    id: 141,
    name: "General Hospital Alappuzha",
    rating: 4.2,
    location: {
      address: "Hospital Road, Alappuzha, Kerala 688001",
      coordinates: { lat: 9.4981, lng: 76.3388 }
    },
    phone: "+91-477-2251780",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Alappuzha",
    subDistrict: "Alappuzha"
  },
  {
    id: 142,
    name: "ESI Hospital",
    rating: 4.1,
    location: {
      address: "Beach Road, Alappuzha, Kerala 688012",
      coordinates: { lat: 9.4981, lng: 76.3388 }
    },
    phone: "+91-477-2244590",
    specialties: ["General Medicine", "Surgery", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Alappuzha",
    subDistrict: "Alappuzha"
  },
  {
    id: 143,
    name: "Sagara Hospital",
    rating: 4.3,
    location: {
      address: "Punnapra, Alappuzha, Kerala 688004",
      coordinates: { lat: 9.4867, lng: 76.3321 }
    },
    phone: "+91-477-2238000",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Gastroenterology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Alappuzha",
    subDistrict: "Alappuzha"
  },
  {
    id: 144,
    name: "St. Joseph Hospital",
    rating: 4.4,
    location: {
      address: "Cherthala, Alappuzha, Kerala 688524",
      coordinates: { lat: 9.6848, lng: 76.3356 }
    },
    phone: "+91-478-2812345",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Alappuzha",
    subDistrict: "Cherthala"
  },
  {
    id: 145,
    name: "Vijaya Hospital",
    rating: 4.2,
    location: {
      address: "Kayamkulam, Alappuzha, Kerala 690502",
      coordinates: { lat: 9.1698, lng: 76.5016 }
    },
    phone: "+91-479-2442280",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Alappuzha",
    subDistrict: "Kayamkulam"
  },
  {
    id: 146,
    name: "Lakshmi Hospital",
    rating: 4.3,
    location: {
      address: "Harippad, Alappuzha, Kerala 690514",
      coordinates: { lat: 9.2837, lng: 76.4463 }
    },
    phone: "+91-479-2412444",
    specialties: ["General Medicine", "Surgery", "ENT", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Alappuzha",
    subDistrict: "Harippad"
  },
  {
    id: 147,
    name: "Amrita Hospital",
    rating: 4.5,
    location: {
      address: "Cherthala, Alappuzha, Kerala 688524",
      coordinates: { lat: 9.6848, lng: 76.3356 }
    },
    phone: "+91-478-2822222",
    specialties: ["General Medicine", "Cardiology", "Neurology", "Oncology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Alappuzha",
    subDistrict: "Cherthala"
  },
  {
    id: 148,
    name: "Holy Family Hospital",
    rating: 4.2,
    location: {
      address: "Mararikkulam, Alappuzha, Kerala 688549",
      coordinates: { lat: 9.6215, lng: 76.3321 }
    },
    phone: "+91-478-2863333",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1629909615184-74f495363b67"],
    district: "Alappuzha",
    subDistrict: "Mararikkulam"
  },
  {
    id: 149,
    name: "Nirmala Hospital",
    rating: 4.1,
    location: {
      address: "Haripad, Alappuzha, Kerala 690514",
      coordinates: { lat: 9.2837, lng: 76.4463 }
    },
    phone: "+91-479-2412555",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Emergency Care"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Alappuzha",
    subDistrict: "Harippad"
  },
  // Idukki District
  {
    id: 13,
    name: "District Hospital Thodupuzha",
    rating: 4.3,
    location: {
      address: "Thodupuzha, Idukki, Kerala 685584",
      coordinates: { lat: 9.8959, lng: 76.7184 }
    },
    phone: "tel:+91-486-2222240",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Idukki",
    subDistrict: "Thodupuzha"
  },
  {
    id: 14,
    name: "Taluk Hospital Adimali",
    rating: 4.1,
    location: {
      address: "Adimali, Idukki, Kerala 685561",
      coordinates: { lat: 10.0089, lng: 76.9346 }
    },
    phone: "tel:+91-486-2236333",
    specialties: ["General Medicine", "Surgery", "Emergency Care", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Idukki",
    subDistrict: "Adimali"
  },
  {
    id: 15,
    name: "Government Medical College Idukki",
    rating: 4.4,
    location: {
      address: "Cheruthoni, Idukki, Kerala 685602",
      coordinates: { lat: 9.8459, lng: 76.9680 }
    },
    phone: "tel:+91-486-2232300",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Idukki",
    subDistrict: "Idukki"
  },
  {
    id: 16,
    name: "Holy Ghost Mission Hospital",
    rating: 4.2,
    location: {
      address: "Muttom, Idukki, Kerala 685587",
      coordinates: { lat: 9.9461, lng: 76.5744 }
    },
    phone: "tel:+91-486-2255555",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "ENT"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Idukki",
    subDistrict: "Muttom"
  },
  {
    id: 17,
    name: "St. George Hospital",
    rating: 4.3,
    location: {
      address: "Kattappana, Idukki, Kerala 685508",
      coordinates: { lat: 9.7487, lng: 77.1155 }
    },
    phone: "tel:+91-486-8263333",
    specialties: ["General Medicine", "Surgery", "Orthopedics", "Ophthalmology"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Idukki",
    subDistrict: "Kattappana"
  },
  {
    id: 18,
    name: "Little Flower Hospital",
    rating: 4.2,
    location: {
      address: "Nedumkandam, Idukki, Kerala 685553",
      coordinates: { lat: 9.9137, lng: 77.1589 }
    },
    phone: "tel:+91-486-8232222",
    specialties: ["General Medicine", "Surgery", "Pediatrics", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914"],
    district: "Idukki",
    subDistrict: "Nedumkandam"
  },
  // Malappuram District
  {
    id: 122,
    name: "MIMS Hospital Malappuram",
    rating: 4.8,
    location: {
      address: "Manjeri Road, Malappuram, Kerala 676505",
      coordinates: { lat: 11.0433, lng: 76.0729 }
    },
    phone: "tel:+914832731420",
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Malappuram",
    subDistrict: "Manjeri"
  },
  {
    id: 123,
    name: "District Hospital Manjeri",
    rating: 4.5,
    location: {
      address: "Manjeri, Malappuram, Kerala 676121",
      coordinates: { lat: 11.1200, lng: 76.1194 }
    },
    phone: "tel:+914832766056",
    specialties: ["General Medicine", "Emergency Care", "Pediatrics"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Malappuram",
    subDistrict: "Manjeri"
  },
  {
    id: 124,
    name: "Government Medical College Hospital",
    rating: 4.6,
    location: {
      address: "Manjeri, Malappuram, Kerala 676121",
      coordinates: { lat: 11.1200, lng: 76.1194 }
    },
    phone: "tel:+914832766057",
    specialties: ["General Medicine", "Surgery", "Gynecology"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Malappuram",
    subDistrict: "Manjeri"
  },
  {
    id: 125,
    name: "Al Shifa Hospital",
    rating: 4.7,
    location: {
      address: "Perinthalmanna, Malappuram, Kerala 679322",
      coordinates: { lat: 10.9766, lng: 76.2270 }
    },
    phone: "tel:+914933227344",
    specialties: ["General Medicine", "Cardiology", "Neurology"],
    images: ["https://images.unsplash.com/photo-1587351021759-3776b14b4968"],
    district: "Malappuram",
    subDistrict: "Perinthalmanna"
  },
  {
    id: 126,
    name: "Karuna Hospital",
    rating: 4.4,
    location: {
      address: "Tirur, Malappuram, Kerala 676101",
      coordinates: { lat: 10.9146, lng: 75.9219 }
    },
    phone: "tel:+914942422002",
    specialties: ["General Medicine", "Orthopedics", "ENT"],
    images: ["https://images.unsplash.com/photo-1586534313131-8b27a61708a9"],
    district: "Malappuram",
    subDistrict: "Tirur"
  },
  {
    id: 127,
    name: "PVS Hospital",
    rating: 4.3,
    location: {
      address: "Calicut Road, Malappuram, Kerala 676505",
      coordinates: { lat: 11.0433, lng: 76.0729 }
    },
    phone: "tel:+914832734100",
    specialties: ["General Medicine", "Emergency Care", "Surgery"],
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"],
    district: "Malappuram",
    subDistrict: "Malappuram"
  }
];
