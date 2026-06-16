const ENV = {

    BASE_URL= "https://staging.myapp.com",
    timeout : 5000,
    retries :2,
    browder: "chrome"
}

const Expected_Response={

    status: 200,
    body:{
        user:{role: "admin", active: true}
    }
}

const config = {
    // Base URLs
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',

    testUser: {
        username: 'testuser@example.com',
        password: 'SecurePass123',
    },

    // Logging
    logLevel: 'INFO',

    // Retry configuration
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
};
