import styled from "@emotion/styled";

export const Input = styled("input")`
  // Layout
  display: flex;
  height: 32px;
  min-height: 32px;
  padding: 4px 8px;
  flex: 1 1 auto;
  width: 100%;
  color: #fff;
  // Styling
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(172, 184, 198, 0.25);
  border-radius: 6px;

  // Hover
  :hover {
    background: rgba(0, 0, 0, 0.12);
  }
  // Read-Only
  :read-only {
    pointer-events: none;
    opacity: 0.7;
    background-color: transparent;
  }
  // Required
  :required {
    background: rgba(255, 152, 0, 0.08);
    border: 1px solid #ff9800;
  }

  // Focus
  :focus {
    background: rgba(25, 126, 235, 0.1);
    border: 1px solid #0a73eb;
  }

  :focus-visible {
    outline: none;
  }

  // Placeholder
  ::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`;
