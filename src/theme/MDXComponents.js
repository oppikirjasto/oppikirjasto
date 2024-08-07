// Wrap our component to be directly usable in .mdx files
// without import statements
import MDXComponents from '@theme-original/MDXComponents';
import Quiz from '@site/src/components/Quiz';
import ReactPlayer from 'react-player';
import Image from '@theme/IdealImage';

ReactPlayer.defaultProps.width = '100%'
ReactPlayer.defaultProps.height = '100%'
ReactPlayer.defaultProps.controls = true
ReactPlayer.defaultProps.className = 'react-player'

export default {
  ...MDXComponents,
  Quiz,
  ReactPlayer,
  Image
};