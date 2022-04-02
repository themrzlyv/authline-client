import { Badge, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import PreLoader from '../../../../components/PreLoader';
import { QueryId } from '../../../../infrastructure/data/Queries/QueryId';
import CarModelReq from '../../../../infrastructure/Global/APIrequests/CarModelReq';
import { useRouter } from '../../../../infrastructure/hooks/useRouter';

const CarModelDetail = () => {
  const { location } = useRouter();

  const { state } = location;

  const { data, isLoading } = useQuery(
    QueryId.GET_SINGLE_CAR_MODEL,
    () => CarModelReq.getCarModel(state.model.id),
    {
      enabled: !!state.model.id,
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
          <Badge badgeContent={data.post.length} color="primary" variant="standard">
            <Typography variant="h6">{data.modelName}</Typography>
          </Badge>
        </Box>
      </Grid>
      <Grid item xs={10} marginX="auto" padding={2}>
        <Grid container>
          {data &&
            data.post.map((post: any) => (
              <Grid item xs={3} display="flex" justifyContent="center" my={2} key={post.id}>
                <NavLink
                  to={{
                    // pathname: `/brands/${data.brandName}/${model.modelName}`,
                    state: { post },
                  }}
                  style={{ width: '90%', textDecoration: 'none', color: 'black' }}
                >
                  <Typography variant="button">{post.title}</Typography>
                </NavLink>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CarModelDetail;
