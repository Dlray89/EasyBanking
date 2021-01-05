import theme from './UI/theme'
import { ThemeProvider} from '@material-ui/styles'
import Navigation from './UI/Navigation'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      
    </ThemeProvider>
  );
}

export default App;
