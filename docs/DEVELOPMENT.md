# Development Workflow

This document outlines the development workflow and setup for the Personal Portfolio project.

## Quick Start

```bash
# Install dependencies
npm install

# Start development with SASS watching
npm run dev

# Or run components separately
npm run sass:watch  # Watch SASS files
npm run serve       # Start local server
```

## Available Scripts

- `npm run sass` - Compile SASS once
- `npm run sass:watch` - Watch and compile SASS on changes
- `npm run build` - Build for production (compressed CSS)
- `npm run dev` - Start development environment
- `npm run serve` - Start local server on port 8000
- `npm run preview` - Build and serve production version
- `npm run lint:css` - Lint SCSS files
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean generated CSS files

## Development Setup

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start development:**

    ```bash
    npm run dev
    ```

    This starts SASS watching and a local server at `http://localhost:8000`

3. **Build for production:**

    ```bash
    npm run build
    ```

## VS Code Integration

This project includes VS Code tasks for common development actions:

- **Ctrl/Cmd + Shift + P** → "Tasks: Run Task"
- Select from: "SASS: Watch", "Build Production", "Start Dev Server", etc.

Available tasks:

- **SASS: Watch** - Watch and compile SASS files automatically
- **Build Production** - Build optimized CSS for production
- **Start Dev Server** - Start local development server
- **Lint & Format** - Run CSS linting

## Continuous Deployment

The project includes GitHub Actions workflow that:

- Automatically builds SASS to CSS
- Runs quality checks
- Deploys to GitHub Pages on push to main branch

### Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) performs:

1. **Setup**: Checks out code and sets up Node.js 18
2. **Dependencies**: Installs npm packages with caching
3. **Build**: Compiles SASS to optimized CSS
4. **Deploy**: Automatically deploys to GitHub Pages on main branch pushes

## Code Quality

The project includes comprehensive quality tools:

- **Stylelint** for SCSS linting with standard SCSS configuration
- **Prettier** for consistent code formatting
- **HTML Validate** for HTML validation
- **ESLint** for JavaScript linting

### Running Quality Checks

```bash
# Lint SCSS files
npm run lint:css

# Format all files
npm run format

# Clean generated files
npm run clean
```

### Configuration Files

- `.stylelintrc.json` - Stylelint configuration with SCSS standards
- `.prettierrc` - Prettier formatting rules
- `.htmlvalidate.json` - HTML validation settings
- `.vscode/tasks.json` - VS Code task definitions

## File Structure

```text
.
├── .github/workflows/    # GitHub Actions
│   └── deploy.yml       # Build and deploy workflow
├── .vscode/             # VS Code configuration
│   ├── tasks.json      # Development tasks
│   └── settings.json   # Project settings
├── scripts/             # JavaScript files
│   └── main.js         # Main JavaScript functionality
├── styles/              # SASS/CSS files
│   ├── main.scss       # Main SASS file
│   └── main.css        # Compiled CSS (generated)
├── index.html          # Main HTML file
├── package.json        # Project configuration
├── DEVELOPMENT.md      # This file - development workflow
└── README.md           # Project overview
```

## Development Tips

1. **SASS Development**: Use `npm run sass:watch` for automatic compilation during development
2. **Live Reload**: The development server serves on port 8000 with manual refresh
3. **Production Build**: Always run `npm run build` before deploying for optimized CSS
4. **Code Quality**: Run linting and formatting regularly to maintain code standards
5. **VS Code Tasks**: Use Cmd/Ctrl + Shift + P → "Tasks: Run Task" for quick access to common commands

## Troubleshooting

### Common Issues

1. **SASS not compiling**: Ensure you have the latest version of Dart Sass installed
2. **Server not starting**: Check if port 8000 is available or use a different port
3. **Linting errors**: Run `npm run lint:css` to see specific issues and fix them
4. **Build failures**: Check that all dependencies are installed with `npm install`

### Debugging

- Check browser console for JavaScript errors
- Use browser dev tools to inspect CSS compilation
- Review GitHub Actions logs for deployment issues
- Ensure all required files are committed to the repository

## Performance Considerations

- CSS is minified in production builds
- SASS compilation includes source maps for debugging
- GitHub Pages deployment excludes development files
- Images and assets should be optimized before adding to the project
