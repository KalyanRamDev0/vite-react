




import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomLoaders from '../loaders/loader';
import Spinners from '../loaders/spinners.jsx';
import CustomToast from '../toasters/tostify.jsx';

function Customcard({title,text}) {
  return (
    <Card style={{ width: '18rem' }}>
   
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         
          <Spinners color={"brown"}/>
          <CustomToast message="i am card"/>
          <CustomLoaders height={"100"} width={"100"} visible={"true"}/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Customcard;