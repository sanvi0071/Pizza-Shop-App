import React from 'react'
import { Container, Row ,Image,Table} from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi';
import {ImMobile} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';
const contact = () => {
  return (
    <>
     <Container style={{marginTop:'50px'}}>
        <Row>
            <col md={6}>
                <h1>Pizza Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nostrum ipsam debitis, facilis sit qui, sint explicabo doloribus corrupti aspernatur eligendi distinctio, rerum numquam quia libero? Officia dolore nobis similique, dicta molestiae, esse repellat, exercitationem harum deleniti iusto ex officiis in ut. Minus molestias iure eum maxime error temporibus. Dicta, ipsum esse aperiam sunt laudantium totam, provident nihil ipsa labore nesciunt consectetur est architecto voluptatibus inventore aliquid distinctio sint eaque. Vitae distinctio cumque provident accusamus. Molestias, doloremque. Asperiores facilis fugit in quae? Vel distinctio necessitatibus, laboriosam suscipit deserunt quisquam modi eius asperiores obcaecati. Illo assumenda accusantium doloribus minima consectetur perspiciatis debitis. Accusantium inventore, iusto eius cumque maiores id iure cum minus corrupti earum animi nostrum atque labore ratione nobis eos repellat, mollitia dolore, reiciendis unde quasi eligendi aut? Laborum impedit dolorem beatae natus iure sunt cum alias amet, eveniet, molestiae, exercitationem delectus? Ex temporibus molestiae aut, dolore nemo voluptate magni reprehenderit repudiandae qui iure ipsum eos, cumque est perspiciatis optio cum nostrum molestias, ipsam sunt dolores tempore eligendi? Amet ut eaque ea libero dolore at quos nostrum corrupti, eligendi illum laboriosam voluptatibus alias ullam error ipsam qui. Soluta incidunt beatae praesentium cupiditate. Neque, delectus illo eius harum magni voluptatibus velit?</p>
                
 <Table striped bordered hover className="text-centre">
      <thead>
        <tr>
          <th className="bg-warning text-centre" colSpan={3}>---Contact Details ----</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <FiPhoneCall/>
            </td>
          <td>Phone</td>
          <td>0123-456789</td>
          </tr>
        <tr>
        <td>
            < MdEmail/>
            </td>
          <td>Email</td>
          <td>Help@urdomain.com</td>
        </tr>
        <tr>
        <td>
            <ImMobile/>
            </td>
          <td>Call</td>
          <td>1234567890</td>
        </tr>
      </tbody>
    </Table>
 
            </col>
            <col md={6}>
            <Image src="images/farmhouse.jpg" style={{width:'200%', height:'100%'}}/>
            </col>
        </Row>
     </Container>
    </>
  );
};

export default contact;