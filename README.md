# AIScity - Science & Technology News Platform

A modern, feature-rich news platform focused on science and technology, built with React, TypeScript, and Supabase.

## Features

### For Readers
- 🌗 Dark/Light theme support
- 🔍 Advanced search functionality
- 📱 Fully responsive design
- 🎯 Category-based content filtering
- 📰 Featured news carousel
- 🔥 Trending articles sidebar
- 📬 Newsletter subscription
- 🏷️ Tag-based navigation

### For Content Managers
- 📝 Rich text editor for articles
- 🖼️ Image management system
- 🏷️ Tag and category management
- 📊 Content analytics dashboard
- 📱 Mobile-friendly admin interface
- 🔒 Secure authentication system
- 📚 Article revision history
- 💾 Draft and publish workflow

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **Editor**: TipTap
- **State Management**: Zustand
- **Routing**: React Router
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aiscity.git
cd aiscity
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Admin/         # Admin interface components
│   ├── Carousel/      # News carousel components
│   ├── Footer/        # Footer components
│   ├── Header/        # Header and navigation
│   ├── News/          # News display components
│   └── Sidebar/       # Sidebar components
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── lib/              # Utility functions and configurations
├── routes/           # Route definitions
├── types/            # TypeScript type definitions
└── data/             # Sample data and constants
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Supabase](https://supabase.io/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons
- [TipTap](https://tiptap.dev/) for rich text editing