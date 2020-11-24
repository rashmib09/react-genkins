import './Homepage.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Button from '../../Components/UI/Button/Button';

import CustomModal from '../../Components/UI/Modal/CustomModel';
import Registration from '../UserManagement/user-create-page/Registration';
import Contact from '../UserManagement/user-contact-creation/Contact';
import ErrorDialog from '../../Components/UI/Modal/ErrorDialog/ErrorDialog/ErrorDialog'
import CenterSection from '../../Components/UI/CenterSection/CenterSection'
import { Route,Switch } from 'react-router-dom';
import SignIn from '../UserManagement/SignIn/SignIn';





function HomePage() {
    return (
  
        <div className="or-content or-fixed" id="orbody">
          <div className= "ui-layout-north"><Header/>
        
          </div>
          <div className="ui-layout-center" id="ui-layout-center">
       {/* <Button>test</Button>
       <ErrorDialog message='Error Occured' title='Error'></ErrorDialog> */}
    
    
       <CenterSection>
       <Route path="/sign_in" component={SignIn} />
    <Route path="/user/contact" component={Contact} />
       <Route path="/user/sign_up" component={Registration} />
       </CenterSection>
       <CustomModal/>
          </div>
          <div className= "ui-layout-south" >
              <Footer/>
          </div>

        </div>
     
    );
  }
  
  export default HomePage;
  