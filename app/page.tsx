import ColorSchemeToggle from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Welcome from '../components/Welcome/Welcome';
import Home from '../components/Home';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Home />
    </>
  );
}
