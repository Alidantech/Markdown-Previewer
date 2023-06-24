// reducers.js
const initialState = {
  markdown: `
  # Heading

  ## Subheading

  [Link](https://www.example.com)

  \`inline code\`
  
  \`\`\`
  code block
  \`\`\`

  - List item

  > Blockquote

  ![Image](https://source.unsplash.com/random/400x400/?good)

  **Bold text**
  `
};

export const markdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return {
        ...state,
        markdown: action.markdown
      };
    default:
      return state;
  }
};
