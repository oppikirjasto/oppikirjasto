// Wrap our component to be directly usable in .mdx files
// without import statements
import MDXComponents from '@theme-original/MDXComponents';
import Quiz from '@site/src/components/Quiz';
import ReactPlayer from 'react-player';

ReactPlayer.defaultProps.width = '100%'
ReactPlayer.defaultProps.height = '100%'
ReactPlayer.defaultProps.controls = true

export default {
  ...MDXComponents,
  Quiz,
  ReactPlayer
};