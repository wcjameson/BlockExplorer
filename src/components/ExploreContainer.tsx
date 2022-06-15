import './ExploreContainer.css';
// import { IonButton } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {/* <strong>{name}</strong> */}
      {/* <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
    {/* <label htmlFor="address">Enter Address</label>
    <input id="inputAddress" required={true} />
    <IonButton type="submit" color="tertiary" id="submit">Submit</IonButton>
  
  <div className="output-on-chain"></div><br />
  <div className="output-mempool"></div> */}
  </div>
  );
};

export default ExploreContainer;
