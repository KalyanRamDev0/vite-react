




import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Customcard({title,text}) {
  return (
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Customcard;