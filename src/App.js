import theme from './UI/theme'
import { ThemeProvider} from '@material-ui/styles'
import Navigation from './UI/Navigation'
import Footer from './UI/footer'
import LandingPage from './components/LandingPage'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <LandingPage  />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
