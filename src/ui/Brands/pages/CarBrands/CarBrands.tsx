import { Box, Card, CardActions, Grid, Pagination, Paper, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import ButtonUi from '../../../../components/ButtonUi';
import PreLoader from '../../../../components/PreLoader';
import { CarBrandType } from '../../../../infrastructure/@types/carBrandTypes';
import { QueryId } from '../../../../infrastructure/data/Queries/QueryId';
import CarBrandReq from '../../../../infrastructure/Global/APIrequests/CarBrandReq';

const CarBrands = () => {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(12);
  const { isLoading, data } = useQuery(
    [QueryId.GET_CAR_BRANDS, page, perPage],
    () => CarBrandReq.getCarBrands(page, perPage),
    {
      keepPreviousData: true,
    },
  );

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <>
      <Grid item xs={10} marginX="auto" padding={2}>
        <Grid container>
          {data &&
            data.carBrands.map((brand: CarBrandType) => (
              <Grid item xs={3} display="flex" justifyContent="center" my={2} key={brand.id}>
                <NavLink
                  to={{ pathname: `/brands/${brand.brandName}`, state: { brand } }}
                  style={{ width: '90%', textDecoration: 'none', color: 'black' }}
                >
                  <Typography variant="button">{brand.brandName}</Typography>
                </NavLink>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid item xs={10} mx="auto" display="flex" justifyContent="flex-end" padding={2}>
        <Pagination
          count={data && data.pages}
          onChange={(e: React.ChangeEvent<unknown>, page: number) => setPage(page)}
          shape="rounded"
        />
      </Grid>
    </>
  );
};

export default CarBrands;
