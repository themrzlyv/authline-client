import { Badge, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import PreLoader from '../../../../components/PreLoader';
import { CarModelType } from '../../../../infrastructure/@types/carModelTypes';
import { QueryId } from '../../../../infrastructure/data/Queries/QueryId';
import CarBrandReq from '../../../../infrastructure/Global/APIrequests/CarBrandReq';
import { useRouter } from '../../../../infrastructure/hooks/useRouter';

interface iProp {
  match: any;
}

const CarBrandDetail: React.FC<iProp> = ({ match }) => {
  const { location } = useRouter();

  const { state } = location;

  const { data, isLoading } = useQuery(
    QueryId.GET_SINGLE_CAR_BRAND,
    () => CarBrandReq.getSingleCarBrand(state.brand.id),
    {
      enabled: !!state.brand.id,
    },
  );

  console.log(data);

  if (isLoading) {
    return <PreLoader />;
  }

  if (!data) {
    return <Typography variant="h3">No data</Typography>;
  }

  return (
    <>
      <Grid item xs={12} display="flex" my={2} justifyContent="center">
        <Box display="flex" justifyContent="center" borderBottom={2}>
          <Badge badgeContent={data.models.length} color="primary" variant="standard">
            <Typography variant="h6">{data.brandName}</Typography>
          </Badge>
        </Box>
      </Grid>
      <Grid item xs={10} marginX="auto" padding={2}>
        <Grid container>
          {data &&
            data.models.map((model: CarModelType) => (
              <Grid item xs={3} display="flex" justifyContent="center" my={2} key={model.id}>
                <NavLink
                  to={{
                    pathname: `/brands/${data.brandName}/${model.modelName}`,
                    state: { model },
                  }}
                  style={{ width: '90%', textDecoration: 'none', color: 'black' }}
                >
                  <Typography variant="button">{model.modelName}</Typography>
                  <span>({model.post.length})</span>
                </NavLink>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CarBrandDetail;
