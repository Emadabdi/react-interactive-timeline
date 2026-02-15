# Interactive Timeline Component

This project demonstrates a reusable and well-structured React component built with Vite.

## Goals

- Clean project structure
- Separation of concerns (data, components, styling)
- Reusable components
- Clear state management
- Readable and maintainable code

## Project Structure

src/

- components/
  - Timeline.jsx
  - TimelineItem.jsx
  - timeline.css
- data/
  - steps.js

## Technical Decisions

- State is managed using useState in the parent component.
- Data is separated into a dedicated file for scalability.
- TimelineItem is reusable and receives props for flexibility.
- Styling is modular and separated from logic.

## Future Improvements

- Add animations
- Add accessibility improvements
- Convert to TypeScript
- Add unit tests
