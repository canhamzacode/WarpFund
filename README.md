# **📜 WarpFund - Decentralized Crowdfunding with Warpcast Frames**

**WarpFund** is an **on-chain crowdfunding platform** that allows users to create fundraising campaigns, receive crypto donations, and share their campaigns via **Warpcast Frames**. Built on Ethereum and integrated with **Farcaster**, it ensures transparency, decentralization, and seamless user engagement.

---

## **🛠 Tech Stack**

| Component          | Technology                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| **Frontend**       | Next.js, TypeScript, Tailwind CSS, Warpcast Frames SDK, RainbowKit (Wallet Connection)            |
| **Backend**        | Node.js (for indexing, analytics), Express.js (if API needed), The Graph (on-chain data indexing) |
| **Smart Contract** | Solidity, Ethereum (L2 preferred for low fees), Hardhat                                           |
| **Storage**        | IPFS/Filecoin (campaign metadata & images)                                                        |

---

## **🔹 Features**

### **📝 Campaign Creation**

- Users can set a funding goal, deadline, and add descriptions.
- Upload **images to IPFS** for decentralized storage.
- Generate a **Warpcast Frame link** for easy sharing.

### **💰 Donations via Crypto**

- Accepts **ETH, USDC, or other ERC-20 tokens**.
- Real-time updates on funds raised.
- Gasless donations possible via **Paymaster (optional)**.

### **📊 Campaign Dashboard**

- Track **donations received & withdrawal status**.
- View list of donors and contributions.
- Withdraw funds if the goal is met.

### **🔄 Refunds & Security**

- **Automatic refunds** if goal isn’t met by the deadline.
- **Verified campaigns** to prevent scams.

### **📢 Social Sharing & Engagement**

- One-click sharing via **Warpcast, Twitter, and Telegram**.
- Engage donors via **Farcaster reactions/comments**.

---

# **📌 Project Architecture**

```plaintext
Frontend (Next.js) -> Warpcast Frame -> Smart Contract (Ethereum) -> The Graph (Data Indexing)
```

---

## **🚀 Frontend (Next.js)**

### **Tech Used:**

- **Next.js** – Server-side rendering (SSR) for better performance.
- **TypeScript** – Type safety for frontend logic.
- **Tailwind CSS** – Modern UI styling.
- **RainbowKit** – Wallet authentication.
- **Wagmi** – Ethereum connection & smart contract interactions.
- **Warpcast Frames SDK** – For embedding in Farcaster.

### **Key Components**

1. **Home Page (`/`)**

   - List of **trending campaigns**.
   - Filter by **new, ending soon, fully funded**.

2. **Campaign Creation (`/create`)**

   - Form with **title, description, goal, deadline**.
   - **Upload images to IPFS** and store hash.
   - Deploy campaign via **smart contract**.

3. **Campaign Details (`/campaign/[id]`)**

   - Fetch campaign data via **The Graph**.
   - Show **donation progress & contributors**.
   - **Warpcast Frame embedded for easy donations**.

4. **Dashboard (`/dashboard`)**
   - View **campaigns created & donations received**.
   - Withdraw funds if **goal is met**.

### **Frontend API Calls**

| Functionality       | Endpoint / Contract Call            |
| ------------------- | ----------------------------------- |
| **Fetch campaigns** | The Graph (Subgraph Query)          |
| **Upload images**   | IPFS (via Web3.Storage or Pinata)   |
| **Connect Wallet**  | RainbowKit / Wagmi                  |
| **Send donation**   | Smart Contract `donateToCampaign()` |
| **Withdraw funds**  | Smart Contract `withdrawFunds()`    |

---

## **⚙️ Backend (Optional)**

### **Tech Used:**

- **Node.js + Express.js** (For API & off-chain features).
- **The Graph** (For indexing on-chain campaign data).
- **MongoDB (Optional)** (For off-chain analytics).

### **Backend Responsibilities:**

1. **Indexing Campaign Data**

   - Use **The Graph** to track campaigns, donations & withdrawals.

2. **Analytics API (Optional)**

   - Store **off-chain engagement metrics** (clicks, views).

3. **Campaign Verification**
   - **Admin panel** to flag suspicious campaigns.

### **Example API Routes**

| Route                   | Function                                   |
| ----------------------- | ------------------------------------------ |
| `GET /campaigns`        | Fetch all active campaigns                 |
| `GET /campaign/:id`     | Fetch campaign details                     |
| `POST /campaign/create` | Create a campaign (off-chain verification) |

---

## **🔗 Smart Contract (Solidity)**

### **Tech Used:**

- **Solidity** – Ethereum smart contract logic.
- **Hardhat** – Contract deployment & testing.
- **The Graph** – Index contract events.

### **Smart Contract Features**

✅ **Create Campaign** – Stores campaign data on-chain.  
✅ **Receive Donations** – Accepts ETH & ERC-20 tokens.  
✅ **Track Funds Raised** – Stores donation amounts & contributors.  
✅ **Withdraw Funds** – Allows campaign owners to withdraw when the goal is met.  
✅ **Refund Donors** – If the goal isn’t met by the deadline.

---

# **📌 Roadmap**

### **🔹 Phase 1 - MVP (2-3 Weeks)**

- [ ] Develop Smart Contract (Solidity + Hardhat).
- [ ] Create Subgraph for indexing data.
- [ ] Implement Next.js frontend with Warpcast Frames.
- [ ] Set up RainbowKit for wallet authentication.

### **🔹 Phase 2 - Beta Launch (3-4 Weeks)**

- [ ] Improve UI & Mobile UX.
- [ ] Add ERC-20 support (USDC, DAI).
- [ ] Deploy on **Optimism or Base** for lower gas fees.

### **🔹 Phase 3 - Scaling (Ongoing)**

- [ ] Add **gasless donations** using a **Paymaster**.
- [ ] Social verification for **trusted campaigns**.
- [ ] Enable cross-chain donations (Polygon, Solana).

---
