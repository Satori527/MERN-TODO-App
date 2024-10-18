```json
    "builds": [
        {"src":"*.js", "use":"@version/node"}
    ],
    "routes": [
        {
            "src":"/(.*)",
            "dest":"/api/index.js"
        }
    ],
        "rewrites": [
        {
            "source": "/api/:path*",
            "destination": "/api/:path*"
        }
    ]
```