# API Documentation

This document provides comprehensive API documentation for the Ranbridge Solutions platform.

## 🌐 API Overview

The Ranbridge Solutions API provides programmatic access to our services and data. This documentation covers authentication, endpoints, request/response formats, and integration examples.

## 🔐 Authentication

### API Keys
All API requests require authentication. Contact us at info@ranbidge.com to obtain API credentials.

### Authentication Methods
```javascript
// Bearer Token Authentication
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
};

// API Key in Query Parameters
const url = 'https://api.ranbidge.com/v1/services?api_key=YOUR_API_KEY';
```

### Environment Variables
```bash
# Development
VITE_API_BASE_URL=http://localhost:3001
VITE_API_KEY=dev_api_key_here

# Production
VITE_API_BASE_URL=https://api.ranbidge.com
VITE_API_KEY=prod_api_key_here
```

## 📡 Base URL

```
https://api.ranbidge.com/v1
```

## 🛠️ API Endpoints

### Services API
#### GET /services
Retrieve all available services with detailed information.

**Request**
```http
GET /v1/services
Authorization: Bearer {api_key}
Content-Type: application/json
```

**Response**
```json
{
  "success": true,
  "data": [
    {
      "id": "web-development",
      "name": "Web Development",
      "description": "Custom websites and web applications built with modern technologies",
      "features": ["React/Vue/Angular", "Node.js/Python", "Responsive Design", "API Integration"],
      "pricing": {
        "tier": "premium",
        "starting_price": 50000,
        "currency": "INR"
      },
      "category": "development"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "total_pages": 3
  }
}
```

### Contact API
#### POST /contact
Submit contact form data and inquiries.

**Request**
```http
POST /v1/contact
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+919876543210",
  "message": "I'm interested in your web development services",
  "service_type": "web-development",
  "budget_range": "50000-100000"
}
```

**Response**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "ticket_id": "TKT-2024-001234",
  "estimated_response_time": "2-4 business hours"
}
```

### Internship API
#### GET /internship
Retrieve available internship programs and application details.

**Request**
```http
GET /v1/internship
Authorization: Bearer {api_key}
Content-Type: application/json
```

**Response**
```json
{
  "success": true,
  "data": [
    {
      "id": "python-fullstack",
      "title": "Python Full Stack Development",
      "duration": "6-8 Weeks",
      "mode": "Virtual",
      "description": "Master end-to-end Python development with modern frameworks",
      "skills": ["Python", "Django/Flask", "PostgreSQL", "REST APIs"],
      "status": "accepting_applications",
      "application_deadline": "2024-12-31"
    }
  ],
  "application_form_url": "https://forms.gle/esK6TANvsz5Xwb4q9"
}
```

#### POST /internship/apply
Submit internship applications.

**Request**
```http
POST /v1/internship/apply
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "candidate_name": "Jane Smith",
  "email": "jane.smith@example.com",
  "phone": "+919876543210",
  "education": "Bachelor of Computer Science",
  "experience": "2 years",
  "internship_id": "python-fullstack",
  "resume_url": "https://example.com/resume.pdf",
  "cover_letter": "I'm excited to apply for..."
}
```

## 📊 Response Format

### Success Response
```json
{
  "success": true,
  "data": {...},
  "message": "Operation completed successfully",
  "timestamp": "2024-02-20T10:30:00Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid or expired",
    "details": "Please contact support for assistance"
  },
  "timestamp": "2024-02-20T10:30:00Z"
}
```

### Pagination
```json
{
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "total_pages": 3,
    "has_next": true,
    "has_prev": false
  }
}
```

## 🔄 Rate Limiting

### Rate Limits
- **Requests per minute**: 60
- **Requests per hour**: 1000
- **Requests per day**: 10000
- **Burst limit**: 120 requests per minute

### Rate Limit Headers
```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1640995200
```

## 🧪 Client Libraries

### JavaScript/TypeScript
```bash
# Install official client
npm install @ranbidge/api-client

# Basic usage
import { RanbridgeAPI } from '@ranbidge/api-client';

const client = new RanbridgeAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.ranbidge.com/v1'
});

// Get services
const services = await client.getServices();
console.log(services);
```

### Python
```bash
# Install Python client
pip install ranbidge-api-client

# Basic usage
from ranbidge_api import RanbridgeAPI

client = RanbridgeAPI(api_key='your-api-key')
services = client.get_services()
print(services)
```

### cURL Examples
```bash
# Get services
curl -X GET "https://api.ranbidge.com/v1/services" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"

# Submit contact form
curl -X POST "https://api.ranbidge.com/v1/contact" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "message": "Interested in your services"
  }'
```

## 🔍 Error Handling

### HTTP Status Codes
- **200 OK**: Request successful
- **201 Created**: Resource created successfully
- **400 Bad Request**: Invalid request parameters
- **401 Unauthorized**: Invalid or missing API key
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource doesn't exist
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server**: Server error

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email",
    "details": "Email must be a valid email address"
  },
  "request_id": "req_123456789"
}
```

## 🧪 Testing

### Postman Collection
Import our Postman collection for easy API testing:

```json
{
  "info": {
    "name": "Ranbridge Solutions API",
    "description": "Complete API collection for testing",
    "version": "1.0.0"
  },
  "variable": [
    {
      "key": "api_key",
      "value": "YOUR_API_KEY_HERE"
    },
    {
      "key": "base_url",
      "value": "https://api.ranbidge.com/v1"
    }
  ],
  "item": [
    {
      "name": "Get Services",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/services",
        "header": {
          "Authorization": "Bearer {{api_key}}",
          "Content-Type": "application/json"
        }
      }
    },
    {
      "name": "Submit Contact",
      "request": {
        "method": "POST",
        "url": "{{base_url}}/contact",
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"Test User\",\n  \"email\": \"test@example.com\"\n}"
        }
      }
    }
  ]
}
```

### OpenAPI Specification
Our API follows OpenAPI 3.0 standards:

```yaml
openapi: 3.0.0
info:
  title: Ranbridge Solutions API
  version: 1.0.0
  description: API for Ranbridge Solutions services and contact management
  contact:
    email: api-support@ranbidge.com
    url: https://ranbidge.com/api-docs
servers:
  - url: https://api.ranbidge.com/v1
    description: Production server
paths:
  /services:
    get:
      summary: Get all services
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ServicesResponse'
```

## 📞 SDKs and Tools

### JavaScript SDK
```bash
# Official SDK
npm install @ranbidge/sdk

# Usage example
import { RanbridgeSDK } from '@ranbidge/sdk';

const sdk = new RanbridgeSDK({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Get services with error handling
try {
  const services = await sdk.getServices();
  console.log('Services:', services);
} catch (error) {
  console.error('API Error:', error.message);
}
```

### CLI Tool
```bash
# Install CLI tool
npm install -g @ranbidge/cli

# Configure CLI
ranbridge config set api_key YOUR_API_KEY
ranbridge config set base_url https://api.ranbidge.com/v1

# Use CLI
ranbridge services list
ranbridge contact submit --name "John Doe" --email "john@example.com"
```

## 🔐 Security Best Practices

### API Key Management
- **Environment variables**: Never commit API keys to Git
- **Key rotation**: Regularly update API keys
- **Least privilege**: Use minimal required permissions
- **Monitoring**: Track API usage and unusual activity

### Request Security
- **HTTPS only**: All API communication over TLS
- **Input validation**: Sanitize all input data
- **Rate limiting**: Respect API rate limits
- **Error handling**: Never expose sensitive error details

### Integration Security
```javascript
// Secure API client configuration
const client = new RanbridgeAPI({
  apiKey: process.env.API_KEY, // Use environment variables
  baseURL: 'https://api.ranbidge.com/v1',
  timeout: 10000, // 10 second timeout
  retryAttempts: 3,
  retryDelay: 1000
});

// Secure request example
const secureRequest = async (endpoint, data) => {
  try {
    const response = await client.request(endpoint, {
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${client.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    // Validate response
    if (!response.success) {
      throw new Error(`API Error: ${response.error.message}`);
    }
    
    return response;
  } catch (error) {
    // Log error without exposing sensitive data
    console.error('Request failed:', error.message);
    throw error;
  }
};
```

## 📊 Monitoring & Analytics

### API Usage Tracking
```javascript
// Track API usage
const usage = await client.getUsage();
console.log('API Usage:', {
  requests_made: usage.requests.current,
  requests_remaining: usage.requests.remaining,
  reset_time: usage.reset_time
});
```

### Performance Monitoring
```javascript
// Measure API response times
const startTime = Date.now();
const response = await client.getServices();
const endTime = Date.now();

console.log(`API Response Time: ${endTime - startTime}ms`);
```

## 📞 Support

### Getting Help
- **Documentation**: [API Docs](https://ranbidge.com/api-docs)
- **Status Page**: [API Status](https://status.ranbidge.com)
- **Support Email**: api-support@ranbidge.com
- **GitHub Issues**: [Repository Issues](https://github.com/ranbridgeserviceprivatelimited-sys/RANBIDGE-Solutions-PVT-LTD/issues)

### Community
- **Discord**: [Developer Community](https://discord.gg/ranbidge)
- **Stack Overflow**: Tag questions with `ranbidge-api`
- **Blog**: [API Updates](https://blog.ranbidge.com/api-updates)

---

*This API documentation is updated regularly. Check the GitHub repository for the latest version.*
