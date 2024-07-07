// Wrap our component to be directly usable in .mdx files
// without import statements
import MDXComponents from '@theme-original/MDXComponents';
import Quiz from '@site/src/components/Quiz';

export default {
  ...MDXComponents,
  Quiz,
};