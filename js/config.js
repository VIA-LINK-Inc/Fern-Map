// ====================================================================
// VIA LINK Disaster Resource Map
// Application Configuration
// ====================================================================

// Central location for application settings.

const CONFIG = {

    client: {
        name: "VIA LINK",
        mapTitle: "Winter Storm Fern Resource Map",
        demoMapTitle: "DEMO - Winter Storm Fern Resource Map",
        brandColor: "#087DC1"
    },

    // Google Maps configuration
    googleMaps: {
        apiKey: "AIzaSyAjjm24_xUxakT0zeyROPIK_AZv1qYfuqY"
    },

    // Google Sheets configuration
    // Use the ID of the NEW Winter Storm Fern Google Sheet
    googleSheets: {
        spreadsheetId: "1RiPEkmAzFzfysKTO7Th-uidST5UBh1-bBkLXtaS00jE"
    },

    demo: {
        enabled: true,

        title: "This is a Demo Version",

        message: "This resource map is a demo version of the tool that VIA LINK deploys during disasters. The information displayed here is sample data and does not represent actual resources.",

        buttonText: "I Understand"
    },

    resourceCategories: {
        order: [
            "Food Sites",
            "Shelters",
            "Warming Centers",
            "Medical Supplies",
            "Boil Advisory",
            "Utility Assistance",
            "Temporary Housing",
            "MEMA Recovery",
            "Rebuilding Support",
            "FEMA",
            "Emotional Support"
        ],

        styles: {
            "Food Sites": {
                background: "#2e7d32",
                border: "#1b5e20",
                icon: "food"
            },

            "Shelters": {
                background: "#1976d2",
                border: "#0d47a1",
                icon: "shelter"
            },

            "Warming Centers": {
                background: "#039be5",
                border: "#0277bd",
                icon: "snowflake"
            },

            "Medical Supplies": {
                background: "#d32f2f",
                border: "#8b0000",
                icon: "medical"
            },

            "Charging": {
                background: "#f57c00",
                border: "#e65100",
                icon: "charging"
            },

            "Temporary Housing": {
                background: "#00897b",
                border: "#00695c",
                icon: "house"
            },

            "Rebuilding Support": {
                background: "#ef6c00",
                border: "#bf360c",
                icon: "hammer"
            },

            "Utility Assistance": {
                background: "#7b1fa2",
                border: "#4a148c",
                icon: "plug"
            },

            "MEMA Recovery": {
                background: "#1565c0",
                border: "#0d47a1",
                icon: "repairHouse"
            },

            "Emotional Support": {
                background: "#c2185b",
                border: "#880e4f",
                icon: "heart"
            },

            "FEMA": {
                background: "#455a64",
                border: "#263238",
                icon: "shield"
            },

            "Boil Advisory": {
                type: "warning"
            }
        },

        defaultStyle: {
            background: "#757575",
            border: "#424242",
            icon: "default"
        }
    },

    // Map configuration
    map: {
        clusterZoomStep: 2,
        clusterMaxZoom: 16,
        singleResourceZoom: 13,

        // Centered on north-central Mississippi to show the storm area
        defaultCenter: {
            lat: 33.2,
            lng: -89.75
        },

        // Initial zoom level (7 shows most of the state)
        defaultZoom: 7,

        // Google Maps Map ID
        mapId: "YOUR_MAP_ID"
    }
};