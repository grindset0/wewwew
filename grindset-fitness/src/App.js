import './index.css';
import Button from './components/ui/button';
import Card, { CardContent } from './components/ui/card';
import Input from './components/ui/input';

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-gold mb-6">Grindset Fitness</h1>
      <Card>
        <CardContent>
          <p className="text-lg mb-4">Train with Purpose. Live with Grindset.</p>
          <Input placeholder="Enter your email" className="mb-4 w-full" />
          <Button className="bg-gold text-black w-full">Start Your Grindset</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;