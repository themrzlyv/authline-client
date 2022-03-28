import React from 'react';
import { useRouter } from '../../../../infrastructure/hooks/useRouter';

interface iProp {
  match: any;
}

const CarBrandDetail: React.FC<iProp> = ({ match }) => {
  const { query, location } = useRouter();

  console.log(location);
  return <div>CarBrandDetail</div>;
};

export default CarBrandDetail;
