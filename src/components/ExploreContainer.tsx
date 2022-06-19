import './ExploreContainer.css';
// import { IonButton } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <>
      <div className='container1'> <p>text</p>
        
      </div>
      {/* <strong>{name}</strong> */}
      {/* <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
      </>
  );
};

export default ExploreContainer;
