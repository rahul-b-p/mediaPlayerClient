import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function landingpage() {
  
  return (
    <>
      <div className='row w-100'>
        <div className="col-1"></div>
        <div className="col-10 row ms-md-3 mt-5">
          <div className="col-md-6 ms-md-4">
            <h3 className='mt-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas debitis, sed autem excepturi tenetur quisquam dicta dolorem iste atque ipsa, consequatur doloribus velit quasi quas amet cupiditate aliquam sequi nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint debitis quo fuga corrupti architecto et obcaecati modi iusto. Dolores doloremque aliquid a accusantium vitae nemo, quibusdam neque nulla assumenda debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta asperiores totam impedit quibusdam accusantium hic aspernatur, corrupti nobis ex id. Numquam, recusandae harum? Eaque, ex ducimus. Incidunt magni atque fugit.</p>
            <button className='btn btn-warning mt-4'><Link to={'/home'} style={{textDecoration:"none", color:'white'}}>Get Started</Link></button>
          </div>
          <div className="col-md-5 ms-md-5  d-flex justify-content-center align-items-center p-5">
            <img className='w-100' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="mp" />
          </div>
        </div>
        
      </div>

      <div className="row w-100">
        <h3 className='mt-5 text-center mb-5'>Features</h3>
        <div className="col-md-1 me-md-5"></div>
        <div className="col-md-3 px-4 px-md-5 mt-4">
        <Card style={{ width: '100%' }} className='p-3'>
          <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-3 px-4 px-md-5 mt-4">
        <Card style={{ width: '100%' }} className='p-3'>
          <Card.Img variant="top" height={'300px'} src="https://i.gifer.com/Up2T.gif" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-3 px-4 px-md-5 mt-4">
        <Card style={{ width: '100%' }} className='p-3'>
          <Card.Img variant="top" height={'300px'} src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row mt-5 w-100">
        <div className="col-md-1"></div>
        <div className="col-md-10  p-4 p-md-0">
          <div className="row ms-2 ms-md-0  border rounded-4 p-5">
            <div className="col-md-6">
              <h3 className=' text-warning mt-3'>Simple Fast and Powerful</h3>
              <p className='mt-4' style={{textAlign:'justify'}}><span className='fs-4'>Play Everything :</span> ipsum dolor sit amet consectetur adipisicing elit. Vero magni beatae qui accusamus repellat quis omnis debitis voluptate quasi pariatur quibusdam veniam laboriosam facilis ipsa nobis laborum, nemo cum autem!</p>
              <p className='mt-4' style={{textAlign:'justify'}}><span className='fs-4'>Play Everything :</span> ipsum dolor sit amet consectetur adipisicing elit. Vero magni beatae qui accusamus repellat quis omnis debitis voluptate quasi pariatur quibusdam veniam laboriosam facilis ipsa nobis laborum, nemo cum autem!</p>
              <p className='mt-4' style={{textAlign:'justify'}}><span className='fs-4'>Play Everything :</span> ipsum dolor sit amet consectetur adipisicing elit. Vero magni beatae qui accusamus repellat quis omnis debitis voluptate quasi pariatur quibusdam veniam laboriosam facilis ipsa nobis laborum, nemo cum autem!</p>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9tH7gdlTSxw?si=0e5ZfMEUGA-LP1y5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default landingpage