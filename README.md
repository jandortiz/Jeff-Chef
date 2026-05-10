# Jeff-Chef

An AI-powered recipe assistant that suggests traditional Spanish dishes based on the ingredients you already have at home.

---

## About the project

Jeff-Chef is a web application that brings a personal chef experience to your kitchen. You type in whatever ingredients you have on hand, and Jeff-Chef — powered by OpenAI — instantly suggests a recipe from Spanish cuisine that you can make with them.

The app was built as a hands-on exercise to explore how modern frontend frameworks connect to AI APIs, combining **React** on the frontend with a serverless **AWS Lambda** backend that handles the communication with OpenAI.

---

## How it works

1. Open the app and type your ingredients one by one into the input field.
2. Add at least 4 ingredients to get a meaningful recipe suggestion.
3. Click **"Get a recipe"** and Jeff-Chef will send your list to OpenAI.
4. A full recipe suggestion appears on screen, formatted with a title, description, and step-by-step instructions — all focused on traditional Spanish food.
5. Click **"Nueva receta"** to clear everything and start fresh with new ingredients.

---

## Features

- **AI-generated recipes** focused exclusively on traditional Spanish cuisine, powered by OpenAI GPT-4o.
- **Flexible ingredient matching** — Jeff-Chef doesn't require you to use every ingredient, and may suggest a couple of extra ones to complete the recipe.
- **Formatted recipe output** rendered in markdown, making it easy to read with clear sections and structure.
- **Serverless backend** running on AWS Lambda, keeping costs minimal and the architecture simple.
- **Clean, minimal UI** with a header, ingredient list, and recipe display area.

---

## Tech stack

### Frontend

- **React 19** — component-based UI built with hooks for state management.
- **Vite** — fast development server and build tool.
- **react-markdown** — renders the AI's markdown-formatted recipe response cleanly in the browser.

### Backend

- **AWS Lambda (Node.js)** — serverless function that receives the ingredient list, calls the OpenAI API, and returns the recipe.
- **AWS API Gateway** — exposes the Lambda as a `POST /recipe` HTTP endpoint.

### AI

- **OpenAI GPT-4o** — the model behind the recipe generation, guided by a custom prompt that keeps suggestions focused on Spanish cuisine.

---

## Project structure

```
chef-jeff/
├── src/
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # App entry point
│   ├── App.css                  # Global styles
│   ├── assets/                  # Icons and images
│   ├── components/
│   │   ├── Header.jsx           # App header
│   │   ├── MainContent.jsx      # Core UI logic — form, ingredient list, recipe display
│   │   ├── IngredientsList.jsx  # Displays added ingredients and triggers AI call
│   │   ├── ChefRecipe.jsx       # Renders the AI-generated recipe
│   │   └── Footer.jsx           # Footer with social links
│   └── utils/
│       ├── aiCalling.js         # Calls the backend API endpoint
│       └── recipePrompt.js      # System prompt sent to OpenAI
├── backend/
│   └── handler.mjs              # AWS Lambda function (OpenAI integration)
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Getting started

### Prerequisites

- Node.js 18 or higher
- An OpenAI API key
- An AWS account (for deploying the backend)

### Local development

```bash
# Clone the repository
git clone https://github.com/jandortiz/chef-jeff.git
cd chef-jeff

# Install dependencies
npm install

# Create the environment file and add your backend URL
cp .env.example .env

# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Backend deployment

The backend lives in the `backend/` folder as a single AWS Lambda function. See [backend/README.md](backend/README.md) for deployment instructions.

---

## Environment variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | URL of the deployed AWS Lambda endpoint (`POST /recipe`) |
| `OPENAI_API_KEY` | OpenAI API key — set in the Lambda environment, not in the frontend |

---

## Author

**Jefferson Ortiz** — [@jandortiz](https://github.com/jandortiz)

---

## License

This project is open source and available under the [MIT License](LICENSE).
