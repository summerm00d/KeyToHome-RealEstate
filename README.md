# KeyToHome Real Estate Web App

## Overview
KeyToHome is a full-stack real estate platform where users can buy, sell, and rent properties. This project includes a React client, Node.js/Express API, and a socket server.

---

## Features
- User authentication (register/login)
- Property listing and search
- Profile management
- Real-time chat (socket)
- Responsive UI

---

## Getting Started

### 1. Clone the repository
```sh
git clone https://github.com/summerm00d/KeyToHome-RealEstate.git
cd KeyToHome-RealEstate
```

### 2. Install dependencies

#### API
```sh
cd full-stack-estate/api
npm install
```

#### Client
```sh
cd ../client
npm install
```

#### Socket
```sh
cd ../socket
npm install
```

---

### 3. Configure environment variables

Create a `.env` file in `full-stack-estate/api` with:
```
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

---

### 4. Start the servers

#### API
```sh
cd full-stack-estate/api
npm start
```

#### Socket
```sh
cd ../socket
node app.js
```

#### Client
```sh
cd ../client
npm run dev
```

---

### 5. Access the app

Open your browser and go to [http://localhost:5173](http://localhost:5173)

---

## Contact
For questions or support, open an issue or contact [de.sum.tini@gmail.com](mailto:your-email@example.com).