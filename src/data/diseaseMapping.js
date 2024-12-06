// Disease mapping based on symptom combinations
export const diseaseMapping = {
  // Respiratory conditions
  "Common Cold": {
    symptoms: ["Cough", "Congestion", "Sore throat", "Fatigue", "Headache"],
    severity: "Mild",
    urgency: "Low",
    specialty: "General Medicine",
    description: "A viral infection of the upper respiratory tract",
    recommendations: [
      "Rest and hydration",
      "Over-the-counter cold medications",
      "Monitor symptoms"
    ]
  },
  "Flu": {
    symptoms: ["Fever", "Fatigue", "Body aches", "Headache", "Cough"],
    severity: "Moderate",
    urgency: "Medium",
    specialty: "General Medicine",
    description: "A viral infection that attacks your respiratory system",
    recommendations: [
      "Rest and isolation",
      "Antiviral medications if prescribed",
      "Hydration and fever management"
    ]
  },

  // Digestive conditions
  "Gastroenteritis": {
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Stomach pain", "Fever"],
    severity: "Moderate",
    urgency: "Medium",
    specialty: "Gastroenterology",
    description: "Inflammation of the digestive system, often due to viral infection",
    recommendations: [
      "Hydration with electrolytes",
      "BRAT diet (Bananas, Rice, Applesauce, Toast)",
      "Rest and monitor symptoms"
    ]
  },

  // Cardiovascular conditions
  "Hypertension": {
    symptoms: ["Headache", "Dizziness", "Shortness of breath", "Chest pain"],
    severity: "High",
    urgency: "High",
    specialty: "Cardiology",
    description: "High blood pressure condition affecting the cardiovascular system",
    recommendations: [
      "Immediate medical attention",
      "Blood pressure monitoring",
      "Medication compliance if prescribed"
    ]
  },

  // Neurological conditions
  "Migraine": {
    symptoms: ["Headache", "Nausea", "Light sensitivity", "Sound sensitivity"],
    severity: "Moderate",
    urgency: "Medium",
    specialty: "Neurology",
    description: "A neurological condition causing severe headaches",
    recommendations: [
      "Rest in a quiet, dark room",
      "Pain medication as prescribed",
      "Trigger avoidance"
    ]
  },

  // Allergic conditions
  "Seasonal Allergies": {
    symptoms: ["Sneezing", "Congestion", "Itchy eyes", "Runny nose"],
    severity: "Mild",
    urgency: "Low",
    specialty: "Allergy and Immunology",
    description: "Allergic reaction to environmental factors",
    recommendations: [
      "Antihistamines",
      "Avoid allergen exposure",
      "Nasal irrigation"
    ]
  },

  // Musculoskeletal conditions
  "Muscle Strain": {
    symptoms: ["Muscle pain", "Swelling", "Limited mobility", "Stiffness"],
    severity: "Mild",
    urgency: "Low",
    specialty: "Orthopedic Surgery",
    description: "Injury to muscles or tendons",
    recommendations: [
      "RICE (Rest, Ice, Compression, Elevation)",
      "Over-the-counter pain relievers",
      "Gentle stretching when appropriate"
    ]
  },

  // Mental health conditions
  "Anxiety": {
    symptoms: ["Restlessness", "Racing heart", "Excessive worry", "Sleep problems"],
    severity: "Moderate",
    urgency: "Medium",
    specialty: "Psychiatry",
    description: "A mental health condition characterized by excessive worry",
    recommendations: [
      "Professional counseling",
      "Stress management techniques",
      "Regular exercise and sleep routine"
    ]
  }
};

// Helper function to analyze symptoms and find matching diseases
export const analyzeSymptoms = (symptoms) => {
  const possibleConditions = [];
  const conditions = {
    "Common Cold": {
      symptoms: ["Cough", "Congestion", "Sore throat", "Fatigue", "Headache"],
      disease: "Common Cold",
      severity: "Mild",
      urgency: "Low",
      specialty: "General Medicine",
      description: "A viral infection of the upper respiratory tract",
      recommendations: [
        "Rest and hydration",
        "Over-the-counter cold medications",
        "Monitor symptoms"
      ]
    },
    "Flu": {
      symptoms: ["Fever", "Fatigue", "Body aches", "Headache", "Cough"],
      disease: "Flu",
      severity: "Moderate",
      urgency: "Medium",
      specialty: "General Medicine",
      description: "A viral infection that attacks your respiratory system",
      recommendations: [
        "Rest and isolation",
        "Antiviral medications if prescribed",
        "Hydration and fever management"
      ]
    },
    "Migraine": {
      symptoms: ["Headache", "Nausea", "Light sensitivity", "Sound sensitivity"],
      disease: "Migraine",
      severity: "Moderate",
      urgency: "Medium",
      specialty: "Neurology",
      description: "A neurological condition causing severe headaches",
      recommendations: [
        "Rest in a quiet, dark room",
        "Pain medication as prescribed",
        "Trigger avoidance"
      ]
    },
    "Hypertension": {
      symptoms: ["Headache", "Dizziness", "Shortness of breath", "Chest pain"],
      disease: "Hypertension",
      severity: "High",
      urgency: "High",
      specialty: "Cardiology",
      description: "High blood pressure condition affecting the cardiovascular system",
      recommendations: [
        "Immediate medical attention",
        "Blood pressure monitoring",
        "Medication compliance if prescribed"
      ]
    }
  };

  // Calculate matches for each condition
  Object.entries(conditions).forEach(([name, condition]) => {
    const matchingSymptoms = symptoms.filter(s => 
      condition.symptoms.includes(s)
    );

    if (matchingSymptoms.length > 0) {
      const matchScore = Math.round((matchingSymptoms.length / condition.symptoms.length) * 100);
      
      possibleConditions.push({
        disease: condition.disease,
        description: condition.description,
        matchScore,
        matchingSymptoms,
        severity: condition.severity,
        urgency: condition.urgency,
        recommendations: condition.recommendations,
        specialty: condition.specialty
      });
    }
  });

  // Sort by match score
  possibleConditions.sort((a, b) => b.matchScore - a.matchScore);

  // Determine overall urgency
  let urgency = "Low";
  if (possibleConditions.some(c => c.urgency === "High")) {
    urgency = "High";
  } else if (possibleConditions.some(c => c.urgency === "Medium")) {
    urgency = "Medium";
  }

  return {
    possibleConditions,
    urgency
  };
};
