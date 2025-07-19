# JSON Schema Builder

A modern, interactive JSON Schema Builder built with React, TypeScript, and ShadCN UI. Create, edit, and visualize JSON schemas with a beautiful, user-friendly interface.

## 🚀 Features

- **Dynamic Schema Building**: Add, edit, and delete fields with real-time updates
- **Recursive Nested Fields**: Create complex nested object structures
- **Live JSON Preview**: See your schema as JSON in real-time
- **Save & Load Schemas**: Persist your schemas locally
- **Modern UI**: Beautiful dark theme with glass morphism effects
- **Responsive Design**: Works perfectly on desktop and mobile
- **Portfolio Integration**: Professional About Me page with project showcase

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **UI Components**: ShadCN UI, TailwindCSS
- **Form Management**: React Hook Form
- **Routing**: React Router v6
- **Styling**: TailwindCSS with custom animations
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayushm19/json-schema-builder.git
   cd json-schema-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Building Schemas
1. **Add Fields**: Click "Add Field" to create new schema fields
2. **Set Types**: Choose from string, number, float, boolean, objectId, or nested
3. **Nested Objects**: Select "nested" type to create sub-objects
4. **Real-time Preview**: Watch your JSON schema update as you type

### Saving & Loading
- **Save Schema**: Use the save functionality to store your schema
- **Load Schema**: Retrieve previously saved schemas
- **Clear**: Reset the form to start fresh

### Portfolio Features
- **About Me**: Professional portfolio page with skills and projects
- **Contact Info**: Direct links to LinkedIn, GitHub, email, and phone
- **Project Showcase**: Display your other projects with preview images

## 🎨 UI Features

- **Dark Theme**: Modern dark interface with neon accents
- **Glass Morphism**: Beautiful translucent card effects
- **Hover Animations**: Smooth transitions and interactive elements
- **Responsive Layout**: Optimized for all screen sizes
- **Copy to Clipboard**: One-click copying of contact information

## 📱 Responsive Design

- **Desktop**: Full-featured interface with side-by-side layout
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with stacked layout

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Static site hosting
- **AWS S3**: Cloud hosting solution

## 📁 Project Structure

```
json-schema-builder/
├── public/
│   ├── aboutme-photo.jpg
│   ├── banner-photo.jpg
│   └── project-previews/
├── src/
│   ├── components/
│   │   ├── ui/           # ShadCN UI components
│   │   ├── AboutMe.tsx   # Portfolio page
│   │   ├── Header.tsx    # Navigation header
│   │   ├── JsonPreview.tsx
│   │   ├── SchemaBuilder.tsx
│   │   └── SchemaList.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## 🎯 Key Components

- **SchemaBuilder**: Main form component with recursive field rendering
- **JsonPreview**: Real-time JSON display with validation
- **AboutMe**: Professional portfolio page
- **Header**: Navigation with routing
- **SchemaList**: Saved schemas management

## 🔧 Customization

### Adding New Field Types
1. Update the `SchemaField` interface in `SchemaBuilder.tsx`
2. Add new type options to the Select component
3. Update the `buildJsonSchema` function

### Styling Changes
- Modify TailwindCSS classes for visual updates
- Update color scheme in `tailwind.config.js`
- Customize animations and transitions

## 📞 Contact

- **LinkedIn**: [Ayush Mishra](https://www.linkedin.com/in/ayush-mishra-941990211/)
- **GitHub**: [Ayushm19](https://github.com/Ayushm19)
- **Email**: knandan400@gmail.com
- **Phone**: +91 8826336732

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Ayush Mishra**
