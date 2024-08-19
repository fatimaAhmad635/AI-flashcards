## Overview

Using cutting-edge AI features, Flashcard AI SaaS is a web service that assists users in creating, managing, and reviewing flashcards. The program uses artificial intelligence (AI) to create, alter, and evaluate flashcards, improving the effectiveness and efficiency of studying.

## Features
- **AI-Powered Flashcards**: These flashcards are created automatically by combining AI recommendations with human input.
- **Customizable Flashcards**: Make and edit flashcards with unique text.
- **Review Modes**: There are several review modes, such as spaced repetition to improve learning.
- **Analytics**: Track progress and performance with detailed analytics and insights.
- **User Authentication**: Safe user administration and log-in.


## Technologies

- **Frontend**: React, Next.js
- **Backend**: Node.js
- **AI Integration**: OpenAI API
- **Database**: Firebase Datastore
- **Deployment**: Vercel
- **CI/CD**: Vercel
- **Authentication**: Clerk
- **Payment**: Stripe

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/fatimaAhmad635/AI-flashcards.git
   cd AI-flashcards
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_public_key
   OPENAI_API_KEY=your_openai_api_key
   STRIPE_SECRET_KEY=your_secret
   ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The application will be accessible at `http://localhost:3000`.

## Deployment

To deploy the application, follow these steps:

1. **Build the Application**

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

2. **Deploy to Vercel**

   For Vercel, you can directly connect your GitHub repository and configure deployment settings in the Vercel dashboard.




