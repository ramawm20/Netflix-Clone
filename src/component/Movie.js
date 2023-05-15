import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';
import { useState } from 'react';

function Movie(props) {
    const [show, setshow] = useState(false);


    const Addtofav = () => {
        setshow(true)
      

    }
    const handleClose=()=>{
        setshow(false)
    }
    
    const pp = "http://image.tmdb.org/t/p/w500/"
    return (
        <>


            {props.Movie.map((item) => {
                return (<>
                    <Card style={{ width: '30rem', color: '#000000' }} key={item.id}>
                        <Card.Img variant="top" src={pp + item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.original_title}</Card.Title>
                            <Card.Text>
                                {item.overview}
                               
                            </Card.Text>
                            <Button variant="primary" onClick={Addtofav}>Add to favorite</Button>
                        </Card.Body>
                    </Card>
                    <br />

                </>
                )
            })}
            <ModalMovie data={props.Movie} showflag={show} hclose={handleClose} />
        </>
    )


}
export default Movie;






