const config = {
  "property": {
    "streetAddress": "461 Adelaide St W",
    "city": "Toronto",
    "cityStateZip": "Toronto, ON M5V2T8",
    "heroSubtitle": "Immerse yourself in the ultimate urban sanctuary – a breathtaking 1-bedroom Condo Apartment that redefines contemporary living. Boasting 1 beautifully appointed bathrooms and a generous 758 sq ft of intelligently designed space, this home is a testament to modern architectural excellence. From the moment you step inside, you'll be captivated by the seamless flow, abundant natural light, and premium finishes that create an atmosphere of refined elegance and unparalleled comfort.",
    "backgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760649146718-2912-80 John St-01.jpg"
  },
  "realtor": {
    "fullName": "Arslan Ahmed",
    "title": "REALTOR®",
    "phone": "4166554850",
    "email": "arslan@salesgenius.co",
    "photoUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg",
    "bio": "Growing up in Toronto, I was inspired to pursue real estate by watching my father build meaningful relationships with clients while helping them achieve homeownership. His dedication showed me how real estate perfectly combines analytical thinking with personal connection - a discovery that became even more meaningful when I realized how my chemical engineering background from Western University could enhance this career path. The rigorous problem-solving methodology I learned in engineering - breaking down complex systems, analyzing data patterns, and finding optimal solutions - directly translates to real estate success. When evaluating properties, I can assess structural elements and building systems with precision, while my analytical mindset helps me navigate market trends and negotiations strategically. This technical foundation, combined with genuine passion for helping people, has guided my decade-long journey since obtaining my license in April 2015. Starting at Remax taught m...",
    "social": {
      "facebook": "https://www.facebook.com/ExecutiveHomesRealty",
      "instagram": "https://www.instagram.com/executivehomesrealtyinc/",
      "website": "https://www.executivehomesrealty.ca/"
    }
  },
  "brokerage": {
    "name": "Executive Homes Realty Inc",
    "logoUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757536840225-Office Logo.png",
    "address": "1-290 TRADERS BLVD EAST, MISSISSAUGA, Ontario, L4Z 1W7"
  },
  "openHouse": {
    "eventDate": "",
    "bundleItems": [
            {
                  "icon": "fas fa-home",
                  "text": "Full Property Listing",
                  "url": "https://www.realtor.ca/real-estate/28965027/1202-333-adelaide-street-e-toronto-moss-park-moss-park"
            },
            {
                  "icon": "fas fa-vr-cardboard",
                  "text": "3D Virtual Tour",
                  "url": "https://my.matterport.com/show/?m=VEMZvn8xinR"
            },
            {
                  "icon": "fas fa-ruler-combined",
                  "text": "Architectural Floor Plan",
                  "url": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760649040739-2912.pdf"
            },
            {
                  "icon": "fas fa-video",
                  "text": "Video Tour",
                  "url": "https://www.youtube.com/watch?v=P3YAySxYZpA"
            },
            {
                  "icon": "fas fa-file-pdf",
                  "text": "Brochure",
                  "url": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1760649069248-Screenshot 2025-08-08 at 11.12.32 AM.png"
            }
      ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Arslan Ahmed Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://gta.realestate/site/privacy-terms"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in this Condo Apartment?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoId": "1082112732",
    "repoName": "Open-House-371",
    "repoUrl": "https://github.com/arslvn93/Open-House-371",
    "tag": "Open House 461 Adelaide St W",
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/KxSrsX5ZH2ZttFjyt9hW/webhook-trigger/723v7Nh8JC60wCn3aRmV",
    "siteId": "8bb68bb1-1ebe-4fc1-b2b4-eef46a7b016a"
  }
};